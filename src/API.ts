/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type SyncYoutubeRepositoryInput = {
  videos: Array< SyncYoutubeRepositoryVideoInput >,
};

export type SyncYoutubeRepositoryVideoInput = {
  videoId: string,
  position?: number | null,
  title?: string | null,
  description?: string | null,
  type?: YoutubeVideoType | null,
  ctaButton?: CTAButtonInput | null,
  timestamp?: string | null,
  channelTitle?: string | null,
  thumbnailUrl?: string | null,
  statistics?: StatisticsInput | null,
};

export enum YoutubeVideoType {
  VIDEO = "VIDEO",
  SHORT = "SHORT",
}


export type CTAButtonInput = {
  text?: string | null,
  link?: string | null,
  isActive?: boolean | null,
  type?: CTAButtonType | null,
};

export enum CTAButtonType {
  EMAIL = "EMAIL",
  LINK = "LINK",
  CONTACT = "CONTACT",
}


export type StatisticsInput = {
  likeCount?: number | null,
  viewCount?: number | null,
  commentCount?: number | null,
  favoriteCount?: number | null,
};

export type SyncResponse = {
  __typename: "SyncResponse",
  code: SyncResponseCode,
  message?: string | null,
};

export enum SyncResponseCode {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}


export type SyncFacebookRepositoryInput = {
  videos: Array< SyncFacebookRepositoryVideoInput >,
};

export type SyncFacebookRepositoryVideoInput = {
  videoId: string,
  permaLink: string,
  position?: number | null,
  title?: string | null,
  description?: string | null,
  type?: MetaVideoType | null,
  ctaButton?: CTAButtonInput | null,
  timestamp?: string | null,
  sourceMediaUrl?: string | null,
  thumbnailUrl?: string | null,
  statistics?: StatisticsInput | null,
};

export enum MetaVideoType {
  VIDEO = "VIDEO",
  REEL = "REEL",
}


export type SyncInstagramRepositoryInput = {
  videos: Array< SyncInstagramRepositoryVideoInput >,
};

export type SyncInstagramRepositoryVideoInput = {
  videoId: string,
  position?: number | null,
  title?: string | null,
  description?: string | null,
  type?: MetaVideoType | null,
  ctaButton?: CTAButtonInput | null,
  timestamp?: string | null,
  sourceMediaUrl?: string | null,
  permaLink: string,
  thumbnailUrl?: string | null,
  statistics?: StatisticsInput | null,
};

export type SyncMediaRepositoryInput = {
  mediaItems: Array< SyncMediaRepositoryItemInput >,
};

export type SyncMediaRepositoryItemInput = {
  type?: MediaType | null,
  mediaPath: string,
  thumbnailUrl?: string | null,
  name?: string | null,
  size?: number | null,
  position?: number | null,
};

export enum MediaType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  UNKNOWN = "UNKNOWN",
}


export type SyncLogoRepositoryInput = {
  logoItems: Array< SyncLogoRepositoryItemInput >,
};

export type SyncLogoRepositoryItemInput = {
  type?: LogoType | null,
  mediaPath: string,
  name?: string | null,
  size?: number | null,
  position?: number | null,
};

export enum LogoType {
  IMAGE = "IMAGE",
}


export type SyncCustomLinkRepositoryInput = {
  links: Array< SyncCustomLinkInput >,
};

export type SyncCustomLinkInput = {
  image?: string | null,
  title?: string | null,
  description?: string | null,
  linkType: CustomLinkType,
  link: string,
  ctaButton?: CTAButtonInput | null,
  secondaryLink?: string | null,
  isAffiliate?: boolean | null,
  playStoreLink?: string | null,
  appStoreLink?: string | null,
  position?: number | null,
};

export enum CustomLinkType {
  APP = "APP",
  AMAZON = "AMAZON",
  FLIPKART = "FLIPKART",
  EXTERNAL = "EXTERNAL",
  CUSTOM = "CUSTOM",
  YTLINK = "YTLINK",
  IGLINK = "IGLINK",
}


export type URLMeta = {
  __typename: "URLMeta",
  title?: string | null,
  description?: string | null,
  image?: string | null,
};

export type SortSubSectionsByPosition = {
  subSectionIds: Array< SortSubSectionsByPositionInput >,
};

export type SortSubSectionsByPositionInput = {
  id: string,
  enabled: boolean,
};

export type SortSectionsByPosition = {
  sectionIds: Array< SortSectionsByPositionInput >,
};

export type SortSectionsByPositionInput = {
  id: string,
  isArchived: boolean,
};

export type CreateInfluencerInput = {
  id?: string | null,
  name?: string | null,
  slug?: string | null,
  username?: string | null,
  bio?: string | null,
  email?: string | null,
  phone?: string | null,
  gender?: Gender | null,
  dob?: string | null,
  isActive?: boolean | null,
  address?: AddressInput | null,
  tags?: Array< string > | null,
  themeColor?: string | null,
  ctaButton?: Array< CTAButtonInput > | null,
  profilePictureWithBg?: string | null,
  profilePictureWithoutBg?: string | null,
  socialLinks?: SocialLinksInput | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  instagramMetrics?: AnalyticsInput | null,
  youtubeMetrics?: AnalyticsInput | null,
  isAnalyticsEnabled?: boolean | null,
  isDarkThemeEnabled?: boolean | null,
  facebookToken?: AuthTokenInput | null,
  googleToken?: AuthTokenInput | null,
  profileStatusCode?: string | null,
};

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}


export type AddressInput = {
  street: string,
  city: string,
  state: string,
  country: string,
  postalCode: string,
};

export type SocialLinksInput = {
  instagram?: string | null,
  facebook?: string | null,
  twitter?: string | null,
  youtube?: string | null,
  pinterest?: string | null,
  linkedIn?: string | null,
  snapchat?: string | null,
  tiktok?: string | null,
  other?: string | null,
};

export type AnalyticsInput = {
  statistics?: Array< AnalyticsStatisticsInput | null > | null,
  topAudienceCities?: Array< string > | null,
  sexRatio?: SexRatioTypeInput | null,
  ageGroupRatio?: Array< AgeGroupRatioTypeInput > | null,
};

export type AnalyticsStatisticsInput = {
  likeCount?: number | null,
  viewCount?: number | null,
  commentCount?: number | null,
  dateLabel: DateGroupType,
};

export enum DateGroupType {
  LAST30 = "LAST30",
  LAST60 = "LAST60",
  LAST90 = "LAST90",
}


export type SexRatioTypeInput = {
  female: number,
  male: number,
};

export type AgeGroupRatioTypeInput = {
  ageGroup: string,
  percentage: number,
};

export type AuthTokenInput = {
  accessToken: string,
  refreshToken?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  isExpired?: boolean | null,
};

export type ModelInfluencerConditionInput = {
  name?: ModelStringInput | null,
  slug?: ModelIDInput | null,
  username?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  gender?: ModelGenderInput | null,
  dob?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  tags?: ModelStringInput | null,
  themeColor?: ModelStringInput | null,
  profilePictureWithBg?: ModelStringInput | null,
  profilePictureWithoutBg?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  isAnalyticsEnabled?: ModelBooleanInput | null,
  isDarkThemeEnabled?: ModelBooleanInput | null,
  profileStatusCode?: ModelStringInput | null,
  and?: Array< ModelInfluencerConditionInput | null > | null,
  or?: Array< ModelInfluencerConditionInput | null > | null,
  not?: ModelInfluencerConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelGenderInput = {
  eq?: Gender | null,
  ne?: Gender | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Influencer = {
  __typename: "Influencer",
  id: string,
  name?: string | null,
  slug?: string | null,
  username?: string | null,
  bio?: string | null,
  email?: string | null,
  phone?: string | null,
  gender?: Gender | null,
  dob?: string | null,
  isActive?: boolean | null,
  address?: Address | null,
  tags?: Array< string > | null,
  themeColor?: string | null,
  ctaButton?:  Array<CTAButton > | null,
  profilePictureWithBg?: string | null,
  profilePictureWithoutBg?: string | null,
  socialLinks?: SocialLinks | null,
  createdAt: string,
  updatedAt: string,
  instagramMetrics?: Analytics | null,
  youtubeMetrics?: Analytics | null,
  isAnalyticsEnabled?: boolean | null,
  isDarkThemeEnabled?: boolean | null,
  facebookToken?: AuthToken | null,
  googleToken?: AuthToken | null,
  profileStatusCode?: string | null,
};

export type Address = {
  __typename: "Address",
  street: string,
  city: string,
  state: string,
  country: string,
  postalCode: string,
};

export type CTAButton = {
  __typename: "CTAButton",
  text?: string | null,
  link?: string | null,
  isActive?: boolean | null,
  type?: CTAButtonType | null,
};

export type SocialLinks = {
  __typename: "SocialLinks",
  instagram?: string | null,
  facebook?: string | null,
  twitter?: string | null,
  youtube?: string | null,
  pinterest?: string | null,
  linkedIn?: string | null,
  snapchat?: string | null,
  tiktok?: string | null,
  other?: string | null,
};

export type Analytics = {
  __typename: "Analytics",
  statistics?:  Array<AnalyticsStatistics | null > | null,
  topAudienceCities?: Array< string > | null,
  sexRatio?: SexRatioType | null,
  ageGroupRatio?:  Array<AgeGroupRatioType > | null,
};

export type AnalyticsStatistics = {
  __typename: "AnalyticsStatistics",
  likeCount?: number | null,
  viewCount?: number | null,
  commentCount?: number | null,
  dateLabel: DateGroupType,
};

export type SexRatioType = {
  __typename: "SexRatioType",
  female: number,
  male: number,
};

export type AgeGroupRatioType = {
  __typename: "AgeGroupRatioType",
  ageGroup: string,
  percentage: number,
};

export type AuthToken = {
  __typename: "AuthToken",
  accessToken: string,
  refreshToken?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  isExpired?: boolean | null,
};

export type UpdateInfluencerInput = {
  id: string,
  name?: string | null,
  slug?: string | null,
  username?: string | null,
  bio?: string | null,
  email?: string | null,
  phone?: string | null,
  gender?: Gender | null,
  dob?: string | null,
  isActive?: boolean | null,
  address?: AddressInput | null,
  tags?: Array< string > | null,
  themeColor?: string | null,
  ctaButton?: Array< CTAButtonInput > | null,
  profilePictureWithBg?: string | null,
  profilePictureWithoutBg?: string | null,
  socialLinks?: SocialLinksInput | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  instagramMetrics?: AnalyticsInput | null,
  youtubeMetrics?: AnalyticsInput | null,
  isAnalyticsEnabled?: boolean | null,
  isDarkThemeEnabled?: boolean | null,
  facebookToken?: AuthTokenInput | null,
  googleToken?: AuthTokenInput | null,
  profileStatusCode?: string | null,
};

export type DeleteInfluencerInput = {
  id: string,
};

export type CreateYoutubeVideoInput = {
  id?: string | null,
  influencerId?: string | null,
  isArchived?: boolean | null,
  videoId: string,
  position?: number | null,
  title?: string | null,
  description?: string | null,
  type?: YoutubeVideoType | null,
  ctaButton?: CTAButtonInput | null,
  timestamp?: string | null,
  channelTitle?: string | null,
  thumbnailUrl?: string | null,
  statistics?: StatisticsInput | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelYoutubeVideoConditionInput = {
  influencerId?: ModelStringInput | null,
  isArchived?: ModelBooleanInput | null,
  videoId?: ModelStringInput | null,
  position?: ModelIntInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelYoutubeVideoTypeInput | null,
  timestamp?: ModelStringInput | null,
  channelTitle?: ModelStringInput | null,
  thumbnailUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelYoutubeVideoConditionInput | null > | null,
  or?: Array< ModelYoutubeVideoConditionInput | null > | null,
  not?: ModelYoutubeVideoConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelYoutubeVideoTypeInput = {
  eq?: YoutubeVideoType | null,
  ne?: YoutubeVideoType | null,
};

export type YoutubeVideo = {
  __typename: "YoutubeVideo",
  id: string,
  influencerId?: string | null,
  isArchived?: boolean | null,
  videoId: string,
  position?: number | null,
  title?: string | null,
  description?: string | null,
  type?: YoutubeVideoType | null,
  ctaButton?: CTAButton | null,
  timestamp?: string | null,
  channelTitle?: string | null,
  thumbnailUrl?: string | null,
  statistics?: Statistics | null,
  createdAt: string,
  updatedAt: string,
  subSections?: ModelSubSectionYTItemsConnection | null,
};

export type Statistics = {
  __typename: "Statistics",
  likeCount?: number | null,
  viewCount?: number | null,
  commentCount?: number | null,
  favoriteCount?: number | null,
};

export type ModelSubSectionYTItemsConnection = {
  __typename: "ModelSubSectionYTItemsConnection",
  items:  Array<SubSectionYTItems | null >,
  nextToken?: string | null,
};

export type SubSectionYTItems = {
  __typename: "SubSectionYTItems",
  id: string,
  youtubeVideoId: string,
  subSectionId: string,
  youtubeVideo: YoutubeVideo,
  subSection: SubSection,
  createdAt: string,
  updatedAt: string,
  influencerId?: string | null,
};

export type SubSection = {
  __typename: "SubSection",
  id: string,
  influencerId?: string | null,
  position: number,
  type: SubSectionType,
  title?: string | null,
  enabled?: boolean | null,
  sectionId: string,
  youtubeItems?: ModelSubSectionYTItemsConnection | null,
  facebookItems?: ModelSubSectionFBItemsConnection | null,
  instagramItems?: ModelSubSectionIGItemsConnection | null,
  customLinkItems?: ModelSubSectionCustomLinksConnection | null,
  mediaItems?: ModelSubSectionMediaItemsConnection | null,
  logoItems?: ModelSubSectionLogoItemsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export enum SubSectionType {
  YOUTUBE = "YOUTUBE",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
  CUSTOMLINK = "CUSTOMLINK",
  MEDIA = "MEDIA",
  LOGO = "LOGO",
}


export type ModelSubSectionFBItemsConnection = {
  __typename: "ModelSubSectionFBItemsConnection",
  items:  Array<SubSectionFBItems | null >,
  nextToken?: string | null,
};

export type SubSectionFBItems = {
  __typename: "SubSectionFBItems",
  id: string,
  facebookVideoId: string,
  subSectionId: string,
  facebookVideo: FacebookVideo,
  subSection: SubSection,
  createdAt: string,
  updatedAt: string,
  influencerId?: string | null,
};

export type FacebookVideo = {
  __typename: "FacebookVideo",
  id: string,
  influencerId?: string | null,
  isArchived?: boolean | null,
  videoId: string,
  position?: number | null,
  title?: string | null,
  description?: string | null,
  type: MetaVideoType,
  ctaButton?: CTAButton | null,
  timestamp?: string | null,
  sourceMediaUrl?: string | null,
  permaLink: string,
  thumbnailUrl?: string | null,
  statistics?: Statistics | null,
  createdAt: string,
  updatedAt: string,
  subSections?: ModelSubSectionFBItemsConnection | null,
};

export type ModelSubSectionIGItemsConnection = {
  __typename: "ModelSubSectionIGItemsConnection",
  items:  Array<SubSectionIGItems | null >,
  nextToken?: string | null,
};

export type SubSectionIGItems = {
  __typename: "SubSectionIGItems",
  id: string,
  instagramVideoId: string,
  subSectionId: string,
  instagramVideo: InstagramVideo,
  subSection: SubSection,
  createdAt: string,
  updatedAt: string,
  influencerId?: string | null,
};

export type InstagramVideo = {
  __typename: "InstagramVideo",
  id: string,
  influencerId?: string | null,
  isArchived?: boolean | null,
  videoId: string,
  position?: number | null,
  title?: string | null,
  description?: string | null,
  type: MetaVideoType,
  ctaButton?: CTAButton | null,
  timestamp?: string | null,
  sourceMediaUrl?: string | null,
  permaLink: string,
  thumbnailUrl?: string | null,
  statistics?: Statistics | null,
  createdAt: string,
  updatedAt: string,
  subSections?: ModelSubSectionIGItemsConnection | null,
};

export type ModelSubSectionCustomLinksConnection = {
  __typename: "ModelSubSectionCustomLinksConnection",
  items:  Array<SubSectionCustomLinks | null >,
  nextToken?: string | null,
};

export type SubSectionCustomLinks = {
  __typename: "SubSectionCustomLinks",
  id: string,
  customLinkId: string,
  subSectionId: string,
  customLink: CustomLink,
  subSection: SubSection,
  createdAt: string,
  updatedAt: string,
  influencerId?: string | null,
};

export type CustomLink = {
  __typename: "CustomLink",
  id: string,
  influencerId?: string | null,
  isArchived?: boolean | null,
  linkType: CustomLinkType,
  position?: number | null,
  image?: string | null,
  title?: string | null,
  ctaButton?: CTAButton | null,
  description?: string | null,
  link: string,
  secondaryLink?: string | null,
  isAffiliate?: boolean | null,
  playStoreLink?: string | null,
  appStoreLink?: string | null,
  createdAt: string,
  updatedAt: string,
  subSections?: ModelSubSectionCustomLinksConnection | null,
};

export type ModelSubSectionMediaItemsConnection = {
  __typename: "ModelSubSectionMediaItemsConnection",
  items:  Array<SubSectionMediaItems | null >,
  nextToken?: string | null,
};

export type SubSectionMediaItems = {
  __typename: "SubSectionMediaItems",
  id: string,
  mediaId: string,
  subSectionId: string,
  media: Media,
  subSection: SubSection,
  createdAt: string,
  updatedAt: string,
  influencerId?: string | null,
};

export type Media = {
  __typename: "Media",
  id: string,
  influencerId?: string | null,
  isArchived?: boolean | null,
  type?: MediaType | null,
  mediaPath: string,
  thumbnailUrl?: string | null,
  name?: string | null,
  size?: number | null,
  title?: string | null,
  position?: number | null,
  ctaButton?: CTAButton | null,
  createdAt: string,
  updatedAt: string,
  subSections?: ModelSubSectionMediaItemsConnection | null,
};

export type ModelSubSectionLogoItemsConnection = {
  __typename: "ModelSubSectionLogoItemsConnection",
  items:  Array<SubSectionLogoItems | null >,
  nextToken?: string | null,
};

export type SubSectionLogoItems = {
  __typename: "SubSectionLogoItems",
  id: string,
  logoId: string,
  subSectionId: string,
  logo: Logo,
  subSection: SubSection,
  createdAt: string,
  updatedAt: string,
  influencerId?: string | null,
};

export type Logo = {
  __typename: "Logo",
  id: string,
  influencerId?: string | null,
  isArchived?: boolean | null,
  type?: LogoType | null,
  mediaPath: string,
  name?: string | null,
  size?: number | null,
  title?: string | null,
  position?: number | null,
  createdAt: string,
  updatedAt: string,
  subSections?: ModelSubSectionLogoItemsConnection | null,
};

export type UpdateYoutubeVideoInput = {
  id: string,
  influencerId?: string | null,
  isArchived?: boolean | null,
  videoId?: string | null,
  position?: number | null,
  title?: string | null,
  description?: string | null,
  type?: YoutubeVideoType | null,
  ctaButton?: CTAButtonInput | null,
  timestamp?: string | null,
  channelTitle?: string | null,
  thumbnailUrl?: string | null,
  statistics?: StatisticsInput | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteYoutubeVideoInput = {
  id: string,
};

export type CreateFacebookVideoInput = {
  id?: string | null,
  influencerId?: string | null,
  isArchived?: boolean | null,
  videoId: string,
  position?: number | null,
  title?: string | null,
  description?: string | null,
  type: MetaVideoType,
  ctaButton?: CTAButtonInput | null,
  timestamp?: string | null,
  sourceMediaUrl?: string | null,
  permaLink: string,
  thumbnailUrl?: string | null,
  statistics?: StatisticsInput | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelFacebookVideoConditionInput = {
  influencerId?: ModelStringInput | null,
  isArchived?: ModelBooleanInput | null,
  videoId?: ModelStringInput | null,
  position?: ModelIntInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelMetaVideoTypeInput | null,
  timestamp?: ModelStringInput | null,
  sourceMediaUrl?: ModelStringInput | null,
  permaLink?: ModelStringInput | null,
  thumbnailUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFacebookVideoConditionInput | null > | null,
  or?: Array< ModelFacebookVideoConditionInput | null > | null,
  not?: ModelFacebookVideoConditionInput | null,
};

export type ModelMetaVideoTypeInput = {
  eq?: MetaVideoType | null,
  ne?: MetaVideoType | null,
};

export type UpdateFacebookVideoInput = {
  id: string,
  influencerId?: string | null,
  isArchived?: boolean | null,
  videoId?: string | null,
  position?: number | null,
  title?: string | null,
  description?: string | null,
  type?: MetaVideoType | null,
  ctaButton?: CTAButtonInput | null,
  timestamp?: string | null,
  sourceMediaUrl?: string | null,
  permaLink?: string | null,
  thumbnailUrl?: string | null,
  statistics?: StatisticsInput | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteFacebookVideoInput = {
  id: string,
};

export type CreateInstagramVideoInput = {
  id?: string | null,
  influencerId?: string | null,
  isArchived?: boolean | null,
  videoId: string,
  position?: number | null,
  title?: string | null,
  description?: string | null,
  type: MetaVideoType,
  ctaButton?: CTAButtonInput | null,
  timestamp?: string | null,
  sourceMediaUrl?: string | null,
  permaLink: string,
  thumbnailUrl?: string | null,
  statistics?: StatisticsInput | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelInstagramVideoConditionInput = {
  influencerId?: ModelStringInput | null,
  isArchived?: ModelBooleanInput | null,
  videoId?: ModelStringInput | null,
  position?: ModelIntInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelMetaVideoTypeInput | null,
  timestamp?: ModelStringInput | null,
  sourceMediaUrl?: ModelStringInput | null,
  permaLink?: ModelStringInput | null,
  thumbnailUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelInstagramVideoConditionInput | null > | null,
  or?: Array< ModelInstagramVideoConditionInput | null > | null,
  not?: ModelInstagramVideoConditionInput | null,
};

export type UpdateInstagramVideoInput = {
  id: string,
  influencerId?: string | null,
  isArchived?: boolean | null,
  videoId?: string | null,
  position?: number | null,
  title?: string | null,
  description?: string | null,
  type?: MetaVideoType | null,
  ctaButton?: CTAButtonInput | null,
  timestamp?: string | null,
  sourceMediaUrl?: string | null,
  permaLink?: string | null,
  thumbnailUrl?: string | null,
  statistics?: StatisticsInput | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteInstagramVideoInput = {
  id: string,
};

export type CreateCustomLinkInput = {
  id?: string | null,
  influencerId?: string | null,
  isArchived?: boolean | null,
  linkType: CustomLinkType,
  position?: number | null,
  image?: string | null,
  title?: string | null,
  ctaButton?: CTAButtonInput | null,
  description?: string | null,
  link: string,
  secondaryLink?: string | null,
  isAffiliate?: boolean | null,
  playStoreLink?: string | null,
  appStoreLink?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelCustomLinkConditionInput = {
  influencerId?: ModelStringInput | null,
  isArchived?: ModelBooleanInput | null,
  linkType?: ModelCustomLinkTypeInput | null,
  position?: ModelIntInput | null,
  image?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  link?: ModelStringInput | null,
  secondaryLink?: ModelStringInput | null,
  isAffiliate?: ModelBooleanInput | null,
  playStoreLink?: ModelStringInput | null,
  appStoreLink?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCustomLinkConditionInput | null > | null,
  or?: Array< ModelCustomLinkConditionInput | null > | null,
  not?: ModelCustomLinkConditionInput | null,
};

export type ModelCustomLinkTypeInput = {
  eq?: CustomLinkType | null,
  ne?: CustomLinkType | null,
};

export type UpdateCustomLinkInput = {
  id: string,
  influencerId?: string | null,
  isArchived?: boolean | null,
  linkType?: CustomLinkType | null,
  position?: number | null,
  image?: string | null,
  title?: string | null,
  ctaButton?: CTAButtonInput | null,
  description?: string | null,
  link?: string | null,
  secondaryLink?: string | null,
  isAffiliate?: boolean | null,
  playStoreLink?: string | null,
  appStoreLink?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteCustomLinkInput = {
  id: string,
};

export type CreateMediaInput = {
  id?: string | null,
  influencerId?: string | null,
  isArchived?: boolean | null,
  type?: MediaType | null,
  mediaPath: string,
  thumbnailUrl?: string | null,
  name?: string | null,
  size?: number | null,
  title?: string | null,
  position?: number | null,
  ctaButton?: CTAButtonInput | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelMediaConditionInput = {
  influencerId?: ModelStringInput | null,
  isArchived?: ModelBooleanInput | null,
  type?: ModelMediaTypeInput | null,
  mediaPath?: ModelStringInput | null,
  thumbnailUrl?: ModelStringInput | null,
  name?: ModelStringInput | null,
  size?: ModelFloatInput | null,
  title?: ModelStringInput | null,
  position?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMediaConditionInput | null > | null,
  or?: Array< ModelMediaConditionInput | null > | null,
  not?: ModelMediaConditionInput | null,
};

export type ModelMediaTypeInput = {
  eq?: MediaType | null,
  ne?: MediaType | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateMediaInput = {
  id: string,
  influencerId?: string | null,
  isArchived?: boolean | null,
  type?: MediaType | null,
  mediaPath?: string | null,
  thumbnailUrl?: string | null,
  name?: string | null,
  size?: number | null,
  title?: string | null,
  position?: number | null,
  ctaButton?: CTAButtonInput | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteMediaInput = {
  id: string,
};

export type CreateLogoInput = {
  id?: string | null,
  influencerId?: string | null,
  isArchived?: boolean | null,
  type?: LogoType | null,
  mediaPath: string,
  name?: string | null,
  size?: number | null,
  title?: string | null,
  position?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelLogoConditionInput = {
  influencerId?: ModelStringInput | null,
  isArchived?: ModelBooleanInput | null,
  type?: ModelLogoTypeInput | null,
  mediaPath?: ModelStringInput | null,
  name?: ModelStringInput | null,
  size?: ModelFloatInput | null,
  title?: ModelStringInput | null,
  position?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLogoConditionInput | null > | null,
  or?: Array< ModelLogoConditionInput | null > | null,
  not?: ModelLogoConditionInput | null,
};

export type ModelLogoTypeInput = {
  eq?: LogoType | null,
  ne?: LogoType | null,
};

export type UpdateLogoInput = {
  id: string,
  influencerId?: string | null,
  isArchived?: boolean | null,
  type?: LogoType | null,
  mediaPath?: string | null,
  name?: string | null,
  size?: number | null,
  title?: string | null,
  position?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteLogoInput = {
  id: string,
};

export type CreateSubSectionInput = {
  id?: string | null,
  influencerId?: string | null,
  position: number,
  type: SubSectionType,
  title?: string | null,
  enabled?: boolean | null,
  sectionId: string,
};

export type ModelSubSectionConditionInput = {
  influencerId?: ModelStringInput | null,
  position?: ModelIntInput | null,
  type?: ModelSubSectionTypeInput | null,
  title?: ModelStringInput | null,
  enabled?: ModelBooleanInput | null,
  sectionId?: ModelIDInput | null,
  and?: Array< ModelSubSectionConditionInput | null > | null,
  or?: Array< ModelSubSectionConditionInput | null > | null,
  not?: ModelSubSectionConditionInput | null,
};

export type ModelSubSectionTypeInput = {
  eq?: SubSectionType | null,
  ne?: SubSectionType | null,
};

export type UpdateSubSectionInput = {
  id: string,
  influencerId?: string | null,
  position?: number | null,
  type?: SubSectionType | null,
  title?: string | null,
  enabled?: boolean | null,
  sectionId?: string | null,
};

export type DeleteSubSectionInput = {
  id: string,
};

export type CreateSectionInput = {
  id?: string | null,
  influencerId?: string | null,
  isArchived?: boolean | null,
  title: string,
  position: number,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelSectionConditionInput = {
  influencerId?: ModelStringInput | null,
  isArchived?: ModelBooleanInput | null,
  title?: ModelStringInput | null,
  position?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSectionConditionInput | null > | null,
  or?: Array< ModelSectionConditionInput | null > | null,
  not?: ModelSectionConditionInput | null,
};

export type Section = {
  __typename: "Section",
  id: string,
  influencerId?: string | null,
  isArchived?: boolean | null,
  title: string,
  position: number,
  subSections?: ModelSubSectionConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSubSectionConnection = {
  __typename: "ModelSubSectionConnection",
  items:  Array<SubSection | null >,
  nextToken?: string | null,
};

export type UpdateSectionInput = {
  id: string,
  influencerId?: string | null,
  isArchived?: boolean | null,
  title?: string | null,
  position?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteSectionInput = {
  id: string,
};

export type CreateSubSectionYTItemsInput = {
  id?: string | null,
  youtubeVideoId: string,
  subSectionId: string,
};

export type ModelSubSectionYTItemsConditionInput = {
  youtubeVideoId?: ModelIDInput | null,
  subSectionId?: ModelIDInput | null,
  and?: Array< ModelSubSectionYTItemsConditionInput | null > | null,
  or?: Array< ModelSubSectionYTItemsConditionInput | null > | null,
  not?: ModelSubSectionYTItemsConditionInput | null,
};

export type UpdateSubSectionYTItemsInput = {
  id: string,
  youtubeVideoId?: string | null,
  subSectionId?: string | null,
};

export type DeleteSubSectionYTItemsInput = {
  id: string,
};

export type CreateSubSectionFBItemsInput = {
  id?: string | null,
  facebookVideoId: string,
  subSectionId: string,
};

export type ModelSubSectionFBItemsConditionInput = {
  facebookVideoId?: ModelIDInput | null,
  subSectionId?: ModelIDInput | null,
  and?: Array< ModelSubSectionFBItemsConditionInput | null > | null,
  or?: Array< ModelSubSectionFBItemsConditionInput | null > | null,
  not?: ModelSubSectionFBItemsConditionInput | null,
};

export type UpdateSubSectionFBItemsInput = {
  id: string,
  facebookVideoId?: string | null,
  subSectionId?: string | null,
};

export type DeleteSubSectionFBItemsInput = {
  id: string,
};

export type CreateSubSectionIGItemsInput = {
  id?: string | null,
  instagramVideoId: string,
  subSectionId: string,
};

export type ModelSubSectionIGItemsConditionInput = {
  instagramVideoId?: ModelIDInput | null,
  subSectionId?: ModelIDInput | null,
  and?: Array< ModelSubSectionIGItemsConditionInput | null > | null,
  or?: Array< ModelSubSectionIGItemsConditionInput | null > | null,
  not?: ModelSubSectionIGItemsConditionInput | null,
};

export type UpdateSubSectionIGItemsInput = {
  id: string,
  instagramVideoId?: string | null,
  subSectionId?: string | null,
};

export type DeleteSubSectionIGItemsInput = {
  id: string,
};

export type CreateSubSectionCustomLinksInput = {
  id?: string | null,
  customLinkId: string,
  subSectionId: string,
};

export type ModelSubSectionCustomLinksConditionInput = {
  customLinkId?: ModelIDInput | null,
  subSectionId?: ModelIDInput | null,
  and?: Array< ModelSubSectionCustomLinksConditionInput | null > | null,
  or?: Array< ModelSubSectionCustomLinksConditionInput | null > | null,
  not?: ModelSubSectionCustomLinksConditionInput | null,
};

export type UpdateSubSectionCustomLinksInput = {
  id: string,
  customLinkId?: string | null,
  subSectionId?: string | null,
};

export type DeleteSubSectionCustomLinksInput = {
  id: string,
};

export type CreateSubSectionMediaItemsInput = {
  id?: string | null,
  mediaId: string,
  subSectionId: string,
};

export type ModelSubSectionMediaItemsConditionInput = {
  mediaId?: ModelIDInput | null,
  subSectionId?: ModelIDInput | null,
  and?: Array< ModelSubSectionMediaItemsConditionInput | null > | null,
  or?: Array< ModelSubSectionMediaItemsConditionInput | null > | null,
  not?: ModelSubSectionMediaItemsConditionInput | null,
};

export type UpdateSubSectionMediaItemsInput = {
  id: string,
  mediaId?: string | null,
  subSectionId?: string | null,
};

export type DeleteSubSectionMediaItemsInput = {
  id: string,
};

export type CreateSubSectionLogoItemsInput = {
  id?: string | null,
  logoId: string,
  subSectionId: string,
};

export type ModelSubSectionLogoItemsConditionInput = {
  logoId?: ModelIDInput | null,
  subSectionId?: ModelIDInput | null,
  and?: Array< ModelSubSectionLogoItemsConditionInput | null > | null,
  or?: Array< ModelSubSectionLogoItemsConditionInput | null > | null,
  not?: ModelSubSectionLogoItemsConditionInput | null,
};

export type UpdateSubSectionLogoItemsInput = {
  id: string,
  logoId?: string | null,
  subSectionId?: string | null,
};

export type DeleteSubSectionLogoItemsInput = {
  id: string,
};

export type ContactFormInput = {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  message?: string | null,
};

export type EmailResponse = {
  __typename: "EmailResponse",
  code: SyncResponseCode,
  message?: string | null,
};

export type AnalyticsResponse = {
  __typename: "AnalyticsResponse",
  code?: string | null,
  message?: string | null,
  payload?: AnalyticsResponseType | null,
};

export type AnalyticsResponseType = {
  __typename: "AnalyticsResponseType",
  statistics?:  Array<AnalyticsStatisticsResponseType | null > | null,
  topAudienceCities?: Array< string | null > | null,
  sexRatio?: AnalyticsSexRatioResponseType | null,
  ageGroupRatio?:  Array<AnalyticsAgeGroupRatioResponseType | null > | null,
};

export type AnalyticsStatisticsResponseType = {
  __typename: "AnalyticsStatisticsResponseType",
  viewCount?: number | null,
  likeCount?: number | null,
  commentCount?: number | null,
  dateLabel?: string | null,
};

export type AnalyticsSexRatioResponseType = {
  __typename: "AnalyticsSexRatioResponseType",
  female: number,
  male: number,
};

export type AnalyticsAgeGroupRatioResponseType = {
  __typename: "AnalyticsAgeGroupRatioResponseType",
  ageGroup: string,
  percentage: number,
};

export type ModelInfluencerFilterInput = {
  id?: ModelStringInput | null,
  name?: ModelStringInput | null,
  slug?: ModelIDInput | null,
  username?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  gender?: ModelGenderInput | null,
  dob?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  tags?: ModelStringInput | null,
  themeColor?: ModelStringInput | null,
  profilePictureWithBg?: ModelStringInput | null,
  profilePictureWithoutBg?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  isAnalyticsEnabled?: ModelBooleanInput | null,
  isDarkThemeEnabled?: ModelBooleanInput | null,
  profileStatusCode?: ModelStringInput | null,
  and?: Array< ModelInfluencerFilterInput | null > | null,
  or?: Array< ModelInfluencerFilterInput | null > | null,
  not?: ModelInfluencerFilterInput | null,
};

export type ModelInfluencerConnection = {
  __typename: "ModelInfluencerConnection",
  items:  Array<Influencer | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelYoutubeVideoFilterInput = {
  id?: ModelIDInput | null,
  influencerId?: ModelStringInput | null,
  isArchived?: ModelBooleanInput | null,
  videoId?: ModelStringInput | null,
  position?: ModelIntInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelYoutubeVideoTypeInput | null,
  timestamp?: ModelStringInput | null,
  channelTitle?: ModelStringInput | null,
  thumbnailUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelYoutubeVideoFilterInput | null > | null,
  or?: Array< ModelYoutubeVideoFilterInput | null > | null,
  not?: ModelYoutubeVideoFilterInput | null,
};

export type ModelYoutubeVideoConnection = {
  __typename: "ModelYoutubeVideoConnection",
  items:  Array<YoutubeVideo | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelFacebookVideoFilterInput = {
  id?: ModelIDInput | null,
  influencerId?: ModelStringInput | null,
  isArchived?: ModelBooleanInput | null,
  videoId?: ModelStringInput | null,
  position?: ModelIntInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelMetaVideoTypeInput | null,
  timestamp?: ModelStringInput | null,
  sourceMediaUrl?: ModelStringInput | null,
  permaLink?: ModelStringInput | null,
  thumbnailUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFacebookVideoFilterInput | null > | null,
  or?: Array< ModelFacebookVideoFilterInput | null > | null,
  not?: ModelFacebookVideoFilterInput | null,
};

export type ModelFacebookVideoConnection = {
  __typename: "ModelFacebookVideoConnection",
  items:  Array<FacebookVideo | null >,
  nextToken?: string | null,
};

export type ModelInstagramVideoFilterInput = {
  id?: ModelIDInput | null,
  influencerId?: ModelStringInput | null,
  isArchived?: ModelBooleanInput | null,
  videoId?: ModelStringInput | null,
  position?: ModelIntInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelMetaVideoTypeInput | null,
  timestamp?: ModelStringInput | null,
  sourceMediaUrl?: ModelStringInput | null,
  permaLink?: ModelStringInput | null,
  thumbnailUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelInstagramVideoFilterInput | null > | null,
  or?: Array< ModelInstagramVideoFilterInput | null > | null,
  not?: ModelInstagramVideoFilterInput | null,
};

export type ModelInstagramVideoConnection = {
  __typename: "ModelInstagramVideoConnection",
  items:  Array<InstagramVideo | null >,
  nextToken?: string | null,
};

export type ModelCustomLinkFilterInput = {
  id?: ModelIDInput | null,
  influencerId?: ModelStringInput | null,
  isArchived?: ModelBooleanInput | null,
  linkType?: ModelCustomLinkTypeInput | null,
  position?: ModelIntInput | null,
  image?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  link?: ModelStringInput | null,
  secondaryLink?: ModelStringInput | null,
  isAffiliate?: ModelBooleanInput | null,
  playStoreLink?: ModelStringInput | null,
  appStoreLink?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCustomLinkFilterInput | null > | null,
  or?: Array< ModelCustomLinkFilterInput | null > | null,
  not?: ModelCustomLinkFilterInput | null,
};

export type ModelCustomLinkConnection = {
  __typename: "ModelCustomLinkConnection",
  items:  Array<CustomLink | null >,
  nextToken?: string | null,
};

export type ModelMediaFilterInput = {
  id?: ModelIDInput | null,
  influencerId?: ModelStringInput | null,
  isArchived?: ModelBooleanInput | null,
  type?: ModelMediaTypeInput | null,
  mediaPath?: ModelStringInput | null,
  thumbnailUrl?: ModelStringInput | null,
  name?: ModelStringInput | null,
  size?: ModelFloatInput | null,
  title?: ModelStringInput | null,
  position?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMediaFilterInput | null > | null,
  or?: Array< ModelMediaFilterInput | null > | null,
  not?: ModelMediaFilterInput | null,
};

export type ModelMediaConnection = {
  __typename: "ModelMediaConnection",
  items:  Array<Media | null >,
  nextToken?: string | null,
};

export type ModelLogoFilterInput = {
  id?: ModelIDInput | null,
  influencerId?: ModelStringInput | null,
  isArchived?: ModelBooleanInput | null,
  type?: ModelLogoTypeInput | null,
  mediaPath?: ModelStringInput | null,
  name?: ModelStringInput | null,
  size?: ModelFloatInput | null,
  title?: ModelStringInput | null,
  position?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLogoFilterInput | null > | null,
  or?: Array< ModelLogoFilterInput | null > | null,
  not?: ModelLogoFilterInput | null,
};

export type ModelLogoConnection = {
  __typename: "ModelLogoConnection",
  items:  Array<Logo | null >,
  nextToken?: string | null,
};

export type ModelSubSectionFilterInput = {
  id?: ModelIDInput | null,
  influencerId?: ModelStringInput | null,
  position?: ModelIntInput | null,
  type?: ModelSubSectionTypeInput | null,
  title?: ModelStringInput | null,
  enabled?: ModelBooleanInput | null,
  sectionId?: ModelIDInput | null,
  and?: Array< ModelSubSectionFilterInput | null > | null,
  or?: Array< ModelSubSectionFilterInput | null > | null,
  not?: ModelSubSectionFilterInput | null,
};

export type ModelIntKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelSectionFilterInput = {
  id?: ModelIDInput | null,
  influencerId?: ModelStringInput | null,
  isArchived?: ModelBooleanInput | null,
  title?: ModelStringInput | null,
  position?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSectionFilterInput | null > | null,
  or?: Array< ModelSectionFilterInput | null > | null,
  not?: ModelSectionFilterInput | null,
};

export type ModelSectionConnection = {
  __typename: "ModelSectionConnection",
  items:  Array<Section | null >,
  nextToken?: string | null,
};

export type ModelSubSectionYTItemsFilterInput = {
  id?: ModelIDInput | null,
  youtubeVideoId?: ModelIDInput | null,
  subSectionId?: ModelIDInput | null,
  and?: Array< ModelSubSectionYTItemsFilterInput | null > | null,
  or?: Array< ModelSubSectionYTItemsFilterInput | null > | null,
  not?: ModelSubSectionYTItemsFilterInput | null,
};

export type ModelSubSectionFBItemsFilterInput = {
  id?: ModelIDInput | null,
  facebookVideoId?: ModelIDInput | null,
  subSectionId?: ModelIDInput | null,
  and?: Array< ModelSubSectionFBItemsFilterInput | null > | null,
  or?: Array< ModelSubSectionFBItemsFilterInput | null > | null,
  not?: ModelSubSectionFBItemsFilterInput | null,
};

export type ModelSubSectionIGItemsFilterInput = {
  id?: ModelIDInput | null,
  instagramVideoId?: ModelIDInput | null,
  subSectionId?: ModelIDInput | null,
  and?: Array< ModelSubSectionIGItemsFilterInput | null > | null,
  or?: Array< ModelSubSectionIGItemsFilterInput | null > | null,
  not?: ModelSubSectionIGItemsFilterInput | null,
};

export type ModelSubSectionCustomLinksFilterInput = {
  id?: ModelIDInput | null,
  customLinkId?: ModelIDInput | null,
  subSectionId?: ModelIDInput | null,
  and?: Array< ModelSubSectionCustomLinksFilterInput | null > | null,
  or?: Array< ModelSubSectionCustomLinksFilterInput | null > | null,
  not?: ModelSubSectionCustomLinksFilterInput | null,
};

export type ModelSubSectionMediaItemsFilterInput = {
  id?: ModelIDInput | null,
  mediaId?: ModelIDInput | null,
  subSectionId?: ModelIDInput | null,
  and?: Array< ModelSubSectionMediaItemsFilterInput | null > | null,
  or?: Array< ModelSubSectionMediaItemsFilterInput | null > | null,
  not?: ModelSubSectionMediaItemsFilterInput | null,
};

export type ModelSubSectionLogoItemsFilterInput = {
  id?: ModelIDInput | null,
  logoId?: ModelIDInput | null,
  subSectionId?: ModelIDInput | null,
  and?: Array< ModelSubSectionLogoItemsFilterInput | null > | null,
  or?: Array< ModelSubSectionLogoItemsFilterInput | null > | null,
  not?: ModelSubSectionLogoItemsFilterInput | null,
};

export type ModelSubscriptionSubSectionYTItemsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  youtubeVideoId?: ModelSubscriptionIDInput | null,
  subSectionId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionSubSectionYTItemsFilterInput | null > | null,
  or?: Array< ModelSubscriptionSubSectionYTItemsFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionSubSectionFBItemsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  facebookVideoId?: ModelSubscriptionIDInput | null,
  subSectionId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionSubSectionFBItemsFilterInput | null > | null,
  or?: Array< ModelSubscriptionSubSectionFBItemsFilterInput | null > | null,
};

export type ModelSubscriptionSubSectionIGItemsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  instagramVideoId?: ModelSubscriptionIDInput | null,
  subSectionId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionSubSectionIGItemsFilterInput | null > | null,
  or?: Array< ModelSubscriptionSubSectionIGItemsFilterInput | null > | null,
};

export type ModelSubscriptionSubSectionCustomLinksFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  customLinkId?: ModelSubscriptionIDInput | null,
  subSectionId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionSubSectionCustomLinksFilterInput | null > | null,
  or?: Array< ModelSubscriptionSubSectionCustomLinksFilterInput | null > | null,
};

export type ModelSubscriptionSubSectionMediaItemsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  mediaId?: ModelSubscriptionIDInput | null,
  subSectionId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionSubSectionMediaItemsFilterInput | null > | null,
  or?: Array< ModelSubscriptionSubSectionMediaItemsFilterInput | null > | null,
};

export type ModelSubscriptionSubSectionLogoItemsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  logoId?: ModelSubscriptionIDInput | null,
  subSectionId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionSubSectionLogoItemsFilterInput | null > | null,
  or?: Array< ModelSubscriptionSubSectionLogoItemsFilterInput | null > | null,
};

export type SyncYoutubeRepositoryMutationVariables = {
  input: SyncYoutubeRepositoryInput,
};

export type SyncYoutubeRepositoryMutation = {
  syncYoutubeRepository:  {
    __typename: "SyncResponse",
    code: SyncResponseCode,
    message?: string | null,
  },
};

export type CreateYoutubeItemsMutationVariables = {
  sectionId: string,
  subSectionId?: string | null,
  input: SyncYoutubeRepositoryInput,
};

export type CreateYoutubeItemsMutation = {
  createYoutubeItems:  {
    __typename: "SyncResponse",
    code: SyncResponseCode,
    message?: string | null,
  },
};

export type SyncFacebookRepositoryMutationVariables = {
  input: SyncFacebookRepositoryInput,
};

export type SyncFacebookRepositoryMutation = {
  syncFacebookRepository:  {
    __typename: "SyncResponse",
    code: SyncResponseCode,
    message?: string | null,
  },
};

export type CreateFacebookItemsMutationVariables = {
  sectionId: string,
  subSectionId?: string | null,
  input: SyncFacebookRepositoryInput,
};

export type CreateFacebookItemsMutation = {
  createFacebookItems:  {
    __typename: "SyncResponse",
    code: SyncResponseCode,
    message?: string | null,
  },
};

export type SyncInstagramRepositoryMutationVariables = {
  input: SyncInstagramRepositoryInput,
};

export type SyncInstagramRepositoryMutation = {
  syncInstagramRepository:  {
    __typename: "SyncResponse",
    code: SyncResponseCode,
    message?: string | null,
  },
};

export type CreateInstagramItemsMutationVariables = {
  sectionId: string,
  subSectionId?: string | null,
  input: SyncInstagramRepositoryInput,
};

export type CreateInstagramItemsMutation = {
  createInstagramItems:  {
    __typename: "SyncResponse",
    code: SyncResponseCode,
    message?: string | null,
  },
};

export type CreateMediaItemsMutationVariables = {
  sectionId: string,
  subSectionId?: string | null,
  input: SyncMediaRepositoryInput,
};

export type CreateMediaItemsMutation = {
  createMediaItems:  {
    __typename: "SyncResponse",
    code: SyncResponseCode,
    message?: string | null,
  },
};

export type CreateLogoItemsMutationVariables = {
  sectionId: string,
  subSectionId?: string | null,
  input: SyncLogoRepositoryInput,
};

export type CreateLogoItemsMutation = {
  createLogoItems:  {
    __typename: "SyncResponse",
    code: SyncResponseCode,
    message?: string | null,
  },
};

export type CreateCustomLinkItemsMutationVariables = {
  sectionId: string,
  subSectionId?: string | null,
  input: SyncCustomLinkRepositoryInput,
};

export type CreateCustomLinkItemsMutation = {
  createCustomLinkItems:  {
    __typename: "SyncResponse",
    code: SyncResponseCode,
    message?: string | null,
  },
};

export type GetUrlMetaMutationVariables = {
  link: string,
};

export type GetUrlMetaMutation = {
  getUrlMeta?:  {
    __typename: "URLMeta",
    title?: string | null,
    description?: string | null,
    image?: string | null,
  } | null,
};

export type SortSubSectionByPositionMutationVariables = {
  input?: SortSubSectionsByPosition | null,
};

export type SortSubSectionByPositionMutation = {
  sortSubSectionByPosition:  {
    __typename: "SyncResponse",
    code: SyncResponseCode,
    message?: string | null,
  },
};

export type SortSectionByPositionMutationVariables = {
  input?: SortSectionsByPosition | null,
};

export type SortSectionByPositionMutation = {
  sortSectionByPosition:  {
    __typename: "SyncResponse",
    code: SyncResponseCode,
    message?: string | null,
  },
};

export type CreateInfluencerMutationVariables = {
  input: CreateInfluencerInput,
  condition?: ModelInfluencerConditionInput | null,
};

export type CreateInfluencerMutation = {
  createInfluencer?:  {
    __typename: "Influencer",
    id: string,
    name?: string | null,
    slug?: string | null,
    username?: string | null,
    bio?: string | null,
    email?: string | null,
    phone?: string | null,
    gender?: Gender | null,
    dob?: string | null,
    isActive?: boolean | null,
    address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
      postalCode: string,
    } | null,
    tags?: Array< string > | null,
    themeColor?: string | null,
    ctaButton?:  Array< {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } > | null,
    profilePictureWithBg?: string | null,
    profilePictureWithoutBg?: string | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      instagram?: string | null,
      facebook?: string | null,
      twitter?: string | null,
      youtube?: string | null,
      pinterest?: string | null,
      linkedIn?: string | null,
      snapchat?: string | null,
      tiktok?: string | null,
      other?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    instagramMetrics?:  {
      __typename: "Analytics",
      statistics?:  Array< {
        __typename: "AnalyticsStatistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        dateLabel: DateGroupType,
      } | null > | null,
      topAudienceCities?: Array< string > | null,
      sexRatio?:  {
        __typename: "SexRatioType",
        female: number,
        male: number,
      } | null,
      ageGroupRatio?:  Array< {
        __typename: "AgeGroupRatioType",
        ageGroup: string,
        percentage: number,
      } > | null,
    } | null,
    youtubeMetrics?:  {
      __typename: "Analytics",
      statistics?:  Array< {
        __typename: "AnalyticsStatistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        dateLabel: DateGroupType,
      } | null > | null,
      topAudienceCities?: Array< string > | null,
      sexRatio?:  {
        __typename: "SexRatioType",
        female: number,
        male: number,
      } | null,
      ageGroupRatio?:  Array< {
        __typename: "AgeGroupRatioType",
        ageGroup: string,
        percentage: number,
      } > | null,
    } | null,
    isAnalyticsEnabled?: boolean | null,
    isDarkThemeEnabled?: boolean | null,
    facebookToken?:  {
      __typename: "AuthToken",
      accessToken: string,
      refreshToken?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      isExpired?: boolean | null,
    } | null,
    googleToken?:  {
      __typename: "AuthToken",
      accessToken: string,
      refreshToken?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      isExpired?: boolean | null,
    } | null,
    profileStatusCode?: string | null,
  } | null,
};

export type UpdateInfluencerMutationVariables = {
  input: UpdateInfluencerInput,
  condition?: ModelInfluencerConditionInput | null,
};

export type UpdateInfluencerMutation = {
  updateInfluencer?:  {
    __typename: "Influencer",
    id: string,
    name?: string | null,
    slug?: string | null,
    username?: string | null,
    bio?: string | null,
    email?: string | null,
    phone?: string | null,
    gender?: Gender | null,
    dob?: string | null,
    isActive?: boolean | null,
    address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
      postalCode: string,
    } | null,
    tags?: Array< string > | null,
    themeColor?: string | null,
    ctaButton?:  Array< {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } > | null,
    profilePictureWithBg?: string | null,
    profilePictureWithoutBg?: string | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      instagram?: string | null,
      facebook?: string | null,
      twitter?: string | null,
      youtube?: string | null,
      pinterest?: string | null,
      linkedIn?: string | null,
      snapchat?: string | null,
      tiktok?: string | null,
      other?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    instagramMetrics?:  {
      __typename: "Analytics",
      statistics?:  Array< {
        __typename: "AnalyticsStatistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        dateLabel: DateGroupType,
      } | null > | null,
      topAudienceCities?: Array< string > | null,
      sexRatio?:  {
        __typename: "SexRatioType",
        female: number,
        male: number,
      } | null,
      ageGroupRatio?:  Array< {
        __typename: "AgeGroupRatioType",
        ageGroup: string,
        percentage: number,
      } > | null,
    } | null,
    youtubeMetrics?:  {
      __typename: "Analytics",
      statistics?:  Array< {
        __typename: "AnalyticsStatistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        dateLabel: DateGroupType,
      } | null > | null,
      topAudienceCities?: Array< string > | null,
      sexRatio?:  {
        __typename: "SexRatioType",
        female: number,
        male: number,
      } | null,
      ageGroupRatio?:  Array< {
        __typename: "AgeGroupRatioType",
        ageGroup: string,
        percentage: number,
      } > | null,
    } | null,
    isAnalyticsEnabled?: boolean | null,
    isDarkThemeEnabled?: boolean | null,
    facebookToken?:  {
      __typename: "AuthToken",
      accessToken: string,
      refreshToken?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      isExpired?: boolean | null,
    } | null,
    googleToken?:  {
      __typename: "AuthToken",
      accessToken: string,
      refreshToken?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      isExpired?: boolean | null,
    } | null,
    profileStatusCode?: string | null,
  } | null,
};

export type DeleteInfluencerMutationVariables = {
  input: DeleteInfluencerInput,
  condition?: ModelInfluencerConditionInput | null,
};

export type DeleteInfluencerMutation = {
  deleteInfluencer?:  {
    __typename: "Influencer",
    id: string,
    name?: string | null,
    slug?: string | null,
    username?: string | null,
    bio?: string | null,
    email?: string | null,
    phone?: string | null,
    gender?: Gender | null,
    dob?: string | null,
    isActive?: boolean | null,
    address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
      postalCode: string,
    } | null,
    tags?: Array< string > | null,
    themeColor?: string | null,
    ctaButton?:  Array< {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } > | null,
    profilePictureWithBg?: string | null,
    profilePictureWithoutBg?: string | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      instagram?: string | null,
      facebook?: string | null,
      twitter?: string | null,
      youtube?: string | null,
      pinterest?: string | null,
      linkedIn?: string | null,
      snapchat?: string | null,
      tiktok?: string | null,
      other?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    instagramMetrics?:  {
      __typename: "Analytics",
      statistics?:  Array< {
        __typename: "AnalyticsStatistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        dateLabel: DateGroupType,
      } | null > | null,
      topAudienceCities?: Array< string > | null,
      sexRatio?:  {
        __typename: "SexRatioType",
        female: number,
        male: number,
      } | null,
      ageGroupRatio?:  Array< {
        __typename: "AgeGroupRatioType",
        ageGroup: string,
        percentage: number,
      } > | null,
    } | null,
    youtubeMetrics?:  {
      __typename: "Analytics",
      statistics?:  Array< {
        __typename: "AnalyticsStatistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        dateLabel: DateGroupType,
      } | null > | null,
      topAudienceCities?: Array< string > | null,
      sexRatio?:  {
        __typename: "SexRatioType",
        female: number,
        male: number,
      } | null,
      ageGroupRatio?:  Array< {
        __typename: "AgeGroupRatioType",
        ageGroup: string,
        percentage: number,
      } > | null,
    } | null,
    isAnalyticsEnabled?: boolean | null,
    isDarkThemeEnabled?: boolean | null,
    facebookToken?:  {
      __typename: "AuthToken",
      accessToken: string,
      refreshToken?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      isExpired?: boolean | null,
    } | null,
    googleToken?:  {
      __typename: "AuthToken",
      accessToken: string,
      refreshToken?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      isExpired?: boolean | null,
    } | null,
    profileStatusCode?: string | null,
  } | null,
};

export type CreateYoutubeVideoMutationVariables = {
  input: CreateYoutubeVideoInput,
  condition?: ModelYoutubeVideoConditionInput | null,
};

export type CreateYoutubeVideoMutation = {
  createYoutubeVideo?:  {
    __typename: "YoutubeVideo",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    videoId: string,
    position?: number | null,
    title?: string | null,
    description?: string | null,
    type?: YoutubeVideoType | null,
    ctaButton?:  {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } | null,
    timestamp?: string | null,
    channelTitle?: string | null,
    thumbnailUrl?: string | null,
    statistics?:  {
      __typename: "Statistics",
      likeCount?: number | null,
      viewCount?: number | null,
      commentCount?: number | null,
      favoriteCount?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionYTItemsConnection",
      items:  Array< {
        __typename: "SubSectionYTItems",
        id: string,
        youtubeVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateYoutubeVideoMutationVariables = {
  input: UpdateYoutubeVideoInput,
  condition?: ModelYoutubeVideoConditionInput | null,
};

export type UpdateYoutubeVideoMutation = {
  updateYoutubeVideo?:  {
    __typename: "YoutubeVideo",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    videoId: string,
    position?: number | null,
    title?: string | null,
    description?: string | null,
    type?: YoutubeVideoType | null,
    ctaButton?:  {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } | null,
    timestamp?: string | null,
    channelTitle?: string | null,
    thumbnailUrl?: string | null,
    statistics?:  {
      __typename: "Statistics",
      likeCount?: number | null,
      viewCount?: number | null,
      commentCount?: number | null,
      favoriteCount?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionYTItemsConnection",
      items:  Array< {
        __typename: "SubSectionYTItems",
        id: string,
        youtubeVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteYoutubeVideoMutationVariables = {
  input: DeleteYoutubeVideoInput,
  condition?: ModelYoutubeVideoConditionInput | null,
};

export type DeleteYoutubeVideoMutation = {
  deleteYoutubeVideo?:  {
    __typename: "YoutubeVideo",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    videoId: string,
    position?: number | null,
    title?: string | null,
    description?: string | null,
    type?: YoutubeVideoType | null,
    ctaButton?:  {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } | null,
    timestamp?: string | null,
    channelTitle?: string | null,
    thumbnailUrl?: string | null,
    statistics?:  {
      __typename: "Statistics",
      likeCount?: number | null,
      viewCount?: number | null,
      commentCount?: number | null,
      favoriteCount?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionYTItemsConnection",
      items:  Array< {
        __typename: "SubSectionYTItems",
        id: string,
        youtubeVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateFacebookVideoMutationVariables = {
  input: CreateFacebookVideoInput,
  condition?: ModelFacebookVideoConditionInput | null,
};

export type CreateFacebookVideoMutation = {
  createFacebookVideo?:  {
    __typename: "FacebookVideo",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    videoId: string,
    position?: number | null,
    title?: string | null,
    description?: string | null,
    type: MetaVideoType,
    ctaButton?:  {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } | null,
    timestamp?: string | null,
    sourceMediaUrl?: string | null,
    permaLink: string,
    thumbnailUrl?: string | null,
    statistics?:  {
      __typename: "Statistics",
      likeCount?: number | null,
      viewCount?: number | null,
      commentCount?: number | null,
      favoriteCount?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionFBItemsConnection",
      items:  Array< {
        __typename: "SubSectionFBItems",
        id: string,
        facebookVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateFacebookVideoMutationVariables = {
  input: UpdateFacebookVideoInput,
  condition?: ModelFacebookVideoConditionInput | null,
};

export type UpdateFacebookVideoMutation = {
  updateFacebookVideo?:  {
    __typename: "FacebookVideo",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    videoId: string,
    position?: number | null,
    title?: string | null,
    description?: string | null,
    type: MetaVideoType,
    ctaButton?:  {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } | null,
    timestamp?: string | null,
    sourceMediaUrl?: string | null,
    permaLink: string,
    thumbnailUrl?: string | null,
    statistics?:  {
      __typename: "Statistics",
      likeCount?: number | null,
      viewCount?: number | null,
      commentCount?: number | null,
      favoriteCount?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionFBItemsConnection",
      items:  Array< {
        __typename: "SubSectionFBItems",
        id: string,
        facebookVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteFacebookVideoMutationVariables = {
  input: DeleteFacebookVideoInput,
  condition?: ModelFacebookVideoConditionInput | null,
};

export type DeleteFacebookVideoMutation = {
  deleteFacebookVideo?:  {
    __typename: "FacebookVideo",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    videoId: string,
    position?: number | null,
    title?: string | null,
    description?: string | null,
    type: MetaVideoType,
    ctaButton?:  {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } | null,
    timestamp?: string | null,
    sourceMediaUrl?: string | null,
    permaLink: string,
    thumbnailUrl?: string | null,
    statistics?:  {
      __typename: "Statistics",
      likeCount?: number | null,
      viewCount?: number | null,
      commentCount?: number | null,
      favoriteCount?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionFBItemsConnection",
      items:  Array< {
        __typename: "SubSectionFBItems",
        id: string,
        facebookVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateInstagramVideoMutationVariables = {
  input: CreateInstagramVideoInput,
  condition?: ModelInstagramVideoConditionInput | null,
};

export type CreateInstagramVideoMutation = {
  createInstagramVideo?:  {
    __typename: "InstagramVideo",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    videoId: string,
    position?: number | null,
    title?: string | null,
    description?: string | null,
    type: MetaVideoType,
    ctaButton?:  {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } | null,
    timestamp?: string | null,
    sourceMediaUrl?: string | null,
    permaLink: string,
    thumbnailUrl?: string | null,
    statistics?:  {
      __typename: "Statistics",
      likeCount?: number | null,
      viewCount?: number | null,
      commentCount?: number | null,
      favoriteCount?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionIGItemsConnection",
      items:  Array< {
        __typename: "SubSectionIGItems",
        id: string,
        instagramVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateInstagramVideoMutationVariables = {
  input: UpdateInstagramVideoInput,
  condition?: ModelInstagramVideoConditionInput | null,
};

export type UpdateInstagramVideoMutation = {
  updateInstagramVideo?:  {
    __typename: "InstagramVideo",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    videoId: string,
    position?: number | null,
    title?: string | null,
    description?: string | null,
    type: MetaVideoType,
    ctaButton?:  {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } | null,
    timestamp?: string | null,
    sourceMediaUrl?: string | null,
    permaLink: string,
    thumbnailUrl?: string | null,
    statistics?:  {
      __typename: "Statistics",
      likeCount?: number | null,
      viewCount?: number | null,
      commentCount?: number | null,
      favoriteCount?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionIGItemsConnection",
      items:  Array< {
        __typename: "SubSectionIGItems",
        id: string,
        instagramVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteInstagramVideoMutationVariables = {
  input: DeleteInstagramVideoInput,
  condition?: ModelInstagramVideoConditionInput | null,
};

export type DeleteInstagramVideoMutation = {
  deleteInstagramVideo?:  {
    __typename: "InstagramVideo",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    videoId: string,
    position?: number | null,
    title?: string | null,
    description?: string | null,
    type: MetaVideoType,
    ctaButton?:  {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } | null,
    timestamp?: string | null,
    sourceMediaUrl?: string | null,
    permaLink: string,
    thumbnailUrl?: string | null,
    statistics?:  {
      __typename: "Statistics",
      likeCount?: number | null,
      viewCount?: number | null,
      commentCount?: number | null,
      favoriteCount?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionIGItemsConnection",
      items:  Array< {
        __typename: "SubSectionIGItems",
        id: string,
        instagramVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateCustomLinkMutationVariables = {
  input: CreateCustomLinkInput,
  condition?: ModelCustomLinkConditionInput | null,
};

export type CreateCustomLinkMutation = {
  createCustomLink?:  {
    __typename: "CustomLink",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    linkType: CustomLinkType,
    position?: number | null,
    image?: string | null,
    title?: string | null,
    ctaButton?:  {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } | null,
    description?: string | null,
    link: string,
    secondaryLink?: string | null,
    isAffiliate?: boolean | null,
    playStoreLink?: string | null,
    appStoreLink?: string | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionCustomLinksConnection",
      items:  Array< {
        __typename: "SubSectionCustomLinks",
        id: string,
        customLinkId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateCustomLinkMutationVariables = {
  input: UpdateCustomLinkInput,
  condition?: ModelCustomLinkConditionInput | null,
};

export type UpdateCustomLinkMutation = {
  updateCustomLink?:  {
    __typename: "CustomLink",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    linkType: CustomLinkType,
    position?: number | null,
    image?: string | null,
    title?: string | null,
    ctaButton?:  {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } | null,
    description?: string | null,
    link: string,
    secondaryLink?: string | null,
    isAffiliate?: boolean | null,
    playStoreLink?: string | null,
    appStoreLink?: string | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionCustomLinksConnection",
      items:  Array< {
        __typename: "SubSectionCustomLinks",
        id: string,
        customLinkId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteCustomLinkMutationVariables = {
  input: DeleteCustomLinkInput,
  condition?: ModelCustomLinkConditionInput | null,
};

export type DeleteCustomLinkMutation = {
  deleteCustomLink?:  {
    __typename: "CustomLink",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    linkType: CustomLinkType,
    position?: number | null,
    image?: string | null,
    title?: string | null,
    ctaButton?:  {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } | null,
    description?: string | null,
    link: string,
    secondaryLink?: string | null,
    isAffiliate?: boolean | null,
    playStoreLink?: string | null,
    appStoreLink?: string | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionCustomLinksConnection",
      items:  Array< {
        __typename: "SubSectionCustomLinks",
        id: string,
        customLinkId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateMediaMutationVariables = {
  input: CreateMediaInput,
  condition?: ModelMediaConditionInput | null,
};

export type CreateMediaMutation = {
  createMedia?:  {
    __typename: "Media",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    type?: MediaType | null,
    mediaPath: string,
    thumbnailUrl?: string | null,
    name?: string | null,
    size?: number | null,
    title?: string | null,
    position?: number | null,
    ctaButton?:  {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionMediaItemsConnection",
      items:  Array< {
        __typename: "SubSectionMediaItems",
        id: string,
        mediaId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateMediaMutationVariables = {
  input: UpdateMediaInput,
  condition?: ModelMediaConditionInput | null,
};

export type UpdateMediaMutation = {
  updateMedia?:  {
    __typename: "Media",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    type?: MediaType | null,
    mediaPath: string,
    thumbnailUrl?: string | null,
    name?: string | null,
    size?: number | null,
    title?: string | null,
    position?: number | null,
    ctaButton?:  {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionMediaItemsConnection",
      items:  Array< {
        __typename: "SubSectionMediaItems",
        id: string,
        mediaId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteMediaMutationVariables = {
  input: DeleteMediaInput,
  condition?: ModelMediaConditionInput | null,
};

export type DeleteMediaMutation = {
  deleteMedia?:  {
    __typename: "Media",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    type?: MediaType | null,
    mediaPath: string,
    thumbnailUrl?: string | null,
    name?: string | null,
    size?: number | null,
    title?: string | null,
    position?: number | null,
    ctaButton?:  {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionMediaItemsConnection",
      items:  Array< {
        __typename: "SubSectionMediaItems",
        id: string,
        mediaId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateLogoMutationVariables = {
  input: CreateLogoInput,
  condition?: ModelLogoConditionInput | null,
};

export type CreateLogoMutation = {
  createLogo?:  {
    __typename: "Logo",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    type?: LogoType | null,
    mediaPath: string,
    name?: string | null,
    size?: number | null,
    title?: string | null,
    position?: number | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionLogoItemsConnection",
      items:  Array< {
        __typename: "SubSectionLogoItems",
        id: string,
        logoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateLogoMutationVariables = {
  input: UpdateLogoInput,
  condition?: ModelLogoConditionInput | null,
};

export type UpdateLogoMutation = {
  updateLogo?:  {
    __typename: "Logo",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    type?: LogoType | null,
    mediaPath: string,
    name?: string | null,
    size?: number | null,
    title?: string | null,
    position?: number | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionLogoItemsConnection",
      items:  Array< {
        __typename: "SubSectionLogoItems",
        id: string,
        logoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteLogoMutationVariables = {
  input: DeleteLogoInput,
  condition?: ModelLogoConditionInput | null,
};

export type DeleteLogoMutation = {
  deleteLogo?:  {
    __typename: "Logo",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    type?: LogoType | null,
    mediaPath: string,
    name?: string | null,
    size?: number | null,
    title?: string | null,
    position?: number | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionLogoItemsConnection",
      items:  Array< {
        __typename: "SubSectionLogoItems",
        id: string,
        logoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateSubSectionMutationVariables = {
  input: CreateSubSectionInput,
  condition?: ModelSubSectionConditionInput | null,
};

export type CreateSubSectionMutation = {
  createSubSection?:  {
    __typename: "SubSection",
    id: string,
    influencerId?: string | null,
    position: number,
    type: SubSectionType,
    title?: string | null,
    enabled?: boolean | null,
    sectionId: string,
    youtubeItems?:  {
      __typename: "ModelSubSectionYTItemsConnection",
      items:  Array< {
        __typename: "SubSectionYTItems",
        id: string,
        youtubeVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    facebookItems?:  {
      __typename: "ModelSubSectionFBItemsConnection",
      items:  Array< {
        __typename: "SubSectionFBItems",
        id: string,
        facebookVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    instagramItems?:  {
      __typename: "ModelSubSectionIGItemsConnection",
      items:  Array< {
        __typename: "SubSectionIGItems",
        id: string,
        instagramVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    customLinkItems?:  {
      __typename: "ModelSubSectionCustomLinksConnection",
      items:  Array< {
        __typename: "SubSectionCustomLinks",
        id: string,
        customLinkId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    mediaItems?:  {
      __typename: "ModelSubSectionMediaItemsConnection",
      items:  Array< {
        __typename: "SubSectionMediaItems",
        id: string,
        mediaId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    logoItems?:  {
      __typename: "ModelSubSectionLogoItemsConnection",
      items:  Array< {
        __typename: "SubSectionLogoItems",
        id: string,
        logoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSubSectionMutationVariables = {
  input: UpdateSubSectionInput,
  condition?: ModelSubSectionConditionInput | null,
};

export type UpdateSubSectionMutation = {
  updateSubSection?:  {
    __typename: "SubSection",
    id: string,
    influencerId?: string | null,
    position: number,
    type: SubSectionType,
    title?: string | null,
    enabled?: boolean | null,
    sectionId: string,
    youtubeItems?:  {
      __typename: "ModelSubSectionYTItemsConnection",
      items:  Array< {
        __typename: "SubSectionYTItems",
        id: string,
        youtubeVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    facebookItems?:  {
      __typename: "ModelSubSectionFBItemsConnection",
      items:  Array< {
        __typename: "SubSectionFBItems",
        id: string,
        facebookVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    instagramItems?:  {
      __typename: "ModelSubSectionIGItemsConnection",
      items:  Array< {
        __typename: "SubSectionIGItems",
        id: string,
        instagramVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    customLinkItems?:  {
      __typename: "ModelSubSectionCustomLinksConnection",
      items:  Array< {
        __typename: "SubSectionCustomLinks",
        id: string,
        customLinkId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    mediaItems?:  {
      __typename: "ModelSubSectionMediaItemsConnection",
      items:  Array< {
        __typename: "SubSectionMediaItems",
        id: string,
        mediaId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    logoItems?:  {
      __typename: "ModelSubSectionLogoItemsConnection",
      items:  Array< {
        __typename: "SubSectionLogoItems",
        id: string,
        logoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSubSectionMutationVariables = {
  input: DeleteSubSectionInput,
  condition?: ModelSubSectionConditionInput | null,
};

export type DeleteSubSectionMutation = {
  deleteSubSection?:  {
    __typename: "SubSection",
    id: string,
    influencerId?: string | null,
    position: number,
    type: SubSectionType,
    title?: string | null,
    enabled?: boolean | null,
    sectionId: string,
    youtubeItems?:  {
      __typename: "ModelSubSectionYTItemsConnection",
      items:  Array< {
        __typename: "SubSectionYTItems",
        id: string,
        youtubeVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    facebookItems?:  {
      __typename: "ModelSubSectionFBItemsConnection",
      items:  Array< {
        __typename: "SubSectionFBItems",
        id: string,
        facebookVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    instagramItems?:  {
      __typename: "ModelSubSectionIGItemsConnection",
      items:  Array< {
        __typename: "SubSectionIGItems",
        id: string,
        instagramVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    customLinkItems?:  {
      __typename: "ModelSubSectionCustomLinksConnection",
      items:  Array< {
        __typename: "SubSectionCustomLinks",
        id: string,
        customLinkId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    mediaItems?:  {
      __typename: "ModelSubSectionMediaItemsConnection",
      items:  Array< {
        __typename: "SubSectionMediaItems",
        id: string,
        mediaId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    logoItems?:  {
      __typename: "ModelSubSectionLogoItemsConnection",
      items:  Array< {
        __typename: "SubSectionLogoItems",
        id: string,
        logoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSectionMutationVariables = {
  input: CreateSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type CreateSectionMutation = {
  createSection?:  {
    __typename: "Section",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    title: string,
    position: number,
    subSections?:  {
      __typename: "ModelSubSectionConnection",
      items:  Array< {
        __typename: "SubSection",
        id: string,
        influencerId?: string | null,
        position: number,
        type: SubSectionType,
        title?: string | null,
        enabled?: boolean | null,
        sectionId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSectionMutationVariables = {
  input: UpdateSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type UpdateSectionMutation = {
  updateSection?:  {
    __typename: "Section",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    title: string,
    position: number,
    subSections?:  {
      __typename: "ModelSubSectionConnection",
      items:  Array< {
        __typename: "SubSection",
        id: string,
        influencerId?: string | null,
        position: number,
        type: SubSectionType,
        title?: string | null,
        enabled?: boolean | null,
        sectionId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSectionMutationVariables = {
  input: DeleteSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type DeleteSectionMutation = {
  deleteSection?:  {
    __typename: "Section",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    title: string,
    position: number,
    subSections?:  {
      __typename: "ModelSubSectionConnection",
      items:  Array< {
        __typename: "SubSection",
        id: string,
        influencerId?: string | null,
        position: number,
        type: SubSectionType,
        title?: string | null,
        enabled?: boolean | null,
        sectionId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSubSectionYTItemsMutationVariables = {
  input: CreateSubSectionYTItemsInput,
  condition?: ModelSubSectionYTItemsConditionInput | null,
};

export type CreateSubSectionYTItemsMutation = {
  createSubSectionYTItems?:  {
    __typename: "SubSectionYTItems",
    id: string,
    youtubeVideoId: string,
    subSectionId: string,
    youtubeVideo:  {
      __typename: "YoutubeVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type?: YoutubeVideoType | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      channelTitle?: string | null,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type UpdateSubSectionYTItemsMutationVariables = {
  input: UpdateSubSectionYTItemsInput,
  condition?: ModelSubSectionYTItemsConditionInput | null,
};

export type UpdateSubSectionYTItemsMutation = {
  updateSubSectionYTItems?:  {
    __typename: "SubSectionYTItems",
    id: string,
    youtubeVideoId: string,
    subSectionId: string,
    youtubeVideo:  {
      __typename: "YoutubeVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type?: YoutubeVideoType | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      channelTitle?: string | null,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type DeleteSubSectionYTItemsMutationVariables = {
  input: DeleteSubSectionYTItemsInput,
  condition?: ModelSubSectionYTItemsConditionInput | null,
};

export type DeleteSubSectionYTItemsMutation = {
  deleteSubSectionYTItems?:  {
    __typename: "SubSectionYTItems",
    id: string,
    youtubeVideoId: string,
    subSectionId: string,
    youtubeVideo:  {
      __typename: "YoutubeVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type?: YoutubeVideoType | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      channelTitle?: string | null,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type CreateSubSectionFBItemsMutationVariables = {
  input: CreateSubSectionFBItemsInput,
  condition?: ModelSubSectionFBItemsConditionInput | null,
};

export type CreateSubSectionFBItemsMutation = {
  createSubSectionFBItems?:  {
    __typename: "SubSectionFBItems",
    id: string,
    facebookVideoId: string,
    subSectionId: string,
    facebookVideo:  {
      __typename: "FacebookVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type: MetaVideoType,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      sourceMediaUrl?: string | null,
      permaLink: string,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type UpdateSubSectionFBItemsMutationVariables = {
  input: UpdateSubSectionFBItemsInput,
  condition?: ModelSubSectionFBItemsConditionInput | null,
};

export type UpdateSubSectionFBItemsMutation = {
  updateSubSectionFBItems?:  {
    __typename: "SubSectionFBItems",
    id: string,
    facebookVideoId: string,
    subSectionId: string,
    facebookVideo:  {
      __typename: "FacebookVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type: MetaVideoType,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      sourceMediaUrl?: string | null,
      permaLink: string,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type DeleteSubSectionFBItemsMutationVariables = {
  input: DeleteSubSectionFBItemsInput,
  condition?: ModelSubSectionFBItemsConditionInput | null,
};

export type DeleteSubSectionFBItemsMutation = {
  deleteSubSectionFBItems?:  {
    __typename: "SubSectionFBItems",
    id: string,
    facebookVideoId: string,
    subSectionId: string,
    facebookVideo:  {
      __typename: "FacebookVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type: MetaVideoType,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      sourceMediaUrl?: string | null,
      permaLink: string,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type CreateSubSectionIGItemsMutationVariables = {
  input: CreateSubSectionIGItemsInput,
  condition?: ModelSubSectionIGItemsConditionInput | null,
};

export type CreateSubSectionIGItemsMutation = {
  createSubSectionIGItems?:  {
    __typename: "SubSectionIGItems",
    id: string,
    instagramVideoId: string,
    subSectionId: string,
    instagramVideo:  {
      __typename: "InstagramVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type: MetaVideoType,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      sourceMediaUrl?: string | null,
      permaLink: string,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type UpdateSubSectionIGItemsMutationVariables = {
  input: UpdateSubSectionIGItemsInput,
  condition?: ModelSubSectionIGItemsConditionInput | null,
};

export type UpdateSubSectionIGItemsMutation = {
  updateSubSectionIGItems?:  {
    __typename: "SubSectionIGItems",
    id: string,
    instagramVideoId: string,
    subSectionId: string,
    instagramVideo:  {
      __typename: "InstagramVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type: MetaVideoType,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      sourceMediaUrl?: string | null,
      permaLink: string,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type DeleteSubSectionIGItemsMutationVariables = {
  input: DeleteSubSectionIGItemsInput,
  condition?: ModelSubSectionIGItemsConditionInput | null,
};

export type DeleteSubSectionIGItemsMutation = {
  deleteSubSectionIGItems?:  {
    __typename: "SubSectionIGItems",
    id: string,
    instagramVideoId: string,
    subSectionId: string,
    instagramVideo:  {
      __typename: "InstagramVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type: MetaVideoType,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      sourceMediaUrl?: string | null,
      permaLink: string,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type CreateSubSectionCustomLinksMutationVariables = {
  input: CreateSubSectionCustomLinksInput,
  condition?: ModelSubSectionCustomLinksConditionInput | null,
};

export type CreateSubSectionCustomLinksMutation = {
  createSubSectionCustomLinks?:  {
    __typename: "SubSectionCustomLinks",
    id: string,
    customLinkId: string,
    subSectionId: string,
    customLink:  {
      __typename: "CustomLink",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      linkType: CustomLinkType,
      position?: number | null,
      image?: string | null,
      title?: string | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      description?: string | null,
      link: string,
      secondaryLink?: string | null,
      isAffiliate?: boolean | null,
      playStoreLink?: string | null,
      appStoreLink?: string | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type UpdateSubSectionCustomLinksMutationVariables = {
  input: UpdateSubSectionCustomLinksInput,
  condition?: ModelSubSectionCustomLinksConditionInput | null,
};

export type UpdateSubSectionCustomLinksMutation = {
  updateSubSectionCustomLinks?:  {
    __typename: "SubSectionCustomLinks",
    id: string,
    customLinkId: string,
    subSectionId: string,
    customLink:  {
      __typename: "CustomLink",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      linkType: CustomLinkType,
      position?: number | null,
      image?: string | null,
      title?: string | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      description?: string | null,
      link: string,
      secondaryLink?: string | null,
      isAffiliate?: boolean | null,
      playStoreLink?: string | null,
      appStoreLink?: string | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type DeleteSubSectionCustomLinksMutationVariables = {
  input: DeleteSubSectionCustomLinksInput,
  condition?: ModelSubSectionCustomLinksConditionInput | null,
};

export type DeleteSubSectionCustomLinksMutation = {
  deleteSubSectionCustomLinks?:  {
    __typename: "SubSectionCustomLinks",
    id: string,
    customLinkId: string,
    subSectionId: string,
    customLink:  {
      __typename: "CustomLink",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      linkType: CustomLinkType,
      position?: number | null,
      image?: string | null,
      title?: string | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      description?: string | null,
      link: string,
      secondaryLink?: string | null,
      isAffiliate?: boolean | null,
      playStoreLink?: string | null,
      appStoreLink?: string | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type CreateSubSectionMediaItemsMutationVariables = {
  input: CreateSubSectionMediaItemsInput,
  condition?: ModelSubSectionMediaItemsConditionInput | null,
};

export type CreateSubSectionMediaItemsMutation = {
  createSubSectionMediaItems?:  {
    __typename: "SubSectionMediaItems",
    id: string,
    mediaId: string,
    subSectionId: string,
    media:  {
      __typename: "Media",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      type?: MediaType | null,
      mediaPath: string,
      thumbnailUrl?: string | null,
      name?: string | null,
      size?: number | null,
      title?: string | null,
      position?: number | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type UpdateSubSectionMediaItemsMutationVariables = {
  input: UpdateSubSectionMediaItemsInput,
  condition?: ModelSubSectionMediaItemsConditionInput | null,
};

export type UpdateSubSectionMediaItemsMutation = {
  updateSubSectionMediaItems?:  {
    __typename: "SubSectionMediaItems",
    id: string,
    mediaId: string,
    subSectionId: string,
    media:  {
      __typename: "Media",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      type?: MediaType | null,
      mediaPath: string,
      thumbnailUrl?: string | null,
      name?: string | null,
      size?: number | null,
      title?: string | null,
      position?: number | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type DeleteSubSectionMediaItemsMutationVariables = {
  input: DeleteSubSectionMediaItemsInput,
  condition?: ModelSubSectionMediaItemsConditionInput | null,
};

export type DeleteSubSectionMediaItemsMutation = {
  deleteSubSectionMediaItems?:  {
    __typename: "SubSectionMediaItems",
    id: string,
    mediaId: string,
    subSectionId: string,
    media:  {
      __typename: "Media",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      type?: MediaType | null,
      mediaPath: string,
      thumbnailUrl?: string | null,
      name?: string | null,
      size?: number | null,
      title?: string | null,
      position?: number | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type CreateSubSectionLogoItemsMutationVariables = {
  input: CreateSubSectionLogoItemsInput,
  condition?: ModelSubSectionLogoItemsConditionInput | null,
};

export type CreateSubSectionLogoItemsMutation = {
  createSubSectionLogoItems?:  {
    __typename: "SubSectionLogoItems",
    id: string,
    logoId: string,
    subSectionId: string,
    logo:  {
      __typename: "Logo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      type?: LogoType | null,
      mediaPath: string,
      name?: string | null,
      size?: number | null,
      title?: string | null,
      position?: number | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type UpdateSubSectionLogoItemsMutationVariables = {
  input: UpdateSubSectionLogoItemsInput,
  condition?: ModelSubSectionLogoItemsConditionInput | null,
};

export type UpdateSubSectionLogoItemsMutation = {
  updateSubSectionLogoItems?:  {
    __typename: "SubSectionLogoItems",
    id: string,
    logoId: string,
    subSectionId: string,
    logo:  {
      __typename: "Logo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      type?: LogoType | null,
      mediaPath: string,
      name?: string | null,
      size?: number | null,
      title?: string | null,
      position?: number | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type DeleteSubSectionLogoItemsMutationVariables = {
  input: DeleteSubSectionLogoItemsInput,
  condition?: ModelSubSectionLogoItemsConditionInput | null,
};

export type DeleteSubSectionLogoItemsMutation = {
  deleteSubSectionLogoItems?:  {
    __typename: "SubSectionLogoItems",
    id: string,
    logoId: string,
    subSectionId: string,
    logo:  {
      __typename: "Logo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      type?: LogoType | null,
      mediaPath: string,
      name?: string | null,
      size?: number | null,
      title?: string | null,
      position?: number | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type SendContactFormEmailMutationVariables = {
  input?: ContactFormInput | null,
};

export type SendContactFormEmailMutation = {
  sendContactFormEmail?:  {
    __typename: "EmailResponse",
    code: SyncResponseCode,
    message?: string | null,
  } | null,
};

export type SyncInstagramAnalyticsQuery = {
  syncInstagramAnalytics:  {
    __typename: "AnalyticsResponse",
    code?: string | null,
    message?: string | null,
    payload?:  {
      __typename: "AnalyticsResponseType",
      statistics?:  Array< {
        __typename: "AnalyticsStatisticsResponseType",
        viewCount?: number | null,
        likeCount?: number | null,
        commentCount?: number | null,
        dateLabel?: string | null,
      } | null > | null,
      topAudienceCities?: Array< string | null > | null,
      sexRatio?:  {
        __typename: "AnalyticsSexRatioResponseType",
        female: number,
        male: number,
      } | null,
      ageGroupRatio?:  Array< {
        __typename: "AnalyticsAgeGroupRatioResponseType",
        ageGroup: string,
        percentage: number,
      } | null > | null,
    } | null,
  },
};

export type SyncYoutubeAnalyticsQuery = {
  syncYoutubeAnalytics:  {
    __typename: "AnalyticsResponse",
    code?: string | null,
    message?: string | null,
    payload?:  {
      __typename: "AnalyticsResponseType",
      statistics?:  Array< {
        __typename: "AnalyticsStatisticsResponseType",
        viewCount?: number | null,
        likeCount?: number | null,
        commentCount?: number | null,
        dateLabel?: string | null,
      } | null > | null,
      topAudienceCities?: Array< string | null > | null,
      sexRatio?:  {
        __typename: "AnalyticsSexRatioResponseType",
        female: number,
        male: number,
      } | null,
      ageGroupRatio?:  Array< {
        __typename: "AnalyticsAgeGroupRatioResponseType",
        ageGroup: string,
        percentage: number,
      } | null > | null,
    } | null,
  },
};

export type GetInfluencerQueryVariables = {
  id: string,
};

export type GetInfluencerQuery = {
  getInfluencer?:  {
    __typename: "Influencer",
    id: string,
    name?: string | null,
    slug?: string | null,
    username?: string | null,
    bio?: string | null,
    email?: string | null,
    phone?: string | null,
    gender?: Gender | null,
    dob?: string | null,
    isActive?: boolean | null,
    address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
      postalCode: string,
    } | null,
    tags?: Array< string > | null,
    themeColor?: string | null,
    ctaButton?:  Array< {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } > | null,
    profilePictureWithBg?: string | null,
    profilePictureWithoutBg?: string | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      instagram?: string | null,
      facebook?: string | null,
      twitter?: string | null,
      youtube?: string | null,
      pinterest?: string | null,
      linkedIn?: string | null,
      snapchat?: string | null,
      tiktok?: string | null,
      other?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    instagramMetrics?:  {
      __typename: "Analytics",
      statistics?:  Array< {
        __typename: "AnalyticsStatistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        dateLabel: DateGroupType,
      } | null > | null,
      topAudienceCities?: Array< string > | null,
      sexRatio?:  {
        __typename: "SexRatioType",
        female: number,
        male: number,
      } | null,
      ageGroupRatio?:  Array< {
        __typename: "AgeGroupRatioType",
        ageGroup: string,
        percentage: number,
      } > | null,
    } | null,
    youtubeMetrics?:  {
      __typename: "Analytics",
      statistics?:  Array< {
        __typename: "AnalyticsStatistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        dateLabel: DateGroupType,
      } | null > | null,
      topAudienceCities?: Array< string > | null,
      sexRatio?:  {
        __typename: "SexRatioType",
        female: number,
        male: number,
      } | null,
      ageGroupRatio?:  Array< {
        __typename: "AgeGroupRatioType",
        ageGroup: string,
        percentage: number,
      } > | null,
    } | null,
    isAnalyticsEnabled?: boolean | null,
    isDarkThemeEnabled?: boolean | null,
    facebookToken?:  {
      __typename: "AuthToken",
      accessToken: string,
      refreshToken?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      isExpired?: boolean | null,
    } | null,
    googleToken?:  {
      __typename: "AuthToken",
      accessToken: string,
      refreshToken?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      isExpired?: boolean | null,
    } | null,
    profileStatusCode?: string | null,
  } | null,
};

export type ListInfluencersQueryVariables = {
  filter?: ModelInfluencerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInfluencersQuery = {
  listInfluencers?:  {
    __typename: "ModelInfluencerConnection",
    items:  Array< {
      __typename: "Influencer",
      id: string,
      name?: string | null,
      slug?: string | null,
      username?: string | null,
      bio?: string | null,
      email?: string | null,
      phone?: string | null,
      gender?: Gender | null,
      dob?: string | null,
      isActive?: boolean | null,
      address?:  {
        __typename: "Address",
        street: string,
        city: string,
        state: string,
        country: string,
        postalCode: string,
      } | null,
      tags?: Array< string > | null,
      themeColor?: string | null,
      ctaButton?:  Array< {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } > | null,
      profilePictureWithBg?: string | null,
      profilePictureWithoutBg?: string | null,
      socialLinks?:  {
        __typename: "SocialLinks",
        instagram?: string | null,
        facebook?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        pinterest?: string | null,
        linkedIn?: string | null,
        snapchat?: string | null,
        tiktok?: string | null,
        other?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      instagramMetrics?:  {
        __typename: "Analytics",
        topAudienceCities?: Array< string > | null,
      } | null,
      youtubeMetrics?:  {
        __typename: "Analytics",
        topAudienceCities?: Array< string > | null,
      } | null,
      isAnalyticsEnabled?: boolean | null,
      isDarkThemeEnabled?: boolean | null,
      facebookToken?:  {
        __typename: "AuthToken",
        accessToken: string,
        refreshToken?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        isExpired?: boolean | null,
      } | null,
      googleToken?:  {
        __typename: "AuthToken",
        accessToken: string,
        refreshToken?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        isExpired?: boolean | null,
      } | null,
      profileStatusCode?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BySlugInfluencerQueryVariables = {
  slug: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelInfluencerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BySlugInfluencerQuery = {
  bySlugInfluencer?:  {
    __typename: "ModelInfluencerConnection",
    items:  Array< {
      __typename: "Influencer",
      id: string,
      name?: string | null,
      slug?: string | null,
      username?: string | null,
      bio?: string | null,
      email?: string | null,
      phone?: string | null,
      gender?: Gender | null,
      dob?: string | null,
      isActive?: boolean | null,
      address?:  {
        __typename: "Address",
        street: string,
        city: string,
        state: string,
        country: string,
        postalCode: string,
      } | null,
      tags?: Array< string > | null,
      themeColor?: string | null,
      ctaButton?:  Array< {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } > | null,
      profilePictureWithBg?: string | null,
      profilePictureWithoutBg?: string | null,
      socialLinks?:  {
        __typename: "SocialLinks",
        instagram?: string | null,
        facebook?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        pinterest?: string | null,
        linkedIn?: string | null,
        snapchat?: string | null,
        tiktok?: string | null,
        other?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      instagramMetrics?:  {
        __typename: "Analytics",
        topAudienceCities?: Array< string > | null,
      } | null,
      youtubeMetrics?:  {
        __typename: "Analytics",
        topAudienceCities?: Array< string > | null,
      } | null,
      isAnalyticsEnabled?: boolean | null,
      isDarkThemeEnabled?: boolean | null,
      facebookToken?:  {
        __typename: "AuthToken",
        accessToken: string,
        refreshToken?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        isExpired?: boolean | null,
      } | null,
      googleToken?:  {
        __typename: "AuthToken",
        accessToken: string,
        refreshToken?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        isExpired?: boolean | null,
      } | null,
      profileStatusCode?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetYoutubeVideoQueryVariables = {
  id: string,
};

export type GetYoutubeVideoQuery = {
  getYoutubeVideo?:  {
    __typename: "YoutubeVideo",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    videoId: string,
    position?: number | null,
    title?: string | null,
    description?: string | null,
    type?: YoutubeVideoType | null,
    ctaButton?:  {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } | null,
    timestamp?: string | null,
    channelTitle?: string | null,
    thumbnailUrl?: string | null,
    statistics?:  {
      __typename: "Statistics",
      likeCount?: number | null,
      viewCount?: number | null,
      commentCount?: number | null,
      favoriteCount?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionYTItemsConnection",
      items:  Array< {
        __typename: "SubSectionYTItems",
        id: string,
        youtubeVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListYoutubeVideosQueryVariables = {
  filter?: ModelYoutubeVideoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListYoutubeVideosQuery = {
  listYoutubeVideos?:  {
    __typename: "ModelYoutubeVideoConnection",
    items:  Array< {
      __typename: "YoutubeVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type?: YoutubeVideoType | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      channelTitle?: string | null,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ByInfluencerIdYoutubeVideosQueryVariables = {
  influencerId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelYoutubeVideoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByInfluencerIdYoutubeVideosQuery = {
  byInfluencerIdYoutubeVideos?:  {
    __typename: "ModelYoutubeVideoConnection",
    items:  Array< {
      __typename: "YoutubeVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type?: YoutubeVideoType | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      channelTitle?: string | null,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFacebookVideoQueryVariables = {
  id: string,
};

export type GetFacebookVideoQuery = {
  getFacebookVideo?:  {
    __typename: "FacebookVideo",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    videoId: string,
    position?: number | null,
    title?: string | null,
    description?: string | null,
    type: MetaVideoType,
    ctaButton?:  {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } | null,
    timestamp?: string | null,
    sourceMediaUrl?: string | null,
    permaLink: string,
    thumbnailUrl?: string | null,
    statistics?:  {
      __typename: "Statistics",
      likeCount?: number | null,
      viewCount?: number | null,
      commentCount?: number | null,
      favoriteCount?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionFBItemsConnection",
      items:  Array< {
        __typename: "SubSectionFBItems",
        id: string,
        facebookVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListFacebookVideosQueryVariables = {
  filter?: ModelFacebookVideoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFacebookVideosQuery = {
  listFacebookVideos?:  {
    __typename: "ModelFacebookVideoConnection",
    items:  Array< {
      __typename: "FacebookVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type: MetaVideoType,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      sourceMediaUrl?: string | null,
      permaLink: string,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ByInfluencerIdFacebookVideosQueryVariables = {
  influencerId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFacebookVideoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByInfluencerIdFacebookVideosQuery = {
  byInfluencerIdFacebookVideos?:  {
    __typename: "ModelFacebookVideoConnection",
    items:  Array< {
      __typename: "FacebookVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type: MetaVideoType,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      sourceMediaUrl?: string | null,
      permaLink: string,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInstagramVideoQueryVariables = {
  id: string,
};

export type GetInstagramVideoQuery = {
  getInstagramVideo?:  {
    __typename: "InstagramVideo",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    videoId: string,
    position?: number | null,
    title?: string | null,
    description?: string | null,
    type: MetaVideoType,
    ctaButton?:  {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } | null,
    timestamp?: string | null,
    sourceMediaUrl?: string | null,
    permaLink: string,
    thumbnailUrl?: string | null,
    statistics?:  {
      __typename: "Statistics",
      likeCount?: number | null,
      viewCount?: number | null,
      commentCount?: number | null,
      favoriteCount?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionIGItemsConnection",
      items:  Array< {
        __typename: "SubSectionIGItems",
        id: string,
        instagramVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListInstagramVideosQueryVariables = {
  filter?: ModelInstagramVideoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInstagramVideosQuery = {
  listInstagramVideos?:  {
    __typename: "ModelInstagramVideoConnection",
    items:  Array< {
      __typename: "InstagramVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type: MetaVideoType,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      sourceMediaUrl?: string | null,
      permaLink: string,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ByInfluencerIdInstagramVideosQueryVariables = {
  influencerId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelInstagramVideoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByInfluencerIdInstagramVideosQuery = {
  byInfluencerIdInstagramVideos?:  {
    __typename: "ModelInstagramVideoConnection",
    items:  Array< {
      __typename: "InstagramVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type: MetaVideoType,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      sourceMediaUrl?: string | null,
      permaLink: string,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCustomLinkQueryVariables = {
  id: string,
};

export type GetCustomLinkQuery = {
  getCustomLink?:  {
    __typename: "CustomLink",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    linkType: CustomLinkType,
    position?: number | null,
    image?: string | null,
    title?: string | null,
    ctaButton?:  {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } | null,
    description?: string | null,
    link: string,
    secondaryLink?: string | null,
    isAffiliate?: boolean | null,
    playStoreLink?: string | null,
    appStoreLink?: string | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionCustomLinksConnection",
      items:  Array< {
        __typename: "SubSectionCustomLinks",
        id: string,
        customLinkId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListCustomLinksQueryVariables = {
  filter?: ModelCustomLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomLinksQuery = {
  listCustomLinks?:  {
    __typename: "ModelCustomLinkConnection",
    items:  Array< {
      __typename: "CustomLink",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      linkType: CustomLinkType,
      position?: number | null,
      image?: string | null,
      title?: string | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      description?: string | null,
      link: string,
      secondaryLink?: string | null,
      isAffiliate?: boolean | null,
      playStoreLink?: string | null,
      appStoreLink?: string | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ByInfluencerIdCustomLinksQueryVariables = {
  influencerId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCustomLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByInfluencerIdCustomLinksQuery = {
  byInfluencerIdCustomLinks?:  {
    __typename: "ModelCustomLinkConnection",
    items:  Array< {
      __typename: "CustomLink",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      linkType: CustomLinkType,
      position?: number | null,
      image?: string | null,
      title?: string | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      description?: string | null,
      link: string,
      secondaryLink?: string | null,
      isAffiliate?: boolean | null,
      playStoreLink?: string | null,
      appStoreLink?: string | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMediaQueryVariables = {
  id: string,
};

export type GetMediaQuery = {
  getMedia?:  {
    __typename: "Media",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    type?: MediaType | null,
    mediaPath: string,
    thumbnailUrl?: string | null,
    name?: string | null,
    size?: number | null,
    title?: string | null,
    position?: number | null,
    ctaButton?:  {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionMediaItemsConnection",
      items:  Array< {
        __typename: "SubSectionMediaItems",
        id: string,
        mediaId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListMediaQueryVariables = {
  filter?: ModelMediaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMediaQuery = {
  listMedia?:  {
    __typename: "ModelMediaConnection",
    items:  Array< {
      __typename: "Media",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      type?: MediaType | null,
      mediaPath: string,
      thumbnailUrl?: string | null,
      name?: string | null,
      size?: number | null,
      title?: string | null,
      position?: number | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ByInfluencerIdMediasQueryVariables = {
  influencerId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMediaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByInfluencerIdMediasQuery = {
  byInfluencerIdMedias?:  {
    __typename: "ModelMediaConnection",
    items:  Array< {
      __typename: "Media",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      type?: MediaType | null,
      mediaPath: string,
      thumbnailUrl?: string | null,
      name?: string | null,
      size?: number | null,
      title?: string | null,
      position?: number | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLogoQueryVariables = {
  id: string,
};

export type GetLogoQuery = {
  getLogo?:  {
    __typename: "Logo",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    type?: LogoType | null,
    mediaPath: string,
    name?: string | null,
    size?: number | null,
    title?: string | null,
    position?: number | null,
    createdAt: string,
    updatedAt: string,
    subSections?:  {
      __typename: "ModelSubSectionLogoItemsConnection",
      items:  Array< {
        __typename: "SubSectionLogoItems",
        id: string,
        logoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListLogosQueryVariables = {
  filter?: ModelLogoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLogosQuery = {
  listLogos?:  {
    __typename: "ModelLogoConnection",
    items:  Array< {
      __typename: "Logo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      type?: LogoType | null,
      mediaPath: string,
      name?: string | null,
      size?: number | null,
      title?: string | null,
      position?: number | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ByInfluencerIdLogosQueryVariables = {
  influencerId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLogoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByInfluencerIdLogosQuery = {
  byInfluencerIdLogos?:  {
    __typename: "ModelLogoConnection",
    items:  Array< {
      __typename: "Logo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      type?: LogoType | null,
      mediaPath: string,
      name?: string | null,
      size?: number | null,
      title?: string | null,
      position?: number | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubSectionQueryVariables = {
  id: string,
};

export type GetSubSectionQuery = {
  getSubSection?:  {
    __typename: "SubSection",
    id: string,
    influencerId?: string | null,
    position: number,
    type: SubSectionType,
    title?: string | null,
    enabled?: boolean | null,
    sectionId: string,
    youtubeItems?:  {
      __typename: "ModelSubSectionYTItemsConnection",
      items:  Array< {
        __typename: "SubSectionYTItems",
        id: string,
        youtubeVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    facebookItems?:  {
      __typename: "ModelSubSectionFBItemsConnection",
      items:  Array< {
        __typename: "SubSectionFBItems",
        id: string,
        facebookVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    instagramItems?:  {
      __typename: "ModelSubSectionIGItemsConnection",
      items:  Array< {
        __typename: "SubSectionIGItems",
        id: string,
        instagramVideoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    customLinkItems?:  {
      __typename: "ModelSubSectionCustomLinksConnection",
      items:  Array< {
        __typename: "SubSectionCustomLinks",
        id: string,
        customLinkId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    mediaItems?:  {
      __typename: "ModelSubSectionMediaItemsConnection",
      items:  Array< {
        __typename: "SubSectionMediaItems",
        id: string,
        mediaId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    logoItems?:  {
      __typename: "ModelSubSectionLogoItemsConnection",
      items:  Array< {
        __typename: "SubSectionLogoItems",
        id: string,
        logoId: string,
        subSectionId: string,
        createdAt: string,
        updatedAt: string,
        influencerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSubSectionsQueryVariables = {
  filter?: ModelSubSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubSectionsQuery = {
  listSubSections?:  {
    __typename: "ModelSubSectionConnection",
    items:  Array< {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BySectionIdSubSectionsQueryVariables = {
  sectionId: string,
  position?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BySectionIdSubSectionsQuery = {
  bySectionIdSubSections?:  {
    __typename: "ModelSubSectionConnection",
    items:  Array< {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSectionQueryVariables = {
  id: string,
};

export type GetSectionQuery = {
  getSection?:  {
    __typename: "Section",
    id: string,
    influencerId?: string | null,
    isArchived?: boolean | null,
    title: string,
    position: number,
    subSections?:  {
      __typename: "ModelSubSectionConnection",
      items:  Array< {
        __typename: "SubSection",
        id: string,
        influencerId?: string | null,
        position: number,
        type: SubSectionType,
        title?: string | null,
        enabled?: boolean | null,
        sectionId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSectionsQueryVariables = {
  filter?: ModelSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSectionsQuery = {
  listSections?:  {
    __typename: "ModelSectionConnection",
    items:  Array< {
      __typename: "Section",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      title: string,
      position: number,
      subSections?:  {
        __typename: "ModelSubSectionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ByInfluencerIdSectionsQueryVariables = {
  influencerId: string,
  position?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByInfluencerIdSectionsQuery = {
  byInfluencerIdSections?:  {
    __typename: "ModelSectionConnection",
    items:  Array< {
      __typename: "Section",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      title: string,
      position: number,
      subSections?:  {
        __typename: "ModelSubSectionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubSectionYTItemsQueryVariables = {
  id: string,
};

export type GetSubSectionYTItemsQuery = {
  getSubSectionYTItems?:  {
    __typename: "SubSectionYTItems",
    id: string,
    youtubeVideoId: string,
    subSectionId: string,
    youtubeVideo:  {
      __typename: "YoutubeVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type?: YoutubeVideoType | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      channelTitle?: string | null,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type ListSubSectionYTItemsQueryVariables = {
  filter?: ModelSubSectionYTItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubSectionYTItemsQuery = {
  listSubSectionYTItems?:  {
    __typename: "ModelSubSectionYTItemsConnection",
    items:  Array< {
      __typename: "SubSectionYTItems",
      id: string,
      youtubeVideoId: string,
      subSectionId: string,
      youtubeVideo:  {
        __typename: "YoutubeVideo",
        id: string,
        influencerId?: string | null,
        isArchived?: boolean | null,
        videoId: string,
        position?: number | null,
        title?: string | null,
        description?: string | null,
        type?: YoutubeVideoType | null,
        timestamp?: string | null,
        channelTitle?: string | null,
        thumbnailUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      subSection:  {
        __typename: "SubSection",
        id: string,
        influencerId?: string | null,
        position: number,
        type: SubSectionType,
        title?: string | null,
        enabled?: boolean | null,
        sectionId: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      influencerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SubSectionYTItemsByYoutubeVideoIdQueryVariables = {
  youtubeVideoId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubSectionYTItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubSectionYTItemsByYoutubeVideoIdQuery = {
  subSectionYTItemsByYoutubeVideoId?:  {
    __typename: "ModelSubSectionYTItemsConnection",
    items:  Array< {
      __typename: "SubSectionYTItems",
      id: string,
      youtubeVideoId: string,
      subSectionId: string,
      youtubeVideo:  {
        __typename: "YoutubeVideo",
        id: string,
        influencerId?: string | null,
        isArchived?: boolean | null,
        videoId: string,
        position?: number | null,
        title?: string | null,
        description?: string | null,
        type?: YoutubeVideoType | null,
        timestamp?: string | null,
        channelTitle?: string | null,
        thumbnailUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      subSection:  {
        __typename: "SubSection",
        id: string,
        influencerId?: string | null,
        position: number,
        type: SubSectionType,
        title?: string | null,
        enabled?: boolean | null,
        sectionId: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      influencerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SubSectionYTItemsBySubSectionIdQueryVariables = {
  subSectionId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubSectionYTItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubSectionYTItemsBySubSectionIdQuery = {
  subSectionYTItemsBySubSectionId?:  {
    __typename: "ModelSubSectionYTItemsConnection",
    items:  Array< {
      __typename: "SubSectionYTItems",
      id: string,
      youtubeVideoId: string,
      subSectionId: string,
      youtubeVideo:  {
        __typename: "YoutubeVideo",
        id: string,
        influencerId?: string | null,
        isArchived?: boolean | null,
        videoId: string,
        position?: number | null,
        title?: string | null,
        description?: string | null,
        type?: YoutubeVideoType | null,
        timestamp?: string | null,
        channelTitle?: string | null,
        thumbnailUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      subSection:  {
        __typename: "SubSection",
        id: string,
        influencerId?: string | null,
        position: number,
        type: SubSectionType,
        title?: string | null,
        enabled?: boolean | null,
        sectionId: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      influencerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubSectionFBItemsQueryVariables = {
  id: string,
};

export type GetSubSectionFBItemsQuery = {
  getSubSectionFBItems?:  {
    __typename: "SubSectionFBItems",
    id: string,
    facebookVideoId: string,
    subSectionId: string,
    facebookVideo:  {
      __typename: "FacebookVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type: MetaVideoType,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      sourceMediaUrl?: string | null,
      permaLink: string,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type ListSubSectionFBItemsQueryVariables = {
  filter?: ModelSubSectionFBItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubSectionFBItemsQuery = {
  listSubSectionFBItems?:  {
    __typename: "ModelSubSectionFBItemsConnection",
    items:  Array< {
      __typename: "SubSectionFBItems",
      id: string,
      facebookVideoId: string,
      subSectionId: string,
      facebookVideo:  {
        __typename: "FacebookVideo",
        id: string,
        influencerId?: string | null,
        isArchived?: boolean | null,
        videoId: string,
        position?: number | null,
        title?: string | null,
        description?: string | null,
        type: MetaVideoType,
        timestamp?: string | null,
        sourceMediaUrl?: string | null,
        permaLink: string,
        thumbnailUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      subSection:  {
        __typename: "SubSection",
        id: string,
        influencerId?: string | null,
        position: number,
        type: SubSectionType,
        title?: string | null,
        enabled?: boolean | null,
        sectionId: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      influencerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SubSectionFBItemsByFacebookVideoIdQueryVariables = {
  facebookVideoId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubSectionFBItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubSectionFBItemsByFacebookVideoIdQuery = {
  subSectionFBItemsByFacebookVideoId?:  {
    __typename: "ModelSubSectionFBItemsConnection",
    items:  Array< {
      __typename: "SubSectionFBItems",
      id: string,
      facebookVideoId: string,
      subSectionId: string,
      facebookVideo:  {
        __typename: "FacebookVideo",
        id: string,
        influencerId?: string | null,
        isArchived?: boolean | null,
        videoId: string,
        position?: number | null,
        title?: string | null,
        description?: string | null,
        type: MetaVideoType,
        timestamp?: string | null,
        sourceMediaUrl?: string | null,
        permaLink: string,
        thumbnailUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      subSection:  {
        __typename: "SubSection",
        id: string,
        influencerId?: string | null,
        position: number,
        type: SubSectionType,
        title?: string | null,
        enabled?: boolean | null,
        sectionId: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      influencerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SubSectionFBItemsBySubSectionIdQueryVariables = {
  subSectionId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubSectionFBItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubSectionFBItemsBySubSectionIdQuery = {
  subSectionFBItemsBySubSectionId?:  {
    __typename: "ModelSubSectionFBItemsConnection",
    items:  Array< {
      __typename: "SubSectionFBItems",
      id: string,
      facebookVideoId: string,
      subSectionId: string,
      facebookVideo:  {
        __typename: "FacebookVideo",
        id: string,
        influencerId?: string | null,
        isArchived?: boolean | null,
        videoId: string,
        position?: number | null,
        title?: string | null,
        description?: string | null,
        type: MetaVideoType,
        timestamp?: string | null,
        sourceMediaUrl?: string | null,
        permaLink: string,
        thumbnailUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      subSection:  {
        __typename: "SubSection",
        id: string,
        influencerId?: string | null,
        position: number,
        type: SubSectionType,
        title?: string | null,
        enabled?: boolean | null,
        sectionId: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      influencerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubSectionIGItemsQueryVariables = {
  id: string,
};

export type GetSubSectionIGItemsQuery = {
  getSubSectionIGItems?:  {
    __typename: "SubSectionIGItems",
    id: string,
    instagramVideoId: string,
    subSectionId: string,
    instagramVideo:  {
      __typename: "InstagramVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type: MetaVideoType,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      sourceMediaUrl?: string | null,
      permaLink: string,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type ListSubSectionIGItemsQueryVariables = {
  filter?: ModelSubSectionIGItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubSectionIGItemsQuery = {
  listSubSectionIGItems?:  {
    __typename: "ModelSubSectionIGItemsConnection",
    items:  Array< {
      __typename: "SubSectionIGItems",
      id: string,
      instagramVideoId: string,
      subSectionId: string,
      instagramVideo:  {
        __typename: "InstagramVideo",
        id: string,
        influencerId?: string | null,
        isArchived?: boolean | null,
        videoId: string,
        position?: number | null,
        title?: string | null,
        description?: string | null,
        type: MetaVideoType,
        timestamp?: string | null,
        sourceMediaUrl?: string | null,
        permaLink: string,
        thumbnailUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      subSection:  {
        __typename: "SubSection",
        id: string,
        influencerId?: string | null,
        position: number,
        type: SubSectionType,
        title?: string | null,
        enabled?: boolean | null,
        sectionId: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      influencerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SubSectionIGItemsByInstagramVideoIdQueryVariables = {
  instagramVideoId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubSectionIGItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubSectionIGItemsByInstagramVideoIdQuery = {
  subSectionIGItemsByInstagramVideoId?:  {
    __typename: "ModelSubSectionIGItemsConnection",
    items:  Array< {
      __typename: "SubSectionIGItems",
      id: string,
      instagramVideoId: string,
      subSectionId: string,
      instagramVideo:  {
        __typename: "InstagramVideo",
        id: string,
        influencerId?: string | null,
        isArchived?: boolean | null,
        videoId: string,
        position?: number | null,
        title?: string | null,
        description?: string | null,
        type: MetaVideoType,
        timestamp?: string | null,
        sourceMediaUrl?: string | null,
        permaLink: string,
        thumbnailUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      subSection:  {
        __typename: "SubSection",
        id: string,
        influencerId?: string | null,
        position: number,
        type: SubSectionType,
        title?: string | null,
        enabled?: boolean | null,
        sectionId: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      influencerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SubSectionIGItemsBySubSectionIdQueryVariables = {
  subSectionId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubSectionIGItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubSectionIGItemsBySubSectionIdQuery = {
  subSectionIGItemsBySubSectionId?:  {
    __typename: "ModelSubSectionIGItemsConnection",
    items:  Array< {
      __typename: "SubSectionIGItems",
      id: string,
      instagramVideoId: string,
      subSectionId: string,
      instagramVideo:  {
        __typename: "InstagramVideo",
        id: string,
        influencerId?: string | null,
        isArchived?: boolean | null,
        videoId: string,
        position?: number | null,
        title?: string | null,
        description?: string | null,
        type: MetaVideoType,
        timestamp?: string | null,
        sourceMediaUrl?: string | null,
        permaLink: string,
        thumbnailUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      subSection:  {
        __typename: "SubSection",
        id: string,
        influencerId?: string | null,
        position: number,
        type: SubSectionType,
        title?: string | null,
        enabled?: boolean | null,
        sectionId: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      influencerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubSectionCustomLinksQueryVariables = {
  id: string,
};

export type GetSubSectionCustomLinksQuery = {
  getSubSectionCustomLinks?:  {
    __typename: "SubSectionCustomLinks",
    id: string,
    customLinkId: string,
    subSectionId: string,
    customLink:  {
      __typename: "CustomLink",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      linkType: CustomLinkType,
      position?: number | null,
      image?: string | null,
      title?: string | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      description?: string | null,
      link: string,
      secondaryLink?: string | null,
      isAffiliate?: boolean | null,
      playStoreLink?: string | null,
      appStoreLink?: string | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type ListSubSectionCustomLinksQueryVariables = {
  filter?: ModelSubSectionCustomLinksFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubSectionCustomLinksQuery = {
  listSubSectionCustomLinks?:  {
    __typename: "ModelSubSectionCustomLinksConnection",
    items:  Array< {
      __typename: "SubSectionCustomLinks",
      id: string,
      customLinkId: string,
      subSectionId: string,
      customLink:  {
        __typename: "CustomLink",
        id: string,
        influencerId?: string | null,
        isArchived?: boolean | null,
        linkType: CustomLinkType,
        position?: number | null,
        image?: string | null,
        title?: string | null,
        description?: string | null,
        link: string,
        secondaryLink?: string | null,
        isAffiliate?: boolean | null,
        playStoreLink?: string | null,
        appStoreLink?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      subSection:  {
        __typename: "SubSection",
        id: string,
        influencerId?: string | null,
        position: number,
        type: SubSectionType,
        title?: string | null,
        enabled?: boolean | null,
        sectionId: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      influencerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SubSectionCustomLinksByCustomLinkIdQueryVariables = {
  customLinkId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubSectionCustomLinksFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubSectionCustomLinksByCustomLinkIdQuery = {
  subSectionCustomLinksByCustomLinkId?:  {
    __typename: "ModelSubSectionCustomLinksConnection",
    items:  Array< {
      __typename: "SubSectionCustomLinks",
      id: string,
      customLinkId: string,
      subSectionId: string,
      customLink:  {
        __typename: "CustomLink",
        id: string,
        influencerId?: string | null,
        isArchived?: boolean | null,
        linkType: CustomLinkType,
        position?: number | null,
        image?: string | null,
        title?: string | null,
        description?: string | null,
        link: string,
        secondaryLink?: string | null,
        isAffiliate?: boolean | null,
        playStoreLink?: string | null,
        appStoreLink?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      subSection:  {
        __typename: "SubSection",
        id: string,
        influencerId?: string | null,
        position: number,
        type: SubSectionType,
        title?: string | null,
        enabled?: boolean | null,
        sectionId: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      influencerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SubSectionCustomLinksBySubSectionIdQueryVariables = {
  subSectionId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubSectionCustomLinksFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubSectionCustomLinksBySubSectionIdQuery = {
  subSectionCustomLinksBySubSectionId?:  {
    __typename: "ModelSubSectionCustomLinksConnection",
    items:  Array< {
      __typename: "SubSectionCustomLinks",
      id: string,
      customLinkId: string,
      subSectionId: string,
      customLink:  {
        __typename: "CustomLink",
        id: string,
        influencerId?: string | null,
        isArchived?: boolean | null,
        linkType: CustomLinkType,
        position?: number | null,
        image?: string | null,
        title?: string | null,
        description?: string | null,
        link: string,
        secondaryLink?: string | null,
        isAffiliate?: boolean | null,
        playStoreLink?: string | null,
        appStoreLink?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      subSection:  {
        __typename: "SubSection",
        id: string,
        influencerId?: string | null,
        position: number,
        type: SubSectionType,
        title?: string | null,
        enabled?: boolean | null,
        sectionId: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      influencerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubSectionMediaItemsQueryVariables = {
  id: string,
};

export type GetSubSectionMediaItemsQuery = {
  getSubSectionMediaItems?:  {
    __typename: "SubSectionMediaItems",
    id: string,
    mediaId: string,
    subSectionId: string,
    media:  {
      __typename: "Media",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      type?: MediaType | null,
      mediaPath: string,
      thumbnailUrl?: string | null,
      name?: string | null,
      size?: number | null,
      title?: string | null,
      position?: number | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type ListSubSectionMediaItemsQueryVariables = {
  filter?: ModelSubSectionMediaItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubSectionMediaItemsQuery = {
  listSubSectionMediaItems?:  {
    __typename: "ModelSubSectionMediaItemsConnection",
    items:  Array< {
      __typename: "SubSectionMediaItems",
      id: string,
      mediaId: string,
      subSectionId: string,
      media:  {
        __typename: "Media",
        id: string,
        influencerId?: string | null,
        isArchived?: boolean | null,
        type?: MediaType | null,
        mediaPath: string,
        thumbnailUrl?: string | null,
        name?: string | null,
        size?: number | null,
        title?: string | null,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      },
      subSection:  {
        __typename: "SubSection",
        id: string,
        influencerId?: string | null,
        position: number,
        type: SubSectionType,
        title?: string | null,
        enabled?: boolean | null,
        sectionId: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      influencerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SubSectionMediaItemsByMediaIdQueryVariables = {
  mediaId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubSectionMediaItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubSectionMediaItemsByMediaIdQuery = {
  subSectionMediaItemsByMediaId?:  {
    __typename: "ModelSubSectionMediaItemsConnection",
    items:  Array< {
      __typename: "SubSectionMediaItems",
      id: string,
      mediaId: string,
      subSectionId: string,
      media:  {
        __typename: "Media",
        id: string,
        influencerId?: string | null,
        isArchived?: boolean | null,
        type?: MediaType | null,
        mediaPath: string,
        thumbnailUrl?: string | null,
        name?: string | null,
        size?: number | null,
        title?: string | null,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      },
      subSection:  {
        __typename: "SubSection",
        id: string,
        influencerId?: string | null,
        position: number,
        type: SubSectionType,
        title?: string | null,
        enabled?: boolean | null,
        sectionId: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      influencerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SubSectionMediaItemsBySubSectionIdQueryVariables = {
  subSectionId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubSectionMediaItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubSectionMediaItemsBySubSectionIdQuery = {
  subSectionMediaItemsBySubSectionId?:  {
    __typename: "ModelSubSectionMediaItemsConnection",
    items:  Array< {
      __typename: "SubSectionMediaItems",
      id: string,
      mediaId: string,
      subSectionId: string,
      media:  {
        __typename: "Media",
        id: string,
        influencerId?: string | null,
        isArchived?: boolean | null,
        type?: MediaType | null,
        mediaPath: string,
        thumbnailUrl?: string | null,
        name?: string | null,
        size?: number | null,
        title?: string | null,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      },
      subSection:  {
        __typename: "SubSection",
        id: string,
        influencerId?: string | null,
        position: number,
        type: SubSectionType,
        title?: string | null,
        enabled?: boolean | null,
        sectionId: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      influencerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubSectionLogoItemsQueryVariables = {
  id: string,
};

export type GetSubSectionLogoItemsQuery = {
  getSubSectionLogoItems?:  {
    __typename: "SubSectionLogoItems",
    id: string,
    logoId: string,
    subSectionId: string,
    logo:  {
      __typename: "Logo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      type?: LogoType | null,
      mediaPath: string,
      name?: string | null,
      size?: number | null,
      title?: string | null,
      position?: number | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type ListSubSectionLogoItemsQueryVariables = {
  filter?: ModelSubSectionLogoItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubSectionLogoItemsQuery = {
  listSubSectionLogoItems?:  {
    __typename: "ModelSubSectionLogoItemsConnection",
    items:  Array< {
      __typename: "SubSectionLogoItems",
      id: string,
      logoId: string,
      subSectionId: string,
      logo:  {
        __typename: "Logo",
        id: string,
        influencerId?: string | null,
        isArchived?: boolean | null,
        type?: LogoType | null,
        mediaPath: string,
        name?: string | null,
        size?: number | null,
        title?: string | null,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      },
      subSection:  {
        __typename: "SubSection",
        id: string,
        influencerId?: string | null,
        position: number,
        type: SubSectionType,
        title?: string | null,
        enabled?: boolean | null,
        sectionId: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      influencerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SubSectionLogoItemsByLogoIdQueryVariables = {
  logoId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubSectionLogoItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubSectionLogoItemsByLogoIdQuery = {
  subSectionLogoItemsByLogoId?:  {
    __typename: "ModelSubSectionLogoItemsConnection",
    items:  Array< {
      __typename: "SubSectionLogoItems",
      id: string,
      logoId: string,
      subSectionId: string,
      logo:  {
        __typename: "Logo",
        id: string,
        influencerId?: string | null,
        isArchived?: boolean | null,
        type?: LogoType | null,
        mediaPath: string,
        name?: string | null,
        size?: number | null,
        title?: string | null,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      },
      subSection:  {
        __typename: "SubSection",
        id: string,
        influencerId?: string | null,
        position: number,
        type: SubSectionType,
        title?: string | null,
        enabled?: boolean | null,
        sectionId: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      influencerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SubSectionLogoItemsBySubSectionIdQueryVariables = {
  subSectionId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubSectionLogoItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubSectionLogoItemsBySubSectionIdQuery = {
  subSectionLogoItemsBySubSectionId?:  {
    __typename: "ModelSubSectionLogoItemsConnection",
    items:  Array< {
      __typename: "SubSectionLogoItems",
      id: string,
      logoId: string,
      subSectionId: string,
      logo:  {
        __typename: "Logo",
        id: string,
        influencerId?: string | null,
        isArchived?: boolean | null,
        type?: LogoType | null,
        mediaPath: string,
        name?: string | null,
        size?: number | null,
        title?: string | null,
        position?: number | null,
        createdAt: string,
        updatedAt: string,
      },
      subSection:  {
        __typename: "SubSection",
        id: string,
        influencerId?: string | null,
        position: number,
        type: SubSectionType,
        title?: string | null,
        enabled?: boolean | null,
        sectionId: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      influencerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInfluencerBySlugQueryVariables = {
  slug: string,
};

export type GetInfluencerBySlugQuery = {
  getInfluencerBySlug?:  {
    __typename: "Influencer",
    id: string,
    name?: string | null,
    slug?: string | null,
    username?: string | null,
    bio?: string | null,
    email?: string | null,
    phone?: string | null,
    gender?: Gender | null,
    dob?: string | null,
    isActive?: boolean | null,
    address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
      postalCode: string,
    } | null,
    tags?: Array< string > | null,
    themeColor?: string | null,
    ctaButton?:  Array< {
      __typename: "CTAButton",
      text?: string | null,
      link?: string | null,
      isActive?: boolean | null,
      type?: CTAButtonType | null,
    } > | null,
    profilePictureWithBg?: string | null,
    profilePictureWithoutBg?: string | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      instagram?: string | null,
      facebook?: string | null,
      twitter?: string | null,
      youtube?: string | null,
      pinterest?: string | null,
      linkedIn?: string | null,
      snapchat?: string | null,
      tiktok?: string | null,
      other?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    instagramMetrics?:  {
      __typename: "Analytics",
      statistics?:  Array< {
        __typename: "AnalyticsStatistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        dateLabel: DateGroupType,
      } | null > | null,
      topAudienceCities?: Array< string > | null,
      sexRatio?:  {
        __typename: "SexRatioType",
        female: number,
        male: number,
      } | null,
      ageGroupRatio?:  Array< {
        __typename: "AgeGroupRatioType",
        ageGroup: string,
        percentage: number,
      } > | null,
    } | null,
    youtubeMetrics?:  {
      __typename: "Analytics",
      statistics?:  Array< {
        __typename: "AnalyticsStatistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        dateLabel: DateGroupType,
      } | null > | null,
      topAudienceCities?: Array< string > | null,
      sexRatio?:  {
        __typename: "SexRatioType",
        female: number,
        male: number,
      } | null,
      ageGroupRatio?:  Array< {
        __typename: "AgeGroupRatioType",
        ageGroup: string,
        percentage: number,
      } > | null,
    } | null,
    isAnalyticsEnabled?: boolean | null,
    isDarkThemeEnabled?: boolean | null,
    facebookToken?:  {
      __typename: "AuthToken",
      accessToken: string,
      refreshToken?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      isExpired?: boolean | null,
    } | null,
    googleToken?:  {
      __typename: "AuthToken",
      accessToken: string,
      refreshToken?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      isExpired?: boolean | null,
    } | null,
    profileStatusCode?: string | null,
  } | null,
};

export type OnCreateSubSectionYTItemsSubscriptionVariables = {
  filter?: ModelSubscriptionSubSectionYTItemsFilterInput | null,
  influencerId?: string | null,
};

export type OnCreateSubSectionYTItemsSubscription = {
  onCreateSubSectionYTItems?:  {
    __typename: "SubSectionYTItems",
    id: string,
    youtubeVideoId: string,
    subSectionId: string,
    youtubeVideo:  {
      __typename: "YoutubeVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type?: YoutubeVideoType | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      channelTitle?: string | null,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type OnUpdateSubSectionYTItemsSubscriptionVariables = {
  filter?: ModelSubscriptionSubSectionYTItemsFilterInput | null,
  influencerId?: string | null,
};

export type OnUpdateSubSectionYTItemsSubscription = {
  onUpdateSubSectionYTItems?:  {
    __typename: "SubSectionYTItems",
    id: string,
    youtubeVideoId: string,
    subSectionId: string,
    youtubeVideo:  {
      __typename: "YoutubeVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type?: YoutubeVideoType | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      channelTitle?: string | null,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type OnDeleteSubSectionYTItemsSubscriptionVariables = {
  filter?: ModelSubscriptionSubSectionYTItemsFilterInput | null,
  influencerId?: string | null,
};

export type OnDeleteSubSectionYTItemsSubscription = {
  onDeleteSubSectionYTItems?:  {
    __typename: "SubSectionYTItems",
    id: string,
    youtubeVideoId: string,
    subSectionId: string,
    youtubeVideo:  {
      __typename: "YoutubeVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type?: YoutubeVideoType | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      channelTitle?: string | null,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type OnCreateSubSectionFBItemsSubscriptionVariables = {
  filter?: ModelSubscriptionSubSectionFBItemsFilterInput | null,
  influencerId?: string | null,
};

export type OnCreateSubSectionFBItemsSubscription = {
  onCreateSubSectionFBItems?:  {
    __typename: "SubSectionFBItems",
    id: string,
    facebookVideoId: string,
    subSectionId: string,
    facebookVideo:  {
      __typename: "FacebookVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type: MetaVideoType,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      sourceMediaUrl?: string | null,
      permaLink: string,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type OnUpdateSubSectionFBItemsSubscriptionVariables = {
  filter?: ModelSubscriptionSubSectionFBItemsFilterInput | null,
  influencerId?: string | null,
};

export type OnUpdateSubSectionFBItemsSubscription = {
  onUpdateSubSectionFBItems?:  {
    __typename: "SubSectionFBItems",
    id: string,
    facebookVideoId: string,
    subSectionId: string,
    facebookVideo:  {
      __typename: "FacebookVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type: MetaVideoType,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      sourceMediaUrl?: string | null,
      permaLink: string,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type OnDeleteSubSectionFBItemsSubscriptionVariables = {
  filter?: ModelSubscriptionSubSectionFBItemsFilterInput | null,
  influencerId?: string | null,
};

export type OnDeleteSubSectionFBItemsSubscription = {
  onDeleteSubSectionFBItems?:  {
    __typename: "SubSectionFBItems",
    id: string,
    facebookVideoId: string,
    subSectionId: string,
    facebookVideo:  {
      __typename: "FacebookVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type: MetaVideoType,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      sourceMediaUrl?: string | null,
      permaLink: string,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type OnCreateSubSectionIGItemsSubscriptionVariables = {
  filter?: ModelSubscriptionSubSectionIGItemsFilterInput | null,
  influencerId?: string | null,
};

export type OnCreateSubSectionIGItemsSubscription = {
  onCreateSubSectionIGItems?:  {
    __typename: "SubSectionIGItems",
    id: string,
    instagramVideoId: string,
    subSectionId: string,
    instagramVideo:  {
      __typename: "InstagramVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type: MetaVideoType,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      sourceMediaUrl?: string | null,
      permaLink: string,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type OnUpdateSubSectionIGItemsSubscriptionVariables = {
  filter?: ModelSubscriptionSubSectionIGItemsFilterInput | null,
  influencerId?: string | null,
};

export type OnUpdateSubSectionIGItemsSubscription = {
  onUpdateSubSectionIGItems?:  {
    __typename: "SubSectionIGItems",
    id: string,
    instagramVideoId: string,
    subSectionId: string,
    instagramVideo:  {
      __typename: "InstagramVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type: MetaVideoType,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      sourceMediaUrl?: string | null,
      permaLink: string,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type OnDeleteSubSectionIGItemsSubscriptionVariables = {
  filter?: ModelSubscriptionSubSectionIGItemsFilterInput | null,
  influencerId?: string | null,
};

export type OnDeleteSubSectionIGItemsSubscription = {
  onDeleteSubSectionIGItems?:  {
    __typename: "SubSectionIGItems",
    id: string,
    instagramVideoId: string,
    subSectionId: string,
    instagramVideo:  {
      __typename: "InstagramVideo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      videoId: string,
      position?: number | null,
      title?: string | null,
      description?: string | null,
      type: MetaVideoType,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      timestamp?: string | null,
      sourceMediaUrl?: string | null,
      permaLink: string,
      thumbnailUrl?: string | null,
      statistics?:  {
        __typename: "Statistics",
        likeCount?: number | null,
        viewCount?: number | null,
        commentCount?: number | null,
        favoriteCount?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type OnCreateSubSectionCustomLinksSubscriptionVariables = {
  filter?: ModelSubscriptionSubSectionCustomLinksFilterInput | null,
  influencerId?: string | null,
};

export type OnCreateSubSectionCustomLinksSubscription = {
  onCreateSubSectionCustomLinks?:  {
    __typename: "SubSectionCustomLinks",
    id: string,
    customLinkId: string,
    subSectionId: string,
    customLink:  {
      __typename: "CustomLink",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      linkType: CustomLinkType,
      position?: number | null,
      image?: string | null,
      title?: string | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      description?: string | null,
      link: string,
      secondaryLink?: string | null,
      isAffiliate?: boolean | null,
      playStoreLink?: string | null,
      appStoreLink?: string | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type OnUpdateSubSectionCustomLinksSubscriptionVariables = {
  filter?: ModelSubscriptionSubSectionCustomLinksFilterInput | null,
  influencerId?: string | null,
};

export type OnUpdateSubSectionCustomLinksSubscription = {
  onUpdateSubSectionCustomLinks?:  {
    __typename: "SubSectionCustomLinks",
    id: string,
    customLinkId: string,
    subSectionId: string,
    customLink:  {
      __typename: "CustomLink",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      linkType: CustomLinkType,
      position?: number | null,
      image?: string | null,
      title?: string | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      description?: string | null,
      link: string,
      secondaryLink?: string | null,
      isAffiliate?: boolean | null,
      playStoreLink?: string | null,
      appStoreLink?: string | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type OnDeleteSubSectionCustomLinksSubscriptionVariables = {
  filter?: ModelSubscriptionSubSectionCustomLinksFilterInput | null,
  influencerId?: string | null,
};

export type OnDeleteSubSectionCustomLinksSubscription = {
  onDeleteSubSectionCustomLinks?:  {
    __typename: "SubSectionCustomLinks",
    id: string,
    customLinkId: string,
    subSectionId: string,
    customLink:  {
      __typename: "CustomLink",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      linkType: CustomLinkType,
      position?: number | null,
      image?: string | null,
      title?: string | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      description?: string | null,
      link: string,
      secondaryLink?: string | null,
      isAffiliate?: boolean | null,
      playStoreLink?: string | null,
      appStoreLink?: string | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type OnCreateSubSectionMediaItemsSubscriptionVariables = {
  filter?: ModelSubscriptionSubSectionMediaItemsFilterInput | null,
  influencerId?: string | null,
};

export type OnCreateSubSectionMediaItemsSubscription = {
  onCreateSubSectionMediaItems?:  {
    __typename: "SubSectionMediaItems",
    id: string,
    mediaId: string,
    subSectionId: string,
    media:  {
      __typename: "Media",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      type?: MediaType | null,
      mediaPath: string,
      thumbnailUrl?: string | null,
      name?: string | null,
      size?: number | null,
      title?: string | null,
      position?: number | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type OnUpdateSubSectionMediaItemsSubscriptionVariables = {
  filter?: ModelSubscriptionSubSectionMediaItemsFilterInput | null,
  influencerId?: string | null,
};

export type OnUpdateSubSectionMediaItemsSubscription = {
  onUpdateSubSectionMediaItems?:  {
    __typename: "SubSectionMediaItems",
    id: string,
    mediaId: string,
    subSectionId: string,
    media:  {
      __typename: "Media",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      type?: MediaType | null,
      mediaPath: string,
      thumbnailUrl?: string | null,
      name?: string | null,
      size?: number | null,
      title?: string | null,
      position?: number | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type OnDeleteSubSectionMediaItemsSubscriptionVariables = {
  filter?: ModelSubscriptionSubSectionMediaItemsFilterInput | null,
  influencerId?: string | null,
};

export type OnDeleteSubSectionMediaItemsSubscription = {
  onDeleteSubSectionMediaItems?:  {
    __typename: "SubSectionMediaItems",
    id: string,
    mediaId: string,
    subSectionId: string,
    media:  {
      __typename: "Media",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      type?: MediaType | null,
      mediaPath: string,
      thumbnailUrl?: string | null,
      name?: string | null,
      size?: number | null,
      title?: string | null,
      position?: number | null,
      ctaButton?:  {
        __typename: "CTAButton",
        text?: string | null,
        link?: string | null,
        isActive?: boolean | null,
        type?: CTAButtonType | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type OnCreateSubSectionLogoItemsSubscriptionVariables = {
  filter?: ModelSubscriptionSubSectionLogoItemsFilterInput | null,
  influencerId?: string | null,
};

export type OnCreateSubSectionLogoItemsSubscription = {
  onCreateSubSectionLogoItems?:  {
    __typename: "SubSectionLogoItems",
    id: string,
    logoId: string,
    subSectionId: string,
    logo:  {
      __typename: "Logo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      type?: LogoType | null,
      mediaPath: string,
      name?: string | null,
      size?: number | null,
      title?: string | null,
      position?: number | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type OnUpdateSubSectionLogoItemsSubscriptionVariables = {
  filter?: ModelSubscriptionSubSectionLogoItemsFilterInput | null,
  influencerId?: string | null,
};

export type OnUpdateSubSectionLogoItemsSubscription = {
  onUpdateSubSectionLogoItems?:  {
    __typename: "SubSectionLogoItems",
    id: string,
    logoId: string,
    subSectionId: string,
    logo:  {
      __typename: "Logo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      type?: LogoType | null,
      mediaPath: string,
      name?: string | null,
      size?: number | null,
      title?: string | null,
      position?: number | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};

export type OnDeleteSubSectionLogoItemsSubscriptionVariables = {
  filter?: ModelSubscriptionSubSectionLogoItemsFilterInput | null,
  influencerId?: string | null,
};

export type OnDeleteSubSectionLogoItemsSubscription = {
  onDeleteSubSectionLogoItems?:  {
    __typename: "SubSectionLogoItems",
    id: string,
    logoId: string,
    subSectionId: string,
    logo:  {
      __typename: "Logo",
      id: string,
      influencerId?: string | null,
      isArchived?: boolean | null,
      type?: LogoType | null,
      mediaPath: string,
      name?: string | null,
      size?: number | null,
      title?: string | null,
      position?: number | null,
      createdAt: string,
      updatedAt: string,
      subSections?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
    },
    subSection:  {
      __typename: "SubSection",
      id: string,
      influencerId?: string | null,
      position: number,
      type: SubSectionType,
      title?: string | null,
      enabled?: boolean | null,
      sectionId: string,
      youtubeItems?:  {
        __typename: "ModelSubSectionYTItemsConnection",
        nextToken?: string | null,
      } | null,
      facebookItems?:  {
        __typename: "ModelSubSectionFBItemsConnection",
        nextToken?: string | null,
      } | null,
      instagramItems?:  {
        __typename: "ModelSubSectionIGItemsConnection",
        nextToken?: string | null,
      } | null,
      customLinkItems?:  {
        __typename: "ModelSubSectionCustomLinksConnection",
        nextToken?: string | null,
      } | null,
      mediaItems?:  {
        __typename: "ModelSubSectionMediaItemsConnection",
        nextToken?: string | null,
      } | null,
      logoItems?:  {
        __typename: "ModelSubSectionLogoItemsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    influencerId?: string | null,
  } | null,
};
