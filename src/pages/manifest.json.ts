import type { APIRoute } from 'astro'
import { getImage } from 'astro:assets'
import favicon from '../../public/favicon.png'

const faviconPngSizes = [192, 512]

export const GET: APIRoute = async () => {
  const icons = await Promise.all(
    faviconPngSizes.map(async (size) => {
      const image = await getImage({
        src: favicon,
        width: size,
        height: size,
        format: 'png'
      })
      return {
        src: image.src,
        type: `image/${image.options.format}`,
        sizes: `${image.options.width}x${image.options.height}`
      }
    })
  )

  const manifest = {
    name: 'Yash Jawale',
    short_name: 'Yash Jawale',
    description: 'Yash Jawale\'s Portfolio Site',
    start_url: '/',
    display: 'standalone',
    id: 'yash-jawale',
    theme_color: '#efefef',
    // background_color: '#d9d9d9',
    icons
  }

  return new Response(JSON.stringify(manifest))
}