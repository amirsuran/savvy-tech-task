"use client";

import * as React from 'react';
import { Controller, type FieldValues, type UseFormReturn } from 'react-hook-form';

export function Form<TFieldValues extends FieldValues>({ form, children, onSubmit }: {
  form: UseFormReturn<TFieldValues>;
  children: React.ReactNode;
  onSubmit: (values: TFieldValues) => void;
}) {
  return <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>;
}

export function FormField<TFieldValues extends FieldValues>({
  form,
  name,
  render,
}: {
  form: UseFormReturn<TFieldValues>;
  name: any;
  render: (field: any) => React.ReactNode;
}) {
  return <Controller control={form.control} name={name} render={({ field }) => <>{render(field)}</>} />;
}

export function FormItem({ children }: { children: React.ReactNode }) {
  return <div className="space-y-2">{children}</div>;
}

export function FormLabel({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-medium">{children}</label>;
}

export function FormControl({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function FormMessage({ children }: { children?: React.ReactNode }) {
  if (!children) return null;
  return <p className="text-sm text-red-600">{children}</p>;
}

