"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { itemSchema, type ItemFormData } from '@/lib/schemas';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function ItemForm({ onSubmit, defaultValues }: { onSubmit: (data: ItemFormData) => void; defaultValues?: ItemFormData }) {
  const form = useForm<ItemFormData>({
    resolver: zodResolver(itemSchema),
    defaultValues: defaultValues ?? { title: '', subtitle: '' },
    mode: 'onChange'
  });

  return (
    <Form form={form} onSubmit={onSubmit}>
      <div className="space-y-4">
        <FormField
          form={form}
          name="title"
          render={(field) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter title" {...field} />
              </FormControl>
              <FormMessage>{form.formState.errors.title?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          form={form}
          name="subtitle"
          render={(field) => (
            <FormItem>
              <FormLabel>Subtitle</FormLabel>
              <FormControl>
                <Input placeholder="Enter subtitle" {...field} />
              </FormControl>
              <FormMessage>{form.formState.errors.subtitle?.message}</FormMessage>
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </Form>
  );
}

export default ItemForm;

