export enum ContentType {
  XML = 'application/xml',
  CSV = 'application/csv',
  JSON = 'application/json'
}

export const getContentTypes = (): string[] => Object.values(ContentType)

export const getFileTypes = (): string[] => getContentTypes()
  .map(contentType => contentType.split('/').slice(-1)[0])

export const stringToContentType = (contentType: string | ContentType | undefined): contentType is ContentType => {
  return contentType != null
}