'use client'

import BoxStore, { BoxStyle } from '@/components/atoms/BoxStore'
import CardStore, { CardStyle } from '@/components/atoms/CardStore'
import IssueStore, { IssueStyle } from '@/components/atoms/IssueStore'
import NavBar from '@/components/atoms/NavBar'

export default function Check() {
  return (
    <>
      {/* Tag */}
      <BoxStore boxStyle={BoxStyle.WAIT_TAG} />
      <BoxStore boxStyle={BoxStyle.PROCEEDING_TAG} />
      <BoxStore boxStyle={BoxStyle.DONE_TAG} />
      {/* Badge */}
      <BoxStore boxStyle={BoxStyle.BADGE} />

      {/* NavBar */}
      <NavBar>타이틀입니다.</NavBar>

      {/* Issue */}
      <IssueStore
        issueStyle={IssueStyle.ISSUE_TOGGLE}
        title="이슈 제목 입니다아아ddddddddddddddd"
        content="ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ안녕난나아여여영여여여여여여여여여어어어어어어엉어어어어어어어"
      />

      {/* Card */}
      <CardStore
        cardStyle={CardStyle.ALL}
        img_src="https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cMHMTT7DiwDF5-BUGJhrN3YemZfwfckwHeaBMM0phs7pRTiaWZoxT4EYBe3YV5lMRziHY32oMVqrSBwqk4jyc1tXbeLgfTYzEDqa8zSUoqbAe70hocphLaXcw2e2ipKms8A7xnqebRf34U6kb-m-KC96kWDnGZxzW0hLInWAUtCr8gpRH~19ZPEEATiOSCd6tSMR3lGsMCUDmq4YF~Z~jjmM9p54s1VdNoWHEN3wurAxZN6SItiDkQRYMYdybFinnmXYeiVkg826ZCnFs-oNsEHGjEbGfCvVX52cDaN2clOXHTSEdvHUYz3hnQ~bJEBPSDKPVLMcrDhcchuahxNV0w__"
        title="2층 우수관 하자발ㅇㅇㅇ생 조치보다많ㅇ다"
        period="24.04.30 ~24.05.02"
        state="진행중"
        name="김주은"
        view={0}
        comment={0}
      />
      <CardStore
        cardStyle={CardStyle.NO_IMG}
        img_src=""
        title="2층 우수관 하자발ㅇㅇㅇ생 조치보다많ㅇ다"
        period="24.04.30 ~24.05.02"
        state="진행중"
        name="김주은"
        view={0}
        comment={0}
      />
      <CardStore
        cardStyle={CardStyle.NO_PERIOD}
        img_src="https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cMHMTT7DiwDF5-BUGJhrN3YemZfwfckwHeaBMM0phs7pRTiaWZoxT4EYBe3YV5lMRziHY32oMVqrSBwqk4jyc1tXbeLgfTYzEDqa8zSUoqbAe70hocphLaXcw2e2ipKms8A7xnqebRf34U6kb-m-KC96kWDnGZxzW0hLInWAUtCr8gpRH~19ZPEEATiOSCd6tSMR3lGsMCUDmq4YF~Z~jjmM9p54s1VdNoWHEN3wurAxZN6SItiDkQRYMYdybFinnmXYeiVkg826ZCnFs-oNsEHGjEbGfCvVX52cDaN2clOXHTSEdvHUYz3hnQ~bJEBPSDKPVLMcrDhcchuahxNV0w__"
        title="2층 우수관 하자발ㅇㅇㅇ생 조치보다많ㅇ다"
        period="24.04.30 ~24.05.02"
        state="진행중"
        name="김주은"
        view={0}
        comment={0}
      />
      <CardStore
        cardStyle={CardStyle.ALL_NO}
        img_src="https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cMHMTT7DiwDF5-BUGJhrN3YemZfwfckwHeaBMM0phs7pRTiaWZoxT4EYBe3YV5lMRziHY32oMVqrSBwqk4jyc1tXbeLgfTYzEDqa8zSUoqbAe70hocphLaXcw2e2ipKms8A7xnqebRf34U6kb-m-KC96kWDnGZxzW0hLInWAUtCr8gpRH~19ZPEEATiOSCd6tSMR3lGsMCUDmq4YF~Z~jjmM9p54s1VdNoWHEN3wurAxZN6SItiDkQRYMYdybFinnmXYeiVkg826ZCnFs-oNsEHGjEbGfCvVX52cDaN2clOXHTSEdvHUYz3hnQ~bJEBPSDKPVLMcrDhcchuahxNV0w__"
        title="2층 우수관 하자발ㅇㅇㅇ생 조치보다많ㅇ다"
        period="24.04.30 ~24.05.02"
        state="진행중"
        name="김주은"
        view={0}
        comment={0}
      />
    </>
  )
}
