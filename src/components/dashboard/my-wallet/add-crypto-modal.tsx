'use client';

import { NumberInput, Select } from '@/components/ui/form';
import { Modal } from '@/components/ui/overlay';
import { useDisclosure } from '@/hooks/use-disclosure';
import { ICoinInfo } from '@/interfaces/coin-info';
import { useGetCoins } from '@/services/coin-service';
import { AddCryptoParams, addCryptoToWallet } from '@/services/wallet-service';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Form from '@radix-ui/react-form';
import { PlusIcon } from '@radix-ui/react-icons';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const schema = yup.object().shape({
  cryptoId: yup.string().required("Crypto's name is required"),
  quantity: yup
    .number()
    .required()
    .min(Number.MIN_VALUE, 'Quantity must be greater than 0')
});

export const AddCryptoModal = (): JSX.Element => {
  const queryClient = useQueryClient();
  const { isOpen, onChange, onClose } = useDisclosure();
  const { data: coins = [] } = useGetCoins(100);
  const { register, setValue, reset, handleSubmit, formState } =
    useForm<AddCryptoParams>({
      defaultValues: {
        cryptoId: '',
        quantity: 0
      },
      resolver: yupResolver(schema)
    });
  const { errors } = formState;

  const { mutate, isLoading } = useMutation(addCryptoToWallet, {
    onSuccess: () => {
      toast.success('Crypto added to wallet');
      queryClient.refetchQueries({
        queryKey: ['walletBalance']
      });
      queryClient.refetchQueries({
        queryKey: ['getWallet']
      });
      reset();
      onClose();
    }
  });

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  return (
    <Modal
      title={
        <span className="desktop:heading-4 tablet:heading-5 body">
          Add Crypto
        </span>
      }
      trigger={
        <button className="btn btn-primary btn-small">
          <PlusIcon />
          Add crypto
        </button>
      }
      isOpen={isOpen}
      onChange={onChange}
    >
      <Form.Root
        className="flex w-full flex-col"
        onSubmit={handleSubmit(params => mutate(params))}
      >
        <Form.Field className="desktop:mb-6 mb-4" name="cryptoId">
          <Select
            options={coins.map(coin => ({
              value: coin.id,
              label: <CustomSelectOption {...coin} />
            }))}
            {...register('cryptoId')}
            onChange={value => setValue('cryptoId', value?.value || '')}
            optionWithArrow
            placeholder="Choose"
          />

          {errors.cryptoId && (
            <Form.Message className="tablet:label label-small">
              {errors.cryptoId.message}
            </Form.Message>
          )}
        </Form.Field>

        <Form.Field className="desktop:mb-8 tablet:mb-6 mb-4" name="quantity">
          <Form.Control asChild>
            <NumberInput
              placeholder="0,00"
              {...register('quantity')}
              onChange={value => setValue('quantity', value)}
            />
          </Form.Control>
          {errors.quantity && (
            <Form.Message className="tablet:label label-small">
              {errors.quantity.message}
            </Form.Message>
          )}
        </Form.Field>

        <Form.Submit asChild>
          <button disabled={isLoading} className="btn btn-primary btn-large">
            Add Crypto
          </button>
        </Form.Submit>
      </Form.Root>
    </Modal>
  );
};

export const CustomSelectOption = ({
  image,
  name,
  symbol
}: ICoinInfo): JSX.Element => (
  <div className="inline-flex items-center gap-2">
    <Image src={image} width={16} height={16} alt={name} />
    <span className="label">
      {name} <span className="text-secondary-500">{symbol}</span>
    </span>
  </div>
);
