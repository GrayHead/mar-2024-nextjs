'use server';
import sql from 'better-sqlite3';
import {IMeal} from "@/models/IMeal";
import {revalidatePath} from "next/cache";

let db = sql('meals.db');

export const getMeals = async (): Promise<IMeal[]> => {
    return db.prepare<IMeal[]>('select * from meals').all() as IMeal[];
}


export const addMeal = async (formData: FormData): Promise<void> => {

    db
        .prepare(`INSERT INTO meals(slug, title, image, summary, instructions, creator, creator_email)
                  values (?, ?, ?, ?, ?, ?, ?)`)
        .run(
            formData.get('slug'),
            formData.get('title'),
            formData.get('image'),
            formData.get('summary'),
            formData.get('instructions'),
            formData.get('creator'),
            formData.get('creator_email'));
    revalidatePath('/meals');

}

