export type PaginationData<T> = {
  next: string;
  previous: string;
  count: number;
  results: T[];
};

export type BaseResponseApi<T> = {
  data: T[];
  source: SourceApi[];
};

export type BaseResponse<T> = {
  data: T[];
  source: Source[];
};

export type SourceApi = {
  measures: string[];
  annotations: AnnotationsApi;
  name: string;
  substitutions: unknown[];
};

export type Source = {
  measures: string[];
  annotations: Annotations;
  name: string;
  substitutions: unknown[];
};

export type AnnotationsApi = {
  source_name: string;
  source_description: string;
  dataset_name: string;
  dataset_link: string;
  table_id: string;
  topic: string;
  subtopic: string;
};

export type Annotations = {
  sourceName: string;
  sourceDescription: string;
  datasetName: string;
  datasetLink: string;
  tableId: string;
  topic: string;
  subtopic: string;
};

export interface BaseError {
  code: number;
  error: string
  message: string;
  payload?: ErrorPayload[];
}

export interface ErrorPayload {
  attemptedValue: string;
  errorCode: string;
  message: string;
  propertyName: string;
}

export interface BaseQueryParams {
  [key: string]: unknown;
  page: number;
  size: number;
  orderType: string;
  orderBy: string;
}

export interface OptionItemResponse {
  key: string;
  value: string;
}

export interface AuditTrail {
  createdBy: string;
  createdByFullName: string;
  createdAt: string;
  lastUpdatedBy: string;
  lastUpdatedByFullName: string;
  lastUpdatedAt: string;
}

export type BaseItem = {
  id: number;
  name: string;
};

export type SearchOptions = OptionItemResponse[];
