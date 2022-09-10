export default function copyToClipboard(text: string) {
  if ('clipboard' in navigator) {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log('Copied to clipboard: ', text)
      },
      (err) => {
        console.error('Failed to copy: ', err)
      }
    )
  } else {
    console.log('Clipboard API not supported')
  }
}
