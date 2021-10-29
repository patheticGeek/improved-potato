export const transformToMarkdown = (
  bookmark: chrome.bookmarks.BookmarkTreeNode,
  level: number
): string => {
  let result = ``
  if (!bookmark.children) {
    if (
      bookmark.title &&
      bookmark.url &&
      !bookmark.url.startsWith('chrome://')
    ) {
      result += `- [${bookmark.title}](${bookmark.url})\n\n`
    }
  } else {
    if (bookmark.children.length > 0) {
      const headingLevel = Array(level > 5 ? 6 : level + 1)
        .fill('#')
        .join('')
      if (bookmark.title) {
        if (level === 2)
          result += `<details>\n<summary> ${bookmark.title} </summary>`
        else result += `${headingLevel} ${bookmark.title}`
        result += `\n\n`
      }
      result += bookmark.children
        .map((item) => transformToMarkdown(item, level + 1))
        .join('')
      if (bookmark.title && level === 2) result += `</details>`
      result += `\n\n`
    }
  }
  return result
}
