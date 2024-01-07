import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export type TypeCourseFields = {
  title: EntryFieldTypes.Symbol;
  summary: EntryFieldTypes.Text;
  slug: EntryFieldTypes.Symbol;
  coverImage: EntryFieldTypes.AssetLink;
  body: EntryFieldTypes.RichText;
};

export type TypeCourseSkeleton = EntrySkeletonType<TypeCourseFields, 'course'>;
export type TypeCourse<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeCourseSkeleton, Modifiers, Locales>;
