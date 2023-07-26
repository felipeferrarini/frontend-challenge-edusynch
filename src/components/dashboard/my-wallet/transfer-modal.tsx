'use client';

import { NumberInput, Select } from '@/components/ui/form';
import { Modal } from '@/components/ui/overlay';
import { TransferCryptoType, transferCrypto } from '@/services/wallet-service';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Form from '@radix-ui/react-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useTransferModal } from './store';

const schema = yup.object().shape({
  quantity: yup
    .number()
    .required()
    .min(Number.MIN_VALUE, 'Quantity must be greater than 0'),
  type: yup
    .string()
    .oneOf(Object.values(TransferCryptoType))
    .required('Transaction type is required')
});

export const TransferModal = () => {
  const { isOpen, onChange, coinInfo } = useTransferModal();

  const queryClient = useQueryClient();
  const { register, setValue, reset, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema)
  });
  const { errors } = formState;

  const { mutate, isLoading } = useMutation(transferCrypto, {
    onSuccess: () => {
      toast.success('Crypto transfered successfully');
      queryClient.refetchQueries({
        queryKey: ['walletBalance']
      });
      queryClient.refetchQueries({
        queryKey: ['getWallet']
      });
      reset();
      onChange(false);
    }
  });

  if (!coinInfo) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onChange={onChange}
      title={
        <span className="desktop:heading-4 tablet:heading-5 body">
          Add Crypto
        </span>
      }
    >
      <Form.Root
        className="border-t-secondary-200 flex w-full flex-col border-t"
        onSubmit={handleSubmit(params =>
          mutate({ ...params, cryptoId: coinInfo.id })
        )}
      >
        <div className="mx-auto inline-flex items-center py-4">
          <p className="label-small desktop:label text-secondary-400 mr-6">
            You are transferring
          </p>
          <Image
            src={coinInfo.image}
            alt={coinInfo.name}
            height={24}
            width={24}
            className="mr-2 rounded-full"
          />
          <p className="label desktop:body">
            {coinInfo.name}{' '}
            <span className="text-secondary-500">
              {coinInfo.symbol.toUpperCase()}
            </span>
          </p>
        </div>

        <Form.Field className="desktop:mb-6 mb-4 flex flex-col" name="cryptoId">
          <Form.Label className="label mb-2">Transfer</Form.Label>
          <Select
            options={[
              {
                label: 'Transfer in',
                value: TransferCryptoType.TransferIn
              },
              {
                label: 'Transfer out',
                value: TransferCryptoType.TransferOut
              }
            ]}
            {...register('type')}
            onChange={value =>
              setValue('type', value?.value || TransferCryptoType.TransferIn)
            }
            placeholder="Select transfer"
          />

          {errors.type && (
            <Form.Message className="tablet:label label-small mt-1">
              {errors.type.message}
            </Form.Message>
          )}
        </Form.Field>

        <Form.Field
          className="desktop:mb-8 tablet:mb-6 mb-4 flex flex-col"
          name="quantity"
        >
          <Form.Label className="label mb-2">Quantity</Form.Label>
          <Form.Control asChild>
            <NumberInput
              placeholder="0,00"
              {...register('quantity')}
              onChange={value => setValue('quantity', value)}
              min={0}
            />
          </Form.Control>
          {errors.quantity && (
            <Form.Message className="tablet:label label-small mt-1">
              {errors.quantity.message}
            </Form.Message>
          )}
        </Form.Field>

        <Form.Submit asChild>
          <button disabled={isLoading} className="btn btn-primary btn-large">
            Transfer Crypto
          </button>
        </Form.Submit>
      </Form.Root>
    </Modal>
  );
};
