(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{471:function(s,a,t){"use strict";t.r(a);var e=t(44),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("header-table"),s._v(" "),t("h1",{attrs:{id:"開発環境をdocker-composeで構築"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#開発環境をdocker-composeで構築"}},[s._v("#")]),s._v(" 開発環境をDocker Composeで構築")]),s._v(" "),t("h2",{attrs:{id:"事前準備"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事前準備"}},[s._v("#")]),s._v(" 事前準備")]),s._v(" "),t("ul",[t("li",[s._v("この講義では "),t("code",[s._v("docker-compose")]),s._v(" コマンドを使います。")]),s._v(" "),t("li",[s._v("環境ごとに インストール方法が異なるので、 以下の通り導入しておいてください。")])]),s._v(" "),t("h3",{attrs:{id:"windows-macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-macos"}},[s._v("#")]),s._v(" Windows, macOS")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://iij.github.io/bootcamp/init/hello-bootcamp/",target:"_blank",rel:"noopener noreferrer"}},[s._v("ハンズオン事前準備"),t("OutboundLink")],1),s._v(" で Docker Desktop for Windowsや、Docker Desktop for Mac を導入済みであれば、すでにインストールされているはずです。")])]),s._v(" "),t("h3",{attrs:{id:"linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[s._v("#")]),s._v(" Linux")]),s._v(" "),t("ul",[t("li",[s._v("以下の手順に従って、"),t("code",[s._v("docker-compose")]),s._v(" コマンドをインストールしてください。\n"),t("ul",[t("li",[s._v("プロキシ 下の環境で試す場合は "),t("code",[s._v("sudo")]),s._v(" ではなく "),t("code",[s._v("sudo -E")]),s._v(" として環境変数を引き継ぐか、 curl の "),t("code",[s._v("--proxy")]),s._v(" オプションを利用する必要があるかもしれません。")])])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/docker/compose/releases/download/1.23.2/docker-compose-'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -s"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -m"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" -o /usr/local/bin/docker-compose\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/docker-compose\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/local/bin/docker-compose /usr/bin/docker-compose\n")])])]),t("h3",{attrs:{id:"導入できたら"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#導入できたら"}},[s._v("#")]),s._v(" 導入できたら")]),s._v(" "),t("ul",[t("li",[s._v("下記コマンドを実際に入力し、コマンドが実行できるか確認してください。")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker-compose --version\n")])])]),t("h2",{attrs:{id:"_1-docker-compose-とは"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-docker-compose-とは"}},[s._v("#")]),s._v(" 1. Docker Compose とは")]),s._v(" "),t("p",[s._v("Docker Compose とは、複数のコンテナから構成されるようなアプリケーションの管理をしやすくしたものです。Docker Compose を利用することで、各コンテナの起動・停止が一括して行えたり、後述する1つの設定ファイルに各コンテナの情報を記述するため可視性が高くなり管理もしやすくなります。また、各コンテナ間のネットワークや依存関係も設定ファイルとして管理することが出来る点も利点です。")]),s._v(" "),t("p",[s._v("例えば、以下の3つのコンポーネントから構成されるWebサービスをDockerコンテナを用いた場合を想定してみましょう。")]),s._v(" "),t("ul",[t("li",[s._v("フロントエンド（Angular）")]),s._v(" "),t("li",[s._v("データベースサーバ（MongoDB）")]),s._v(" "),t("li",[s._v("バックエンド（Rails）")])]),s._v(" "),t("p",[s._v("通常、この構成のWeb サービスを起動する際、各コンテナを立ち上げるため、"),t("code",[s._v("docker run")]),s._v(" コマンドを3回実行する必要がでてきます。停止する際も同様です。ここで、Docker Compose を用いて管理を行うと、各コンテナの定義をした設定ファイルである「"),t("strong",[s._v("docker-compose.yml")]),s._v("」に基づいて一括管理することが可能となります。具体的には、上記の各コンテナの起動・停止などは、"),t("code",[s._v("docker-compose")]),s._v(" コマンドを1回実行するだけで済みます。また、コンテナの起動順序も適切な順番で起動することが可能となります。特に開発する際やテストなどの際には、サービスの起動停止は複数回繰り返したりすることも考えられるため効率化につながります。")]),s._v(" "),t("p",[s._v("本講義では、実際に複数コンテナをDocker Composeを用いて管理を行っていきます。Docker Composeを使ったアプリケーションを実行するまでの一般的な流れは以下の通りです。")]),s._v(" "),t("ol",[t("li",[s._v("各コンテナのDockerfile の作成")]),s._v(" "),t("li",[s._v("docker-compose.yml の作成")]),s._v(" "),t("li",[t("code",[s._v("docker-compose")]),s._v(" コマンドを使った複数のコンテナの管理")])]),s._v(" "),t("p",[s._v("そこで本講義でも上記の流れに沿って講義を進めていきます。")]),s._v(" "),t("h2",{attrs:{id:"_2-docker-compose-入門"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-docker-compose-入門"}},[s._v("#")]),s._v(" 2. Docker Compose 入門")]),s._v(" "),t("p",[s._v("本章では、実際に"),t("code",[s._v("docker-compose")]),s._v(" コマンドを使って複数コンテナの立ち上げや停止などをしていただきます。今回題材のサービスは、データベースにMongoDB を利用したGo 言語のWebアプリケーションです。Webアプリケーション自体の作成は本質ではないので、サンプルコードをそのまま利用していただきます。Web アプリケーションの機能は以下の2点です。")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("/get")]),s._v(" で、MongoDB に格納されているデータを一覧表示")]),s._v(" "),t("li",[t("code",[s._v("/add")]),s._v(" で、"),t("code",[s._v("title")]),s._v(" と"),t("code",[s._v("body")]),s._v(" パラメータを添えてPOST することで、MongoDB にデータを格納する")])]),s._v(" "),t("h3",{attrs:{id:"_2-1-dockerfile-の作成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-dockerfile-の作成"}},[s._v("#")]),s._v(" 2.1 Dockerfile の作成")]),s._v(" "),t("p",[s._v("この節では、前述したコンテナのDockerfile を作成します。Dockerfile の作成については、前講義「Docker を触ってみよう」で行いましたので、各命令などの詳細な説明は割愛します。Docker Compose を使う際、コンテナの指定方法は、")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("docker run")]),s._v(" と同様にimage を指定して起動する")]),s._v(" "),t("li",[s._v("Dockerfile を指定して起動時にbuild する")])]),s._v(" "),t("p",[s._v("の2通りがあります。また今回の場合、MongoDB のイメージは特にカスタマイズしないため、1の方法で起動します。")]),s._v(" "),t("p",[s._v("以下の内容をファイル名「Dockerfile.backend」で作成してください。")]),s._v(" "),t("div",{staticClass:"language-Dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" golang")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LABEL")]),s._v(" maintainer="),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_email"')])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" ./backend/main.go /root/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /root")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" go get -v github.com/globalsign/mgo && go build main.go")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" ["),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./main"')]),s._v("]")]),s._v("\n")])])]),t("h3",{attrs:{id:"_2-2-docker-compose-yml-の作成と解説"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-docker-compose-yml-の作成と解説"}},[s._v("#")]),s._v(" 2.2 docker-compose.yml の作成と解説")]),s._v(" "),t("p",[s._v("次に、以下の内容をファイル名「docker-compose.yml」で新規作成してください。")]),s._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("database")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" iijbootcamp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("database\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mongo\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("expose")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"27017"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("backend")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" iijbootcamp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("backend\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("context")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" .\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dockerfile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Dockerfile.backend\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("depends_on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" database\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8080:80"')]),s._v("\n")])])]),t("p",[s._v("では、ファイルの各設定について見ていきたいと思います。")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("version")]),s._v(" では、docker-compose.yml自体のバージョンを設定します。現在の最新版は、3系です。ここで指定するバージョンによって機能の違いが生じるため、調べる際には気を付けてください。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("services")]),s._v(" では、Docker Compose で管理する各サービスを子要素として定義していきます。本設定の子要素になっている"),t("code",[s._v("database")]),s._v(" と"),t("code",[s._v("backend")]),s._v(" が、それぞれMongoDBとgolangのWebアプリケーション用のサービスです。ここは、好きな名前を設定できます。")])])]),s._v(" "),t("p",[s._v("次に、"),t("code",[s._v("database")]),s._v(" の子要素について見ていきます。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("container_name")]),s._v(" は、作成されるコンテナ名を設定しています。この値やサービス名は、別コンテナからアクセスされる際のホスト名としても利用可能となります。そのため後にダウンロードするWebアプリケーションのソースコードでは、MongoDB の接続先として「iijbootcamp-database」を利用しています。")]),s._v(" "),t("li",[t("code",[s._v("image")]),s._v(" では、Docker イメージを指定します。Dockerfile と同様ローカルにDocker イメージが存在しない場合は、DockerHub などからダウンロードしてきます。")]),s._v(" "),t("li",[t("code",[s._v("expose")]),s._v(" では、"),t("strong",[s._v("ホストには晒さないが、別コンテナには晒すポート")]),s._v("の設定をします。今回は、MongoDB のデフォルトポートの27017を設定しています。")])]),s._v(" "),t("p",[s._v("最後に、"),t("code",[s._v("backend")]),s._v(" の子要素について見ていきます。")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("build")]),s._v(" は、独自にDockerfile などを用いてDocker イメージを作成する際に使う設定です。"),t("code",[s._v("build")]),s._v(" の子要素に、Dockerfile が格納されているディレクトリを示す"),t("code",[s._v("context")]),s._v(" が必須となっています。また、今回のようにDockerfile に「Dockerfile」以外の名前を使っている場合は、"),t("code",[s._v("dockerfile")]),s._v(" で対象ファイル名を指定する必要があります。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("depends_on")]),s._v(" では、各コンテナの起動順序を設定する項目になっています。今回の場合、backend サービスは、database サービスを必要とするので、こういった設定になっています。ただし、サービスの起動を待ってくれるわけではなく、database が起動しきる前にbackendサービスが起動してしまう場合もあります。"),t("a",{attrs:{href:"http://docs.docker.jp/compose/startup-order.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("公式"),t("OutboundLink")],1),s._v(" にそういったケースの対策が乗っているので興味がある方はご覧になってください。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("ports")]),s._v(" は、ホストとコンテナのポートをマッピングする設定です。今回の場合、backend サービスは、コンテナ内でポート80で起動しているので、ホストのポート8080へアクセスしたらコンテナ内の80に接続されるように設定しています。ここに記載する値は、文字列を推奨します。なぜならば、YAML の仕様では、"),t("code",[s._v("XX:YY")]),s._v(" は、60進数として解釈されてしまうため、意図しない値になる可能性があるためです。")])])]),s._v(" "),t("p",[s._v("その他詳しい機能について知りたい方は、"),t("a",{attrs:{href:"https://docs.docker.com/compose/compose-file/",target:"_blank",rel:"noopener noreferrer"}},[s._v("公式のリファレンス"),t("OutboundLink")],1),s._v("をご参照ください。")]),s._v(" "),t("h3",{attrs:{id:"_2-3-backendサービスの作成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-backendサービスの作成"}},[s._v("#")]),s._v(" 2.3 backendサービスの作成")]),s._v(" "),t("p",[s._v("次に、backend のアプリケーションを作成します。しかし前述した通り、ここではコードの解説などは割愛します。Go 言語のコードに興味があったら、ぜひ中身もご覧になってください。アプリケーションのソースコードは、本リポジトリに"),t("a",{attrs:{href:"/bootcamp/main.go"}},[s._v("main.go")]),s._v("として同梱しています。"),t("code",[s._v("Dockerfile.backend")]),s._v(" と同じ階層に"),t("code",[s._v("backend")]),s._v(" ディレクトリを作成して、中に"),t("a",{attrs:{href:"/bootcamp/main.go"}},[s._v("main.go")]),s._v("を配置してください。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n├── Dockerfile.backend\n├── backend\n│   └── main.go\n└── docker-compose.yml\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" directory, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" files\n")])])]),t("h3",{attrs:{id:"_2-4-docker-compose-コマンド"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-docker-compose-コマンド"}},[s._v("#")]),s._v(" 2.4 docker-compose コマンド")]),s._v(" "),t("p",[s._v("では、必要なものはすべて揃ったので、「docker-compose.yml」が存在するディレクトリで、以下のコマンドを入力してください。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker-compose up\n")])])]),t("p",[s._v("初回実行時は必要な image の取得や Dockerfile.backend を利用した docker build などが実行されるため、時間がかかります。")]),s._v(" "),t("p",[s._v("また、もし プロキシ 環境下で 正常に go get が成功しない場合は 以下のように "),t("code",[s._v("docker-compose build")]),s._v(" してから試してみてください。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker-compose build --build-arg "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("https_proxy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("proxy"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n$ docker-compose up\n")])])]),t("p",[s._v("以下が実際に実行した際の画面です。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Building backend\nStep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/6 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" FROM golang\n ---"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 901414995ecd\nStep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/6 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" LABEL "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("maintainer")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_email"')]),s._v("\n ---"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Using cache\n ---"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" af942d8500ac\nStep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/6 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" COPY ./backend/main.go /root/\n ---"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" c337913839f2\nStep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("/6 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" WORKDIR /root\n ---"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Running "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" 62a5f25461f4\nRemoving intermediate container 62a5f25461f4\n ---"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 487a8ce36447\nStep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("/6 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" RUN go get -v github.com/globalsign/mgo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" go build main.go\n ---"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Running "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" 5605bfeb08b9\ngithub.com/globalsign/mgo "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("download"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ngithub.com/globalsign/mgo/internal/json\ngithub.com/globalsign/mgo/internal/scram\ngithub.com/globalsign/mgo/bson\ngithub.com/globalsign/mgo\nRemoving intermediate container 5605bfeb08b9\n ---"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" fb0e91bd3afc\nStep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("/6 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ENTRYPOINT "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./main"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n ---"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Running "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" bf08974a1e5d\nRemoving intermediate container bf08974a1e5d\n ---"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 0dd916739b50\nSuccessfully built 0dd916739b50\nSuccessfully tagged docker-compose_backend:latest\nCreating iijbootcamp-database "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nCreating iijbootcamp-backend  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nAttaching to iijbootcamp-database, iijbootcamp-backend\niijbootcamp-database "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-02-15T02:55:28.221+0000 I CONTROL  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Automatically disabling TLS "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(", to force-enable TLS "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(" specify --sslDisabledProtocols "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'none'")]),s._v("\niijbootcamp-database "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-02-15T02:55:28.229+0000 I CONTROL  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("initandlisten"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" MongoDB starting "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pid")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dbpath")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data/db "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("-bit "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("783519c19d49\niijbootcamp-database "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-02-15T02:55:28.229+0000 I CONTROL  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("initandlisten"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" db version v4.0.0\niijbootcamp-database "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-02-15T02:55:28.229+0000 I CONTROL  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("initandlisten"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" version: 3b07af3d4f471ae89e8186d33bbb1d5259597d51\niijbootcamp-database "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-02-15T02:55:28.229+0000 I CONTROL  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("initandlisten"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" OpenSSL version: OpenSSL "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".2g  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Mar "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2016")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("省略"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[t("code",[s._v("docker-compose up")]),s._v(" コマンドは、docker-compose.yml ファイルに基づきコンテナを新規作成し、起動するコマンドです。"),t("code",[s._v("-d")]),s._v(" オプションを利用することで、デーモンとして起動することも可能です。デーモンで起動している際は、ログが表示されなくなってしまうので、見たい場合は"),t("code",[s._v("docker-compose logs")]),s._v(" コマンドで閲覧可能です。また、"),t("code",[s._v("-f")]),s._v(" オプションを渡すことで、ログを流し続けることができます。")]),s._v(" "),t("p",[s._v("別のターミナル環境を開いて、「docker-compose.yml」が存在するディレクトリ で以下のコマンドを入力してください。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker-compose "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n        Name                     Command             State          Ports\n---------------------------------------------------------------------------------\niijbootcamp-backend    ./main                        Up      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:8080-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/tcp\niijbootcamp-database   docker-entrypoint.sh mongod   Up      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("/tcp\n")])])]),t("p",[t("code",[s._v("docker-compose ps")]),s._v(" コマンドでは、Docker Compose で管理してる各コンテナの状態を一覧で見ることができます。「State」が「Up」になっていれば立ち上がっている状態です。その他のカラムは"),t("code",[s._v("docker ps")]),s._v(" の意味と同様です。")]),s._v(" "),t("h4",{attrs:{id:"webアプリケーションの動作確認方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webアプリケーションの動作確認方法"}},[s._v("#")]),s._v(" Webアプリケーションの動作確認方法")]),s._v(" "),t("p",[s._v("では、実際にWebアプリケーションが動作しているか確認するために以下のコマンドを入力してください。")]),s._v(" "),t("p",[s._v("ここでは、まずデータを追加し、次に追加されたデータを取り出しています。")]),s._v(" "),t("p",[t("code",[s._v("/get")]),s._v(" にアクセスして、最初に登録したデータが取り出せていれば成功です。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X POST -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'title=iijbootcamp&body=IIJBootCamp is fun!!'")]),s._v(" http://localhost:8080/add\nSuccessfully added\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" http://localhost:8080/get\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ID:ObjectIdHex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5c6642fc04b685000117c15b"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Title:iijbootcamp Body:IIJBootCamp is fun"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("また、"),t("code",[s._v("docker-compose start")]),s._v("、"),t("code",[s._v("docker-compose stop")]),s._v(" で一括してコンテナの起動・停止を行えます。さらに起動中のコンテナの停止と削除を一括して行う場合は、"),t("code",[s._v("docker-compose down")]),s._v(" が利用できます。では、先ほど起動したコンテナたちを停止してみましょう。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker-compose down\nStopping iijbootcamp-backend  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nStopping iijbootcamp-database "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nRemoving iijbootcamp-backend  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nRemoving iijbootcamp-database "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nRemoving network docker-compose_default\n")])])]),t("p",[s._v("上記の実行結果より、各コンテナを停止し、削除していることがわかります。また、後述するネットワークも削除しています。")]),s._v(" "),t("h2",{attrs:{id:"_3-docker-のネットワーク"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-docker-のネットワーク"}},[s._v("#")]),s._v(" 3. Docker のネットワーク")]),s._v(" "),t("p",[s._v("前章では、Docker Composeでコンテナ間接続を体験しました。本章では、Docker がどのようにしてネットワークを構築し、ホストとコンテナやコンテナ間を接続しているのかをご紹介します。まずは、以下のコマンドを実行してみてください。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker network "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nNETWORK ID          NAME                     DRIVER              SCOPE\n420d7b4e475a        bridge                   bridge              "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("\n24bd91406a30        docker-compose_default   bridge              "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("\n7b99e3f7a971        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("                     "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("                "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("\nf70accdb164f        none                     null                "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("\n")])])]),t("p",[t("code",[s._v("docker network")]),s._v(" コマンドは、Docker ネットワークを管理するためのコマンドです。"),t("code",[s._v("ls")]),s._v(" サブコマンドは、Docker が把握しているすべてのネットワーク一覧を表示するコマンドです。\nDocker をインストールすると、自動的に以下の名前の3つのネットワークを作成します。")]),s._v(" "),t("ol",[t("li",[s._v("bridge")]),s._v(" "),t("li",[s._v("none")]),s._v(" "),t("li",[s._v("host")])]),s._v(" "),t("p",[t("code",[s._v("docker run")]),s._v(" コマンドを実行する際に、"),t("code",[s._v("--net")]),s._v(" オプションで、これらの値を設定することができます。デフォルト値では、"),t("code",[s._v("bridge")]),s._v(" になっています。Docker がインストールされた今回の環境では、ホストに「"),t("strong",[s._v("docker0")]),s._v("」というブリッジネットワークが表れます。これが「bridge」に接続されており、Docker はデフォルトでこのネットワークにコンテナを接続します。そのため、ホストからコンテナへの接続やコンテナ間の接続が可能となります。"),t("code",[s._v("none")]),s._v(" は、ネットワークの接続を必要としないコンテナを作成する際に利用します。"),t("code",[s._v("host")]),s._v(" は、コンテナがホストと同じインタフェースやIPアドレスを持たせたい際に利用します。")]),s._v(" "),t("p",[s._v("上記結果の中で、「default」で終わるネットワークは、"),t("code",[s._v("docker-compose")]),s._v(" コマンドによって自動的に作成されたネットワークのことです。「default」の前には、プロジェクト名（docker-compose.ymlファイルが存在するディレクトリ名）が利用されます。")]),s._v(" "),t("p",[s._v("以下のコマンドを入力してください。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker network inspect bridge\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bridge"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Id"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"420d7b4e475aa6a17e94a33cbda837af886dafd98339176e0acd31252904aed6"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Created"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2019-02-21T06:07:03.697181196Z"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Scope"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Driver"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bridge"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EnableIPv6"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" false,\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IPAM"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Driver"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"default"')]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Options"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null,\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Config"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Subnet"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"172.17.0.0/16"')]),s._v(",\n                    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Gateway"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"172.17.0.1"')]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Internal"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" false,\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Attachable"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" false,\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ingress"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" false,\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ConfigFrom"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Network"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ConfigOnly"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" false,\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Containers"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Options"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"com.docker.network.bridge.default_bridge"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"com.docker.network.bridge.enable_icc"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"com.docker.network.bridge.enable_ip_masquerade"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"com.docker.network.bridge.host_binding_ipv4"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.0.0"')]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"com.docker.network.bridge.name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker0"')]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"com.docker.network.driver.mtu"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1500"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Labels"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[t("code",[s._v("inspect")]),s._v(" サブコマンドでは、引数に取ったネットワークやコンテナの情報を表示できます。本コマンドによって、サブネットやゲートウェイといった情報などが閲覧できます。割愛しますが、"),t("code",[s._v("docker-compose")]),s._v(" コマンドによって生成されたbridgeネットワークと各コンテナのIPアドレスを"),t("code",[s._v("inspect")]),s._v(" サブコマンドで確認してみると同一ネットワークにいることが確認できると思います。")]),s._v(" "),t("h2",{attrs:{id:"_4-まとめ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-まとめ"}},[s._v("#")]),s._v(" 4. まとめ")]),s._v(" "),t("p",[s._v("本講義では、Docker Compose を紹介し、実際に"),t("code",[s._v("docker-compose")]),s._v(" コマンドを使って、複数のサービスを管理していただきました。複数のDocker コンテナを管理する場合、Docker Compose を用いるとDocker単独で利用するよりも効率的に管理することができるためぜひ利用してください。また、OSS の中ではDocker イメージを始め、"),t("code",[s._v("docker-compose.yml")]),s._v(" を公開しているものも多いため、それらを使って簡単に検証作業や環境構築などを行うことができます。ぜひ有効活用してみてください。")]),s._v(" "),t("credit-footer")],1)}),[],!1,null,null,null);a.default=n.exports}}]);