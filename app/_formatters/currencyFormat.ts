export const formatCurrency = (value: number): string => {
  const valueFormated = Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value);

  return `R$${valueFormated}`;
};
