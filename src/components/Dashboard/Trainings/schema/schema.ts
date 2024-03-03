import { z } from "zod";

export const center = [
  {
    id: 1,
    title: "مركز الدانا",
  },
  {
    id: 2,
    title: "مركز اعزاز",
  },
  {
    id: 3,
    title: "مركز ادلب",
  },
];

const uniquecenter = center.filter(
  (slug, index, self) => index === self.findIndex((s) => s.id === slug.id)
);

function isValidOption(value: number | undefined): boolean {
  if (value === undefined) return false;
  const validOptions = uniquecenter.map((data) => data.id);
  return validOptions.includes(value);
}

export const schema = z.object({
  title: z.string().min(6).max(20),
  idcenter: z.string().refine((value) => isValidOption(parseInt(value)), {
    message: "يجب اختيار المركز المقام فيه التدريب",
  }),
  idHall: z.string().refine((value) => isValidOption(parseInt(value)), {
    message: "يجب تحديد القاعة المقام فيها التدريب",
  }),
  NumStudent: z.number().min(2, { message: "ادخل عدد كافي" }),
  Datetraning: z.date().or(z.string()),
  Time: z.string(),
});
