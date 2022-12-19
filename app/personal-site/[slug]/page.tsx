import slugify from "slugify";
import supabase from "../../../utils/supabase";
import PersonalSiteCard from "../../../components/personal-site-card";
import { getBlogBySlug } from "../../../utils/utils";

export async function generateStaticParams() {
  const { data: blogs }: any = await supabase.from("blogs").select("name");

  const paths = await blogs.map(({ name }: any) => ({
    slug: slugify(name.toLowerCase()),
  }));

  return paths;
}

export default async function Post({ params }: any) {
  if (!params?.slug) {
    return null;
  }
  const blog = await getBlogBySlug(params.slug);

  return <PersonalSiteCard blog={blog} />;
}