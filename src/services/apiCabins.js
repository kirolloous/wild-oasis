import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be Deleted");
  }
  return data;
}

export async function addCabin(formData) {
  const { data, error } = await supabase
    .from("cabins")
    .insert([formData])
    .select();
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be Added");
  }

  return data;
}