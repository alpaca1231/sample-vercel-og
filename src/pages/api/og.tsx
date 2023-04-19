import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}
const font = fetch(new URL('../../../public/fonts/NotoSansJP-Bold.otf', import.meta.url)).then((res) =>
  res.arrayBuffer()
)

export default async function ogp() {
  const fontData = await font

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Hello world!
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          data: fontData,
          name: 'Noto Sans JP',
          style: 'normal',
        },
      ],
    }
  )
}
