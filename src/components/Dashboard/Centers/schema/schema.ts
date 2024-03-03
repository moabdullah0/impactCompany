import { z } from "zod";

export const slugs = [
  {
    title: "azaz",
  },
  {
    title: "aldana",
  },
  {
    title: "idlib",
  },
  {
    title: "albab",
  },
];

const uniqueSlugs = slugs.filter(
  (slug, index, self) => index === self.findIndex((s) => s.title === slug.title)
);

function isValidOption(value: string): boolean {
  const validOptions = uniqueSlugs.map((data) => data.title);
  return validOptions.includes(value);
}

// function isValidTime(value: string): boolean {
//   const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
//   return timeRegex.test(value);
// }
const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const schema = z.object({
  title: z.string().min(6).max(20),

  address: z.string().min(6, { message: "عنوان المركز بالتفصيل" }).max(20),
  // centerName: z.string().refine((value) => isValidOption(value), {
  //   message: "يجب اختيار المركز المقام فيه التدريب",
  // }),
  slug: z.string().refine((value) => isValidOption(value), {
    message: "يجب اختيار المركز المقام فيه التدريب",
  }),
  // hall: z.string().refine((value) => isValidOption(value), {
  //   message: "يجب تحديد القاعة المقام فيها التدريب",
  // }),
  Image: z
    .any()
    .refine((files) => {
       return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),

  // guest: z.number(),
  // date: z.date(),
  // time: z.string().refine((value) => isValidTime(value), {
  //   message: "يجب إدخال وقت صحيح",
  // }),
  description: z
    .string()
    .min(10, { message: "يرجى اضافة وصف كافي لا يقل عن 40 حرف" })
    .max(250),
});
