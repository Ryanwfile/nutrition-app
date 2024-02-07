export type FoodData = {
  aggregations: {};
  currentPage: number;
  foodSearchCriteria: FoodSearchCriteria;
  foods: Food[];
  pageList: [];
  totalHits: number;
  totalPages: number;
}

export type FoodSearchCriteria = {
  generalSearchInput: string;
  numberOfResultsPerPage: number;
  pageNumber: number;
  pageSize: number;
  query: string;
  requireAllWords: boolean;  
}

export type Food = {
 additionalDescriptions?: string;
 //this is html, can be shown on screen as such
 allHighlightFields?: string;
 brandName?: string;
 brandOwner?: string;
 commonNames?: string;
 dataSource?: string;
 dataType?: string;
 description?: string;
 fdcId?: number;
 finalFoodInputFoods?: [];
 foodAttributeTypes?: [];
 foodAttributes: [];
 foodCategory?: string;
 foodCategoryId?: number;
 foodMeasures?: [];
 foodNutrients?: Nutrient[];
 foodVersionIds?: [];
 gtinUpc?: string;
 ingredients?: string;
 marketCountry?: string;
 microbes?: [];
 modifiedDate?: string;//date
 packageWeight?: string;
 publishedDate?: string;//date
 score?: number;
 servingSize?: number;
 servingSizeUnit?: string;
 tradeChannels?: []; 
}

export type Nutrient = {
  nutrientId: number;
  nutrientName: string;
  unitName: string;
  value: number;
  derivationCode?: string;
  derivationDescription?: string;
  derivationId?: number;
  foodNutrientId?: number;
  indentLevel?: number;  
  nutrientNumber?: string;
  rank?: number;
  foodNutrientSourceCode?: string;
  foodNutrientSourceDescription?: string;
  foodNutrientSourceId?: number;
}

export type Datatype = {
  Branded: number;
  Experimental: number;
  Foundation: number;
  SRLegacy: number;
  Survey_FNDDS: number;
}

export enum foodGroup  {
  'PLANT',
  'MEAT',
  'DAIRY',
  'CHIPS',
  'CANDY',
  'UNSELECTED'
};