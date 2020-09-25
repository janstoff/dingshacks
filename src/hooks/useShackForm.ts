import React from "react";

interface ShackFormValues {
  readonly name: string | undefined;
  readonly description: string | undefined;
  readonly street: string | undefined;
  readonly postcode: string | undefined;
  readonly city: string | undefined;
  readonly country: string | undefined;
  readonly email: string | undefined;
  readonly phone: string | undefined;
  readonly instagram: string | undefined;
  readonly facebook: string | undefined;
  readonly pu: boolean | undefined;
  readonly pe: boolean | undefined;
  readonly eps: boolean | undefined;
  readonly soft: boolean | undefined;
  readonly carbon: boolean | undefined;
  readonly rating: number | undefined;
  readonly review: string | undefined;
}

export const useShackForm = (
  initialValues: ShackFormValues,
  onSubmit: (values: ShackFormValues) => void
) => {
  const [values, setValues] = React.useState<ShackFormValues>(initialValues);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    console.log("event.target.value", value);

    event.persist();
    setValues({ ...values, [name]: value });
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { target } = event;
    const { name, value } = target;

    console.log("event.target.value", value);

    event.persist();
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event: any) => {
    if (event) event.preventDefault();
    onSubmit(values);
  };

  console.log("values:", values);

  return { values, handleInputChange, handleTextAreaChange, handleSubmit };
};
