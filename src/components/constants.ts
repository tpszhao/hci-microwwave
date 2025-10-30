export const hourOptions = [
  {
    label: "0",
    value: "0"
  },
  {
    label: "1",
    value: "1"
  }
];

export const minuteOptions = Array.from({ length: 60 }, (_, i) => ({
  label: String(i).padStart(2, "0"),
  value: String(i)
}));

export const secondOptions = minuteOptions.map(a => ({ ...a }));
