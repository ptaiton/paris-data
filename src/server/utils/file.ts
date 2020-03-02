export const checkForFileType = (fileType: string | null, fileTypes: string[]): fileType is string => {
  return fileType ? fileTypes.includes(fileType) : false
}