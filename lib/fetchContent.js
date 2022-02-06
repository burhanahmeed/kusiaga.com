import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const getAllContents = (path) => {
  const files = fs.readdirSync(path)
  return files.reduce((acc, file) => {
    if (file.endsWith('.mdx') && !file.startsWith('draft.')) {
      acc.push(file.replace(/.mdx/, ''))
    }

    return acc
  }, [])
}

export function getSingleContent(filePath, fileName, fields) {
  const fileContents = fs.readFileSync(`${filePath}.mdx`, 'utf8')
  const { data, content } = matter(fileContents)
  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (data[field]) {
      items[field] = data[field]
    }

    if (field === 'slug') {
      items[field] = fileName
    }

    if (field === 'content') {
      items[field] = content
    }

    if (field === 'tag') {
      items[field] = data[field].split(',')
    }
  })

  return items
}

export function getContents(path, fields = []) {
  const filePath = join(process.cwd(), path)
  const contentList = getAllContents(filePath)
  
  return contentList
    .map(fileName =>
      getSingleContent(join(filePath, fileName), fileName, fields)
    )
}
