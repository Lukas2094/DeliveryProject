import Head from 'next/head';

interface SEOProps {
  title: string;
  image?: string;
  amphtml?: string;
  altImage?: string;
  canonical?: string;
  description: string;
  shouldIndexPage?: boolean;
  ogType?: 'website' | 'article';
}

export function SEO({
  title,
  image,
  amphtml,
  ogType,
  altImage,
  canonical,
  description,
  shouldIndexPage = true,
}: SEOProps) {
  const pageImage = image || `images/svg/logo.svg`;

  return (
    <Head>
      <title>{title}</title>

      {!shouldIndexPage && <meta name="robots" content="noindex.nofollow" />}
      <meta name="description" content={description} />
      <meta name="image" content={pageImage} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content={ogType || 'website'} />
      <meta property="og:site_name" content="o2corre" />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:alt" content={altImage || 'Imagem destaque'} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:card" content={pageImage} />
      <meta name="twitter:site" content="@O2CorreBrasil" />
      <meta name="twitter:creator" content="@O2CorreBrasil" />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:src" content={pageImage} />
      <meta name="twitter:image:alt" content={altImage || 'Imagem destaque'} />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />

      <link
      rel="stylesheet"
      type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <link rel="canonical" href={canonical} />
      {amphtml && <link rel="amphtml" href={amphtml} />}
    </Head>
  );
}
