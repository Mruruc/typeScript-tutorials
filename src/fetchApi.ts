import { z } from "zod";

const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
});

type Tour = z.infer<typeof tourSchema>;
//interface Tour extends z.infer<typeof tourSchema>{}

const url = "https://www.course-api.com/react-tours-project";

async function getRequest(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error(
        `While fetching data error occurred!: ${response.status}`
      );
    }
    const rawData: Tour[] = await response.json();
    
    const result = tourSchema.array().safeParse(rawData);
    if (!result.success) throw new Error(`Invalid data:${result.error}`);

    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

getRequest(url)
  .then((tours: Tour[]) => tours.forEach((tour) => console.log(tour.name)))
  .catch((error) => {
    console.log(error);
  });
