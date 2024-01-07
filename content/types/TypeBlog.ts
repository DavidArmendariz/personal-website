import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export type TypeBlogFields = {
  title: EntryFieldTypes.Symbol;
  body: EntryFieldTypes.RichText;
  coverImage: EntryFieldTypes.AssetLink;
  summary: EntryFieldTypes.Text;
  slug: EntryFieldTypes.Symbol;
};

export type TypeBlogSkeleton = EntrySkeletonType<TypeBlogFields, 'blog'>;
export type TypeBlog<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeBlogSkeleton, Modifiers, Locales>;
