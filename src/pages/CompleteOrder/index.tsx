import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";
import { useForm, FormProvider } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money"
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe a rua"),
  number: zod.string().min(1, "Informe o número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe a bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  uf: zod.string().min(1, "Informe o UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    }
  })
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOderFormData = OrderData;

export const CompleteOrderPage = () => {
  const { cleanCart } = useCart();

  const navigate = useNavigate();

  const confirmOrderForm = useForm<ConfirmOderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema)
  });

  const { handleSubmit } = confirmOrderForm;

  const handleConfirmOrder = (data: ConfirmOderFormData) => {
    navigate("/orderConfirmed", {
      state: data
    });
    cleanCart();
  };

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />
        <SelectedCoffees />
      </CompleteOrderContainer>
    </FormProvider>
  );
};
