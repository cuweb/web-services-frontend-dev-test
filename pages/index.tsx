import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { AppProps } from "next/app";
import Head from "next/head";
import useSWR from "swr";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import List from "../components/List";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const Home: NextPage = (props) => {
  // Load Language
  const { t } = useTranslation("common");

  // Fetch Data
  const { data, error } = useSWR(
    "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
  );

  if (error) return <>An error has occurred.</>;
  if (!data) return <>Loading...</>;

  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      {t('title')}
      <List items={data} />
      
    </>
  );
};

export default Home;
