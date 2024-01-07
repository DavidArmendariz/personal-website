import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export type TypePortfolioFields = {
  title: EntryFieldTypes.Symbol;
  repoUrl: EntryFieldTypes.Symbol;
  siteUrl?: EntryFieldTypes.Symbol;
  coverImage: EntryFieldTypes.AssetLink;
  summary: EntryFieldTypes.Text;
};

export type TypePortfolioSkeleton = EntrySkeletonType<
  TypePortfolioFields,
  'portfolio'
>;
export type TypePortfolio<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypePortfolioSkeleton, Modifiers, Locales>;
