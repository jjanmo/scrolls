# Infinite Scroll

## Install & Start

```
 yarn
```

> install node_modules

```
yarn dev
```

> execute app in local as dev mode

## Structure

```
src
 ├── apis        # api layer
 ├── components  # each component of a page
 ├── hooks       # custom hooks collection
 ├── pages       # app pages
 ├── store       # client state collection
 └── styles      # style files

```

- apis : axios, swr를 통한 인터페이스 및 타입 구현

- store : redux를 통한 클라이언트의 상태 관리

## Features

- [x] SWR(useSWRInfinite)와 Intersection Observer API를 이용한 무한스크롤
- [x] `4PAGE` 까지만 호출 → 그외 호출시 방어코드 작성
- [x] `불완전`한 북마크 기능
- [x] `불완전`한 북마크 페이지

  > [참고1] `불완전한` 북마크 페이지 (개인적으로 `불완전`하지만 있을법한 기능을 구현하고 싶어서 구현해보았습니다. 😅)

  - 불완전한 이유

    유저가 북마크 했는지 여부를 서버와 동기화 시키고 있지않기 때문에 채용 공고 페이지에 북마크 내용이 반영되지 않습니다. 단순히 클라이언트에서만 상태를 관리하고 있기 때문입니다.

  - 북마크 페이지에서 unmount시 클라이언트의 북마크 데이터를 리셋합니다.

    이 역시 서버와의 동기화와 연결되어 있는데요. 채용 페이지에서 보여주는 데이터를 SWR을 통해서 서버 상태의 데이터를 노출합니다. 거기에는 클라이언트의 상태가 반영되어 있지 않습니다. 그렇기 때문에 같은 채용 공고를 여러 번 북마크할 수 있게 되어 북마크 페이지에서는 같은 북마크한 공고를 볼 수 있게 됩니다. 추가로 채용공고 id값을 키값으로 노출해주고 있는데, 이 역시 같은 공고를 북마크하게되어 경고가 노출됩니다.

  > [참고2] `next-redux-wrapper`를 사용하지 않았습니다. 현재 프로젝트에선 클라이언트 상태만을 관리하면 되기 때문에 (Nextjs에서 SSR등에으로 인한)서버의 상태와 클라이언트 상태를 동기화 시키는 작업을 할 필요가 없었습니다.( + 현재 프로젝트에서 서버 상태는 SWR을 사용하고 있기 때문이기도 합니다.)

### More Features & More Learning

- [ ] Pure 스크롤 이벤트를 이용한 무한 스크롤
- [ ] React Query를 사용한 무한 스크롤
- [ ] 성능 최적화 관련 → react-virtualized/react-window
  - 관련 링크들
    - [react-window로 대형 리스트 가상화](https://web.dev/i18n/ko/virtualize-long-lists-react-window/)
