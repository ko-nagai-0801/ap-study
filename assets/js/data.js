/* =====================================================
   data.js — 問題データ・分野別解説テキスト
   ===================================================== */

// ─── 問題データ（25問：5分野×5問） ─────────────────────────
const QUESTIONS_DATA = [

  // ========== アルゴリズム・データ構造 ==========
  {
    id: 'ALG-001',
    category: 'algorithm',
    categoryName: 'アルゴリズム・データ構造',
    difficulty: 2,
    year: null,
    tags: ['ソート', '計算量'],
    question: 'n 個のデータをバブルソートで整列するとき、比較回数は最大で何回か。',
    choices: [
      { index: 0, text: 'n' },
      { index: 1, text: 'n × log₂n' },
      { index: 2, text: 'n(n－1)／2' },
      { index: 3, text: 'n²' },
    ],
    answer: 2,
    explanation: 'バブルソートは隣接する要素を繰り返し比較・交換することで整列する。1 回目のパスで n－1 回、2 回目で n－2 回……最後に 1 回の比較を行うため、合計は (n－1)＋(n－2)＋…＋1 ＝ n(n－1)／2 回。時間計算量は O(n²)。',
  },
  {
    id: 'ALG-002',
    category: 'algorithm',
    categoryName: 'アルゴリズム・データ構造',
    difficulty: 2,
    year: null,
    tags: ['探索', '二分探索', '計算量'],
    question: '1,000 個の整列済みデータに対して二分探索を行う場合、目的のデータを見つけるまでの比較回数は最大で何回か。',
    choices: [
      { index: 0, text: '10 回' },
      { index: 1, text: '100 回' },
      { index: 2, text: '500 回' },
      { index: 3, text: '1,000 回' },
    ],
    answer: 0,
    explanation: '二分探索は毎回探索範囲を半分に絞るため、最大比較回数は ⌈log₂n⌉ 回。1,000 個の場合 log₂1000 ≈ 9.97 なので最大 10 回。線形探索の最大 1,000 回と比べて格段に効率が良い。',
  },
  {
    id: 'ALG-003',
    category: 'algorithm',
    categoryName: 'アルゴリズム・データ構造',
    difficulty: 1,
    year: null,
    tags: ['データ構造', 'スタック', 'キュー'],
    question: 'スタック（stack）の説明として適切なものはどれか。',
    choices: [
      { index: 0, text: '最初に格納したデータを最初に取り出す（FIFO）' },
      { index: 1, text: '最後に格納したデータを最初に取り出す（LIFO）' },
      { index: 2, text: 'データを優先度順に取り出す' },
      { index: 3, text: 'データをランダムな順序で取り出す' },
    ],
    answer: 1,
    explanation: 'スタックは LIFO（Last In First Out）構造で、最後に挿入（PUSH）したデータが最初に取り出し（POP）される。プログラムの関数呼び出し管理（コールスタック）や、逆ポーランド記法の計算などに利用される。FIFO はキューの特性。',
  },
  {
    id: 'ALG-004',
    category: 'algorithm',
    categoryName: 'アルゴリズム・データ構造',
    difficulty: 3,
    year: null,
    tags: ['ソート', 'クイックソート'],
    question: 'クイックソートの特徴として適切なものはどれか。',
    choices: [
      { index: 0, text: '常に O(n log n) の計算量が保証される' },
      { index: 1, text: '安定したソートアルゴリズムである' },
      { index: 2, text: 'ピボットの選択によっては最悪 O(n²) になる' },
      { index: 3, text: 'マージソートよりも常に高速である' },
    ],
    answer: 2,
    explanation: 'クイックソートはピボットを基準に配列を分割して整列する。平均計算量は O(n log n) だが、ピボットが常に最大値または最小値になる場合（例：整列済み配列で先頭をピボットとする場合）は最悪 O(n²) になる。また等しい要素の順序が保証されないため不安定ソートである。',
  },
  {
    id: 'ALG-005',
    category: 'algorithm',
    categoryName: 'アルゴリズム・データ構造',
    difficulty: 3,
    year: null,
    tags: ['データ構造', 'ハッシュ', '衝突'],
    question: 'ハッシュ表においてチェイン法（チェイニング）を用いる目的として適切なものはどれか。',
    choices: [
      { index: 0, text: 'ハッシュ関数の計算速度を上げるため' },
      { index: 1, text: '衝突（コリジョン）が発生した場合に複数のデータを格納するため' },
      { index: 2, text: 'ハッシュ表のメモリ使用量を削減するため' },
      { index: 3, text: '探索の計算量を O(1) に保証するため' },
    ],
    answer: 1,
    explanation: 'ハッシュ表では異なるキーが同じインデックスに対応する衝突（コリジョン）が発生する。チェイン法は同じインデックスの複数データを連結リストで管理する衝突処理方法。衝突が少なければ平均 O(1) の性能を発揮するが、最悪は O(n) になる。',
  },

  // ========== ネットワーク ==========
  {
    id: 'NET-001',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 3,
    year: null,
    tags: ['IPアドレス', 'サブネット', 'CIDR'],
    question: 'IPアドレス 192.168.10.100/26 のネットワークアドレスはどれか。',
    choices: [
      { index: 0, text: '192.168.10.0' },
      { index: 1, text: '192.168.10.64' },
      { index: 2, text: '192.168.10.96' },
      { index: 3, text: '192.168.10.128' },
    ],
    answer: 1,
    explanation: '/26 はサブネットマスクが 255.255.255.192（2進数: 11000000）を意味する。100 の 2進数は 01100100、マスク 11000000 との AND は 01000000 ＝ 64。よってネットワークアドレスは 192.168.10.64。/26 は第4オクテットを 0–63、64–127、128–191、192–255 の 4 ブロックに分割する。',
  },
  {
    id: 'NET-002',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 2,
    year: null,
    tags: ['TCP', '3ウェイハンドシェイク'],
    question: 'TCP の 3 ウェイハンドシェイクの順序として正しいものはどれか。',
    choices: [
      { index: 0, text: 'SYN → SYN/ACK → ACK' },
      { index: 1, text: 'SYN → ACK → SYN/ACK' },
      { index: 2, text: 'ACK → SYN → SYN/ACK' },
      { index: 3, text: 'SYN/ACK → SYN → ACK' },
    ],
    answer: 0,
    explanation: 'TCP の接続確立は 3 ウェイハンドシェイクで行われる。①クライアントが SYN パケットを送信 ②サーバーが SYN/ACK パケットで応答 ③クライアントが ACK パケットを送信して接続確立。この手順により双方向の通信路が確立し、信頼性のある通信が可能になる。',
  },
  {
    id: 'NET-003',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 1,
    year: null,
    tags: ['DNS', '名前解決'],
    question: 'DNS の役割として最も適切なものはどれか。',
    choices: [
      { index: 0, text: 'IP アドレスを MAC アドレスに変換する' },
      { index: 1, text: 'ドメイン名を IP アドレスに変換する' },
      { index: 2, text: 'IP アドレスをドメイン名に変換することのみを行う' },
      { index: 3, text: 'URL を IP アドレスとポート番号に分解する' },
    ],
    answer: 1,
    explanation: 'DNS（Domain Name System）はドメイン名（例: example.com）を IP アドレスに変換する分散型データベースシステム。ルート DNS → TLD サーバー → 権威 DNS の階層構造で名前解決を行う。なお逆引き（IP アドレス → ドメイン名）も可能。ア は ARP の役割。',
  },
  {
    id: 'NET-004',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 2,
    year: null,
    tags: ['HTTPS', 'TLS', '暗号化'],
    question: 'HTTPS の説明として適切なものはどれか。',
    choices: [
      { index: 0, text: 'HTTP に認証機能を追加したプロトコルである' },
      { index: 1, text: 'TLS を用いて HTTP 通信を暗号化したプロトコルである' },
      { index: 2, text: 'HTTP より常に高速な通信を実現するプロトコルである' },
      { index: 3, text: 'サーバー側のみ認証でき、クライアント認証はできない' },
    ],
    answer: 1,
    explanation: 'HTTPS（HTTP Secure）は TLS（旧称 SSL）を使って HTTP 通信を暗号化したプロトコル。盗聴・改ざん・なりすましを防ぐ。TLS ではサーバー証明書によるサーバー認証が必須で、オプションでクライアント認証も可能。なお HTTP/2・HTTP/3 の採用で速度面の差も縮まっている。',
  },
  {
    id: 'NET-005',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 2,
    year: null,
    tags: ['OSI参照モデル', 'プロトコル'],
    question: 'OSI 参照モデルのトランスポート層（第 4 層）に相当するプロトコルはどれか。',
    choices: [
      { index: 0, text: 'IP' },
      { index: 1, text: 'TCP' },
      { index: 2, text: 'HTTP' },
      { index: 3, text: 'Ethernet' },
    ],
    answer: 1,
    explanation: 'OSI 参照モデルのトランスポート層（第 4 層）は TCP・UDP が対応する。IP はネットワーク層（第 3 層）、HTTP はアプリケーション層（第 7 層）、Ethernet は物理層（第 1 層）・データリンク層（第 2 層）に相当する。各層の代表プロトコルは頻出。',
  },

  // ========== データベース ==========
  {
    id: 'DB-001',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 2,
    year: null,
    tags: ['SQL', 'SELECT', 'WHERE'],
    question: '社員テーブルに「部署コード='10', 給与=250000」「部署コード='10', 給与=350000」「部署コード='10', 給与=400000」「部署コード='20', 給与=350000」「部署コード='20', 給与=300000」の 5 件のレコードがある。次の SQL 文で取得されるレコード数はどれか。\nSELECT * FROM 社員 WHERE 部署コード = \'10\' AND 給与 >= 300000',
    choices: [
      { index: 0, text: '1 件' },
      { index: 1, text: '2 件' },
      { index: 2, text: '3 件' },
      { index: 3, text: '4 件' },
    ],
    answer: 1,
    explanation: 'WHERE 句の条件は「部署コード=\'10\' かつ 給与 ≥ 300000」。これを満たすのは給与 350,000 と 400,000 の 2 件。部署コード=\'20\' のレコードは部署コードの条件を満たさないため除外される。AND 条件は両方を同時に満たす必要がある。',
  },
  {
    id: 'DB-002',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 3,
    year: null,
    tags: ['正規化', '第1正規形', '第2正規形', '第3正規形'],
    question: '関係データベースの正規化に関する説明として適切なものはどれか。',
    choices: [
      { index: 0, text: '第 1 正規形は、繰り返し項目（非原子値）を排除した状態である' },
      { index: 1, text: '第 2 正規形は、推移的関数従属を排除した状態である' },
      { index: 2, text: '第 3 正規形は、部分関数従属を排除した状態である' },
      { index: 3, text: '正規化を進めると必ずデータの整合性が失われる' },
    ],
    answer: 0,
    explanation: '第 1 正規形（1NF）はすべての属性が原子値（繰り返しグループなし）の状態。第 2 正規形（2NF）は 1NF かつ部分関数従属を排除した状態。第 3 正規形（3NF）は 2NF かつ推移的関数従属を排除した状態。正規化はデータの整合性を高める。',
  },
  {
    id: 'DB-003',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 2,
    year: null,
    tags: ['ACID', 'トランザクション', '独立性'],
    question: 'トランザクションの ACID 特性の「Isolation（独立性）」の説明として最も適切なものはどれか。',
    choices: [
      { index: 0, text: 'トランザクションは完全に実行されるか、まったく実行されないかのどちらかである' },
      { index: 1, text: 'トランザクション完了後のデータは永続的に保存される' },
      { index: 2, text: '複数のトランザクションが並行して実行されても、互いに影響を与えない' },
      { index: 3, text: 'トランザクション実行後はデータが整合性を保った状態になる' },
    ],
    answer: 2,
    explanation: 'ACID 特性のうち、Isolation（独立性・隔離性）は並行実行中のトランザクションが互いの中間状態を参照しないことを保証する。ア: Atomicity（原子性）、イ: Durability（永続性）、エ: Consistency（一貫性）の説明。4 つの特性をそれぞれ区別して覚えることが重要。',
  },
  {
    id: 'DB-004',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 2,
    year: null,
    tags: ['インデックス', '性能'],
    question: 'データベースのインデックス（索引）に関する説明として適切なものはどれか。',
    choices: [
      { index: 0, text: 'インデックスを設定すると、必ずすべての SELECT 文が高速化される' },
      { index: 1, text: 'インデックスを設定すると、INSERT・UPDATE・DELETE のパフォーマンスが低下する可能性がある' },
      { index: 2, text: 'インデックスはデータ本体と同じ領域に格納される' },
      { index: 3, text: 'テーブルには一つのインデックスしか作成できない' },
    ],
    answer: 1,
    explanation: 'インデックスはデータを別領域に格納した索引構造で検索を高速化できる。しかしインデックス自体も更新が必要なため、INSERT・UPDATE・DELETE 時に追加 I/O が発生しパフォーマンスが低下する可能性がある。インデックスは検索頻度が高く更新頻度が低い列に設定するのが効果的。',
  },
  {
    id: 'DB-005',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 2,
    year: null,
    tags: ['外部キー', '参照整合性'],
    question: '関係データベースにおける外部キー制約の目的として最も適切なものはどれか。',
    choices: [
      { index: 0, text: 'テーブル内の重複データを排除する' },
      { index: 1, text: '特定の列に NULL 値が格納されることを防ぐ' },
      { index: 2, text: '参照先テーブルに存在しない値が参照元テーブルに登録されることを防ぐ' },
      { index: 3, text: 'テーブルの結合（JOIN）処理を高速化する' },
    ],
    answer: 2,
    explanation: '外部キー制約（参照整合性制約）は、参照元テーブルの外部キー列の値が参照先テーブルの主キーに必ず存在することを保証する制約。親なしの子レコード発生を防ぎデータの整合性を維持する。ア: UNIQUE 制約、イ: NOT NULL 制約の役割。',
  },

  // ========== セキュリティ ==========
  {
    id: 'SEC-001',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 2,
    year: null,
    tags: ['公開鍵暗号', '暗号化'],
    question: '公開鍵暗号方式の説明として適切なものはどれか。',
    choices: [
      { index: 0, text: '暗号化と復号に同一の鍵を使用する' },
      { index: 1, text: '送信者は受信者の公開鍵で暗号化し、受信者は自分の秘密鍵で復号する' },
      { index: 2, text: '送信者は自分の秘密鍵で暗号化し、受信者は送信者の秘密鍵で復号する' },
      { index: 3, text: '公開鍵暗号方式では鍵配送問題を解決できない' },
    ],
    answer: 1,
    explanation: '公開鍵暗号方式では受信者が公開鍵と秘密鍵のペアを生成する。送信者は受信者の公開鍵（誰でも入手可能）で暗号化し、受信者だけが持つ秘密鍵で復号する。これにより鍵の事前共有が不要で鍵配送問題を解決できる。代表的アルゴリズムに RSA がある。ア は共通鍵暗号の説明。',
  },
  {
    id: 'SEC-002',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 2,
    year: null,
    tags: ['SQLインジェクション', '対策'],
    question: 'SQL インジェクション攻撃への対策として最も適切なものはどれか。',
    choices: [
      { index: 0, text: 'パスワードをデータベースにハッシュ化して保存する' },
      { index: 1, text: 'プレースホルダ（バインド変数）を使用した SQL 文を利用する' },
      { index: 2, text: 'データベースへの接続を HTTPS で行う' },
      { index: 3, text: 'Web アプリケーションのセッション管理を適切に行う' },
    ],
    answer: 1,
    explanation: 'SQL インジェクションは入力値に SQL 文を埋め込みデータベースを不正操作する攻撃。最も根本的な対策はプレースホルダ（バインド変数）の使用で、入力値を SQL 文として解釈させない。エスケープ処理も有効だがプレースホルダの方が確実。ア: パスワード漏えい対策、ウ: 通信経路の保護、エ: セッションハイジャック対策。',
  },
  {
    id: 'SEC-003',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 2,
    year: null,
    tags: ['デジタル署名', '認証', '完全性'],
    question: 'デジタル署名の目的として適切なものはどれか。',
    choices: [
      { index: 0, text: 'データを暗号化して第三者が解読できないようにする' },
      { index: 1, text: '送信者の本人確認（認証）とデータの改ざん検知を行う' },
      { index: 2, text: 'データの転送速度を向上させる' },
      { index: 3, text: '受信者のみがデータを閲覧できるようにする' },
    ],
    answer: 1,
    explanation: 'デジタル署名は、送信者が自身の秘密鍵でデータのハッシュ値を暗号化した署名を添付するもの。受信者は送信者の公開鍵で署名を検証することで、①送信者の本人確認（認証）と②データの改ざん検知（完全性）の両方を確認できる。データの暗号化（機密性）はデジタル署名の目的ではない。',
  },
  {
    id: 'SEC-004',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 2,
    year: null,
    tags: ['XSS', '攻撃手法'],
    question: 'クロスサイトスクリプティング（XSS）攻撃の説明として適切なものはどれか。',
    choices: [
      { index: 0, text: 'データベースに不正な SQL 文を埋め込む攻撃' },
      { index: 1, text: '攻撃者が用意した偽サイトに誘導してID・パスワードを入力させる攻撃' },
      { index: 2, text: 'Web アプリケーションが出力する HTML に悪意あるスクリプトを埋め込む攻撃' },
      { index: 3, text: '総当たりでパスワードを試みる攻撃' },
    ],
    answer: 2,
    explanation: 'XSS（クロスサイトスクリプティング）は Web アプリの出力処理が不適切な場合に、攻撃者のスクリプトを HTML に埋め込み閲覧者ブラウザ上で実行させる攻撃。セッションクッキーの奪取や偽フォーム表示に悪用される。対策は HTML エスケープ処理。ア: SQLインジェクション、イ: フィッシング、エ: ブルートフォース攻撃。',
  },
  {
    id: 'SEC-005',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 2,
    year: null,
    tags: ['多要素認証', '認証'],
    question: '多要素認証（MFA）で使用される認証要素の組合せとして適切なものはどれか。',
    choices: [
      { index: 0, text: 'パスワードと PIN コード' },
      { index: 1, text: 'パスワードと秘密の質問' },
      { index: 2, text: 'パスワードとスマートフォンへのワンタイムパスワード（SMS）' },
      { index: 3, text: '指紋認証と静脈認証' },
    ],
    answer: 2,
    explanation: '多要素認証は「知識要素（知っていること）」「所持要素（持っているもの）」「生体要素（本人であること）」の複数の異なる種類を組み合わせる。パスワード（知識）と SMS の OTP（所持）の組合せが正しい多要素認証。ア・イはいずれも知識要素のみ。エはいずれも生体要素のみで多要素認証ではない。',
  },

  // ========== OS・コンピュータシステム ==========
  {
    id: 'OS-001',
    category: 'os',
    categoryName: 'OS・コンピュータシステム',
    difficulty: 2,
    year: null,
    tags: ['CPUスケジューリング', 'ラウンドロビン'],
    question: 'ラウンドロビン方式の CPU スケジューリングの説明として適切なものはどれか。',
    choices: [
      { index: 0, text: '優先度が最も高いプロセスを常に実行する' },
      { index: 1, text: '先に到着したプロセスを先に実行する' },
      { index: 2, text: '各プロセスに一定の時間（タイムスライス）を均等に割り当てて実行する' },
      { index: 3, text: '実行時間が最も短いプロセスを優先的に実行する' },
    ],
    answer: 2,
    explanation: 'ラウンドロビン方式は各プロセスに均等なタイムスライス（量子時間）を割り当てキューの順番に処理する方式。時間切れになると次のプロセスに切り替わる。全プロセスが公平に実行されるため対話型システムに適している。ア: 優先度スケジューリング、イ: FCFS（先着順）、エ: SJF（最短ジョブ優先）。',
  },
  {
    id: 'OS-002',
    category: 'os',
    categoryName: 'OS・コンピュータシステム',
    difficulty: 2,
    year: null,
    tags: ['仮想記憶', 'ページフォルト'],
    question: '仮想記憶におけるページフォルトの説明として最も適切なものはどれか。',
    choices: [
      { index: 0, text: '参照しようとしたページが物理メモリ上に存在しない状態' },
      { index: 1, text: 'ページテーブルに誤ったアドレスが記載されている状態' },
      { index: 2, text: '物理メモリが不足してプログラムが強制終了される状態' },
      { index: 3, text: 'ページのアドレス変換に失敗した状態' },
    ],
    answer: 0,
    explanation: 'ページフォルトはプログラムが参照しようとした仮想アドレスのページが現在物理メモリ（RAM）上にない場合に発生する割り込み。OS は必要なページをディスクから物理メモリに読み込み（スワップイン）処理を継続する。頻繁なページフォルトはスラッシングを引き起こしパフォーマンスを大きく低下させる。',
  },
  {
    id: 'OS-003',
    category: 'os',
    categoryName: 'OS・コンピュータシステム',
    difficulty: 3,
    year: null,
    tags: ['セマフォ', '排他制御', '同期'],
    question: 'セマフォ（semaphore）を使用する目的として最も適切なものはどれか。',
    choices: [
      { index: 0, text: 'プロセスの実行を高速化する' },
      { index: 1, text: '複数プロセスによる共有資源への同時アクセスを制御する' },
      { index: 2, text: 'プロセス間でデータを転送する' },
      { index: 3, text: 'デッドロックを自動的に解消する' },
    ],
    answer: 1,
    explanation: 'セマフォはプロセス（スレッド）の同期に使用される仕組みで、共有資源へのアクセス数を管理するカウンタと P 操作（wait）・V 操作（signal）で構成される。クリティカルセクションへの排他制御を実現し競合状態（レースコンディション）を防ぐ。なお不適切な使用がデッドロックを引き起こすこともある。',
  },
  {
    id: 'OS-004',
    category: 'os',
    categoryName: 'OS・コンピュータシステム',
    difficulty: 2,
    year: null,
    tags: ['キャッシュメモリ', '記憶装置'],
    question: 'CPU のキャッシュメモリに関する説明として適切なものはどれか。',
    choices: [
      { index: 0, text: 'メインメモリよりも容量が大きく低速なメモリである' },
      { index: 1, text: 'CPU とメインメモリの速度差を緩和するために使用される高速なメモリである' },
      { index: 2, text: 'ハードディスクの代わりに使用される永続的なメモリである' },
      { index: 3, text: 'キャッシュのヒット率が低いほどシステムの性能が向上する' },
    ],
    answer: 1,
    explanation: 'キャッシュメモリは CPU とメインメモリ（RAM）の速度差を緩和するため、頻繁にアクセスされるデータをコピーして保持する高速・小容量のメモリ。L1・L2・L3 などの階層がある。ヒット率（アクセスしたデータがキャッシュに存在する確率）が高いほど性能が向上する。',
  },
  {
    id: 'OS-005',
    category: 'os',
    categoryName: 'OS・コンピュータシステム',
    difficulty: 3,
    year: null,
    tags: ['キャッシュメモリ', '実効アクセス時間', '計算'],
    question: 'キャッシュメモリのアクセス時間が 5ns、主記憶のアクセス時間が 100ns、キャッシュのヒット率が 0.9 のとき、実効アクセス時間は何 ns か。',
    choices: [
      { index: 0, text: '14.5 ns' },
      { index: 1, text: '52.5 ns' },
      { index: 2, text: '10 ns' },
      { index: 3, text: '55 ns' },
    ],
    answer: 0,
    explanation: '実効アクセス時間 ＝ ヒット率 × キャッシュアクセス時間 ＋ (1－ヒット率) × 主記憶アクセス時間\n＝ 0.9 × 5 ＋ 0.1 × 100\n＝ 4.5 ＋ 10\n＝ 14.5 ns\nヒット率が高いほどキャッシュの恩恵が大きく実効アクセス時間が短くなる。この計算式は頻出なので必ず覚えること。',
  },
];

// ─── 分野別学習テキスト ─────────────────────────────────────
const SUBJECTS_DATA = [
  {
    id: 'algorithm',
    name: 'アルゴリズム・データ構造',
    nameEn: 'Algorithm & Data Structures',
    color: '#7950F2',
    icon: '⚙️',
    description: 'プログラムの効率を決める基礎理論。計算量、データ構造、ソート・探索アルゴリズムを体系的に学ぶ。',
    importance: 5,
    amCount: '約 6〜8 問',
    sections: [
      {
        id: 'complexity',
        title: '計算量と O 記法',
        content: `
          <p>アルゴリズムの効率を表す尺度として <strong>時間計算量</strong>（実行時間）と <strong>空間計算量</strong>（メモリ使用量）があります。計算量は入力サイズ <em>n</em> に対する関数として表し、<strong>O 記法（ビッグ・オー記法）</strong> で最悪ケースを示します。</p>
          <table class="content-table">
            <thead><tr><th>O 記法</th><th>名称</th><th>例</th></tr></thead>
            <tbody>
              <tr><td>O(1)</td><td>定数時間</td><td>配列の添字アクセス、ハッシュ表の検索</td></tr>
              <tr><td>O(log n)</td><td>対数時間</td><td>二分探索、平衡二分探索木</td></tr>
              <tr><td>O(n)</td><td>線形時間</td><td>線形探索、1 回のループ</td></tr>
              <tr><td>O(n log n)</td><td>線形対数時間</td><td>マージソート、クイックソート（平均）</td></tr>
              <tr><td>O(n²)</td><td>二乗時間</td><td>バブルソート、選択ソート（最悪）</td></tr>
            </tbody>
          </table>
          <div class="key-point">💡 計算量の大小関係：O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²)</div>
        `,
        keyPoints: ['O(n log n) のソートは O(n²) より大幅に高速', '二分探索は O(log n) — 1,000 件で最大 10 回', '計算量は入力サイズが大きくなるほど差が顕著になる'],
      },
      {
        id: 'data-structures',
        title: '基本データ構造',
        content: `
          <h4>配列（Array）</h4>
          <p>連続したメモリ領域に要素を格納する。添字によるランダムアクセスは O(1) だが、中間への挿入・削除は後続要素をシフトするため O(n) となる。</p>

          <h4>連結リスト（Linked List）</h4>
          <p>各要素がデータと次の要素へのポインタを持つ構造。先頭への挿入・削除は O(1) だが、ランダムアクセスは O(n)。</p>

          <h4>スタック（Stack）</h4>
          <p><strong>LIFO（Last In First Out：後入れ先出し）</strong> 構造。PUSH（追加）と POP（取り出し）の 2 操作。関数の呼び出し管理（コールスタック）、深さ優先探索、逆ポーランド記法の計算などに使用。</p>

          <h4>キュー（Queue）</h4>
          <p><strong>FIFO（First In First Out：先入れ先出し）</strong> 構造。enqueue（追加）と dequeue（取り出し）の 2 操作。幅優先探索、印刷ジョブ管理などに使用。</p>

          <h4>ハッシュ表（Hash Table）</h4>
          <p>ハッシュ関数でキーをインデックスに変換し、配列に格納する。平均計算量 O(1) で探索・挿入・削除が可能。<strong>衝突（コリジョン）</strong> への対処が重要。</p>
          <ul>
            <li><strong>チェイン法</strong>：同じインデックスの複数データを連結リストで管理</li>
            <li><strong>オープンアドレス法</strong>：衝突時に別の空きスロットを探す</li>
          </ul>
          <div class="key-point">💡 スタック = LIFO（関数呼び出し）、キュー = FIFO（印刷待ち）と覚えよう</div>
        `,
        keyPoints: ['スタック: LIFO（後入れ先出し）', 'キュー: FIFO（先入れ先出し）', 'ハッシュ表: 平均 O(1)、衝突対策が必要'],
      },
      {
        id: 'sort',
        title: 'ソートアルゴリズム',
        content: `
          <table class="content-table">
            <thead>
              <tr><th>アルゴリズム</th><th>平均</th><th>最悪</th><th>安定性</th><th>特徴</th></tr>
            </thead>
            <tbody>
              <tr><td>バブルソート</td><td>O(n²)</td><td>O(n²)</td><td>安定</td><td>隣接要素を比較・交換</td></tr>
              <tr><td>選択ソート</td><td>O(n²)</td><td>O(n²)</td><td>不安定</td><td>最小値を選んで先頭へ</td></tr>
              <tr><td>挿入ソート</td><td>O(n²)</td><td>O(n²)</td><td>安定</td><td>整列済み部分に挿入。最良 O(n)</td></tr>
              <tr><td>マージソート</td><td>O(n log n)</td><td>O(n log n)</td><td>安定</td><td>分割統治。追加メモリ必要</td></tr>
              <tr><td>クイックソート</td><td>O(n log n)</td><td>O(n²)</td><td>不安定</td><td>ピボット選択で効率が変わる</td></tr>
              <tr><td>ヒープソート</td><td>O(n log n)</td><td>O(n log n)</td><td>不安定</td><td>追加メモリ不要</td></tr>
            </tbody>
          </table>
          <p><strong>安定ソート</strong>とは、等しいキーを持つ要素の相対順序が整列後も保持されるソートのこと。</p>
          <div class="key-point">💡 試験頻出：バブルソートの比較回数 n(n-1)/2、クイックソートの最悪 O(n²)</div>
        `,
        keyPoints: ['高速ソートは O(n log n) — マージ・クイック・ヒープ', 'バブル・選択・挿入は O(n²)', 'クイックソートは最悪 O(n²) になる'],
      },
      {
        id: 'search',
        title: '探索アルゴリズム',
        content: `
          <h4>線形探索（Linear Search）</h4>
          <p>先頭から順に 1 つずつ目的のデータと比較する。データの整列は不要だが、計算量は O(n)。</p>

          <h4>二分探索（Binary Search）</h4>
          <p><strong>整列済みデータ</strong> に対して適用可能。探索範囲の中央値と比較し、毎回範囲を半分に絞る。計算量 O(log n)。</p>
          <p>例：1,000 件 → 最大 10 回（log₂1000 ≈ 9.97）、100 万件 → 最大 20 回（log₂1,000,000 ≈ 19.93）</p>

          <h4>ハッシュ探索</h4>
          <p>ハッシュ関数でキーをインデックスに変換し、直接アクセスする。衝突がなければ O(1)。</p>
          <div class="key-point">💡 二分探索の前提：データが整列済みであること</div>
        `,
        keyPoints: ['線形探索: O(n) — 整列不要', '二分探索: O(log n) — 整列済みが前提', '1,000 件の二分探索は最大 10 回'],
      },
    ],
  },

  {
    id: 'network',
    name: 'ネットワーク',
    nameEn: 'Network',
    color: '#1971C2',
    icon: '🌐',
    description: 'インターネットの仕組みを支えるプロトコル群。OSI参照モデル、TCP/IP、各種プロトコルを習得する。',
    importance: 5,
    amCount: '約 6〜8 問',
    sections: [
      {
        id: 'osi',
        title: 'OSI 参照モデルと TCP/IP モデル',
        content: `
          <table class="content-table">
            <thead>
              <tr><th>OSI 層</th><th>層名</th><th>TCP/IP</th><th>代表プロトコル</th></tr>
            </thead>
            <tbody>
              <tr><td>第 7 層</td><td>アプリケーション</td><td rowspan="3">アプリケーション層</td><td>HTTP, HTTPS, FTP, SMTP, POP3, DNS, DHCP</td></tr>
              <tr><td>第 6 層</td><td>プレゼンテーション</td><td>TLS/SSL, データ変換</td></tr>
              <tr><td>第 5 層</td><td>セッション</td><td>セッション管理</td></tr>
              <tr><td>第 4 層</td><td>トランスポート</td><td>トランスポート層</td><td><strong>TCP, UDP</strong></td></tr>
              <tr><td>第 3 層</td><td>ネットワーク</td><td>インターネット層</td><td><strong>IP, ICMP, ARP</strong></td></tr>
              <tr><td>第 2 層</td><td>データリンク</td><td rowspan="2">ネットワーク<br>インタフェース層</td><td>Ethernet, PPP</td></tr>
              <tr><td>第 1 層</td><td>物理</td><td>ケーブル, 無線</td></tr>
            </tbody>
          </table>
          <div class="key-point">💡 各層の覚え方：「物・デ・ネ・ト・セ・プ・ア」（物理・データリンク・ネットワーク・トランスポート・セッション・プレゼンテーション・アプリケーション）</div>
        `,
        keyPoints: ['TCP/UDP: 第 4 層（トランスポート）', 'IP: 第 3 層（ネットワーク）', 'HTTP/DNS: 第 7 層（アプリケーション）'],
      },
      {
        id: 'ip-subnet',
        title: 'IP アドレスとサブネット',
        content: `
          <h4>IPv4 アドレス</h4>
          <p>32 ビットの数値。8 ビットずつ 4 つのオクテットに分けてドット表記（例: 192.168.1.1）。</p>

          <h4>サブネットマスクと CIDR</h4>
          <p>サブネットマスクはネットワーク部とホスト部を分ける。<strong>CIDR（Classless Inter-Domain Routing）</strong> 表記では <code>/n</code> でネットワーク部のビット数を示す。</p>
          <table class="content-table">
            <thead><tr><th>CIDR</th><th>サブネットマスク</th><th>ホスト数</th></tr></thead>
            <tbody>
              <tr><td>/24</td><td>255.255.255.0</td><td>254</td></tr>
              <tr><td>/25</td><td>255.255.255.128</td><td>126</td></tr>
              <tr><td>/26</td><td>255.255.255.192</td><td>62</td></tr>
              <tr><td>/27</td><td>255.255.255.224</td><td>30</td></tr>
            </tbody>
          </table>

          <h4>ネットワークアドレスの計算</h4>
          <p><strong>ネットワークアドレス = IP アドレス AND サブネットマスク（ビット AND）</strong></p>
          <p>例: 192.168.10.100 (/26 = 255.255.255.192)<br>
          100 → 01100100、192 → 11000000、AND → 01000000 = 64<br>
          ∴ ネットワークアドレスは 192.168.10.64</p>
          <div class="key-point">💡 ホスト数 = 2^(ホスト部のビット数) − 2（ネットワーク・ブロードキャストを除く）</div>
        `,
        keyPoints: ['ネットワークアドレス = IP AND サブネットマスク', '/26 → 1 オクテットの最上位 2 ビットがネットワーク部', 'ホスト数 = 2^ホストビット数 − 2'],
      },
      {
        id: 'protocols',
        title: '主要プロトコル',
        content: `
          <h4>TCP と UDP の比較</h4>
          <table class="content-table">
            <thead><tr><th>項目</th><th>TCP</th><th>UDP</th></tr></thead>
            <tbody>
              <tr><td>接続方式</td><td>コネクション型</td><td>コネクションレス型</td></tr>
              <tr><td>信頼性</td><td>あり（再送・順序保証）</td><td>なし</td></tr>
              <tr><td>速度</td><td>遅い（オーバーヘッドあり）</td><td>速い</td></tr>
              <tr><td>用途</td><td>HTTP, FTP, SMTP, SSH</td><td>DNS, NTP, 動画ストリーミング</td></tr>
            </tbody>
          </table>

          <h4>TCP 3 ウェイハンドシェイク</h4>
          <p>接続確立時は <strong>SYN → SYN/ACK → ACK</strong> の 3 ステップ。切断時は FIN/ACK を双方向に交換する。</p>

          <h4>主要アプリケーションプロトコル</h4>
          <table class="content-table">
            <thead><tr><th>プロトコル</th><th>ポート</th><th>説明</th></tr></thead>
            <tbody>
              <tr><td>HTTP</td><td>80</td><td>Web コンテンツ転送</td></tr>
              <tr><td>HTTPS</td><td>443</td><td>TLS で暗号化された HTTP</td></tr>
              <tr><td>FTP</td><td>20/21</td><td>ファイル転送</td></tr>
              <tr><td>SMTP</td><td>25</td><td>メール送信</td></tr>
              <tr><td>POP3</td><td>110</td><td>メール受信</td></tr>
              <tr><td>DNS</td><td>53</td><td>ドメイン名解決</td></tr>
              <tr><td>DHCP</td><td>67/68</td><td>IP アドレス自動割当</td></tr>
              <tr><td>SSH</td><td>22</td><td>暗号化リモートアクセス</td></tr>
            </tbody>
          </table>
          <div class="key-point">💡 ポート番号（80, 443, 25, 22）は試験頻出。必ず暗記すること。</div>
        `,
        keyPoints: ['TCP: 信頼性あり、コネクション型', 'UDP: 高速、コネクションレス型', 'HTTP:80, HTTPS:443, SMTP:25, SSH:22'],
      },
      {
        id: 'network-devices',
        title: 'ネットワーク機器',
        content: `
          <table class="content-table">
            <thead><tr><th>機器</th><th>OSI 層</th><th>機能</th></tr></thead>
            <tbody>
              <tr><td>リピータ</td><td>第 1 層（物理）</td><td>電気信号を増幅して中継する</td></tr>
              <tr><td>ブリッジ</td><td>第 2 層（データリンク）</td><td>MAC アドレスで転送を制御する</td></tr>
              <tr><td>スイッチ（L2）</td><td>第 2 層（データリンク）</td><td>MAC アドレステーブルで特定ポートへ転送</td></tr>
              <tr><td>ルータ</td><td>第 3 層（ネットワーク）</td><td>IP アドレスで異なるネットワークを接続</td></tr>
              <tr><td>L3 スイッチ</td><td>第 3 層（ネットワーク）</td><td>ルータ機能を持つスイッチ。高速転送</td></tr>
              <tr><td>ゲートウェイ</td><td>第 4〜7 層</td><td>異なるプロトコル間の変換</td></tr>
            </tbody>
          </table>
          <div class="key-point">💡 ルータは第 3 層（IP）で動作、スイッチ（L2）は第 2 層（MAC）で動作する</div>
        `,
        keyPoints: ['ルータ: 第 3 層、IP アドレスで経路制御', 'L2 スイッチ: 第 2 層、MAC アドレスで転送', 'リピータ: 第 1 層、信号増幅のみ'],
      },
    ],
  },

  {
    id: 'database',
    name: 'データベース',
    nameEn: 'Database',
    color: '#0CA678',
    icon: '🗄️',
    description: '関係データベースの設計と操作。SQL文法、正規化理論、トランザクション管理の3本柱を習得する。',
    importance: 5,
    amCount: '約 6〜8 問',
    sections: [
      {
        id: 'rdb-basics',
        title: '関係データベースの基礎',
        content: `
          <h4>基本用語</h4>
          <table class="content-table">
            <thead><tr><th>用語</th><th>説明</th></tr></thead>
            <tbody>
              <tr><td>テーブル（表・リレーション）</td><td>行と列からなるデータの集合</td></tr>
              <tr><td>行（タプル・レコード）</td><td>1 件のデータ</td></tr>
              <tr><td>列（属性・フィールド）</td><td>データの項目</td></tr>
              <tr><td>主キー（Primary Key）</td><td>行を一意に識別する列（NULL 不可）</td></tr>
              <tr><td>外部キー（Foreign Key）</td><td>他テーブルの主キーを参照する列（参照整合性）</td></tr>
              <tr><td>ビュー</td><td>SELECT 文の結果を仮想テーブルとして定義したもの</td></tr>
            </tbody>
          </table>

          <h4>関係演算</h4>
          <ul>
            <li><strong>選択（Selection）</strong>：条件に合う行を取り出す（SQL の WHERE 句）</li>
            <li><strong>射影（Projection）</strong>：必要な列だけを取り出す（SQL の SELECT 列指定）</li>
            <li><strong>結合（Join）</strong>：複数テーブルを結合する（SQL の JOIN）</li>
          </ul>
          <div class="key-point">💡 「選択 = 行の絞り込み」「射影 = 列の絞り込み」と覚えよう</div>
        `,
        keyPoints: ['主キー: 行を一意識別、NULL 不可', '外部キー: 参照整合性の制約', '選択→行、射影→列、結合→テーブル連結'],
      },
      {
        id: 'sql',
        title: 'SQL 文法',
        content: `
          <h4>基本的な SELECT 文</h4>
          <pre class="code-block">SELECT 列名1, 列名2
FROM テーブル名
WHERE 条件
ORDER BY 列名 [ASC|DESC]
LIMIT 件数;</pre>

          <h4>集約関数と GROUP BY</h4>
          <pre class="code-block">SELECT 部署コード, COUNT(*), AVG(給与)
FROM 社員
GROUP BY 部署コード
HAVING AVG(給与) >= 300000;</pre>
          <p>WHERE は行の絞り込み（集約前）、<strong>HAVING は集約後の絞り込み</strong>。</p>

          <h4>JOIN の種類</h4>
          <table class="content-table">
            <thead><tr><th>種類</th><th>結果</th></tr></thead>
            <tbody>
              <tr><td>INNER JOIN</td><td>両テーブルに一致するレコードのみ</td></tr>
              <tr><td>LEFT (OUTER) JOIN</td><td>左テーブルの全レコード + 右テーブルの一致分</td></tr>
              <tr><td>RIGHT (OUTER) JOIN</td><td>右テーブルの全レコード + 左テーブルの一致分</td></tr>
              <tr><td>FULL OUTER JOIN</td><td>両テーブルの全レコード</td></tr>
            </tbody>
          </table>
          <div class="key-point">💡 WHERE と HAVING の違い：WHERE は集約前、HAVING は集約後のフィルタ</div>
        `,
        keyPoints: ['GROUP BY + HAVING で集約後の絞り込み', 'INNER JOIN: 両テーブル一致のみ', 'LEFT JOIN: 左テーブルの全行を保持'],
      },
      {
        id: 'normalization',
        title: '正規化',
        content: `
          <p>データの冗長性を排除し更新異常を防ぐためにテーブルを分解する手順を <strong>正規化</strong> という。</p>

          <h4>第 1 正規形（1NF）</h4>
          <p>すべての属性が <strong>原子値</strong>（繰り返しグループや配列を含まない）である状態。</p>
          <p>例：「趣味」列に「読書,旅行」のように複数値を持つ → 正規化で 1 行 1 趣味に分解する。</p>

          <h4>第 2 正規形（2NF）</h4>
          <p>1NF かつ <strong>部分関数従属を排除</strong> した状態。すべての非キー属性が主キー全体に完全に従属している。</p>
          <p>複合主キー（A, B）のテーブルで、列 C が A だけに従属する場合 → 別テーブルに分離する。</p>

          <h4>第 3 正規形（3NF）</h4>
          <p>2NF かつ <strong>推移的関数従属を排除</strong> した状態。非キー属性から他の非キー属性への依存関係をなくす。</p>
          <p>例：社員 → 部署コード → 部署名 という依存関係 → 部署テーブルを別に作る。</p>

          <div class="key-point">💡 正規化の段階：1NF（繰り返し排除）→ 2NF（部分従属排除）→ 3NF（推移従属排除）</div>
        `,
        keyPoints: ['1NF: 繰り返し項目を排除（原子値）', '2NF: 部分関数従属を排除', '3NF: 推移的関数従属を排除'],
      },
      {
        id: 'transaction',
        title: 'トランザクションと ACID 特性',
        content: `
          <p>トランザクションとは、一連の処理をひとまとまりの論理単位として扱う仕組みです。</p>

          <h4>ACID 特性</h4>
          <table class="content-table">
            <thead><tr><th>特性</th><th>英語</th><th>説明</th></tr></thead>
            <tbody>
              <tr><td>原子性</td><td>Atomicity</td><td>全て実行 or 全て未実行（中途半端な状態は存在しない）</td></tr>
              <tr><td>一貫性</td><td>Consistency</td><td>処理前後でデータが整合性のある状態を保つ</td></tr>
              <tr><td>独立性</td><td>Isolation</td><td>並行実行中のトランザクションが互いの中間状態を見ない</td></tr>
              <tr><td>永続性</td><td>Durability</td><td>コミット後のデータは障害が発生しても失われない</td></tr>
            </tbody>
          </table>

          <h4>排他制御とデッドロック</h4>
          <p>複数トランザクションの同時アクセスを管理するために <strong>ロック</strong> を使用する。</p>
          <ul>
            <li><strong>共有ロック</strong>（S ロック）：読み取り時。他の読み取りは可能、書き込みは不可。</li>
            <li><strong>排他ロック</strong>（X ロック）：書き込み時。他の読み書き全て不可。</li>
          </ul>
          <p><strong>デッドロック</strong>：2 つのトランザクションが互いに相手のロック解放を待ち合う状態。タイムアウトやロック順序の統一で対処する。</p>
          <div class="key-point">💡 ACID の各文字と意味を正確に覚えること（頻出）</div>
        `,
        keyPoints: ['A（原子性）: 全実行 or 全未実行', 'I（独立性）: 並行実行時の中間状態は見えない', 'デッドロック: 互いのロック解放待ち'],
      },
    ],
  },

  {
    id: 'security',
    name: '情報セキュリティ',
    nameEn: 'Information Security',
    color: '#E03131',
    icon: '🔒',
    description: '午後試験の必須分野。暗号・認証・攻撃手法・対策を体系的に習得する。',
    importance: 5,
    amCount: '約 6〜8 問（午後必須）',
    sections: [
      {
        id: 'cryptography',
        title: '暗号技術の基礎',
        content: `
          <h4>共通鍵暗号（対称鍵暗号）</h4>
          <p>暗号化と復号に <strong>同一の鍵</strong> を使用する方式。処理が高速だが、鍵の安全な配送が課題（鍵配送問題）。</p>
          <p>代表例：<strong>AES</strong>（現在の標準）、DES（現在は安全でないため非推奨）</p>

          <h4>公開鍵暗号（非対称鍵暗号）</h4>
          <p>公開鍵と秘密鍵のペアを使用する方式。<strong>受信者の公開鍵で暗号化 → 受信者の秘密鍵で復号</strong>。鍵配送問題を解決できるが処理が遅い。</p>
          <p>代表例：<strong>RSA</strong>、楕円曲線暗号（ECC）</p>

          <h4>ハイブリッド暗号</h4>
          <p>実際の SSL/TLS 通信では、共通鍵暗号と公開鍵暗号を組み合わせる。公開鍵暗号で共通鍵を安全に交換し、実際のデータは高速な共通鍵暗号で暗号化する。</p>

          <h4>ハッシュ関数</h4>
          <p>任意長のデータから固定長の <strong>ハッシュ値（ダイジェスト）</strong> を生成する一方向関数。</p>
          <ul>
            <li><strong>SHA-256</strong>：現在の標準（256 ビット）</li>
            <li><strong>MD5</strong>：128 ビット。衝突の発見があり、現在は暗号用途に非推奨</li>
          </ul>
          <p>用途：パスワードの保存（ハッシュ化して保存）、データの完全性確認</p>
          <div class="key-point">💡 公開鍵暗号は「受信者の公開鍵で暗号化、受信者の秘密鍵で復号」</div>
        `,
        keyPoints: ['共通鍵: 高速、鍵配送問題あり（AES）', '公開鍵: 鍵配送問題なし、低速（RSA）', 'ハッシュ: 一方向、完全性確認（SHA-256）'],
      },
      {
        id: 'digital-signature',
        title: 'デジタル署名と PKI',
        content: `
          <h4>デジタル署名の仕組み</h4>
          <p>送信者が <strong>自身の秘密鍵</strong> でデータのハッシュ値を暗号化した「署名」を添付する。</p>
          <p>受信者は <strong>送信者の公開鍵</strong> で署名を検証することで、①送信者の本人確認と②データの改ざん検知を行う。</p>
          <p><em>注意：</em> デジタル署名は機密性（暗号化）ではなく、認証と完全性が目的。</p>

          <h4>PKI（公開鍵基盤）</h4>
          <p>公開鍵が本物であることを保証する仕組み。<strong>認証局（CA: Certificate Authority）</strong> が公開鍵の持ち主を確認し、<strong>デジタル証明書（X.509）</strong> を発行する。</p>
          <table class="content-table">
            <thead><tr><th>用語</th><th>説明</th></tr></thead>
            <tbody>
              <tr><td>認証局（CA）</td><td>証明書を発行する信頼できる第三者機関</td></tr>
              <tr><td>デジタル証明書</td><td>公開鍵と所有者情報を CA が署名した文書</td></tr>
              <tr><td>CRL</td><td>失効した証明書のリスト（Certificate Revocation List）</td></tr>
              <tr><td>OCSP</td><td>証明書の有効性をリアルタイムで確認するプロトコル</td></tr>
            </tbody>
          </table>
          <div class="key-point">💡 署名は「送信者の秘密鍵で署名 → 送信者の公開鍵で検証」（暗号化とは逆）</div>
        `,
        keyPoints: ['デジタル署名: 認証 + 完全性（機密性ではない）', '署名: 送信者秘密鍵で作成、公開鍵で検証', 'CA が公開鍵証明書を発行する'],
      },
      {
        id: 'attacks',
        title: '主な攻撃手法と対策',
        content: `
          <table class="content-table">
            <thead><tr><th>攻撃手法</th><th>概要</th><th>主な対策</th></tr></thead>
            <tbody>
              <tr>
                <td>SQL インジェクション</td>
                <td>入力値に SQL 文を埋め込みデータベースを不正操作</td>
                <td>プレースホルダ（バインド変数）の使用</td>
              </tr>
              <tr>
                <td>XSS（クロスサイトスクリプティング）</td>
                <td>HTML にスクリプトを埋め込みブラウザ上で実行</td>
                <td>HTML エスケープ処理（&amp; &lt; &gt; など）</td>
              </tr>
              <tr>
                <td>CSRF（クロスサイトリクエストフォージェリ）</td>
                <td>正規ユーザーに意図しないリクエストを送らせる</td>
                <td>CSRF トークンの検証、SameSite Cookie</td>
              </tr>
              <tr>
                <td>フィッシング</td>
                <td>偽サイトに誘導し認証情報を詐取</td>
                <td>多要素認証、URL 確認の習慣化</td>
              </tr>
              <tr>
                <td>ブルートフォース攻撃</td>
                <td>パスワードを総当たりで試行</td>
                <td>アカウントロック、多要素認証</td>
              </tr>
              <tr>
                <td>DoS / DDoS 攻撃</td>
                <td>大量リクエストでサービスを妨害</td>
                <td>レートリミット、CDN, WAF</td>
              </tr>
              <tr>
                <td>ゼロデイ攻撃</td>
                <td>未修正の脆弱性を悪用</td>
                <td>迅速なパッチ適用、IPS による検知</td>
              </tr>
            </tbody>
          </table>
          <div class="key-point">💡 SQL インジェクション対策は「プレースホルダ」、XSS 対策は「HTML エスケープ」が最重要</div>
        `,
        keyPoints: ['SQLi: プレースホルダで対策', 'XSS: HTML エスケープで対策', 'CSRF: CSRF トークンで対策'],
      },
      {
        id: 'security-mgmt',
        title: 'セキュリティ管理とツール',
        content: `
          <h4>多要素認証（MFA）</h4>
          <p>3 種類の認証要素から 2 つ以上を組み合わせる。</p>
          <ul>
            <li><strong>知識要素</strong>：パスワード、PIN コード、秘密の質問</li>
            <li><strong>所持要素</strong>：スマートフォン（SMS OTP）、ハードウェアトークン、IC カード</li>
            <li><strong>生体要素</strong>：指紋、顔認証、静脈認証</li>
          </ul>
          <p><em>注：</em> パスワードと PIN コードはともに知識要素 → 多要素認証ではない。</p>

          <h4>セキュリティ機器・ツール</h4>
          <table class="content-table">
            <thead><tr><th>ツール</th><th>説明</th></tr></thead>
            <tbody>
              <tr><td>ファイアウォール</td><td>IP アドレス・ポート番号で通信を制御。パケットフィルタリング方式が基本。</td></tr>
              <tr><td>IDS（侵入検知）</td><td>不正アクセスを検知して管理者に通知するシステム</td></tr>
              <tr><td>IPS（侵入防止）</td><td>不正アクセスを検知して自動的にブロックするシステム</td></tr>
              <tr><td>WAF</td><td>Web アプリケーション専用のファイアウォール。SQL インジェクション・XSS を防ぐ。</td></tr>
              <tr><td>VPN</td><td>公衆ネットワーク上に仮想的な専用線を構築し暗号化通信を行う</td></tr>
            </tbody>
          </table>
          <div class="key-point">💡 MFA は異なる種類の認証要素を組み合わせること。同種はカウントしない。</div>
        `,
        keyPoints: ['MFA: 異なる種類（知識・所持・生体）を組合せ', 'IDS: 検知のみ、IPS: 検知＋自動ブロック', 'WAF: Web アプリ専用ファイアウォール'],
      },
    ],
  },

  {
    id: 'os',
    name: 'OS・コンピュータシステム',
    nameEn: 'OS & Computer Systems',
    color: '#E67700',
    icon: '💻',
    description: 'コンピュータの根幹となるOS機能。プロセス管理、メモリ管理、記憶装置階層を理解する。',
    importance: 4,
    amCount: '約 6〜8 問',
    sections: [
      {
        id: 'process',
        title: 'プロセス管理と CPU スケジューリング',
        content: `
          <h4>プロセスとスレッド</h4>
          <ul>
            <li><strong>プロセス</strong>：実行中のプログラム。メモリ空間を独立して持つ。</li>
            <li><strong>スレッド</strong>：プロセス内の実行単位。同一プロセス内でメモリを共有する。スレッドの切り替えはプロセス切り替えより軽量。</li>
          </ul>

          <h4>プロセスの状態遷移</h4>
          <p>実行可能（Ready）→ 実行中（Running）→ 待機（Waiting）の 3 状態を遷移する。</p>

          <h4>CPU スケジューリング方式</h4>
          <table class="content-table">
            <thead><tr><th>方式</th><th>概要</th><th>特徴</th></tr></thead>
            <tbody>
              <tr><td>FCFS（先着順）</td><td>到着順に処理</td><td>実装が簡単。長いジョブが後続を待たせる</td></tr>
              <tr><td>ラウンドロビン（RR）</td><td>均等なタイムスライスを割り当てる</td><td>公平。対話型システムに最適</td></tr>
              <tr><td>優先度スケジューリング</td><td>優先度が高いプロセスを先に実行</td><td>低優先度プロセスが飢餓状態になる可能性</td></tr>
              <tr><td>SJF（最短ジョブ優先）</td><td>実行時間が最も短いプロセスを先に実行</td><td>平均待ち時間が最小。実行時間の予測が必要</td></tr>
            </tbody>
          </table>
          <div class="key-point">💡 ラウンドロビンは「均等なタイムスライス」が特徴。時分割システムの基本。</div>
        `,
        keyPoints: ['スレッドはプロセス内でメモリを共有する', 'ラウンドロビン: 均等タイムスライス、公平', 'SJF: 平均待ち時間最小だが実行時間の予測が必要'],
      },
      {
        id: 'memory',
        title: 'メモリ管理と仮想記憶',
        content: `
          <h4>仮想記憶</h4>
          <p>物理メモリ（RAM）よりも大きなアドレス空間をプログラムに提供する仕組み。補助記憶（HDD/SSD）を仮想的な拡張メモリとして利用する。</p>

          <h4>ページング</h4>
          <p>仮想記憶を一定サイズの <strong>ページ</strong> に分割して管理する方式。<strong>ページテーブル</strong> で仮想アドレスから物理アドレスへの変換を行う。</p>
          <ul>
            <li><strong>ページフォルト</strong>：参照しようとしたページが物理メモリにない場合に発生する割り込み。OS がディスクからページを読み込む（スワップイン）。</li>
            <li><strong>スラッシング</strong>：ページフォルトが頻発し、スワップ処理に CPU がほとんど費やされる状態。性能が急激に低下する。</li>
          </ul>

          <h4>ページ置き換えアルゴリズム</h4>
          <table class="content-table">
            <thead><tr><th>アルゴリズム</th><th>概要</th></tr></thead>
            <tbody>
              <tr><td>FIFO</td><td>最初にロードされたページを追い出す</td></tr>
              <tr><td>LRU（最近最も長く未使用）</td><td>最後にアクセスされた時刻が最も古いページを追い出す</td></tr>
              <tr><td>最適（OPT）</td><td>将来最も長く使われないページを追い出す（理論上最適）</td></tr>
            </tbody>
          </table>
          <div class="key-point">💡 ページフォルト → OS がディスクからページを読み込む → コスト大</div>
        `,
        keyPoints: ['仮想記憶: 物理メモリより大きなアドレス空間を提供', 'ページフォルト: 参照ページが物理メモリにない', 'スラッシング: ページフォルト頻発で性能急低下'],
      },
      {
        id: 'cache',
        title: '記憶装置の階層とキャッシュ',
        content: `
          <h4>記憶装置の階層</h4>
          <table class="content-table">
            <thead><tr><th>種類</th><th>速度</th><th>容量</th><th>揮発性</th></tr></thead>
            <tbody>
              <tr><td>CPU レジスタ</td><td>最速</td><td>最小（数〜数十個）</td><td>揮発</td></tr>
              <tr><td>キャッシュ（L1/L2/L3）</td><td>非常に速い</td><td>KB〜数十 MB</td><td>揮発</td></tr>
              <tr><td>メインメモリ（RAM）</td><td>速い</td><td>GB</td><td>揮発</td></tr>
              <tr><td>SSD</td><td>普通</td><td>TB</td><td>不揮発</td></tr>
              <tr><td>HDD</td><td>遅い</td><td>TB</td><td>不揮発</td></tr>
            </tbody>
          </table>

          <h4>実効アクセス時間の計算</h4>
          <p><strong>実効アクセス時間 ＝ ヒット率 × キャッシュアクセス時間 ＋ (1 − ヒット率) × 主記憶アクセス時間</strong></p>
          <p>例：ヒット率 0.9、キャッシュ 5ns、主記憶 100ns<br>
          ＝ 0.9 × 5 ＋ 0.1 × 100 ＝ 4.5 ＋ 10 ＝ <strong>14.5 ns</strong></p>
          <div class="key-point">💡 この計算式はほぼ毎回出題される。必ず覚えること！</div>
        `,
        keyPoints: ['速い順: レジスタ > キャッシュ > RAM > SSD > HDD', '実効アクセス時間 = ヒット率 × キャッシュ時間 + (1-ヒット率) × 主記憶時間', 'ヒット率 0.9、キャッシュ 5ns、主記憶 100ns → 14.5 ns'],
      },
      {
        id: 'interrupt',
        title: '割り込みと入出力',
        content: `
          <h4>割り込み（Interrupt）</h4>
          <p>CPU が実行中の処理を一時中断し、割り込みハンドラ（割り込み処理プログラム）を実行する機構。</p>
          <table class="content-table">
            <thead><tr><th>種類</th><th>概要</th><th>例</th></tr></thead>
            <tbody>
              <tr><td>ハードウェア割り込み</td><td>外部デバイスからの信号</td><td>キーボード入力、タイマ割り込み、I/O 完了通知</td></tr>
              <tr><td>ソフトウェア割り込み（例外）</td><td>プログラム実行中に発生</td><td>ゼロ除算、不正メモリアクセス、システムコール</td></tr>
            </tbody>
          </table>

          <h4>DMA（Direct Memory Access）</h4>
          <p>CPU を介さずに I/O デバイスとメモリ間でデータ転送を行う仕組み。CPU は転送開始の指示と完了通知の受け取りのみを行う。大量データ転送時に CPU の負荷を大幅に軽減できる。</p>

          <h4>システムコール</h4>
          <p>アプリケーションが OS のカーネル機能（ファイル操作、プロセス生成、ネットワーク通信など）を使用するためのインタフェース。ソフトウェア割り込みによって実現される。</p>
          <div class="key-point">💡 DMA: CPU を介さずデバイス↔メモリ間でデータ転送 → CPU の負荷軽減</div>
        `,
        keyPoints: ['割り込み: 処理中断して割り込みハンドラを実行', 'ハードウェア割り込み: キーボード、タイマ、I/O', 'DMA: CPU 介さずにメモリ↔デバイス間転送'],
      },
    ],
  },

  // ─── フェーズ2 追加分野 ───────────────────────────────

  {
    id: 'software-dev',
    name: 'ソフトウェア開発',
    nameEn: 'Software Development',
    color: '#7C3AED',
    icon: '🖥️',
    description: '開発手法・テスト技法・UML・品質管理。午後のプログラミング問題にも直結する重要分野。',
    importance: 4,
    amCount: '約 6〜8 問',
    sections: [
      {
        id: 'dev-models',
        title: 'ソフトウェア開発モデル',
        content: `
          <table class="content-table">
            <thead><tr><th>モデル</th><th>概要</th><th>特徴・向く場面</th></tr></thead>
            <tbody>
              <tr><td>ウォーターフォール</td><td>要件定義→設計→実装→テストを順番に進める</td><td>要件が明確で変更が少ない大規模開発</td></tr>
              <tr><td>プロトタイプ</td><td>試作品を作りユーザー確認を繰り返す</td><td>要件が不明確な場合。ユーザー合意を得やすい</td></tr>
              <tr><td>スパイラル</td><td>リスク分析を繰り返しながら螺旋状に進める</td><td>リスクの高い大規模開発</td></tr>
              <tr><td>アジャイル（スクラム等）</td><td>短い反復（スプリント）で動くソフトを届け続ける</td><td>要件変更が多い・迅速なリリースが必要</td></tr>
              <tr><td>インクリメンタル</td><td>機能を段階的に追加しながら複数回リリース</td><td>段階的な機能拡張が必要なシステム</td></tr>
            </tbody>
          </table>
          <div class="key-point">💡 ウォーターフォール = 順番に一方向。アジャイル = 反復・変化への対応</div>
        `,
        keyPoints: ['ウォーターフォール: 順次・要件固定向け', 'アジャイル: 反復・変化対応向け', 'スパイラル: リスク分析を中心に据えた大規模開発向け'],
      },
      {
        id: 'testing',
        title: 'テスト技法',
        content: `
          <h4>ブラックボックステスト vs ホワイトボックステスト</h4>
          <table class="content-table">
            <thead><tr><th>種類</th><th>基準</th><th>技法</th></tr></thead>
            <tbody>
              <tr><td>ブラックボックステスト</td><td>外部仕様（入出力関係）に基づく</td><td>同値分割法、限界値分析、デシジョンテーブル</td></tr>
              <tr><td>ホワイトボックステスト</td><td>内部論理（プログラム構造）に基づく</td><td>命令網羅（C0）、分岐網羅（C1）、条件網羅（C2）</td></tr>
            </tbody>
          </table>

          <h4>同値分割法</h4>
          <p>入力値を「有効同値クラス」と「無効同値クラス」に分類し、各クラスから代表値を選んでテストする手法。例：1〜100 の整数入力 → 有効クラス（代表値: 50）、無効クラス（代表値: 0, 101）。</p>

          <h4>限界値分析</h4>
          <p>同値クラスの境界値に着目してテストする手法。バグは境界付近に多く潜む。例：1〜100 の範囲 → 0, 1, 100, 101 をテストする。</p>

          <h4>テストの V 字モデル</h4>
          <table class="content-table">
            <thead><tr><th>開発工程</th><th>対応するテスト</th></tr></thead>
            <tbody>
              <tr><td>要件定義</td><td>システムテスト（受入テスト）</td></tr>
              <tr><td>外部設計</td><td>システムテスト</td></tr>
              <tr><td>内部設計</td><td>結合テスト</td></tr>
              <tr><td>詳細設計</td><td>単体テスト（ユニットテスト）</td></tr>
            </tbody>
          </table>
          <div class="key-point">💡 ブラックボックス = 外部仕様。ホワイトボックス = 内部構造（コード）</div>
        `,
        keyPoints: ['ブラックボックス: 仕様（入出力）ベース', 'ホワイトボックス: コード構造ベース', '同値分割: クラス代表値でテスト。限界値: 境界値をテスト'],
      },
      {
        id: 'uml',
        title: 'UML ダイアグラム',
        content: `
          <p>UML（Unified Modeling Language）はソフトウェアの設計・仕様を視覚化するための標準記法。</p>
          <table class="content-table">
            <thead><tr><th>ダイアグラム</th><th>種類</th><th>用途</th></tr></thead>
            <tbody>
              <tr><td>クラス図</td><td>構造図</td><td>クラスの属性・操作・関係（汎化・集約・依存）を表す</td></tr>
              <tr><td>ユースケース図</td><td>振る舞い図</td><td>システムとアクターの機能的な関係を表す</td></tr>
              <tr><td>シーケンス図</td><td>振る舞い図</td><td>オブジェクト間のメッセージ交換を時系列で表す</td></tr>
              <tr><td>アクティビティ図</td><td>振る舞い図</td><td>処理の流れ（フロー）をフローチャートに似た形で表す</td></tr>
              <tr><td>状態機械図</td><td>振る舞い図</td><td>オブジェクトの状態遷移を表す</td></tr>
            </tbody>
          </table>

          <h4>クラス図の主な関係</h4>
          <ul>
            <li><strong>汎化（Generalization）</strong>：継承関係（is-a 関係）。犬 is-a 動物。</li>
            <li><strong>集約（Aggregation）</strong>：全体と部分の関係（has-a）。部品が独立して存在できる。</li>
            <li><strong>コンポジション（Composition）</strong>：強い集約。部分が全体なしに存在できない。</li>
            <li><strong>依存（Dependency）</strong>：一方が他方を使用する関係。</li>
          </ul>
          <div class="key-point">💡 汎化 = 継承（is-a）、集約/コンポジション = 含む（has-a）</div>
        `,
        keyPoints: ['クラス図: 静的な構造（属性・操作・関係）を表す', 'シーケンス図: 時系列のメッセージ交換を表す', '汎化=継承(is-a)、コンポジション=含む(has-a)'],
      },
      {
        id: 'quality',
        title: 'ソフトウェア品質',
        content: `
          <h4>SQuaRE（ISO/IEC 25010）品質特性</h4>
          <table class="content-table">
            <thead><tr><th>品質特性</th><th>説明</th></tr></thead>
            <tbody>
              <tr><td>機能適合性</td><td>要求された機能を正確に実行できる度合い</td></tr>
              <tr><td>性能効率性</td><td>使用するリソース量に対する性能の度合い</td></tr>
              <tr><td>互換性</td><td>他のシステムと情報を交換・共有できる能力</td></tr>
              <tr><td>使用性</td><td>ユーザーが目標を達成できる有効性・効率性・満足度</td></tr>
              <tr><td>信頼性</td><td>指定された条件で機能を維持できる度合い</td></tr>
              <tr><td>セキュリティ</td><td>情報・システムを保護する度合い</td></tr>
              <tr><td>保守性</td><td>修正・改善のしやすさ</td></tr>
              <tr><td>移植性</td><td>異なる環境へ移転できる能力</td></tr>
            </tbody>
          </table>

          <h4>レビュー技法</h4>
          <ul>
            <li><strong>インスペクション</strong>：仕様書・設計書・コードなどの成果物を公式な手順で審査する。最も厳格なレビュー。</li>
            <li><strong>ウォークスルー</strong>：作成者が参加者に成果物を説明しながら欠陥を探す。非公式。</li>
            <li><strong>ピアレビュー</strong>：同僚による相互確認。</li>
          </ul>
          <div class="key-point">💡 インスペクション = 最も厳格な公式レビュー（モデレータが主導）</div>
        `,
        keyPoints: ['SQuaRE の 8 品質特性（機能・性能・互換・使用・信頼・セキュリティ・保守・移植）', 'インスペクション: 最も厳格な公式レビュー', '同値分割＋限界値分析で効率的なテストケースを設計'],
      },
    ],
  },

  {
    id: 'project-mgmt',
    name: 'プロジェクトマネジメント',
    nameEn: 'Project Management',
    color: '#0369A1',
    icon: '📋',
    description: 'PMBOK・WBS・EVM・リスク管理。午後の選択問題にも頻出する実践的マネジメント知識。',
    importance: 4,
    amCount: '約 6〜8 問',
    sections: [
      {
        id: 'pmbok',
        title: 'PMBOK とプロセスグループ',
        content: `
          <p>PMBOK（Project Management Body of Knowledge）は PMI（米国プロジェクトマネジメント協会）が策定したプロジェクトマネジメントの知識体系。</p>

          <h4>5 つのプロセスグループ</h4>
          <ol style="margin:8px 0 12px 20px; list-style:decimal;">
            <li>立ち上げ（Initiating）：プロジェクト憲章の作成・スポンサー承認</li>
            <li>計画（Planning）：スコープ・スケジュール・コスト・リスク等の計画</li>
            <li>実行（Executing）：計画に従いプロジェクト作業を遂行</li>
            <li>監視・コントロール（Monitoring &amp; Controlling）：進捗監視・変更管理</li>
            <li>終結（Closing）：プロジェクトの正式な終了・引き渡し</li>
          </ol>

          <h4>10 の知識エリア（主要）</h4>
          <table class="content-table">
            <thead><tr><th>知識エリア</th><th>管理対象</th></tr></thead>
            <tbody>
              <tr><td>スコープ管理</td><td>必要な作業の定義・管理。WBS で分解。</td></tr>
              <tr><td>スケジュール管理</td><td>工程・所要時間・クリティカルパスの管理</td></tr>
              <tr><td>コスト管理</td><td>予算の見積・計画・コントロール。EVM で測定。</td></tr>
              <tr><td>品質管理</td><td>品質基準の設定・品質保証・品質コントロール</td></tr>
              <tr><td>リスク管理</td><td>リスクの識別・分析・対応策の計画・監視</td></tr>
              <tr><td>コミュニケーション管理</td><td>ステークホルダーへの情報伝達の計画と管理</td></tr>
            </tbody>
          </table>
          <div class="key-point">💡 PMBOK の 5 プロセスグループは「立ち上げ→計画→実行→監視・制御→終結」</div>
        `,
        keyPoints: ['5 プロセスグループ: 立上げ→計画→実行→監視→終結', '10 知識エリア: スコープ・スケジュール・コスト・品質・リスク等', 'WBS はスコープ管理の基礎となる成果物分解構造'],
      },
      {
        id: 'schedule',
        title: 'WBS とスケジュール管理',
        content: `
          <h4>WBS（Work Breakdown Structure）</h4>
          <p>プロジェクト全体の作業を成果物・タスクに階層的に分解した構造図。最下位の要素を <strong>ワークパッケージ</strong> と呼ぶ。スコープ管理・コスト見積・スケジュール作成の基礎となる。</p>

          <h4>クリティカルパス法（CPM）</h4>
          <p>プロジェクトのすべての作業経路を洗い出し、<strong>最長経路（クリティカルパス）</strong> を求める手法。クリティカルパス上の作業はフロート（余裕時間）がゼロであり、遅延するとプロジェクト全体が遅延する。</p>

          <p>計算方法：各経路の所要日数を合計 → 最も長い経路がクリティカルパス</p>

          <h4>アローダイアグラムの読み方</h4>
          <ul>
            <li><strong>最早開始時刻</strong>：最も早くその作業を開始できる時刻（前向き計算）</li>
            <li><strong>最遅開始時刻</strong>：プロジェクト全体が遅れない最も遅い開始時刻（後向き計算）</li>
            <li><strong>フロート（余裕時間）</strong>：最遅開始時刻 − 最早開始時刻。クリティカルパスのフロートは 0。</li>
          </ul>
          <div class="key-point">💡 クリティカルパス = 最長経路 = フロートが 0 の作業の連鎖</div>
        `,
        keyPoints: ['WBS: 作業を階層的に分解（最下位 = ワークパッケージ）', 'クリティカルパス: 最長経路・フロートゼロ', 'フロート = 最遅開始 − 最早開始（余裕時間）'],
      },
      {
        id: 'evm',
        title: 'EVM（アーンドバリューマネジメント）',
        content: `
          <p>EVM はコスト・スケジュールのパフォーマンスを客観的に計測する手法。</p>

          <h4>3 つの基本指標</h4>
          <table class="content-table">
            <thead><tr><th>指標</th><th>英語</th><th>意味</th></tr></thead>
            <tbody>
              <tr><td>PV（計画価値）</td><td>Planned Value</td><td>現時点までに完了する予定だった作業のコスト</td></tr>
              <tr><td>EV（アーンドバリュー）</td><td>Earned Value</td><td>現時点までに実際に完了した作業の計画コスト</td></tr>
              <tr><td>AC（実コスト）</td><td>Actual Cost</td><td>現時点までに実際にかかったコスト</td></tr>
            </tbody>
          </table>

          <h4>パフォーマンス指数</h4>
          <table class="content-table">
            <thead><tr><th>指数</th><th>計算式</th><th>1.0 未満の意味</th></tr></thead>
            <tbody>
              <tr><td>CV（コスト差異）</td><td>EV − AC</td><td>マイナス = コスト超過</td></tr>
              <tr><td>SV（スケジュール差異）</td><td>EV − PV</td><td>マイナス = スケジュール遅延</td></tr>
              <tr><td>CPI（コスト効率指数）</td><td>EV ÷ AC</td><td>コスト超過（1円の価値に1円以上かかっている）</td></tr>
              <tr><td>SPI（スケジュール効率指数）</td><td>EV ÷ PV</td><td>スケジュール遅延</td></tr>
            </tbody>
          </table>
          <div class="key-point">💡 CPI < 1.0 = コスト超過、SPI < 1.0 = スケジュール遅延</div>
        `,
        keyPoints: ['PV: 計画、EV: 実績（計画ベース）、AC: 実コスト', 'CPI = EV÷AC。1.0未満 = コスト超過', 'SPI = EV÷PV。1.0未満 = スケジュール遅延'],
      },
      {
        id: 'risk',
        title: 'リスク管理',
        content: `
          <h4>リスク対応の 4 戦略</h4>
          <table class="content-table">
            <thead><tr><th>戦略</th><th>説明</th><th>例</th></tr></thead>
            <tbody>
              <tr><td>回避（Avoidance）</td><td>リスクの原因を取り除く</td><td>不確実な技術を採用しない</td></tr>
              <tr><td>移転（Transfer）</td><td>リスクの損害を外部に負担させる</td><td>保険加入、固定価格契約での外注</td></tr>
              <tr><td>軽減（Mitigation）</td><td>発生確率・影響度を低減する対策</td><td>テスト強化、プロトタイプ作成</td></tr>
              <tr><td>受容（Acceptance）</td><td>リスクをそのまま受け入れる</td><td>コンティンジェンシー予備を確保</td></tr>
            </tbody>
          </table>

          <h4>スコープクリープ</h4>
          <p>正式な変更管理プロセスを経ずに、機能追加・要件変更が少しずつ積み重なりスコープが拡大する現象。スケジュール遅延・コスト超過の主要原因。WBS の明確化と変更管理プロセスの徹底で防止する。</p>
          <div class="key-point">💡 リスク移転の典型例 = 保険・固定価格での外注</div>
        `,
        keyPoints: ['リスク対応4戦略: 回避・移転・軽減・受容', 'スコープクリープ: 非公式な変更積み重ねによるスコープ拡大', 'コンティンジェンシー予備: 既知リスクへの予算的備え'],
      },
    ],
  },

  {
    id: 'service-mgmt',
    name: 'サービスマネジメント',
    nameEn: 'Service Management',
    color: '#0891B2',
    icon: '🛠️',
    description: 'ITIL・インシデント管理・SLA・稼働率。IT サービスを安定的に提供・維持するための知識。',
    importance: 3,
    amCount: '約 4〜6 問',
    sections: [
      {
        id: 'itil',
        title: 'ITIL の概要',
        content: `
          <p>ITIL（IT Infrastructure Library）は英国政府が策定した IT サービスマネジメントのベストプラクティス集。現在は ITIL 4 が最新版。</p>

          <h4>主要プロセス</h4>
          <table class="content-table">
            <thead><tr><th>プロセス</th><th>目的</th></tr></thead>
            <tbody>
              <tr><td>サービスデスク</td><td>ユーザーの単一窓口（SPOC）。インシデント・サービス要求を受け付ける。</td></tr>
              <tr><td>インシデント管理</td><td>サービスの迅速な復旧（根本原因の特定は目的外）</td></tr>
              <tr><td>問題管理</td><td>インシデントの根本原因分析と再発防止</td></tr>
              <tr><td>変更管理</td><td>変更リスクを最小化しながら IT 変更を制御する</td></tr>
              <tr><td>リリース管理</td><td>新バージョンの本番環境への安全なリリース</td></tr>
              <tr><td>構成管理</td><td>IT 資産（CI: 構成アイテム）の情報を CMDB に記録・管理</td></tr>
              <tr><td>可用性管理</td><td>合意した可用性レベルを維持するための計画と管理</td></tr>
            </tbody>
          </table>
          <div class="key-point">💡 インシデント管理 = 迅速な復旧。問題管理 = 根本原因分析と再発防止</div>
        `,
        keyPoints: ['インシデント管理: 迅速な復旧が目的', '問題管理: 根本原因特定と再発防止', 'サービスデスク: ユーザーの単一窓口（SPOC）'],
      },
      {
        id: 'sla',
        title: 'SLA と可用性',
        content: `
          <h4>SLA（Service Level Agreement）</h4>
          <p>サービス提供者と顧客が合意したサービスレベルの基準を定めた契約文書。主な指定項目：可用性（稼働率）・応答時間・スループット・障害対応時間（RTO）など。SLA 未達成には違約金やサービスクレジットが設定される。</p>

          <h4>稼働率の計算</h4>
          <p><strong>稼働率 = MTBF ÷ (MTBF + MTTR)</strong></p>
          <ul>
            <li><strong>MTBF（Mean Time Between Failures：平均故障間隔）</strong>：故障から次の故障までの平均動作時間</li>
            <li><strong>MTTR（Mean Time To Repair：平均修復時間）</strong>：故障発生から修復完了までの平均時間</li>
          </ul>

          <h4>直列・並列システムの稼働率</h4>
          <table class="content-table">
            <thead><tr><th>構成</th><th>計算式（稼働率 A, B のシステム）</th><th>特徴</th></tr></thead>
            <tbody>
              <tr><td>直列</td><td>A × B</td><td>全コンポーネントが正常な時のみ稼働。稼働率が下がる。</td></tr>
              <tr><td>並列（冗長）</td><td>1 − (1−A) × (1−B)</td><td>どちらかが正常なら稼働。稼働率が上がる。</td></tr>
            </tbody>
          </table>
          <p>例：稼働率 0.9 の直列 → 0.9 × 0.9 = 0.81。並列 → 1−(0.1×0.1) = 0.99</p>
          <div class="key-point">💡 稼働率 = MTBF ÷ (MTBF + MTTR) 必ず覚えること</div>
        `,
        keyPoints: ['稼働率 = MTBF ÷ (MTBF + MTTR)', '直列: 稼働率の積（低下）', '並列: 1−(1−A)(1−B)（向上）'],
      },
    ],
  },

  {
    id: 'business-strategy',
    name: 'システム戦略・経営戦略',
    nameEn: 'Business & IT Strategy',
    color: '#059669',
    icon: '📈',
    description: 'SWOT・BSC・EA・ROI。IT を経営戦略と結びつける俯瞰的な視点を養う。',
    importance: 3,
    amCount: '約 6〜8 問',
    sections: [
      {
        id: 'strategy-framework',
        title: '経営戦略フレームワーク',
        content: `
          <h4>SWOT 分析</h4>
          <p>内部環境（S: 強み、W: 弱み）と外部環境（O: 機会、T: 脅威）を分析するフレームワーク。</p>
          <table class="content-table">
            <thead><tr><th></th><th>プラス要因</th><th>マイナス要因</th></tr></thead>
            <tbody>
              <tr><td>内部環境</td><td>S（強み）：自社の競争優位</td><td>W（弱み）：自社の課題・劣位</td></tr>
              <tr><td>外部環境</td><td>O（機会）：市場・環境の好機</td><td>T（脅威）：競合・環境リスク</td></tr>
            </tbody>
          </table>

          <h4>BSC（バランスト・スコアカード）</h4>
          <p>財務指標だけでなく 4 つの視点でバランスよく業績を管理するフレームワーク（キャプランとノートンが提唱）。</p>
          <ol style="margin:8px 0 12px 20px; list-style:decimal;">
            <li><strong>財務の視点</strong>：売上・利益・ROI など財務成果</li>
            <li><strong>顧客の視点</strong>：顧客満足度・市場シェア・顧客獲得率</li>
            <li><strong>業務プロセスの視点</strong>：業務効率・品質・サイクルタイム</li>
            <li><strong>学習と成長の視点</strong>：従業員スキル・組織能力・情報システム</li>
          </ol>
          <div class="key-point">💡 BSC の 4 視点：財務・顧客・業務プロセス・学習と成長</div>
        `,
        keyPoints: ['SWOT: 内部（S/W）× 外部（O/T）の 2×2 分析', 'BSC の 4 視点: 財務・顧客・業務プロセス・学習と成長', 'T（脅威）は外部環境のマイナス要因'],
      },
      {
        id: 'it-strategy',
        title: 'IT 戦略・要件定義',
        content: `
          <h4>エンタープライズアーキテクチャ（EA）</h4>
          <p>企業全体の IT と業務を統一的な視点で最適化するフレームワーク。政府 EA では 4 層のアーキテクチャを定義。</p>
          <ol style="margin:8px 0 12px 20px; list-style:decimal;">
            <li><strong>ビジネスアーキテクチャ（BA）</strong>：業務プロセス・組織の設計</li>
            <li><strong>データアーキテクチャ（DA）</strong>：データ・情報の管理構造</li>
            <li><strong>アプリケーションアーキテクチャ（AA）</strong>：業務システムの構成</li>
            <li><strong>テクノロジアーキテクチャ（TA）</strong>：IT 基盤・インフラの構造</li>
          </ol>

          <h4>機能要件と非機能要件</h4>
          <table class="content-table">
            <thead><tr><th>種類</th><th>内容</th><th>例</th></tr></thead>
            <tbody>
              <tr><td>機能要件</td><td>システムが何をするか（機能・処理・データ）</td><td>「商品を検索できること」「在庫を更新できること」</td></tr>
              <tr><td>非機能要件</td><td>システムがどのように動作するか（品質属性）</td><td>「稼働率 99.9% 以上」「応答時間 3 秒以内」「同時 1,000 ユーザー対応」</td></tr>
            </tbody>
          </table>

          <h4>ROI（投資利益率）</h4>
          <p><strong>ROI = 利益 ÷ 投資金額 × 100（%）</strong></p>
          <p>例：1,000 万円投資して 200 万円の利益 → ROI = 200 ÷ 1000 × 100 = 20%</p>
          <div class="key-point">💡 非機能要件 = 性能・可用性・セキュリティ・保守性（「どのように動くか」）</div>
        `,
        keyPoints: ['EA の 4 層: ビジネス・データ・アプリ・テクノロジ', '機能要件: 何をするか。非機能要件: どのように動くか', 'ROI = 利益 ÷ 投資金額 × 100（%）'],
      },
    ],
  },

  {
    id: 'legal',
    name: '企業と法務',
    nameEn: 'Corporate Law & Ethics',
    color: '#B45309',
    icon: '⚖️',
    description: '著作権・個人情報保護法・不正競争防止法・企業会計。法律と倫理の観点から IT を捉える。',
    importance: 3,
    amCount: '約 4〜6 問',
    sections: [
      {
        id: 'ip-law',
        title: '知的財産権',
        content: `
          <h4>著作権</h4>
          <ul>
            <li>創作と同時に<strong>自動的に発生</strong>（登録不要：無方式主義）</li>
            <li>プログラム・データベースも保護対象</li>
            <li>保護期間：著作者の死後 70 年（法人著作物は公表後 70 年）</li>
            <li><strong>職務著作</strong>：業務上作成したプログラムの著作権は原則として法人（使用者）に帰属</li>
          </ul>

          <h4>特許権</h4>
          <ul>
            <li>特許庁への出願・登録が必要（登録主義）</li>
            <li>新規性・進歩性・産業上の利用可能性が要件</li>
            <li>保護期間：出願日から 20 年</li>
            <li>ビジネス方法特許（ソフトウェア特許）は認められる場合がある</li>
          </ul>

          <h4>不正競争防止法の営業秘密</h4>
          <p>3 要件：①<strong>秘密管理性</strong>（秘密として管理）②<strong>有用性</strong>（事業に有用）③<strong>非公知性</strong>（公然と知られていない）</p>
          <div class="key-point">💡 著作権 = 自動発生・登録不要。特許権 = 出願・登録が必要</div>
        `,
        keyPoints: ['著作権: 自動発生（無方式主義）・死後70年', '特許: 出願・登録必要・出願から20年', '営業秘密の3要件: 秘密管理性・有用性・非公知性'],
      },
      {
        id: 'privacy-law',
        title: '個人情報保護と法規',
        content: `
          <h4>個人情報保護法</h4>
          <ul>
            <li><strong>個人情報</strong>：生存する個人に関し、氏名・生年月日等で特定個人を識別できる情報</li>
            <li><strong>要配慮個人情報</strong>：人種・信条・社会的身分・病歴・前科・障害など。取得に原則として<strong>本人同意が必要</strong></li>
            <li><strong>個人データ</strong>：データベース等で体系的に管理された個人情報</li>
            <li>個人情報取扱事業者の義務：利用目的の明示・安全管理・第三者提供の制限 等</li>
          </ul>

          <h4>不正アクセス禁止法</h4>
          <p>正規のアクセス権限なしに他人の ID・パスワードを使ってシステムにアクセスする行為を禁止する法律。</p>

          <h4>企業会計の基本</h4>
          <table class="content-table">
            <thead><tr><th>財務諸表</th><th>内容</th></tr></thead>
            <tbody>
              <tr><td>貸借対照表（B/S）</td><td>特定時点の財政状態。資産 = 負債 + 純資産</td></tr>
              <tr><td>損益計算書（P/L）</td><td>一定期間の経営成績。売上 − 費用 = 利益</td></tr>
              <tr><td>キャッシュフロー計算書</td><td>一定期間の現金増減（営業・投資・財務の3区分）</td></tr>
            </tbody>
          </table>
          <div class="key-point">💡 要配慮個人情報（病歴・人種等）の取得は本人同意が必須</div>
        `,
        keyPoints: ['要配慮個人情報（病歴・人種）: 取得に本人同意必要', '不正アクセス禁止法: 無権限ログインを禁止', '貸借対照表: 資産=負債+純資産（ある時点の状態）'],
      },
    ],
  },

  {
    id: 'system-arch',
    name: 'システムアーキテクチャ・組込み',
    nameEn: 'System Architecture & Embedded',
    color: '#64748B',
    icon: '🔧',
    description: '信頼性設計・RAID・稼働率計算・リアルタイムOS。ハードウェアに近い領域の設計知識。',
    importance: 3,
    amCount: '約 4〜6 問',
    sections: [
      {
        id: 'reliability',
        title: '信頼性設計',
        content: `
          <h4>信頼性設計の概念</h4>
          <table class="content-table">
            <thead><tr><th>概念</th><th>説明</th><th>例</th></tr></thead>
            <tbody>
              <tr><td>フェールセーフ</td><td>障害発生時に安全な状態へ移行</td><td>踏切電源断 → 遮断機を下ろす</td></tr>
              <tr><td>フォールトトレラント</td><td>障害が発生しても機能を継続できる冗長設計</td><td>デュアルシステム、RAID</td></tr>
              <tr><td>フェールソフト（縮退運転）</td><td>障害時に一部機能を停止しつつ動作継続</td><td>CPU 1 つ故障でも処理速度低下して継続</td></tr>
              <tr><td>フールプルーフ</td><td>誰が操作しても誤操作できない設計</td><td>物理的なコネクタ形状の差別化</td></tr>
              <tr><td>フォールトアボイダンス</td><td>高品質な部品で故障発生確率を極力低くする</td><td>高信頼部品の使用</td></tr>
            </tbody>
          </table>
          <div class="key-point">💡 フェールセーフ = 安全側へ。フォールトトレラント = 機能継続</div>
        `,
        keyPoints: ['フェールセーフ: 障害時に安全な状態へ', 'フォールトトレラント: 障害時も機能継続（冗長化）', 'フールプルーフ: 物理的に誤操作できない設計'],
      },
      {
        id: 'raid',
        title: 'RAID とシステム冗長化',
        content: `
          <h4>RAID（Redundant Array of Independent Disks）</h4>
          <table class="content-table">
            <thead><tr><th>RAID レベル</th><th>概要</th><th>耐障害性</th><th>最低台数</th></tr></thead>
            <tbody>
              <tr><td>RAID 0</td><td>ストライピング（分散書込み）</td><td>なし（1台故障でデータ消失）</td><td>2 台</td></tr>
              <tr><td>RAID 1</td><td>ミラーリング（全データを複製）</td><td>1 台故障まで耐えられる</td><td>2 台</td></tr>
              <tr><td>RAID 5</td><td>データ＋パリティを分散格納</td><td>1 台故障まで耐えられる</td><td>3 台</td></tr>
              <tr><td>RAID 6</td><td>パリティを 2 重に分散格納</td><td>2 台同時故障まで耐えられる</td><td>4 台</td></tr>
              <tr><td>RAID 10</td><td>RAID 1 + RAID 0（ミラーリング＋ストライピング）</td><td>高い</td><td>4 台</td></tr>
            </tbody>
          </table>

          <h4>デュアルシステム vs デュプレックスシステム</h4>
          <table class="content-table">
            <thead><tr><th>方式</th><th>概要</th></tr></thead>
            <tbody>
              <tr><td>デュアルシステム</td><td>2 系統が同時並行で動作し、結果を照合する。最高の信頼性。</td></tr>
              <tr><td>デュプレックスシステム</td><td>主系が動作し、待機系が常時待機（ホットスタンバイ）または停止（コールドスタンバイ）。障害時に切替。</td></tr>
            </tbody>
          </table>
          <div class="key-point">💡 RAID 5 = データ+パリティ分散（3台以上・1台故障耐性）</div>
        `,
        keyPoints: ['RAID 0: ストライピング（冗長なし）', 'RAID 1: ミラーリング（完全複製）', 'RAID 5: データ+パリティ分散（1台故障耐性・3台以上）'],
      },
    ],
  },
];

// ─── フェーズ2：追加問題データ（30問：6分野×5問） ──────────

const QUESTIONS_DATA_PHASE2 = [

  // ========== ソフトウェア開発 ==========
  {
    id: 'SD-001', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 2, year: null, tags: ['テスト', 'ブラックボックス'],
    question: 'ブラックボックステストの説明として適切なものはどれか。',
    choices: [
      { index: 0, text: 'プログラムの内部論理構造に基づいてテストケースを設計する' },
      { index: 1, text: 'プログラムの外部仕様（入出力関係）に基づいてテストケースを設計する' },
      { index: 2, text: 'すべての命令文を少なくとも 1 回実行するようにテストケースを設計する' },
      { index: 3, text: 'すべての分岐条件を網羅するようにテストケースを設計する' },
    ],
    answer: 1,
    explanation: 'ブラックボックステストはプログラムの内部構造を考慮せず、仕様書に基づいて入出力関係からテストケースを設計する手法。代表的技法に同値分割法・限界値分析がある。ア・ウ・エはホワイトボックステスト（構造テスト）の特徴。命令網羅（C0）・分岐網羅（C1）はホワイトボックステストの網羅基準。',
  },
  {
    id: 'SD-002', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 2, year: null, tags: ['テスト', '同値分割'],
    question: '1〜100 の整数のみを受け付けるシステムに対し、同値分割法で等価クラスを設定した。有効同値クラスと無効同値クラスの代表値の組合せとして適切なものはどれか。',
    choices: [
      { index: 0, text: '有効: 50、 無効: 0 と 101' },
      { index: 1, text: '有効: 1 と 100、 無効: 50' },
      { index: 2, text: '有効: 0、 無効: 1 と 100' },
      { index: 3, text: '有効: 1 と 50 と 100、 無効: なし' },
    ],
    answer: 0,
    explanation: '同値分割法では入力値を「有効同値クラス」（仕様を満たす）と「無効同値クラス」（満たさない）に分類し、各クラスの代表値でテストする。1〜100 の範囲では有効クラスは 1〜100（代表値: 50 など）、無効クラスは 1 未満（代表値: 0）と 100 超（代表値: 101）の 2 グループ。各クラス 1 つの代表値でテストすれば十分とみなす。',
  },
  {
    id: 'SD-003', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 2, year: null, tags: ['アジャイル', '開発手法'],
    question: 'アジャイル開発の説明として適切なものはどれか。',
    choices: [
      { index: 0, text: '要件定義から運用まですべての工程を一方向に順番に実施する手法' },
      { index: 1, text: '短い反復サイクル（イテレーション）で開発を繰り返し、変化への対応を重視する手法' },
      { index: 2, text: 'プロトタイプを作成してユーザーの確認を得ながら進める手法' },
      { index: 3, text: '設計仕様を完全に確定してからプログラミングを行う手法' },
    ],
    answer: 1,
    explanation: 'アジャイル開発は短期間の反復サイクル（スプリント・イテレーション）で動くソフトウェアを繰り返し届けながら変化する要求に対応する手法。代表的なフレームワークにスクラムと XP（エクストリームプログラミング）がある。ア はウォーターフォールモデル、ウ はプロトタイプモデル、エ はウォーターフォールの特徴。',
  },
  {
    id: 'SD-004', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 3, year: null, tags: ['UML', 'クラス図', '汎化'],
    question: 'UML のクラス図における「汎化」関係の説明として適切なものはどれか。',
    choices: [
      { index: 0, text: 'あるクラスが別のクラスをメンバー属性として保持する関係' },
      { index: 1, text: 'サブクラスがスーパークラスの性質（属性・操作）を受け継ぐ継承関係（is-a 関係）' },
      { index: 2, text: 'あるクラスが別のクラスの操作を呼び出して利用する関係' },
      { index: 3, text: '2 つのクラスのオブジェクトが互いに関連を持つ関係' },
    ],
    answer: 1,
    explanation: '汎化（Generalization）は継承関係（is-a 関係）を表す。サブクラスがスーパークラスの属性・操作を継承する。例：「犬」クラスは「動物」クラスの汎化（犬 is-a 動物）。ア はコンポジションや集約（has-a 関係）、ウ は依存関係（Dependency）の説明。',
  },
  {
    id: 'SD-005', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 3, year: null, tags: ['開発手法', 'スパイラル'],
    question: 'スパイラルモデルの特徴として適切なものはどれか。',
    choices: [
      { index: 0, text: '要件定義→設計→実装→テストを一方向に進める' },
      { index: 1, text: 'リスク分析を中心に据え、プロトタイプ作成と評価を螺旋状に繰り返す' },
      { index: 2, text: '機能を段階的に追加しながら複数回のリリースを行う' },
      { index: 3, text: 'ユーザーとの密接なコミュニケーションを重視し、ペアプログラミングを実施する' },
    ],
    answer: 1,
    explanation: 'スパイラルモデルはリスク分析を中心に据え、計画→リスク分析→プロトタイプ作成→評価のサイクルを螺旋状に繰り返す開発手法。リスクの高い大規模開発に適している。ア はウォーターフォール、ウ はインクリメンタル（段階的）開発、エ は XP の特徴。',
  },

  // ========== プロジェクトマネジメント ==========
  {
    id: 'PM-001', category: 'project-mgmt', categoryName: 'プロジェクトマネジメント',
    difficulty: 3, year: null, tags: ['クリティカルパス', 'スケジュール'],
    question: 'あるプロジェクトの作業経路は、A→D→E（3+2+3=8日）、B→E（5+3=8日）、C→E（4+3=7日）の3経路がある。クリティカルパスの所要日数はどれか。',
    choices: [
      { index: 0, text: '7 日' },
      { index: 1, text: '8 日' },
      { index: 2, text: '9 日' },
      { index: 3, text: '11 日' },
    ],
    answer: 1,
    explanation: 'クリティカルパスはプロジェクト完了までの最長経路。各経路の所要日数：A→D→E＝3+2+3＝8日、B→E＝5+3＝8日、C→E＝4+3＝7日。最長は 8 日。クリティカルパス上の作業はフロート（余裕時間）がゼロであり、遅延するとプロジェクト全体が遅延する。',
  },
  {
    id: 'PM-002', category: 'project-mgmt', categoryName: 'プロジェクトマネジメント',
    difficulty: 3, year: null, tags: ['EVM', 'CPI', 'コスト管理'],
    question: 'EVM（アーンドバリューマネジメント）において、コスト効率指数（CPI）が 0.8 の場合の意味として適切なものはどれか。',
    choices: [
      { index: 0, text: '計画より 20% 早く作業が進んでいる' },
      { index: 1, text: '計画よりコストが 20% 超過しており、1 円の価値を得るのに 1.25 円かかっている' },
      { index: 2, text: '計画より 20% 作業が遅れている' },
      { index: 3, text: '計画より 20% コストを下回っている' },
    ],
    answer: 1,
    explanation: 'CPI（Cost Performance Index）= EV（アーンドバリュー）÷ AC（実コスト）。CPI < 1.0 はコスト超過。CPI = 0.8 は 1 円の価値を得るために 1÷0.8 = 1.25 円を使っている状態（約 25% のコスト超過）。スケジュールの遅延は SPI（= EV÷PV）< 1.0 で表す。',
  },
  {
    id: 'PM-003', category: 'project-mgmt', categoryName: 'プロジェクトマネジメント',
    difficulty: 2, year: null, tags: ['WBS', 'スコープ'],
    question: 'WBS（Work Breakdown Structure）の説明として適切なものはどれか。',
    choices: [
      { index: 0, text: 'プロジェクトの作業を成果物・タスクに階層的に分解した構造図' },
      { index: 1, text: '作業の順序関係と所要時間を表したネットワーク図' },
      { index: 2, text: 'プロジェクトメンバーの役割と責任を定義した一覧表' },
      { index: 3, text: 'プロジェクトのコストとスケジュールの関係を示した曲線' },
    ],
    answer: 0,
    explanation: 'WBS はプロジェクト全体の作業を成果物・タスクに階層的に分解した構造図。最下位の要素を「ワークパッケージ」と呼ぶ。スコープ管理・コスト見積・スケジュール作成の基礎となる。イ はアローダイアグラム（PERT 図）、ウ は RACI チャート（責任割当マトリックス）の説明。',
  },
  {
    id: 'PM-004', category: 'project-mgmt', categoryName: 'プロジェクトマネジメント',
    difficulty: 3, year: null, tags: ['リスク', 'リスク移転'],
    question: 'プロジェクトのリスク対応戦略のうち「リスク移転」の説明として適切なものはどれか。',
    choices: [
      { index: 0, text: 'リスクの原因を取り除き、発生可能性をなくす' },
      { index: 1, text: 'リスクが発生した場合の損害を保険や外注などで外部に負担させる' },
      { index: 2, text: 'リスクを認識した上でそのまま受け入れ計画に組み込む' },
      { index: 3, text: 'リスクの発生確率や影響度を低減する対策を実施する' },
    ],
    answer: 1,
    explanation: 'リスク対応の 4 戦略：①回避（原因の除去）②移転（保険・外注で第三者に負担させる）③軽減（発生確率・影響度の低減）④受容（そのまま受け入れる）。リスク移転の典型例は保険の加入や固定価格契約による外注。ア は回避、ウ は受容、エ は軽減の説明。',
  },
  {
    id: 'PM-005', category: 'project-mgmt', categoryName: 'プロジェクトマネジメント',
    difficulty: 3, year: null, tags: ['スコープクリープ', 'スコープ管理'],
    question: 'スコープクリープの説明として最も適切なものはどれか。',
    choices: [
      { index: 0, text: 'プロジェクトのスコープが計画より縮小される現象' },
      { index: 1, text: '正式な変更管理プロセスを経ずにスコープが少しずつ拡大される現象' },
      { index: 2, text: 'スコープ定義が不明確なためプロジェクトが開始できない状態' },
      { index: 3, text: 'スコープの変更要求が多すぎてプロジェクトが停止する状態' },
    ],
    answer: 1,
    explanation: 'スコープクリープ（Scope Creep）は変更管理プロセスを経ることなく機能追加や要件変更が少しずつ積み重なりスコープが拡大する現象。スケジュール遅延・コスト超過の主要原因。WBS の明確化と変更管理プロセスの徹底、承認なき変更の拒否で防止する。',
  },

  // ========== サービスマネジメント ==========
  {
    id: 'SM-001', category: 'service-mgmt', categoryName: 'サービスマネジメント',
    difficulty: 2, year: null, tags: ['ITIL', 'インシデント管理'],
    question: 'ITIL のインシデント管理の主な目標として最も適切なものはどれか。',
    choices: [
      { index: 0, text: 'インシデントの根本原因を特定し、恒久的な解決策を実施する' },
      { index: 1, text: 'サービスを可能な限り迅速に正常な運用状態に復旧させる' },
      { index: 2, text: '将来発生するインシデントを予防するための変更を管理する' },
      { index: 3, text: '新しいサービスをリリースするための手順を管理する' },
    ],
    answer: 1,
    explanation: 'インシデント管理（Incident Management）の主目的はサービスの迅速な復旧。根本原因の特定・恒久対応は「問題管理（Problem Management）」の役割。インシデント管理は暫定的な回避策（ワークアラウンド）も含めて早期復旧を優先する。ウ は変更管理、エ はリリース管理の目標。',
  },
  {
    id: 'SM-002', category: 'service-mgmt', categoryName: 'サービスマネジメント',
    difficulty: 2, year: null, tags: ['ITIL', '問題管理'],
    question: 'ITIL の問題管理（Problem Management）の説明として適切なものはどれか。',
    choices: [
      { index: 0, text: 'サービスの中断を最小限に抑え、できるだけ早く復旧させる' },
      { index: 1, text: '変更要求を評価し、リスクを最小化しながら変更を実施する' },
      { index: 2, text: 'インシデントの根本原因を分析し、再発防止策を講じる' },
      { index: 3, text: '新しいソフトウェアを本番環境に安全にリリースする' },
    ],
    answer: 2,
    explanation: '問題管理はインシデントの根本原因（既知のエラー：Known Error）を特定・分析し、再発防止のための恒久的な解決策を実施するプロセス。インシデント管理とは目的が異なる（インシデント管理は復旧が目的）。ア はインシデント管理、イ は変更管理、エ はリリース管理の説明。',
  },
  {
    id: 'SM-003', category: 'service-mgmt', categoryName: 'サービスマネジメント',
    difficulty: 2, year: null, tags: ['SLA'],
    question: 'SLA（Service Level Agreement）の説明として適切なものはどれか。',
    choices: [
      { index: 0, text: 'IT サービスの内部技術仕様を定めた文書' },
      { index: 1, text: 'サービス提供者と顧客が合意したサービスレベルの基準を定めた契約' },
      { index: 2, text: 'システムの保守・運用手順書' },
      { index: 3, text: 'サービス提供にかかるコスト内訳を示した文書' },
    ],
    answer: 1,
    explanation: 'SLA はサービス提供者と顧客が合意したサービスレベル（可用性・応答時間・障害対応時間など）を定めた合意文書（契約）。例：「システム稼働率 99.9% 以上」「障害発生時 2 時間以内に一次対応」。SLA の未達成には違約金やサービスクレジットが設定されることがある。',
  },
  {
    id: 'SM-004', category: 'service-mgmt', categoryName: 'サービスマネジメント',
    difficulty: 2, year: null, tags: ['稼働率', 'MTBF', 'MTTR'],
    question: 'MTBF が 900 時間、MTTR が 100 時間のシステムの稼働率はどれか。',
    choices: [
      { index: 0, text: '0.90' },
      { index: 1, text: '0.91' },
      { index: 2, text: '0.95' },
      { index: 3, text: '0.99' },
    ],
    answer: 0,
    explanation: '稼働率 = MTBF ÷ (MTBF + MTTR) = 900 ÷ (900 + 100) = 900 ÷ 1000 = 0.90。MTBF（平均故障間隔）は故障から次の故障までの平均動作時間、MTTR（平均修復時間）は修復完了までの平均時間。稼働率向上には MTBF を大きくするか MTTR を小さくする。',
  },
  {
    id: 'SM-005', category: 'service-mgmt', categoryName: 'サービスマネジメント',
    difficulty: 3, year: null, tags: ['稼働率', '並列', '直列'],
    question: '稼働率が 0.9 の機器 A と稼働率が 0.8 の機器 B が並列に接続されたシステムの稼働率はどれか。',
    choices: [
      { index: 0, text: '0.72' },
      { index: 1, text: '0.85' },
      { index: 2, text: '0.98' },
      { index: 3, text: '1.70' },
    ],
    answer: 2,
    explanation: '並列システムの稼働率 = 1 − (1−A) × (1−B) = 1 − (1−0.9) × (1−0.8) = 1 − 0.1 × 0.2 = 1 − 0.02 = 0.98。並列（冗長）構成ではいずれかが稼働していれば動作するため、稼働率が大幅に向上する。直列構成の稼働率は 0.9 × 0.8 = 0.72 となる。',
  },

  // ========== システム戦略・経営戦略 ==========
  {
    id: 'BS-001', category: 'business-strategy', categoryName: 'システム戦略・経営戦略',
    difficulty: 2, year: null, tags: ['SWOT分析', '経営戦略'],
    question: 'SWOT 分析において、「外部環境の脅威（T）」に分類される要素として適切なものはどれか。',
    choices: [
      { index: 0, text: '自社製品の品質が業界最高水準であること' },
      { index: 1, text: '自社の財務状況が悪化していること' },
      { index: 2, text: '競合他社が低価格な新製品を市場投入してきたこと' },
      { index: 3, text: '新興国市場への参入機会があること' },
    ],
    answer: 2,
    explanation: 'SWOT 分析は内部環境（S：強み・W：弱み）と外部環境（O：機会・T：脅威）を分析するフレームワーク。ア は強み（S）、イ は弱み（W）、エ は機会（O）に該当する。脅威（T）は自社ではコントロールできない外部からの否定的な要因（競合動向・規制強化・市場縮小など）。',
  },
  {
    id: 'BS-002', category: 'business-strategy', categoryName: 'システム戦略・経営戦略',
    difficulty: 2, year: null, tags: ['BSC', 'バランスト・スコアカード'],
    question: 'バランスト・スコアカード（BSC）の 4 つの視点として適切な組合せはどれか。',
    choices: [
      { index: 0, text: '財務・顧客・業務プロセス・学習と成長' },
      { index: 1, text: '財務・生産・販売・人事' },
      { index: 2, text: '品質・コスト・納期・安全' },
      { index: 3, text: '戦略・戦術・計画・実行' },
    ],
    answer: 0,
    explanation: 'BSC（Balanced Scorecard）はキャプランとノートンが提唱した戦略管理フレームワーク。①財務の視点②顧客の視点③業務プロセスの視点④学習と成長の視点の 4 視点でバランスよく業績を評価・管理する。財務指標だけでは将来の競争力を測れないことへの解決策として提唱された。',
  },
  {
    id: 'BS-003', category: 'business-strategy', categoryName: 'システム戦略・経営戦略',
    difficulty: 2, year: null, tags: ['要件定義', '非機能要件'],
    question: '業務要件定義において、非機能要件として分類されるものはどれか。',
    choices: [
      { index: 0, text: '顧客が商品を検索できること' },
      { index: 1, text: '注文履歴を閲覧できること' },
      { index: 2, text: 'システムが 24 時間 365 日稼働すること（可用性）' },
      { index: 3, text: 'ユーザーがパスワードを変更できること' },
    ],
    answer: 2,
    explanation: '機能要件はシステムが何をするか（機能・処理・データ）を定義する。非機能要件はシステムがどのように動作するか（性能・可用性・信頼性・セキュリティ・保守性など）を定義する。ア・イ・エは機能要件、ウ（24時間365日稼働：可用性）は非機能要件に分類される。',
  },
  {
    id: 'BS-004', category: 'business-strategy', categoryName: 'システム戦略・経営戦略',
    difficulty: 3, year: null, tags: ['EA', 'エンタープライズアーキテクチャ'],
    question: 'エンタープライズアーキテクチャ（EA）の 4 つのアーキテクチャとして適切な組合せはどれか。',
    choices: [
      { index: 0, text: 'ビジネス・データ・アプリケーション・テクノロジ' },
      { index: 1, text: '戦略・戦術・オペレーション・コントロール' },
      { index: 2, text: '計画・実行・確認・改善（PDCA）' },
      { index: 3, text: '開発・テスト・ステージング・本番' },
    ],
    answer: 0,
    explanation: 'EA（エンタープライズアーキテクチャ）は企業全体の IT と業務を統一的に最適化するフレームワーク。政府 EA では①ビジネスアーキテクチャ（BA: 業務プロセス）②データアーキテクチャ（DA: 情報管理）③アプリケーションアーキテクチャ（AA: 業務システム）④テクノロジアーキテクチャ（TA: IT 基盤）の 4 層を定義している。',
  },
  {
    id: 'BS-005', category: 'business-strategy', categoryName: 'システム戦略・経営戦略',
    difficulty: 2, year: null, tags: ['ROI', '投資利益率'],
    question: 'ROI（投資利益率）の計算式として正しいものはどれか。投資金額を I、投資によって得られた利益を P とする。',
    choices: [
      { index: 0, text: 'ROI = P × I' },
      { index: 1, text: 'ROI = P ÷ I × 100（%）' },
      { index: 2, text: 'ROI = I ÷ P × 100（%）' },
      { index: 3, text: 'ROI = (I − P) ÷ P × 100（%）' },
    ],
    answer: 1,
    explanation: 'ROI（Return on Investment：投資利益率）= 利益 ÷ 投資金額 × 100（%）。例：1,000 万円投資して 200 万円の利益を得た場合、ROI = 200 ÷ 1000 × 100 = 20%。IT 投資の効果測定に用いられる。ROI が高いほど投資効果が高いと評価される。',
  },

  // ========== 企業と法務 ==========
  {
    id: 'LG-001', category: 'legal', categoryName: '企業と法務',
    difficulty: 2, year: null, tags: ['著作権', '知的財産'],
    question: '著作権法に関する記述として適切なものはどれか。',
    choices: [
      { index: 0, text: 'プログラム（ソフトウェア）は著作権の保護対象外である' },
      { index: 1, text: '著作権は創作と同時に自動的に発生し、登録は不要である' },
      { index: 2, text: '著作権の保護期間は著作者の生存中のみである' },
      { index: 3, text: '業務上作成したプログラムの著作権は常に作成した従業員に帰属する' },
    ],
    answer: 1,
    explanation: '著作権は創作の事実と同時に自動的に発生し、登録や申請は不要（無方式主義）。プログラムも著作権の保護対象（著作権法 10 条 1 項 9 号）。保護期間は著作者の死後 70 年（法人著作物は公表後 70 年）。業務上作成したプログラムの著作権は原則として法人（使用者）に帰属（職務著作）。',
  },
  {
    id: 'LG-002', category: 'legal', categoryName: '企業と法務',
    difficulty: 2, year: null, tags: ['個人情報保護法', '要配慮個人情報'],
    question: '個人情報保護法における「要配慮個人情報」に該当するものはどれか。',
    choices: [
      { index: 0, text: '氏名' },
      { index: 1, text: '住所' },
      { index: 2, text: '人種・信条・病歴等' },
      { index: 3, text: '電話番号' },
    ],
    answer: 2,
    explanation: '要配慮個人情報は不当な差別や偏見につながる可能性があるため、取得に原則として本人の同意が必要な個人情報。具体例：人種・信条・社会的身分・病歴・犯罪歴・障害の有無・医療データなど。氏名・住所・電話番号は通常の個人情報として保護されるが、要配慮個人情報には該当しない。',
  },
  {
    id: 'LG-003', category: 'legal', categoryName: '企業と法務',
    difficulty: 3, year: null, tags: ['不正競争防止法', '営業秘密'],
    question: '不正競争防止法が保護する「営業秘密」の 3 要件として適切な組合せはどれか。',
    choices: [
      { index: 0, text: '秘密管理性・有用性・非公知性' },
      { index: 1, text: '新規性・進歩性・産業上の利用可能性' },
      { index: 2, text: '独自性・公益性・継続性' },
      { index: 3, text: '固定性・原著作性・創作性' },
    ],
    answer: 0,
    explanation: '不正競争防止法における営業秘密の 3 要件：①秘密管理性（秘密として適切に管理されていること）②有用性（事業活動に有用な技術・営業情報であること）③非公知性（公然と知られていないこと）。特許権と異なり登録不要だが、要件を満たさない情報は保護されない。イ は特許要件、エ は著作物要件の説明。',
  },
  {
    id: 'LG-004', category: 'legal', categoryName: '企業と法務',
    difficulty: 2, year: null, tags: ['財務諸表', '貸借対照表'],
    question: '貸借対照表（バランスシート）の説明として適切なものはどれか。',
    choices: [
      { index: 0, text: '一定期間の収益・費用・利益を示す財務諸表' },
      { index: 1, text: '特定の時点における資産・負債・純資産の状況を示す財務諸表' },
      { index: 2, text: '一定期間の現金・預金の増減を示す財務諸表' },
      { index: 3, text: '一定期間の費用の内訳を詳細に示す財務諸表' },
    ],
    answer: 1,
    explanation: '貸借対照表（B/S: Balance Sheet）は特定時点（期末）における企業の財政状態（資産・負債・純資産の構成）を示す。「資産 = 負債 + 純資産」が常に成立する（バランスする）。ア は損益計算書（P/L）、ウ はキャッシュフロー計算書の説明。3 つの財務諸表はセットで理解することが重要。',
  },
  {
    id: 'LG-005', category: 'legal', categoryName: '企業と法務',
    difficulty: 2, year: null, tags: ['不正アクセス禁止法', '法規'],
    question: '不正アクセス禁止法で規制される行為として最も適切なものはどれか。',
    choices: [
      { index: 0, text: '他人のパスワードを勝手に使ってコンピュータにログインする行為' },
      { index: 1, text: '著作権のあるソフトウェアを無断でコピーして使用する行為' },
      { index: 2, text: '他人の個人情報を無断で収集・販売する行為' },
      { index: 3, text: 'マルウェアを作成・保管する行為' },
    ],
    answer: 0,
    explanation: '不正アクセス禁止法は正規のアクセス権限なしに他人の ID・パスワードを使ってコンピュータに不正アクセスする行為を規制する。イ は著作権法、ウ は個人情報保護法、エ はウイルス作成罪（不正指令電磁的記録に関する罪：刑法 168 条の 2）で規制される。それぞれ異なる法律で対応していることが重要。',
  },

  // ========== システムアーキテクチャ・組込み ==========
  {
    id: 'SA-001', category: 'system-arch', categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 2, year: null, tags: ['フェールセーフ', '信頼性設計'],
    question: '「フェールセーフ」の説明として適切なものはどれか。',
    choices: [
      { index: 0, text: '障害が発生しても機能を縮退させながら動作を継続する設計' },
      { index: 1, text: '障害が発生した場合に、安全な状態へ移行する設計思想' },
      { index: 2, text: '複数のシステムを並列動作させいずれかが故障しても稼働を維持する設計' },
      { index: 3, text: '故障の発生頻度を極力低くする高信頼部品による設計' },
    ],
    answer: 1,
    explanation: 'フェールセーフは障害発生時に安全側（より安全な状態）へ移行する設計思想。例：エレベータの電源断でブレーキをかける、踏切の電源断で遮断機を下ろす。ア はフォールトトレラント（縮退運転）、ウ はデュアルシステム（冗長化）、エ はフォールトアボイダンス（高信頼化）の説明。',
  },
  {
    id: 'SA-002', category: 'system-arch', categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 2, year: null, tags: ['RAID', 'ストレージ'],
    question: 'RAID 5 の説明として適切なものはどれか。',
    choices: [
      { index: 0, text: 'データを複数のディスクに分散して書き込み、冗長性は持たない' },
      { index: 1, text: 'すべてのデータをもう 1 台のディスクにそのまま複製する' },
      { index: 2, text: 'データとパリティを複数のディスクに分散格納し、1 台の故障に対応できる' },
      { index: 3, text: 'パリティを 2 重に分散格納し、2 台同時故障に対応できる' },
    ],
    answer: 2,
    explanation: 'RAID の種類：RAID 0（ストライピング）はデータを分散して高速化するが冗長性なし。RAID 1（ミラーリング）はデータを完全複製。RAID 5 はデータとパリティ（誤り訂正情報）を 3 台以上に分散格納し、1 台故障時にパリティから復元可能。エ は RAID 6 の説明（パリティ 2 重・4 台以上必要）。',
  },
  {
    id: 'SA-003', category: 'system-arch', categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 3, year: null, tags: ['稼働率', 'MTBF', 'MTTR', '計算'],
    question: 'MTBF が 400 時間、MTTR が 100 時間のシステムの稼働率はどれか。',
    choices: [
      { index: 0, text: '0.75' },
      { index: 1, text: '0.80' },
      { index: 2, text: '0.90' },
      { index: 3, text: '0.95' },
    ],
    answer: 1,
    explanation: '稼働率 = MTBF ÷ (MTBF + MTTR) = 400 ÷ (400 + 100) = 400 ÷ 500 = 0.80。MTBF = 400 時間（故障から次の故障まで平均 400 時間動作）、MTTR = 100 時間（修復に平均 100 時間かかる）。稼働率向上には MTBF 延長（信頼性向上）または MTTR 短縮（保守性向上）が有効。',
  },
  {
    id: 'SA-004', category: 'system-arch', categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 2, year: null, tags: ['フォールトトレラント', '冗長化'],
    question: 'フォールトトレラントシステムの説明として適切なものはどれか。',
    choices: [
      { index: 0, text: '障害の発生確率を極力低くすることで信頼性を高める設計' },
      { index: 1, text: '障害が発生してもシステム機能を継続するための冗長構成を持つ設計' },
      { index: 2, text: '障害発生時に必ず安全側に動作する設計' },
      { index: 3, text: '障害が発生した部品をモジュール交換で迅速に修復できる設計' },
    ],
    answer: 1,
    explanation: 'フォールトトレラント（Fault Tolerant：耐障害性）は一部の障害が発生してもシステム全体の機能を継続するための冗長構成や多重化を持つ設計。デュアルシステム（2 系統完全並行）やデュプレックスシステム（主系・待機系）が代表例。ア はフォールトアボイダンス、ウ はフェールセーフの説明。',
  },
  {
    id: 'SA-005', category: 'system-arch', categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 2, year: null, tags: ['リアルタイムOS', 'RTOS'],
    question: 'リアルタイム OS（RTOS）の特徴として適切なものはどれか。',
    choices: [
      { index: 0, text: '汎用的なアプリケーション実行を主目的とし、使いやすい GUI を提供する' },
      { index: 1, text: '外部イベントや処理要求に対し、決められた時間内（デッドライン）に応答することを保証する' },
      { index: 2, text: '複数ユーザーが同時に利用できるマルチユーザー機能を主に提供する' },
      { index: 3, text: '汎用 OS と同じ機能を持ち、組込み機器での使用には適さない' },
    ],
    answer: 1,
    explanation: 'RTOS（Real-Time Operating System）は外部イベントへの応答時間（レスポンスタイム）が保証されたリアルタイム性を持つ OS。ハードリアルタイム（デッドライン超過が致命的：航空制御・医療機器）とソフトリアルタイム（多少の遅延は許容：音楽再生）がある。自動車制御・産業用ロボット・家電制品などの組込みシステムで広く使用される。',
  },
];

// ─── QUESTIONS_DATA にフェーズ2の問題を結合 ──────────────
QUESTIONS_DATA.push(...QUESTIONS_DATA_PHASE2);

// ─── SUBJECTS_DATA にフェーズ2の分野を追加済み（上記） ────
// （SUBJECTS_DATA 配列末尾に直接追加されている）

// ─── 用語集データ ──────────────────────────────────────
const GLOSSARY_DATA = [
  // アルゴリズム
  { term: 'O 記法（ビッグ・オー）', category: 'algorithm', definition: 'アルゴリズムの最悪時間計算量を表す記法。O(n²) は入力数 n の 2 乗に比例して処理時間が増加することを意味する。' },
  { term: 'バブルソート', category: 'algorithm', definition: '隣接する要素を比較・交換することで整列するアルゴリズム。計算量 O(n²)・安定ソート。比較回数は最大 n(n-1)/2 回。' },
  { term: 'クイックソート', category: 'algorithm', definition: 'ピボットを基準に配列を分割して整列するアルゴリズム。平均 O(n log n)・最悪 O(n²)・不安定ソート。' },
  { term: 'マージソート', category: 'algorithm', definition: '配列を半分ずつ再帰的に分割してマージするアルゴリズム。最悪でも O(n log n)・安定ソート。' },
  { term: '二分探索', category: 'algorithm', definition: '整列済み配列に対し、毎回中央値と比較して探索範囲を半分に絞る探索法。O(log n)。n=1000 で最大 10 回。' },
  { term: 'スタック', category: 'algorithm', definition: 'LIFO（後入れ先出し）構造のデータ構造。関数呼び出し管理・深さ優先探索などに使用。' },
  { term: 'キュー', category: 'algorithm', definition: 'FIFO（先入れ先出し）構造のデータ構造。印刷待ち・幅優先探索などに使用。' },
  { term: 'ハッシュ表', category: 'algorithm', definition: 'ハッシュ関数でキーをインデックスに変換し格納するデータ構造。平均 O(1) で検索・挿入・削除が可能。衝突対策が重要。' },
  // ネットワーク
  { term: 'OSI 参照モデル', category: 'network', definition: 'ネットワーク通信を 7 層に分けた参照モデル。物理・データリンク・ネットワーク・トランスポート・セッション・プレゼンテーション・アプリケーション層。' },
  { term: 'TCP', category: 'network', definition: 'コネクション型・信頼性保証のトランスポート層プロトコル。3 ウェイハンドシェイクで接続確立。HTTP・FTP・SMTP などで使用。' },
  { term: 'UDP', category: 'network', definition: 'コネクションレス型・高速なトランスポート層プロトコル。信頼性より速度を優先。DNS・NTP・動画ストリーミングなどで使用。' },
  { term: 'DNS', category: 'network', definition: 'ドメイン名を IP アドレスに変換する分散型データベースシステム。ルート→TLD→権威 DNS の階層構造で名前解決を行う。' },
  { term: 'サブネットマスク', category: 'network', definition: 'IP アドレスのネットワーク部とホスト部を分ける 32 ビットの値。/26 は 255.255.255.192 を意味する（CIDR 表記）。' },
  { term: '3 ウェイハンドシェイク', category: 'network', definition: 'TCP 接続確立の手順。SYN → SYN/ACK → ACK の 3 ステップ。双方向の通信路を確立する。' },
  // データベース
  { term: '正規化', category: 'database', definition: 'データの冗長性を排除し更新異常を防ぐためにテーブルを分解する手順。1NF（繰り返し排除）→2NF（部分従属排除）→3NF（推移従属排除）。' },
  { term: 'ACID 特性', category: 'database', definition: 'トランザクションの 4 特性。Atomicity（原子性）・Consistency（一貫性）・Isolation（独立性）・Durability（永続性）。' },
  { term: 'デッドロック', category: 'database', definition: '2 つのトランザクションが互いに相手のロック解放を待ち合い、両方が永久に待ち続ける状態。タイムアウト・ロック順序統一で対処。' },
  { term: '外部キー', category: 'database', definition: '参照元テーブルから参照先テーブルの主キーを参照する列。参照整合性を保証する制約（親なし子レコードの発生を防ぐ）。' },
  { term: 'インデックス', category: 'database', definition: 'データ検索を高速化するための索引構造。SELECT を速くするが INSERT/UPDATE/DELETE は遅くなる可能性がある。' },
  // セキュリティ
  { term: '公開鍵暗号', category: 'security', definition: '公開鍵で暗号化・秘密鍵で復号する非対称鍵暗号。鍵配送問題を解決。代表例: RSA。処理は共通鍵暗号より遅い。' },
  { term: 'デジタル署名', category: 'security', definition: '送信者の秘密鍵でハッシュ値を暗号化した署名。受信者が公開鍵で検証することで本人確認と改ざん検知を行う（機密性は提供しない）。' },
  { term: 'SQLインジェクション', category: 'security', definition: '入力値に SQL 文を埋め込みデータベースを不正操作する攻撃。プレースホルダ（バインド変数）の使用が最も効果的な対策。' },
  { term: 'XSS', category: 'security', definition: 'クロスサイトスクリプティング。Web アプリの出力処理が不適切な場合に悪意あるスクリプトを埋め込む攻撃。HTML エスケープで対策。' },
  { term: '多要素認証（MFA）', category: 'security', definition: '知識・所持・生体の異なる種類の認証要素を 2 つ以上組み合わせた認証方式。同種の組合せ（パスワード+PIN）は MFA ではない。' },
  { term: 'PKI', category: 'security', definition: '公開鍵基盤。認証局（CA）がデジタル証明書を発行し公開鍵の正当性を保証する仕組み。TLS/HTTPS の信頼基盤となる。' },
  // OS
  { term: 'ページフォルト', category: 'os', definition: '参照しようとした仮想アドレスのページが物理メモリ上にない場合に発生する割り込み。OS がディスクからページを読み込む（スワップイン）。' },
  { term: 'スラッシング', category: 'os', definition: 'ページフォルトが頻発し、スワップ処理に CPU 時間のほとんどが費やされる状態。性能が急激に低下する。メモリ増設で対処。' },
  { term: 'ラウンドロビン', category: 'os', definition: 'CPU スケジューリング方式の一つ。各プロセスに均等なタイムスライスを割り当てる。公平性が高く対話型システムに適する。' },
  { term: 'セマフォ', category: 'os', definition: 'プロセス同期に使用する仕組み。P 操作（wait）と V 操作（signal）でクリティカルセクションへの排他制御を実現する。' },
  { term: 'DMA', category: 'os', definition: 'Direct Memory Access。CPU を介さずにデバイスとメモリ間でデータ転送を行う仕組み。大量データ転送時に CPU 負荷を軽減できる。' },
  // ソフトウェア開発
  { term: 'ウォーターフォールモデル', category: 'software-dev', definition: '要件定義→設計→実装→テスト→運用を順番に一方向に進める開発手法。要件が明確で変更が少ない大規模開発に向く。' },
  { term: 'アジャイル開発', category: 'software-dev', definition: '短い反復サイクル（スプリント）で動くソフトウェアを届け続ける開発手法。変化への対応を重視。スクラム・XP が代表。' },
  { term: 'WBS', category: 'project-mgmt', definition: 'Work Breakdown Structure。プロジェクトの作業を成果物・タスクに階層的に分解した構造図。最下位をワークパッケージという。' },
  { term: 'クリティカルパス', category: 'project-mgmt', definition: 'プロジェクト完了までの最長経路。クリティカルパス上の作業のフロートはゼロ。遅延するとプロジェクト全体が遅延する。' },
  { term: 'EVM', category: 'project-mgmt', definition: 'アーンドバリューマネジメント。PV・EV・AC の 3 指標でコスト・スケジュールのパフォーマンスを測定する手法。' },
  { term: 'SLA', category: 'service-mgmt', definition: 'Service Level Agreement。サービス提供者と顧客が合意したサービスレベルの基準（稼働率・応答時間等）を定めた契約文書。' },
  { term: 'MTBF', category: 'service-mgmt', definition: 'Mean Time Between Failures（平均故障間隔）。故障から次の故障までの平均動作時間。稼働率 = MTBF ÷ (MTBF + MTTR)。' },
  { term: 'MTTR', category: 'service-mgmt', definition: 'Mean Time To Repair（平均修復時間）。故障発生から修復完了までの平均時間。MTTR を短くすると稼働率が向上する。' },
  { term: 'SWOT 分析', category: 'business-strategy', definition: '内部環境（S: 強み・W: 弱み）と外部環境（O: 機会・T: 脅威）を分析する経営戦略フレームワーク。' },
  { term: 'BSC', category: 'business-strategy', definition: 'バランスト・スコアカード。財務・顧客・業務プロセス・学習と成長の 4 視点でバランスよく業績を管理するフレームワーク。' },
  { term: 'ROI', category: 'business-strategy', definition: 'Return on Investment（投資利益率）。ROI = 利益 ÷ 投資金額 × 100(%)。IT 投資効果の測定に用いられる。' },
  { term: '著作権', category: 'legal', definition: '創作物の著作者に与えられる権利。創作と同時に自動発生（登録不要・無方式主義）。保護期間は著作者の死後 70 年。' },
  { term: '営業秘密', category: 'legal', definition: '不正競争防止法で保護される企業の秘密情報。3 要件：秘密管理性・有用性・非公知性。' },
  { term: '要配慮個人情報', category: 'legal', definition: '個人情報保護法上、取得に本人同意が必要な個人情報。病歴・人種・信条・前科・障害の有無などが該当。' },
  { term: 'フェールセーフ', category: 'system-arch', definition: '障害発生時に安全な状態へ移行する設計思想。例: 踏切の電源断で遮断機を下ろす。フォールトトレラントとは異なる。' },
  { term: 'RAID 5', category: 'system-arch', definition: 'データとパリティを 3 台以上のディスクに分散格納するストレージ技術。1 台の故障に対応可能。読み込み性能が高い。' },
  { term: 'リアルタイム OS', category: 'system-arch', definition: '外部イベントへの応答時間（デッドライン）が保証された OS。自動車制御・医療機器・産業用ロボットなどの組込みシステムで使用。' },
];

/* =====================================================
   QUESTIONS_DATA_PHASE3 — 応用問題（難易度 4〜5）
   各分野 3 問 × 11 分野 = 33 問
   ===================================================== */
const QUESTIONS_DATA_PHASE3 = [

  // ─── アルゴリズム ─────────────────────────────────
  {
    id: 'ALG-006',
    category: 'algorithm',
    categoryName: 'アルゴリズム',
    difficulty: 4,
    year: 2023,
    tags: ['動的計画法', '最長共通部分列'],
    question: '文字列 "ABCBDAB" と "BDCAB" の最長共通部分列（LCS）の長さを動的計画法で求めたとき、正しい値はどれか。',
    choices: [
      { index: 0, text: '3' },
      { index: 1, text: '4' },
      { index: 2, text: '5' },
      { index: 3, text: '2' },
    ],
    answer: 1,
    explanation: '動的計画法の LCS テーブルを構築すると、"ABCBDAB" と "BDCAB" の LCS は "BCAB" または "BDAB" で長さ 4 が正答です。LCS は dp[i][j] = (s1[i]==s2[j]) ? dp[i-1][j-1]+1 : max(dp[i-1][j], dp[i][j-1]) の漸化式で求めます。3 は不足（"BCA" や "BDA" は正しいが長さ 3）、5 は文字列長を超えるため不可です。',
  },
  {
    id: 'ALG-007',
    category: 'algorithm',
    categoryName: 'アルゴリズム',
    difficulty: 4,
    year: 2022,
    tags: ['グラフ', 'ダイクストラ法'],
    question: '重み付き有向グラフにおいて、ダイクストラ法が正しく最短経路を求められない場合はどれか。',
    choices: [
      { index: 0, text: '辺の重みが全て正のグラフ' },
      { index: 1, text: '辺の重みに負の値が含まれるグラフ' },
      { index: 2, text: '有向非巡回グラフ（DAG）' },
      { index: 3, text: '完全グラフ' },
    ],
    answer: 1,
    explanation: 'ダイクストラ法は「確定済みノードへの最短距離は変わらない」という前提に基づきます。負の辺が存在すると、確定後に短い経路が現れる可能性があり、この前提が崩れて誤った結果を返します。負の辺を含む場合はベルマン-フォード法を使用します。完全グラフや DAG は辺が正であればダイクストラ法で正しく動作します。',
  },
  {
    id: 'ALG-008',
    category: 'algorithm',
    categoryName: 'アルゴリズム',
    difficulty: 5,
    year: 2023,
    tags: ['計算量', 'NP完全'],
    question: '次のうち、NP 完全問題として正しく分類されるものはどれか。',
    choices: [
      { index: 0, text: '整列（ソート）' },
      { index: 1, text: '二分探索' },
      { index: 2, text: '巡回セールスマン問題（判定版）' },
      { index: 3, text: '最短経路問題（単一始点）' },
    ],
    answer: 2,
    explanation: '巡回セールスマン問題（TSP）の判定版（長さ k 以下のハミルトン閉路が存在するか）は NP 完全問題です。整列は O(n log n) の多項式時間アルゴリズムが存在するためクラス P、二分探索は O(log n)、単一始点最短経路はダイクストラ法で O((V+E) log V) と多項式時間で解けます。NP 完全とは NP かつ NP 困難な問題を指します。',
  },

  // ─── ネットワーク ──────────────────────────────────
  {
    id: 'NET-006',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 4,
    year: 2023,
    tags: ['VLAN', 'スパニングツリー'],
    question: 'スイッチネットワークでスパニングツリープロトコル（STP）が必要となる主な理由はどれか。',
    choices: [
      { index: 0, text: 'IP アドレスの重複を防ぐため' },
      { index: 1, text: 'VLAN 間のルーティングを実現するため' },
      { index: 2, text: 'スイッチ間の冗長経路によるブロードキャストストームを防ぐため' },
      { index: 3, text: 'ポート速度の自動ネゴシエーションを行うため' },
    ],
    answer: 2,
    explanation: '冗長接続されたスイッチネットワークでは、ループが形成されるとブロードキャストフレームが無限に転送され続けるブロードキャストストームが発生します。STP はスイッチ間で BPDU を交換してルートブリッジを選出し、論理的にループになるポートをブロッキング状態にすることでストームを防ぎます。IP アドレス重複防止は DHCP スヌーピングやダイナミック ARP 検査、VLAN 間ルーティングはレイヤ 3 スイッチまたはルータが担当します。',
  },
  {
    id: 'NET-007',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 4,
    year: 2022,
    tags: ['IPv6', 'アドレス'],
    question: 'IPv6 のリンクローカルアドレスに関する記述として、正しいものはどれか。',
    choices: [
      { index: 0, text: '同一サブネット内の通信にのみ使用でき、ルータを越えて転送されない' },
      { index: 1, text: 'グローバルユニキャストアドレスと同様にインターネット上で使用できる' },
      { index: 2, text: '手動設定のみで取得でき、自動設定はできない' },
      { index: 3, text: 'プレフィックスは 2001::/16 で始まる' },
    ],
    answer: 0,
    explanation: 'IPv6 のリンクローカルアドレスはプレフィックス fe80::/10 で始まり、同一リンク（同一サブネット）内のみで有効です。ルータはリンクローカルアドレスを他のリンクへ転送しません。リンクローカルアドレスはステートレス自動設定（SLAAC）によりインタフェース識別子から自動的に生成されます。グローバルユニキャストアドレスのプレフィックスは 2000::/3 で、2001::/16 はその一部です。',
  },
  {
    id: 'NET-008',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 4,
    year: 2023,
    tags: ['BGP', 'ルーティング'],
    question: 'BGP（Border Gateway Protocol）に関する説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: '同一 AS 内のルータ間で使用するイントラドメインルーティングプロトコルである' },
      { index: 1, text: 'リンク状態型ルーティングプロトコルであり、ダイクストラ法でパスを計算する' },
      { index: 2, text: '異なる AS 間でのルーティング情報交換に使用するエクステリアゲートウェイプロトコルである' },
      { index: 3, text: 'ホップ数のみをメトリックとして使用し、最大ホップ数は 15 である' },
    ],
    answer: 2,
    explanation: 'BGP はインターネット上の自律システム（AS）間でルーティング情報を交換するためのエクステリアゲートウェイプロトコル（EGP）です。TCP ポート 179 を使用し、パスベクタ型アルゴリズムで経路を選択します。同一 AS 内ではOSPF（リンク状態型）や EIGRP を使用します。ホップ数制限 15 は RIP の特性です。',
  },

  // ─── データベース ──────────────────────────────────
  {
    id: 'DB-006',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 4,
    year: 2023,
    tags: ['インデックス', 'B木'],
    question: 'リレーショナルデータベースの B+ 木インデックスに関する説明として、誤っているものはどれか。',
    choices: [
      { index: 0, text: '葉ノードは全てのデータエントリを持ち、連結リストで繋がれている' },
      { index: 1, text: '範囲検索（BETWEEN）に対して効率的な検索が可能である' },
      { index: 2, text: 'インデックスを追加するとデータの挿入・更新・削除の性能が向上する' },
      { index: 3, text: '等値検索の計算量はツリーの高さに比例した O(log n) である' },
    ],
    answer: 2,
    explanation: 'インデックスを追加すると SELECT（検索）の性能は向上しますが、INSERT・UPDATE・DELETE ではインデックスも同時に更新する必要があるため、書き込み性能は低下します。これはインデックスのトレードオフです。B+ 木の葉ノードは全データエントリを保持し双方向リストで繋がれているため範囲検索に有利です。等値検索は O(log n) が正しい説明です。',
  },
  {
    id: 'DB-007',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 5,
    year: 2022,
    tags: ['トランザクション', '分離レベル'],
    question: 'ANSI/ISO SQL 標準のトランザクション分離レベル "REPEATABLE READ" で防止できる現象はどれか。',
    choices: [
      { index: 0, text: 'ダーティリード（Dirty Read）のみ' },
      { index: 1, text: 'ダーティリードとノンリピータブルリード' },
      { index: 2, text: 'ダーティリード・ノンリピータブルリード・ファントムリード の全て' },
      { index: 3, text: 'ファントムリード（Phantom Read）のみ' },
    ],
    answer: 1,
    explanation: 'ANSI 標準の分離レベルと防止できる現象は以下の通りです。READ UNCOMMITTED: なし。READ COMMITTED: ダーティリードのみ防止。REPEATABLE READ: ダーティリード＋ノンリピータブルリードを防止（ファントムリードは発生しうる）。SERIALIZABLE: 全て防止。よってREPEATABLE READ では 2 つの現象を防止でき、ファントムリードは防止できないのが正答です。ただし MySQL（InnoDB）はギャップロックにより REPEATABLE READ でもファントムリードを防ぎます。',
  },
  {
    id: 'DB-008',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 4,
    year: 2023,
    tags: ['NoSQL', 'CAP定理'],
    question: 'CAP 定理における「結果整合性（Eventual Consistency）」を採用する NoSQL データベースの説明として、適切なものはどれか。',
    choices: [
      { index: 0, text: '全ノードが常に同一のデータを返す強整合性を保証する' },
      { index: 1, text: 'ネットワーク分断が発生しても可用性を優先し、一定時間後に整合性が保たれる' },
      { index: 2, text: '単一ノードのみで動作し、分散環境には対応しない' },
      { index: 3, text: 'ACID 特性を完全に満たす' },
    ],
    answer: 1,
    explanation: 'CAP 定理とは、分散システムにおいて Consistency（整合性）・Availability（可用性）・Partition Tolerance（分断耐性）の 3 つを同時に保証することは不可能という定理です。結果整合性（Eventual Consistency）はネットワーク分断発生時に可用性を優先し、しばらく後に全ノードのデータが一致することを保証するアプローチです（AP 系）。強整合性は CP 系のアプローチです。',
  },

  // ─── セキュリティ ──────────────────────────────────
  {
    id: 'SEC-006',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 4,
    year: 2023,
    tags: ['PKI', 'デジタル証明書'],
    question: 'ルート CA（認証局）の証明書を信頼する場合、中間 CA が発行したサーバ証明書を検証するために必要なものとして、適切なものはどれか。',
    choices: [
      { index: 0, text: 'ルート CA の秘密鍵' },
      { index: 1, text: 'サーバの秘密鍵' },
      { index: 2, text: '中間 CA の証明書（証明書チェーン）' },
      { index: 3, text: 'サーバの IP アドレス' },
    ],
    answer: 2,
    explanation: 'PKI の証明書チェーン検証では、サーバ証明書→中間 CA 証明書→ルート CA 証明書という信頼チェーンを辿ります。クライアントはルート CA の公開鍵で中間 CA の証明書を検証し、中間 CA の公開鍵でサーバ証明書を検証します。ルート CA や サーバの秘密鍵は公開されてはいけない情報であり、検証には不要です。中間 CA 証明書はサーバが TLS ハンドシェイク時に送付します。',
  },
  {
    id: 'SEC-007',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 4,
    year: 2022,
    tags: ['マルウェア', 'APT'],
    question: 'APT（Advanced Persistent Threat）攻撃の特徴として、最も適切なものはどれか。',
    choices: [
      { index: 0, text: '不特定多数を標的にした大規模な自動スキャン攻撃' },
      { index: 1, text: '特定の組織や個人を標的に、長期にわたって継続的に行われる高度な標的型攻撃' },
      { index: 2, text: 'ソフトウェアの既知の脆弱性を利用した一般的な攻撃' },
      { index: 3, text: 'Web フォームを介した SQL インジェクション攻撃' },
    ],
    answer: 1,
    explanation: 'APT（高度標的型攻撃）は、特定の国家機関・企業・重要インフラを標的に、高度な技術と豊富なリソースを持つ攻撃者（国家レベルのアクターも含む）が長期間かけて侵入・潜伏する攻撃です。特徴は①特定組織を標的、②高度な技術・ゼロデイ脆弱性の悪用、③長期滞在（数ヶ月〜数年）、④情報窃取や破壊工作が目的です。不特定多数への自動スキャンはポートスキャンやワーム、SQL インジェクションは汎用 Web 攻撃です。',
  },
  {
    id: 'SEC-008',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 5,
    year: 2023,
    tags: ['暗号化', 'AES', 'RSA'],
    question: '共通鍵暗号方式 AES と公開鍵暗号方式 RSA を組み合わせたハイブリッド暗号方式の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'データを RSA で暗号化し、RSA の鍵を AES で暗号化して送る' },
      { index: 1, text: 'データを AES で暗号化し、その AES セッション鍵を受信者の RSA 公開鍵で暗号化して送る' },
      { index: 2, text: 'データを AES と RSA の両方で二重に暗号化する' },
      { index: 3, text: 'AES で署名し、RSA で暗号化する' },
    ],
    answer: 1,
    explanation: 'ハイブリッド暗号は AES（高速だが鍵配送が問題）と RSA（鍵配送は安全だが低速）の長所を組み合わせます。手順は①乱数でセッション鍵（AES 鍵）を生成、②データを AES セッション鍵で暗号化（高速）、③AES セッション鍵を受信者の RSA 公開鍵で暗号化（小さいデータなので低速でも許容）、④暗号化データと暗号化セッション鍵を送付、です。TLS も同様の仕組みを採用しています。',
  },

  // ─── OS ──────────────────────────────────────────
  {
    id: 'OS-006',
    category: 'os',
    categoryName: 'OS・ハードウェア',
    difficulty: 4,
    year: 2022,
    tags: ['仮想メモリ', 'ページ置換'],
    question: 'ページ置換アルゴリズムの LRU（Least Recently Used）について、正しい説明はどれか。',
    choices: [
      { index: 0, text: '最も遠い将来に使われるページを追い出す最適アルゴリズムである' },
      { index: 1, text: '最も長い間参照されていないページを追い出す方式で、実装コストが高い' },
      { index: 2, text: 'ページフレーム数を増やすと常にページフォルト数が減少する' },
      { index: 3, text: '物理メモリに最初に読み込まれたページから順番に追い出す' },
    ],
    answer: 1,
    explanation: 'LRU は過去の参照履歴に基づき「最も長い間使われていないページ」を置換します。過去の局所性を利用した現実的な近似アルゴリズムです。ただし参照時刻を記録する必要があり、実装コスト（タイムスタンプの管理など）が FIFO より高くなります。選択肢 0 は OPT（最適）アルゴリズム、選択肢 2 は「ベラディの異常」があり FIFO では成立しない場合があります。選択肢 3 は FIFO です。',
  },
  {
    id: 'OS-007',
    category: 'os',
    categoryName: 'OS・ハードウェア',
    difficulty: 4,
    year: 2023,
    tags: ['プロセス', 'デッドロック'],
    question: 'デッドロックが発生する 4 つの必要条件（コフマン条件）に含まれないものはどれか。',
    choices: [
      { index: 0, text: '相互排除（Mutual Exclusion）' },
      { index: 1, text: '占有と待機（Hold and Wait）' },
      { index: 2, text: '先取り可能（Preemption）' },
      { index: 3, text: '循環待機（Circular Wait）' },
    ],
    answer: 2,
    explanation: 'デッドロック発生の 4 必要条件（コフマン条件）は①相互排除、②占有と待機（資源を保持しながら他の資源を待つ）、③非横取り（Preemption 不可）、④循環待機です。選択肢 2 の「先取り可能（Preemption）」は逆で、デッドロックが起きるのは「先取り不可能（Non-preemptive）」な場合です。4 条件のいずれか一つを排除することでデッドロックを予防できます。',
  },
  {
    id: 'OS-008',
    category: 'os',
    categoryName: 'OS・ハードウェア',
    difficulty: 4,
    year: 2023,
    tags: ['仮想化', 'ハイパーバイザ'],
    question: 'タイプ 1 ハイパーバイザ（ベアメタル型）とタイプ 2 ハイパーバイザ（ホスト OS 型）を比較した場合の、タイプ 1 の特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: 'ホスト OS 上で動作するため、インストールが容易で開発用途に向く' },
      { index: 1, text: 'ハードウェア上で直接動作するため、オーバヘッドが小さく本番環境に適する' },
      { index: 2, text: 'ゲスト OS はホスト OS のカーネルを共有する' },
      { index: 3, text: 'コンテナ型仮想化と同義である' },
    ],
    answer: 1,
    explanation: 'タイプ 1 ハイパーバイザ（VMware ESXi、Microsoft Hyper-V など）はハードウェア上に直接インストールされ、ホスト OS を必要としないため CPU・メモリのオーバヘッドが小さく、エンタープライズ本番環境に適します。タイプ 2（VirtualBox、VMware Workstation など）はホスト OS 上で動作し、インストールが容易なため開発・テスト用途に向きます。コンテナ（Docker）はカーネルを共有する別概念で、ハイパーバイザとは異なります。',
  },

  // ─── ソフトウェア開発 ──────────────────────────────
  {
    id: 'SD-006',
    category: 'software-dev',
    categoryName: 'ソフトウェア開発',
    difficulty: 3,
    year: 2023,
    tags: ['テスト', '境界値分析'],
    question: '境界値分析において、入力値の有効範囲が 1 以上 100 以下の整数の場合、テストすべき境界値の組合せとして最も適切なものはどれか。',
    choices: [
      { index: 0, text: '1, 50, 100' },
      { index: 1, text: '0, 1, 100, 101' },
      { index: 2, text: '0, 1, 2, 99, 100, 101' },
      { index: 3, text: '1, 100 のみ' },
    ],
    answer: 2,
    explanation: '境界値分析では、有効範囲の最小値・最大値とその前後（境界の外側 1 つ）をテストします。有効範囲 1〜100 の場合、最小境界値 1 の前の 0（無効）、最小値 1、最小値+1 の 2、最大値-1 の 99、最大値 100、最大値+1 の 101（無効）をテストするのが完全な境界値分析です。50 は境界ではなく同値分割の代表値、1 と 100 のみでは境界外の無効値テストが漏れます。',
  },
  {
    id: 'SD-007',
    category: 'software-dev',
    categoryName: 'ソフトウェア開発',
    difficulty: 4,
    year: 2022,
    tags: ['アジャイル', 'スクラム'],
    question: 'スクラムにおけるスプリントレトロスペクティブ（振り返り）の目的として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'プロダクトバックログの優先順位を整理すること' },
      { index: 1, text: 'スプリントで完成した機能をステークホルダに披露すること' },
      { index: 2, text: 'チームの作業プロセスや協働の改善点を見つけ次のスプリントに活かすこと' },
      { index: 3, text: 'スプリントバックログを作成してタスクを割り当てること' },
    ],
    answer: 2,
    explanation: 'スクラムの 4 つのイベントの目的は以下の通りです。スプリントプランニング：スプリントバックログ作成。デイリースクラム：日次同期・障害確認。スプリントレビュー：完成物をステークホルダに披露しフィードバック取得。スプリントレトロスペクティブ：チームの作業プロセスを振り返り、改善点（Keep/Problem/Try など）を次スプリントに活かす。プロダクトバックログの整理はプロダクトオーナーのリファインメント作業です。',
  },
  {
    id: 'SD-008',
    category: 'software-dev',
    categoryName: 'ソフトウェア開発',
    difficulty: 4,
    year: 2023,
    tags: ['CI/CD', 'DevOps'],
    question: 'CI/CD パイプラインにおける「継続的デリバリー（Continuous Delivery）」と「継続的デプロイメント（Continuous Deployment）」の違いとして、正しいものはどれか。',
    choices: [
      { index: 0, text: '継続的デリバリーは自動テストまで、継続的デプロイメントはコンパイルまでを自動化する' },
      { index: 1, text: '継続的デリバリーは本番環境へのリリースに承認が必要だが、継続的デプロイメントは承認なしで自動的に本番デプロイまで行う' },
      { index: 2, text: '継続的デリバリーはコンテナを使用し、継続的デプロイメントは VM を使用する' },
      { index: 3, text: '両者は完全に同一の意味で使用される' },
    ],
    answer: 1,
    explanation: 'CI（継続的インテグレーション）はコードのビルド・テストを自動化します。継続的デリバリー（CD）は本番同等環境へのデプロイまで自動化しつつ、本番へのリリースには人間の承認を挟みます。継続的デプロイメントはその承認も省略し、テストが通れば自動的に本番環境へデプロイします。両者の違いは「本番デプロイの自動化有無」です。',
  },

  // ─── プロジェクトマネジメント ──────────────────────
  {
    id: 'PM-006',
    category: 'project-mgmt',
    categoryName: 'プロジェクトマネジメント',
    difficulty: 4,
    year: 2023,
    tags: ['EVM', 'CPI', 'SPI'],
    question: 'EVM において、PV = 600 万円、EV = 480 万円、AC = 560 万円 のとき、コスト効率指数（CPI）とスケジュール効率指数（SPI）の組合せとして正しいものはどれか。',
    choices: [
      { index: 0, text: 'CPI = 0.86、SPI = 0.80' },
      { index: 1, text: 'CPI = 0.80、SPI = 0.86' },
      { index: 2, text: 'CPI = 1.17、SPI = 1.25' },
      { index: 3, text: 'CPI = 0.80、SPI = 1.17' },
    ],
    answer: 0,
    explanation: 'EVM の計算式：CPI = EV ÷ AC = 480 ÷ 560 ≈ 0.857 ≈ 0.86（コスト超過：1 未満）。SPI = EV ÷ PV = 480 ÷ 600 = 0.80（スケジュール遅延：1 未満）。CPI < 1 はコスト超過、SPI < 1 はスケジュール遅延を示します。完成時総コスト予測（EAC）= BAC ÷ CPI で計算します。',
  },
  {
    id: 'PM-007',
    category: 'project-mgmt',
    categoryName: 'プロジェクトマネジメント',
    difficulty: 4,
    year: 2022,
    tags: ['リスク管理', 'リスク対応'],
    question: 'プロジェクトリスクの定量的な評価に用いる「リスク期待値」の計算式として正しいものはどれか。',
    choices: [
      { index: 0, text: 'リスク発生確率 ＋ リスクが発生した場合の影響額' },
      { index: 1, text: 'リスク発生確率 × リスクが発生した場合の影響額' },
      { index: 2, text: '（最悲観値 ＋ 4 × 最可能値 ＋ 最楽観値）÷ 6' },
      { index: 3, text: 'リスク影響額 ÷ プロジェクト予算' },
    ],
    answer: 1,
    explanation: 'リスクの期待金銭価値（EMV: Expected Monetary Value）＝ リスク発生確率 × リスクが発生した場合の影響額（コスト）です。例えば発生確率 30%、影響額 1000 万円なら EMV は 300 万円となります。選択肢 2 はPERT の期待値計算（三点見積もり）式で、作業時間の見積もりに使います。EMV はリスク予備費の算出やリスクの優先度付けに活用します。',
  },
  {
    id: 'PM-008',
    category: 'project-mgmt',
    categoryName: 'プロジェクトマネジメント',
    difficulty: 3,
    year: 2023,
    tags: ['組織', 'マトリックス組織'],
    question: 'プロジェクトマネジメントにおけるマトリックス組織の特徴として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'プロジェクトメンバは一つのプロジェクトにのみ専念し、機能部門には所属しない' },
      { index: 1, text: 'プロジェクトメンバはプロジェクトマネジャと機能部門マネジャの両方に対して報告義務を持つ' },
      { index: 2, text: 'プロジェクトマネジャが予算・人員の全権限を持つ' },
      { index: 3, text: '各プロジェクトが完全に独立した組織として運営される' },
    ],
    answer: 1,
    explanation: 'マトリックス組織ではメンバが機能部門（開発部・営業部など）に所属しながらプロジェクトにも参加するため、機能部門マネジャとプロジェクトマネジャの両方に報告する二重の指揮系統が生じます。これがコンフリクトの原因にもなります。選択肢 0・2・3 はプロジェクト型（プロジェクタイズド）組織の特徴です。弱いマトリックスは機能部門の権限が強く、強いマトリックスはPMの権限が強いです。',
  },

  // ─── サービスマネジメント ──────────────────────────
  {
    id: 'SM-006',
    category: 'service-mgmt',
    categoryName: 'サービスマネジメント',
    difficulty: 3,
    year: 2023,
    tags: ['ITIL', '変更管理'],
    question: 'ITIL における変更管理（Change Management）の目的として、最も適切なものはどれか。',
    choices: [
      { index: 0, text: 'サービス障害の原因を特定して根本的な解決策を提供すること' },
      { index: 1, text: 'IT サービスへの変更を標準化されたプロセスで管理し、リスクを最小化すること' },
      { index: 2, text: '利用者からの問い合わせや要求を一元管理し迅速に対応すること' },
      { index: 3, text: '合意したサービスレベルを監視・報告すること' },
    ],
    answer: 1,
    explanation: 'ITIL の各プロセスの目的は以下の通りです。問題管理：根本原因の特定と既知エラーの管理（選択肢 0）。変更管理：標準化されたプロセスで変更を承認・実施し、サービスへの悪影響を最小化（正答）。サービスデスク/インシデント管理：利用者の問い合わせや障害を迅速に解決（選択肢 2）。サービスレベル管理：SLA の監視・報告（選択肢 3）。',
  },
  {
    id: 'SM-007',
    category: 'service-mgmt',
    categoryName: 'サービスマネジメント',
    difficulty: 4,
    year: 2022,
    tags: ['稼働率', 'SLA'],
    question: '3 台のサーバが全て稼働している場合のみサービスが提供できるシステムにおいて、各サーバの稼働率が 0.98 のとき、システム全体の稼働率として正しいものはどれか。',
    choices: [
      { index: 0, text: '0.9412' },
      { index: 1, text: '0.9800' },
      { index: 2, text: '0.9994' },
      { index: 3, text: '0.9412' },
    ],
    answer: 0,
    explanation: '3 台全て稼働が必要な直列システムの稼働率 = 各サーバの稼働率の積 = 0.98 × 0.98 × 0.98 = 0.941192 ≈ 0.9412 です。並列冗長システムであれば稼働率 = 1 − (1 − 0.98)³ = 1 − 0.000008 ≈ 0.999992 となります。直列接続では個々の稼働率より低くなり、並列では高くなります。',
  },
  {
    id: 'SM-008',
    category: 'service-mgmt',
    categoryName: 'サービスマネジメント',
    difficulty: 3,
    year: 2023,
    tags: ['ITIL', 'インシデント管理', '問題管理'],
    question: 'ITIL においてインシデント管理と問題管理の違いとして、正しいものはどれか。',
    choices: [
      { index: 0, text: 'インシデント管理は根本原因の特定を主目的とし、問題管理はサービスの迅速な復旧を主目的とする' },
      { index: 1, text: 'インシデント管理はサービスの迅速な復旧を目的とし、問題管理はインシデントの根本原因を特定・排除することを目的とする' },
      { index: 2, text: '両者は同一プロセスであり、担当チームが異なるだけである' },
      { index: 3, text: '問題管理は変更管理の一部であり、インシデント管理は独立したプロセスである' },
    ],
    answer: 1,
    explanation: 'ITIL ではインシデント管理と問題管理は明確に分離されています。インシデント管理：サービス中断・品質低下を迅速に復旧させることが目的（暫定対処でも可）。問題管理：インシデントの根本原因（根本的な欠陥・バグ）を特定し恒久対策を実施することが目的。根本原因不明のうちは「既知エラー（Known Error）」として管理されます。この分離により、復旧スピードと根本解決の両立を図ります。',
  },

  // ─── 経営戦略・システム戦略 ────────────────────────
  {
    id: 'BS-006',
    category: 'business-strategy',
    categoryName: 'システム戦略・経営戦略',
    difficulty: 4,
    year: 2023,
    tags: ['投資評価', 'NPV'],
    question: '初期投資 1,000 万円、3 年間の年間純利益 400 万円、割引率 10% のとき、正味現在価値（NPV）を計算した場合の結果に最も近い値はどれか。ただし 3 年間の割引率 10% の現価係数を 2.49 とする。',
    choices: [
      { index: 0, text: '−4 万円（NPV < 0 で投資不適切）' },
      { index: 1, text: '200 万円（NPV > 0 で投資適切）' },
      { index: 2, text: '996 万円（NPV > 0 で投資適切）' },
      { index: 3, text: '−1,000 万円（NPV < 0 で投資不適切）' },
    ],
    answer: 0,
    explanation: 'NPV = 将来キャッシュフローの現在価値合計 − 初期投資。年間 400 万円 × 現価係数 2.49 = 996 万円。NPV = 996 − 1,000 = −4 万円。NPV < 0 のため、この投資案件は経済的には採択すべきでないと判断されます。NPV = 0 が損益分岐点で、正ならば投資利益が資本コストを上回ることを意味します。IRR（内部収益率）は NPV = 0 となる割引率です。',
  },
  {
    id: 'BS-007',
    category: 'business-strategy',
    categoryName: 'システム戦略・経営戦略',
    difficulty: 3,
    year: 2022,
    tags: ['SCM', 'ブルウィップ効果'],
    question: 'サプライチェーンマネジメント（SCM）における「ブルウィップ効果（Bullwhip Effect）」の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: '需要情報が上流（製造側）に伝わるにつれて需要変動が増幅される現象' },
      { index: 1, text: '在庫を持たないことで配送コストが増大する現象' },
      { index: 2, text: '製品の多様化により生産効率が低下する現象' },
      { index: 3, text: 'グローバル調達により品質ばらつきが増加する現象' },
    ],
    answer: 0,
    explanation: 'ブルウィップ効果とは、最終消費者の需要変動は小さくても、小売→卸→メーカー→原材料メーカーと上流に情報が伝達されるにつれて発注量の変動が増幅されていく現象です。各段階で「安全在庫」を余分に持つことが原因です。SCM では需要情報をリアルタイムで全段階と共有することで緩和できます。POS データの共有や VMI（ベンダ管理在庫）が対策として有効です。',
  },
  {
    id: 'BS-008',
    category: 'business-strategy',
    categoryName: 'システム戦略・経営戦略',
    difficulty: 4,
    year: 2023,
    tags: ['ITガバナンス', 'COBIT'],
    question: 'IT ガバナンスフレームワーク COBIT 2019 において、IT ガバナンスの主要な目標として掲げられているものはどれか。',
    choices: [
      { index: 0, text: 'IT 部門のコスト削減と人員最適化' },
      { index: 1, text: 'ステークホルダのニーズを満たしながら、IT を通じて企業価値を創出すること' },
      { index: 2, text: 'ソフトウェア開発プロセスの標準化と品質向上' },
      { index: 3, text: 'セキュリティインシデントの検知と対応手順の整備' },
    ],
    answer: 1,
    explanation: 'COBIT（Control Objectives for Information and Related Technologies）は ISACA が策定した IT ガバナンスフレームワークです。COBIT 2019 の核心目標は「ステークホルダのニーズのバランスを取りながら、情報と技術を活用して企業価値を実現・維持すること」です。IT ガバナンスはコスト削減だけでなく、リスク管理・価値創出・資源最適化・業績測定の 5 領域を統合的に管理します。',
  },

  // ─── 企業と法務 ─────────────────────────────────────
  {
    id: 'LG-006',
    category: 'legal',
    categoryName: '企業と法務',
    difficulty: 4,
    year: 2023,
    tags: ['特許法', '職務発明'],
    question: '特許法上の「職務発明」に関する記述として、正しいものはどれか。',
    choices: [
      { index: 0, text: '従業員が業務外で行った発明は全て会社に帰属する' },
      { index: 1, text: '従業員が職務に関連して行った発明で、原始的には従業員が特許を受ける権利を持ち、会社への譲渡には相当の対価が必要' },
      { index: 2, text: '会社の命令で行った発明は、発明者の同意なく自動的に会社に帰属する' },
      { index: 3, text: '職務発明の特許権は常に発明者個人に帰属し、会社は実施許諾を受けることしかできない' },
    ],
    answer: 1,
    explanation: '特許法 35 条の職務発明規定（2015 年改正後）では、従業員がその性質上職務に属する発明を職務発明といいます。職務発明の特許を受ける権利は原始的には従業員（発明者）に帰属しますが、あらかじめ契約・勤務規則等で会社に承継する定めをすることができ、その場合は従業員に「相当の利益（金銭または金銭以外）」を付与する義務があります。業務外発明は会社に帰属しません。',
  },
  {
    id: 'LG-007',
    category: 'legal',
    categoryName: '企業と法務',
    difficulty: 4,
    year: 2022,
    tags: ['個人情報保護法', '第三者提供'],
    question: '個人情報保護法における個人データの第三者提供に関して、本人の同意なく第三者提供が可能なケースとして正しいものはどれか。',
    choices: [
      { index: 0, text: 'マーケティング目的で他社に個人データを販売する場合' },
      { index: 1, text: '統計データ作成のため委託先に提供する場合' },
      { index: 2, text: '人の生命・身体・財産の保護に必要で本人同意取得が困難な場合' },
      { index: 3, text: '報道機関から情報提供を求められた場合' },
    ],
    answer: 2,
    explanation: '個人情報保護法 23 条では本人同意なしの第三者提供を原則禁止しつつ、例外として以下を認めます。①法令に基づく場合（警察の捜査令状など）、②人の生命・身体・財産の保護に必要で本人同意取得が困難な場合、③公衆衛生・児童健全育成のために必要かつ本人同意取得が困難な場合、④国・地方公共団体への協力。委託先への提供は第三者提供ではなく「委託」（監督義務あり）で別扱いです。報道目的は営利目的第三者提供とは異なりますが一律免除はありません。',
  },
  {
    id: 'LG-008',
    category: 'legal',
    categoryName: '企業と法務',
    difficulty: 4,
    year: 2023,
    tags: ['不正競争防止法', '営業秘密'],
    question: '不正競争防止法が保護する「営業秘密」の 3 要件として、正しい組合せはどれか。',
    choices: [
      { index: 0, text: '有用性・非公知性・秘密管理性' },
      { index: 1, text: '新規性・有用性・登録性' },
      { index: 2, text: '秘密管理性・新規性・経済的価値' },
      { index: 3, text: '有用性・公知性・独自性' },
    ],
    answer: 0,
    explanation: '不正競争防止法 2 条 6 項が定める営業秘密の 3 要件は①秘密管理性（秘密として管理されていること）、②有用性（事業活動に有用な技術上・営業上の情報であること）、③非公知性（公に知られていないこと）です。特許権と異なり登録不要ですが、秘密管理性が最も重要で、アクセス制限・秘密指定マークなどの管理措置が必要です。3 要件を満たさない情報は不正競争防止法では保護されません。',
  },

  // ─── システムアーキテクチャ・組込み ─────────────────
  {
    id: 'SA-006',
    category: 'system-arch',
    categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 4,
    year: 2023,
    tags: ['クラウド', 'マイクロサービス'],
    question: 'マイクロサービスアーキテクチャを採用する際の利点として、最も適切なものはどれか。',
    choices: [
      { index: 0, text: 'サービス間通信のオーバヘッドがモノリシックアーキテクチャより小さい' },
      { index: 1, text: '各サービスを独立してデプロイ・スケールでき、技術スタックも個別に選択できる' },
      { index: 2, text: 'データの整合性管理がモノリシックより容易になる' },
      { index: 3, text: '初期開発コストがモノリシックより低くなる' },
    ],
    answer: 1,
    explanation: 'マイクロサービスの主な利点は①独立したデプロイ（一部変更のみリリース可能）、②サービス単位のスケールアウト、③技術の多様性（各サービスで最適な言語・DBを選択可能）、④障害の局所化です。一方で課題として、サービス間通信のネットワークオーバヘッド増加（選択肢 0 は誤り）、分散トランザクションによるデータ整合性管理の複雑化（選択肢 2 は誤り）、サービス数増加による運用負荷増大があります。',
  },
  {
    id: 'SA-007',
    category: 'system-arch',
    categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 4,
    year: 2022,
    tags: ['IoT', 'エッジコンピューティング'],
    question: 'IoT システムにおけるエッジコンピューティングの採用理由として、最も適切なものはどれか。',
    choices: [
      { index: 0, text: 'クラウドへの全データ転送によりストレージコストを削減するため' },
      { index: 1, text: 'デバイス近傍でデータ処理を行い、遅延削減・帯域節約・プライバシー保護を実現するため' },
      { index: 2, text: 'セキュリティパッチの適用をクラウドで一元管理するため' },
      { index: 3, text: 'IoT デバイスの製造コストを削減するため' },
    ],
    answer: 1,
    explanation: 'エッジコンピューティングはデータ発生源（IoT デバイス）の近傍に処理能力を配置するアーキテクチャです。主な採用理由は①低遅延（クラウドまでの往復通信不要で ms 単位の応答が可能）、②帯域節約（フィルタリング後のデータのみクラウド送信）、③プライバシー保護（生データをローカル処理して機密情報のクラウド送信を回避）、④クラウド障害時の継続動作です。工場の設備制御・自動運転・医療機器などのリアルタイム性が求められる用途に有効です。',
  },
  {
    id: 'SA-008',
    category: 'system-arch',
    categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 5,
    year: 2023,
    tags: ['高可用性', 'RTO', 'RPO'],
    question: 'ディザスタリカバリ（DR）計画における RTO と RPO の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'RTO はデータ復旧可能な時点（許容データ損失時間）、RPO はシステム復旧に要する目標時間である' },
      { index: 1, text: 'RTO は目標復旧時間（障害発生からシステム再稼働までの許容時間）、RPO は目標復旧時点（許容できる最大データ損失時間）である' },
      { index: 2, text: 'RTO と RPO は共に「ゼロに近いほど良い」ため、コストを度外視して最小化すべきである' },
      { index: 3, text: 'RTO は平均故障間隔、RPO は平均修復時間の別名である' },
    ],
    answer: 1,
    explanation: 'RTO（Recovery Time Objective：目標復旧時間）は障害発生からシステムが再稼働するまでの許容時間です。RPO（Recovery Point Objective：目標復旧時点）はデータを何時点まで遡って復旧できるか（最大許容データ損失時間）を示します。例：RPO = 4 時間なら最大 4 時間分のデータ損失まで許容。RTO・RPO を短くするほどホットスタンバイやリアルタイムレプリケーションが必要となりコストが増大します。ビジネスインパクト分析（BIA）に基づいてコストとのバランスで設定します。',
  },
];

QUESTIONS_DATA.push(...QUESTIONS_DATA_PHASE3);

/* =====================================================
   QUESTIONS_DATA_PHASE4 — 強化問題（午後頻出分野重点）
   各分野 2〜3 問 × 11 分野 = 28 問（合計 116 問）
   ===================================================== */
const QUESTIONS_DATA_PHASE4 = [

  // ─── アルゴリズム ─────────────────────────────────
  {
    id: 'ALG-009',
    category: 'algorithm',
    categoryName: 'アルゴリズム',
    difficulty: 4,
    year: 2024,
    tags: ['二分探索木', '木の走査'],
    question: '二分探索木に対して中順走査（in-order traversal）を行ったとき、得られるノードの訪問順序として正しいものはどれか。',
    choices: [
      { index: 0, text: 'ルート → 左部分木 → 右部分木' },
      { index: 1, text: '左部分木 → ルート → 右部分木（昇順に並ぶ）' },
      { index: 2, text: '左部分木 → 右部分木 → ルート' },
      { index: 3, text: '右部分木 → ルート → 左部分木（降順に並ぶ）' },
    ],
    answer: 1,
    explanation: '二分探索木の中順走査（in-order）は「左部分木 → ルート → 右部分木」の順で再帰的に訪問します。二分探索木の性質（左 < 親 < 右）と組み合わせると、全ノードを昇順に列挙できます。前順（pre-order）はルート→左→右、後順（post-order）は左→右→ルートです。',
  },
  {
    id: 'ALG-010',
    category: 'algorithm',
    categoryName: 'アルゴリズム',
    difficulty: 5,
    year: 2024,
    tags: ['ハッシュ', '衝突解決'],
    question: 'ハッシュテーブルにおけるオープンアドレス法（線形探索法）の特徴として、正しいものはどれか。',
    choices: [
      { index: 0, text: '衝突発生時に別の連結リストにエントリを追加するため、テーブル外のメモリを使用する' },
      { index: 1, text: '衝突発生時にテーブル内の別のスロットを順番に探索するため、負荷率が高いほど性能が急激に低下する' },
      { index: 2, text: 'テーブルが満杯になることがない' },
      { index: 3, text: '二重ハッシュ法より常に探索性能が高い' },
    ],
    answer: 1,
    explanation: 'オープンアドレス法は衝突時にテーブル内の別スロットを探す方式で、追加メモリ不要な反面、負荷率（使用率）が上がると連鎖的な衝突（クラスタリング）が増え探索性能が急激に低下します。線形探索では一次クラスタリング、二重ハッシュ法は二つ目のハッシュ関数でステップ幅を変えてクラスタリングを緩和します。チェイン法（選択肢 0）は連結リスト方式で、テーブルは満杯になりません。',
  },

  // ─── ネットワーク ──────────────────────────────────
  {
    id: 'NET-009',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 4,
    year: 2024,
    tags: ['TLS', 'HTTPS', 'ハンドシェイク'],
    question: 'TLS 1.3 のハンドシェイクにおいて、クライアントとサーバが最初に交換する情報として正しいものはどれか。',
    choices: [
      { index: 0, text: 'クライアントの公開鍵証明書' },
      { index: 1, text: '暗号化された HTTP リクエスト' },
      { index: 2, text: 'サポートする暗号スイートと鍵共有情報（Client Hello）' },
      { index: 3, text: 'セッション鍵をサーバの公開鍵で暗号化したもの' },
    ],
    answer: 2,
    explanation: 'TLS 1.3 のハンドシェイクは①Client Hello（クライアント：対応暗号スイート・乱数・鍵共有グループ・鍵共有情報）→②Server Hello（サーバ：選択した暗号スイート・乱数・鍵共有情報）→③サーバ証明書・Finished → ④クライアント Finished の流れで、1-RTT で完了します。TLS 1.2 と違い、サーバ公開鍵でセッション鍵を暗号化する RSA 鍵交換は廃止され、ECDHE 等の前方秘匿性が保証された鍵交換のみが使用されます。',
  },
  {
    id: 'NET-010',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 4,
    year: 2024,
    tags: ['DNS', 'リソースレコード'],
    question: 'DNS の MX レコードの役割として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'ドメイン名を IPv6 アドレスに解決する' },
      { index: 1, text: '電子メールの配送先メールサーバ（MTA）のホスト名を指定する' },
      { index: 2, text: 'そのドメインの権威 DNS サーバを指定する' },
      { index: 3, text: 'テキスト形式の任意情報を格納し SPF レコードに使われる' },
    ],
    answer: 1,
    explanation: 'DNS の主要リソースレコードの役割：A レコード：ドメイン→ IPv4 アドレス。AAAA レコード：ドメイン→ IPv6 アドレス（選択肢 0）。MX（Mail Exchanger）レコード：そのドメイン宛メールを受け取るメールサーバ（MTA）のホスト名と優先度を指定（正答）。NS レコード：ドメインの権威 DNS サーバを指定（選択肢 2）。TXT レコード：テキスト情報、SPF・DKIM・DMARC 等に使用（選択肢 3）。CNAME レコード：別名（エイリアス）を正規名に対応付ける。',
  },

  // ─── データベース ──────────────────────────────────
  {
    id: 'DB-009',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 5,
    year: 2024,
    tags: ['SQL', 'ウィンドウ関数'],
    question: 'SQL のウィンドウ関数 ROW_NUMBER() OVER (PARTITION BY category ORDER BY score DESC) の動作として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'テーブル全体で score の降順に連続した行番号を振る' },
      { index: 1, text: 'category ごとにグループ化し、各グループ内で score の降順に 1 から始まる行番号を振る' },
      { index: 2, text: 'category ごとの score の合計を各行に付与する' },
      { index: 3, text: 'score が同じ行には同じ番号を振り、次の番号をスキップする' },
    ],
    answer: 1,
    explanation: 'OVER 句の PARTITION BY はウィンドウ（集計範囲）をグループに分割し、ORDER BY は各パーティション内の並び順を指定します。ROW_NUMBER() は各パーティション内で 1 から始まる連続した行番号を振ります。例：各カテゴリ内でスコア上位 N 件を抽出するのに活用します。同順位に同番号を付けるのは RANK()、番号をスキップしないのは DENSE_RANK() です（選択肢 3 は RANK の動作）。',
  },
  {
    id: 'DB-010',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 4,
    year: 2024,
    tags: ['正規化', '関数従属'],
    question: '次の関係スキーマ「注文明細（注文番号, 商品コード, 商品名, 単価, 数量）」において、第 3 正規形（3NF）に違反する理由として正しいものはどれか。ただし主キーは（注文番号, 商品コード）とする。',
    choices: [
      { index: 0, text: '主キー以外の属性が存在するため第 1 正規形を満たさない' },
      { index: 1, text: '商品名と単価が商品コードにのみ関数従属する部分関数従属があるため第 2 正規形を満たさない' },
      { index: 2, text: '数量が注文番号にのみ関数従属するため第 3 正規形を満たさない' },
      { index: 3, text: '商品名と単価の間に推移的関数従属があるため第 3 正規形を満たさない' },
    ],
    answer: 1,
    explanation: '主キーが（注文番号, 商品コード）の複合キーのとき、商品名・単価は「商品コード」だけで決まります。これは主キーの一部にのみ依存する「部分関数従属」で、第 2 正規形（2NF）への違反です。2NF は「全ての非キー属性が主キー全体に完全関数従属すること」を要求します。対策は商品（商品コード, 商品名, 単価）と注文明細（注文番号, 商品コード, 数量）に分解します。',
  },

  // ─── セキュリティ ──────────────────────────────────
  {
    id: 'SEC-009',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 4,
    year: 2024,
    tags: ['ゼロトラスト', 'SASE'],
    question: 'ゼロトラストセキュリティモデルの基本原則として、最も適切なものはどれか。',
    choices: [
      { index: 0, text: '社内ネットワーク内のトラフィックは信頼し、社外からのアクセスのみを検査する' },
      { index: 1, text: 'ファイアウォールを強化することで境界防御を完全にする' },
      { index: 2, text: 'ネットワークの場所に関わらず全てのアクセスを継続的に検証し、最小権限を付与する' },
      { index: 3, text: 'VPN 接続したユーザは社内と同等の全リソースへのアクセスを許可する' },
    ],
    answer: 2,
    explanation: 'ゼロトラストは「何も信頼しない（Never Trust, Always Verify）」を原則とします。社内外を問わず全アクセスをアイデンティティ・デバイス状態・コンテキストで継続検証し、必要最小限の権限のみ付与します。従来の「境界防御モデル」（社内は安全とみなす）はクラウド移行・テレワーク拡大・内部不正に対応できず、ゼロトラストへの移行が進んでいます。SASE（Secure Access Service Edge）はゼロトラストとネットワークをクラウドで統合したアーキテクチャです。',
  },
  {
    id: 'SEC-010',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 4,
    year: 2024,
    tags: ['脆弱性', 'CVE', 'CVSS'],
    question: 'CVSS（Common Vulnerability Scoring System）の基本スコア（Base Score）を構成する評価軸として、含まれないものはどれか。',
    choices: [
      { index: 0, text: '攻撃経路（Attack Vector）' },
      { index: 1, text: '攻撃の複雑さ（Attack Complexity）' },
      { index: 2, text: '脆弱性の公開からの経過日数（Time since Disclosure）' },
      { index: 3, text: '機密性・完全性・可用性への影響（CIA Impact）' },
    ],
    answer: 2,
    explanation: 'CVSS v3.x の基本スコアは攻撃容易性指標（Attack Vector・Attack Complexity・必要権限・ユーザ操作）と影響指標（機密性・完全性・可用性への影響）で構成され、スコアは 0.0〜10.0 で表されます。経過日数・パッチ公開状況などの時間的要素は「現状スコア（Temporal Score）」、環境固有の要素は「環境スコア（Environmental Score）」として別途算出します。',
  },

  // ─── OS ───────────────────────────────────────────
  {
    id: 'OS-009',
    category: 'os',
    categoryName: 'OS・ハードウェア',
    difficulty: 4,
    year: 2024,
    tags: ['コンテナ', 'Docker', '名前空間'],
    question: 'コンテナ型仮想化（Docker など）がハイパーバイザ型仮想化（VM）と比較して起動時間が短い主な理由はどれか。',
    choices: [
      { index: 0, text: 'コンテナは物理 CPU を直接使用するため' },
      { index: 1, text: 'コンテナはホスト OS のカーネルを共有し、OS 起動が不要なため' },
      { index: 2, text: 'コンテナはハードウェアエミュレーションを使用するため' },
      { index: 3, text: 'コンテナは SSD 専用に最適化されているため' },
    ],
    answer: 1,
    explanation: 'コンテナはホスト OS のカーネルを共有し、Linux の namespace（プロセス・ネットワーク・ファイルシステムの分離）と cgroups（リソース制限）を利用してプロセスレベルで分離します。VM のようにゲスト OS をブートする必要がなく、ミリ秒〜秒単位で起動できます。ただしカーネルを共有するためセキュリティ分離は VM より弱く、異なる OS カーネルは実行できません。',
  },
  {
    id: 'OS-010',
    category: 'os',
    categoryName: 'OS・ハードウェア',
    difficulty: 3,
    year: 2024,
    tags: ['RAID', 'ストレージ'],
    question: 'RAID 6 の特徴として、正しいものはどれか。',
    choices: [
      { index: 0, text: '2 台のディスクに同一データをミラーリングする' },
      { index: 1, text: '1 台のディスク故障まで許容し、パリティを 1 台のディスクに集中格納する' },
      { index: 2, text: '2 台のディスクが同時に故障してもデータを復旧できる' },
      { index: 3, text: 'ストライピングのみでパリティは持たず、冗長性がない' },
    ],
    answer: 2,
    explanation: 'RAID レベルの比較：RAID 0：ストライピングのみ（冗長性なし、選択肢 3）。RAID 1：ミラーリング（2 台構成、選択肢 0）。RAID 5：分散パリティ（1 台故障まで許容）。RAID 4：パリティ専用ディスク（選択肢 1）。RAID 6：二重分散パリティにより 2 台同時故障まで耐えられる（正答）。大規模ストレージや長時間 RAID 再構築中の故障リスク対策として RAID 6 が採用されます。',
  },

  // ─── ソフトウェア開発 ─────────────────────────────
  {
    id: 'SD-009',
    category: 'software-dev',
    categoryName: 'ソフトウェア開発',
    difficulty: 4,
    year: 2024,
    tags: ['UML', 'シーケンス図'],
    question: 'UML のシーケンス図に関する説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'クラス間の静的な関係（継承・集約・依存）を表現する図' },
      { index: 1, text: 'オブジェクト間のメッセージ交換の時系列を表現する動的図' },
      { index: 2, text: 'システムの状態と状態遷移を表現する図' },
      { index: 3, text: 'ユーザとシステムの機能的な関係を表現する図' },
    ],
    answer: 1,
    explanation: 'UML の主要図の区分：シーケンス図は相互作用図の一種で、オブジェクト（ライフライン）間のメッセージ交換の時系列を縦軸（時間）に沿って表現します（正答）。クラス図：静的関係（選択肢 0）。状態機械図：状態と遷移（選択肢 2）。ユースケース図：アクターとシステム機能の関係（選択肢 3）。シーケンス図はシステム設計・API 仕様・認証フロー説明に多用されます。',
  },
  {
    id: 'SD-010',
    category: 'software-dev',
    categoryName: 'ソフトウェア開発',
    difficulty: 4,
    year: 2024,
    tags: ['コードメトリクス', '循環的複雑度'],
    question: 'McCabe の循環的複雑度（Cyclomatic Complexity）の値が大きいコードの特徴として、適切なものはどれか。',
    choices: [
      { index: 0, text: '行数が多いが構造が単純で分岐が少ない' },
      { index: 1, text: 'if・while・for などの分岐・ループが多く、テストケース数が増加する' },
      { index: 2, text: 'クラスの責務が少なく、テストが容易である' },
      { index: 3, text: 'コメント行が多く可読性が高い' },
    ],
    answer: 1,
    explanation: '循環的複雑度（CC）はプログラムの制御フローグラフに基づく複雑さの指標で、CC = E − N + 2P（E：エッジ数、N：ノード数、P：連結成分数）または単純に「独立した経路数」として計算できます。if・switch・while・for・catch など条件分岐・ループが増えるたびに CC が 1 増えます。CC の目安：10 以下が望ましく、25 超えはリファクタリングを検討。CC の値は必要な最低テストケース数（パスカバレッジ）と一致します。',
  },

  // ─── プロジェクトマネジメント ─────────────────────
  {
    id: 'PM-009',
    category: 'project-mgmt',
    categoryName: 'プロジェクトマネジメント',
    difficulty: 4,
    year: 2024,
    tags: ['アローダイアグラム', 'クリティカルパス'],
    question: '次のアローダイアグラムにおいて、全体の完了に要する最短日数はどれか。作業 A(3日)→C(4日)→F(2日)、A(3日)→D(5日)→F(2日)、B(4日)→D(5日)→F(2日)、B(4日)→E(3日)→F(2日) の経路がある。',
    choices: [
      { index: 0, text: '10 日' },
      { index: 1, text: '11 日' },
      { index: 2, text: '12 日' },
      { index: 3, text: '9 日' },
    ],
    answer: 1,
    explanation: '各経路の所要日数を計算します。A→C→F：3＋4＋2＝9日。A→D→F：3＋5＋2＝10日。B→D→F：4＋5＋2＝11日（最長）。B→E→F：4＋3＋2＝9日。クリティカルパスは最長経路 B→D→F の 11 日です。フロートがゼロのこの経路上の作業が遅れるとプロジェクト全体が遅延します。A・C・E はフロートがあるため、スケジュールに余裕があります。',
  },
  {
    id: 'PM-010',
    category: 'project-mgmt',
    categoryName: 'プロジェクトマネジメント',
    difficulty: 3,
    year: 2024,
    tags: ['PMBOK', 'プロセス群'],
    question: 'PMBOK ガイドのプロジェクトマネジメントプロセス群において、プロジェクト憲章（Project Charter）を作成するプロセスが含まれるプロセス群はどれか。',
    choices: [
      { index: 0, text: '計画プロセス群' },
      { index: 1, text: '実行プロセス群' },
      { index: 2, text: '立上げプロセス群' },
      { index: 3, text: '監視・コントロールプロセス群' },
    ],
    answer: 2,
    explanation: 'PMBOK の 5 つのプロセス群：①立上げ：プロジェクト憲章・ステークホルダー識別。②計画：スコープ・スケジュール・コスト・リスク計画など。③実行：品質保証・チーム育成・調達など。④監視・コントロール：パフォーマンス測定・変更管理。⑤終結：プロジェクト・フェーズの完結。プロジェクト憲章はプロジェクトの正式な認可文書で「立上げプロセス群」で作成します。',
  },

  // ─── サービスマネジメント ─────────────────────────
  {
    id: 'SM-009',
    category: 'service-mgmt',
    categoryName: 'サービスマネジメント',
    difficulty: 4,
    year: 2024,
    tags: ['ITIL 4', 'サービスバリューチェーン'],
    question: 'ITIL 4 で新たに導入された「サービスバリューシステム（SVS）」の中核となる活動を表すものはどれか。',
    choices: [
      { index: 0, text: 'インシデント管理・変更管理・問題管理の 3 プロセス' },
      { index: 1, text: 'サービスバリューチェーン（6 つのアクティビティ）' },
      { index: 2, text: '計画・実行・確認・改善の PDCA サイクル' },
      { index: 3, text: '顧客・利用者・スポンサーの 3 ステークホルダ関係' },
    ],
    answer: 1,
    explanation: 'ITIL 4 のサービスバリューシステム（SVS）は、入力（需要・機会）を価値に変換するフレームワークです。中核は「サービスバリューチェーン（SVC）」の 6 活動：①計画（Plan）②改善（Improve）③関与（Engage）④設計・移行（Design & Transition）⑤調達・構築（Obtain/Build）⑥提供・サポート（Deliver & Support）です。ITIL v3 のライフサイクルアプローチから、価値創出に焦点を当てた柔軟なアプローチに進化しました。',
  },

  // ─── 経営戦略 ─────────────────────────────────────
  {
    id: 'BS-009',
    category: 'business-strategy',
    categoryName: 'システム戦略・経営戦略',
    difficulty: 3,
    year: 2024,
    tags: ['デジタルトランスフォーメーション', 'DX'],
    question: 'DX（デジタルトランスフォーメーション）の説明として、最も適切なものはどれか。',
    choices: [
      { index: 0, text: '既存の業務をそのまま IT システムで自動化・効率化すること' },
      { index: 1, text: 'デジタル技術を活用してビジネスモデルや組織文化を変革し、競争優位を確立すること' },
      { index: 2, text: '全社のシステムをクラウドに移行すること' },
      { index: 3, text: 'ペーパーレス化とテレワーク環境の整備を行うこと' },
    ],
    answer: 1,
    explanation: 'DX（Digital Transformation）はスウェーデンの研究者ストルターマンが 2004 年に提唱した概念で、「IT の浸透が人々の生活をあらゆる面でより良い方向に変化させる」と定義されます。単なる業務効率化（IT 化・デジタル化）を超え、データとデジタル技術を活用してビジネスモデル・組織・業務・文化を根本から変革し、競争優位を実現することを指します。経産省の「DX 推進指標」では顧客起点の価値創出が重要とされています。',
  },
  {
    id: 'BS-010',
    category: 'business-strategy',
    categoryName: 'システム戦略・経営戦略',
    difficulty: 4,
    year: 2024,
    tags: ['プロダクトポートフォリオ', 'PPM'],
    question: 'プロダクト・ポートフォリオ・マネジメント（PPM）の「花形（Star）」の特徴として、正しいものはどれか。',
    choices: [
      { index: 0, text: '市場成長率が低く、市場シェアが高い。キャッシュを生み出す事業。' },
      { index: 1, text: '市場成長率が高く、市場シェアが高い。成長のための投資が必要な事業。' },
      { index: 2, text: '市場成長率が高く、市場シェアが低い。将来性が不確かな事業。' },
      { index: 3, text: '市場成長率が低く、市場シェアが低い。撤退を検討する事業。' },
    ],
    answer: 1,
    explanation: 'BCG の PPM は市場成長率と相対市場シェアの 2 軸でポートフォリオを分類します。花形（Star）：高成長×高シェア。成長市場でのシェア維持に投資が必要。金のなる木（Cash Cow）：低成長×高シェア（選択肢 0）。安定したキャッシュを生む。問題児（Question Mark）：高成長×低シェア（選択肢 2）。投資して花形にするか撤退か判断が必要。負け犬（Dog）：低成長×低シェア（選択肢 3）。撤退候補。',
  },

  // ─── 企業と法務 ──────────────────────────────────
  {
    id: 'LG-009',
    category: 'legal',
    categoryName: '企業と法務',
    difficulty: 4,
    year: 2024,
    tags: ['電子帳簿保存法', 'インボイス'],
    question: '電子帳簿保存法における「スキャナ保存」の要件として、正しいものはどれか。',
    choices: [
      { index: 0, text: '書類受領後いつでもスキャンできるが、原本は廃棄できない' },
      { index: 1, text: 'スキャンした画像は圧縮率を 50% 以下にしなければならない' },
      { index: 2, text: 'タイムスタンプの付与または入力期間制限とともに解像度 200dpi 以上・カラーでの保存が必要' },
      { index: 3, text: '電子帳簿保存法の適用には税務署長の事前承認が常に必要' },
    ],
    answer: 2,
    explanation: '2022 年改正電子帳簿保存法のスキャナ保存要件：①解像度 200dpi 以上・カラーでスキャン、②タイムスタンプの付与（または一定期間内入力と訂正削除履歴保持）、③ヴィジュアライズ性（関連文書と相互参照可能）、④検索機能の確保、⑤入力者等の情報確認可能。2022 年改正で事前承認制度が廃止（選択肢 3 は誤り）され、要件充足で原本廃棄が可能（選択肢 0 は誤り）になりました。',
  },

  // ─── システムアーキテクチャ ──────────────────────
  {
    id: 'SA-009',
    category: 'system-arch',
    categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 4,
    year: 2024,
    tags: ['API', 'REST', 'GraphQL'],
    question: 'REST API と比較した GraphQL の特徴として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'REST と同様に複数のエンドポイントを持ち、HTTP メソッドで操作を区別する' },
      { index: 1, text: 'クライアントが必要なデータのみを宣言的に取得でき、オーバフェッチ・アンダフェッチを防げる' },
      { index: 2, text: 'REST より常に通信量が少なくなる' },
      { index: 3, text: 'サーバ側のスキーマ変更が不要なため保守性が高い' },
    ],
    answer: 1,
    explanation: 'GraphQL はクライアントが取得したいフィールドを宣言的に指定できる API クエリ言語です。REST の課題であるオーバフェッチ（不要データの取得）とアンダフェッチ（複数リクエストが必要）を解消できます。単一エンドポイント（通常 /graphql）に POST でクエリを送ります。デメリットはサーバ側のスキーマ定義・リゾルバ実装コストが高く、キャッシュが REST より複雑になる点です。モバイルアプリや BFF（Backend for Frontend）パターンで広く採用されています。',
  },
  {
    id: 'SA-010',
    category: 'system-arch',
    categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 5,
    year: 2024,
    tags: ['分散システム', '2相コミット'],
    question: '分散トランザクションの「2 相コミット（2PC）」プロトコルの問題点として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'トランザクションの整合性を保証できない' },
      { index: 1, text: 'コーディネータが障害になると参加者がロックを保持したまま応答待ちになる「ブロッキング問題」が発生する' },
      { index: 2, text: '参加者間で直接通信が必要なため、メッセージ数が指数的に増加する' },
      { index: 3, text: '準備フェーズが存在しないため整合性が弱い' },
    ],
    answer: 1,
    explanation: '2 相コミット（2PC）は①準備フェーズ（コーディネータが全参加者に Prepare 送信、全員 OK で次へ）②コミットフェーズ（全員 Commit 送信）の 2 段階で分散トランザクションの原子性を保証します。問題点はコーディネータが第 2 フェーズ中に障害になると参加者がコミット/ロールバックを判断できずロックを保持したままブロック状態になることです（ブロッキング問題）。3 相コミット（3PC）や Saga パターンはこの問題への対策として提案されています。',
  },
];

QUESTIONS_DATA.push(...QUESTIONS_DATA_PHASE4);

/* =====================================================
   QUESTIONS_DATA_PHASE5 — 計算・穴埋め・午後頻出問題
   各分野 2〜3 問 × 11 分野 = 27 問（合計 135 問）
   ===================================================== */
const QUESTIONS_DATA_PHASE5 = [

  // ─── アルゴリズム ──────────────────────────────────
  {
    id: 'ALG-011',
    category: 'algorithm',
    categoryName: 'アルゴリズム',
    difficulty: 3,
    year: 2024,
    tags: ['スタック', 'キュー', 'LIFO'],
    question: 'スタック（Stack）に対して PUSH(1), PUSH(2), PUSH(3), POP, PUSH(4), POP の操作を順に行ったとき、スタックに残っている要素を底から順に並べたものはどれか。',
    choices: [
      { index: 0, text: '1, 2' },
      { index: 1, text: '2, 1' },
      { index: 2, text: '1, 4' },
      { index: 3, text: '4, 1' },
    ],
    answer: 0,
    explanation: 'スタックは LIFO（後入れ先出し）です。操作を追います：PUSH(1)→[1]、PUSH(2)→[1,2]、PUSH(3)→[1,2,3]、POP→[1,2]（3が出る）、PUSH(4)→[1,2,4]、POP→[1,2]（4が出る）。最終的に底から順に 1,2 が残ります。',
  },
  {
    id: 'ALG-012',
    category: 'algorithm',
    categoryName: 'アルゴリズム',
    difficulty: 4,
    year: 2024,
    tags: ['再帰', 'フィボナッチ', 'メモ化'],
    question: 'メモ化なしの再帰でフィボナッチ数列 fib(n) を計算する場合の時間計算量として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'O(n)' },
      { index: 1, text: 'O(n log n)' },
      { index: 2, text: 'O(2ⁿ)（指数時間）' },
      { index: 3, text: 'O(n²)' },
    ],
    answer: 2,
    explanation: 'メモ化なし再帰 fib(n) = fib(n-1) + fib(n-2) は同じ部分問題を何度も再計算するため、呼び出し回数が約 φⁿ（φ≒1.618 黄金比）に比例し O(2ⁿ) の指数時間になります。メモ化（結果をキャッシュ）または動的計画法を使えば O(n) に改善できます。フィボナッチは DP の最も有名な例題です。',
  },
  {
    id: 'ALG-013',
    category: 'algorithm',
    categoryName: 'アルゴリズム',
    difficulty: 4,
    year: 2024,
    tags: ['クイックソート', '最悪計算量'],
    question: 'クイックソートの最悪時間計算量と、その発生条件の組合せとして正しいものはどれか。',
    choices: [
      { index: 0, text: 'O(n log n)、常に発生する' },
      { index: 1, text: 'O(n²)、ピボットが毎回最小または最大値になるとき（例：整列済み配列）' },
      { index: 2, text: 'O(n)、ピボットが毎回中央値のとき' },
      { index: 3, text: 'O(n²)、ピボットが毎回中央値のとき' },
    ],
    answer: 1,
    explanation: 'クイックソートの計算量：平均 O(n log n)、最良 O(n log n)、最悪 O(n²)。最悪ケースは選んだピボットが毎回最小または最大値になる場合で、分割が偏り再帰の深さが O(n) になります。既ソート済み配列に対して先頭要素をピボットとする実装では最悪が起きやすいです。ランダムピボット選択や中央値の中央値法（median-of-three）で回避できます。',
  },

  // ─── ネットワーク ───────────────────────────────────
  {
    id: 'NET-011',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 4,
    year: 2024,
    tags: ['サブネット', 'CIDR', '計算'],
    question: 'IPアドレス 192.168.10.0/26 のネットワークで使用可能なホストアドレス数として正しいものはどれか。',
    choices: [
      { index: 0, text: '62' },
      { index: 1, text: '64' },
      { index: 2, text: '30' },
      { index: 3, text: '126' },
    ],
    answer: 0,
    explanation: '/26 はサブネットマスクのビット数。ホスト部のビット数 = 32 - 26 = 6 ビット。総アドレス数 = 2⁶ = 64。ネットワークアドレス（先頭）とブロードキャストアドレス（末尾）を除くと、使用可能ホスト数 = 64 - 2 = 62 です。/24 → 254 台、/25 → 126 台、/26 → 62 台、/27 → 30 台と覚えると便利です。',
  },
  {
    id: 'NET-012',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 4,
    year: 2024,
    tags: ['NAT', 'PAT', 'ポート変換'],
    question: 'NAPT（Network Address Port Translation）の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: '1 つのグローバル IP アドレスを複数のプライベート IP アドレスに 1 対 1 で変換する' },
      { index: 1, text: '複数のプライベート IP アドレスをポート番号と組み合わせて 1 つのグローバル IP アドレスに変換し、多数の端末が同時接続できる' },
      { index: 2, text: 'グローバル IP アドレスとプライベート IP アドレスを 1 対多で変換するが、同時接続は 1 台のみ' },
      { index: 3, text: 'IPv6 アドレスを IPv4 アドレスに変換するプロトコル' },
    ],
    answer: 1,
    explanation: 'NAPT（IP マスカレード）はプライベート IP アドレスとポート番号の組を使い、複数の端末が 1 つのグローバル IP アドレスを共有してインターネット接続できるようにします。内側のセッションをポート番号で区別します。家庭用ルータの一般的な動作方式です。選択肢 0 は静的 NAT（1 対 1）の説明です。',
  },

  // ─── データベース ──────────────────────────────────
  {
    id: 'DB-011',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 4,
    year: 2024,
    tags: ['SQL', 'GROUP BY', '集約'],
    question: '次の SQL 文の実行結果として正しいものはどれか。\nSELECT 部署, COUNT(*) AS 人数, AVG(給与) AS 平均給与 FROM 社員 GROUP BY 部署 HAVING COUNT(*) >= 3 ORDER BY 平均給与 DESC',
    choices: [
      { index: 0, text: '全社員の平均給与と人数を 1 行で返す' },
      { index: 1, text: '3 人以上在籍する部署ごとに、人数と平均給与を平均給与の降順で返す' },
      { index: 2, text: '給与が 3 以上の社員を部署ごとに集計して返す' },
      { index: 3, text: '3 番目に高い給与の社員の部署と人数を返す' },
    ],
    answer: 1,
    explanation: 'GROUP BY 部署 で部署ごとにグループ化し、COUNT(*) で人数・AVG(給与) で平均給与を集計します。HAVING COUNT(*) >= 3 は集計後フィルタで「3 人以上の部署のみ」を絞り込みます（WHERE は集計前フィルタ）。ORDER BY 平均給与 DESC で平均給与の高い順に並べます。これが HAVING と WHERE の違いを問う典型問題です。',
  },
  {
    id: 'DB-012',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 4,
    year: 2024,
    tags: ['ビュー', '実体化ビュー'],
    question: 'リレーショナルデータベースの「ビュー（View）」に関する説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'ビューはデータを物理的に格納するため、基底表よりも高速にアクセスできる' },
      { index: 1, text: 'ビューは仮想表であり、定義された SELECT 文をもとに参照時にデータを生成する' },
      { index: 2, text: 'ビューに対するデータ更新（INSERT/UPDATE/DELETE）は常に許可される' },
      { index: 3, text: 'ビューを削除すると、基底表のデータも削除される' },
    ],
    answer: 1,
    explanation: 'ビューは実体を持たない仮想表（Virtual Table）で、SELECT 文をデータベースに名前付きで保存したものです。参照時に SELECT 文が実行されデータが生成されます（物理的なデータ格納はなし）。更新可能ビューの条件は DBMS によりますが、複数表の結合ビューや集約を含むビューへの更新は通常不可です。実体化ビュー（Materialized View）はデータを物理格納しキャッシュします。',
  },

  // ─── セキュリティ ──────────────────────────────────
  {
    id: 'SEC-011',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 3,
    year: 2024,
    tags: ['認証', 'OAuth', 'OpenID Connect'],
    question: 'OpenID Connect（OIDC）と OAuth 2.0 の違いとして、最も適切なものはどれか。',
    choices: [
      { index: 0, text: 'OAuth 2.0 は認証プロトコル、OpenID Connect は認可プロトコルである' },
      { index: 1, text: 'OAuth 2.0 はリソースへのアクセス認可を提供し、OpenID Connect は OAuth 2.0 を拡張してアイデンティティ認証（誰であるか）の機能を追加したものである' },
      { index: 2, text: 'OpenID Connect は古いプロトコルで、OAuth 2.0 に置き換えられた' },
      { index: 3, text: '両者は完全に同じプロトコルである' },
    ],
    answer: 1,
    explanation: 'OAuth 2.0 は「認可（Authorization）」フレームワークで、リソースオーナーの許可のもとでクライアントがリソースサーバ上のデータにアクセスする仕組みです。認証（誰であるか）は提供しません。OpenID Connect（OIDC）は OAuth 2.0 の上に「認証（Authentication）」レイヤを追加し、ID トークン（JWT）でユーザのアイデンティティを提供します。「Google でログイン」等のソーシャルログインは OIDC を使用しています。',
  },
  {
    id: 'SEC-012',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 4,
    year: 2024,
    tags: ['CSRF', 'XSS', '対策'],
    question: 'CSRF（クロスサイトリクエストフォージェリ）攻撃への対策として、有効なものはどれか。',
    choices: [
      { index: 0, text: '入力値を HTML エスケープする' },
      { index: 1, text: 'セッション ID を URL パラメータに含める' },
      { index: 2, text: 'フォームにサーバ生成のランダムトークン（CSRF トークン）を埋め込み、リクエスト時に検証する' },
      { index: 3, text: 'パスワードを bcrypt でハッシュ化する' },
    ],
    answer: 2,
    explanation: 'CSRF はログイン済みユーザを騙して意図しないリクエストを送らせる攻撃です。対策は①CSRF トークン（フォームに秘密のランダム値を埋め込み、サーバ側で照合）、②SameSite Cookie 属性（Strict または Lax）、③Origin/Referer ヘッダの検証です。HTML エスケープ（選択肢 0）は XSS 対策。bcrypt ハッシュ（選択肢 3）はパスワード保存対策。URL にセッション ID（選択肢 1）はセッションハイジャックのリスクを増やします。',
  },

  // ─── OS・ハードウェア ──────────────────────────────
  {
    id: 'OS-011',
    category: 'os',
    categoryName: 'OS・ハードウェア',
    difficulty: 3,
    year: 2024,
    tags: ['CPU', 'パイプライン', 'ハザード'],
    question: 'CPU パイプラインにおける「データハザード」の発生原因として、正しいものはどれか。',
    choices: [
      { index: 0, text: '分岐命令の結果が確定する前に次の命令をフェッチしてしまうこと' },
      { index: 1, text: '後続の命令が前の命令の計算結果を参照しようとするが、まだ結果が書き込まれていないこと' },
      { index: 2, text: 'メモリアクセスに時間がかかりパイプラインが停止すること' },
      { index: 3, text: '複数の命令が同じレジスタに同時に書き込もうとすること' },
    ],
    answer: 1,
    explanation: 'パイプラインハザードの種類：データハザード：後続命令が前命令の結果（まだ書き込まれていない）を必要とするとき発生。フォワーディング（結果を直接次ステージへ転送）やストール（バブル挿入）で解決します（正答）。制御ハザード：分岐命令の結果確定前に誤った命令をフェッチ（選択肢 0）。分岐予測で緩和。構造ハザード：複数命令が同一ハードウェアリソースを同時使用。',
  },
  {
    id: 'OS-012',
    category: 'os',
    categoryName: 'OS・ハードウェア',
    difficulty: 4,
    year: 2024,
    tags: ['キャッシュ', 'ヒット率', '計算'],
    question: 'キャッシュメモリのヒット率が 0.95、キャッシュアクセス時間が 10ns、主記憶アクセス時間が 100ns のとき、実効アクセス時間はどれか（キャッシュミス時は主記憶のみアクセス）。',
    choices: [
      { index: 0, text: '14.5 ns' },
      { index: 1, text: '19.5 ns' },
      { index: 2, text: '55 ns' },
      { index: 3, text: '10.5 ns' },
    ],
    answer: 0,
    explanation: '実効アクセス時間 = ヒット率 × キャッシュアクセス時間 ＋ (1－ヒット率) × 主記憶アクセス時間 = 0.95 × 10 + 0.05 × 100 = 9.5 + 5.0 = 14.5 ns。キャッシュのヒット率が高いほど実効アクセス時間はキャッシュアクセス時間に近づきます。この計算式はよく出題されるので確実に覚えておきましょう。',
  },

  // ─── ソフトウェア開発 ──────────────────────────────
  {
    id: 'SD-011',
    category: 'software-dev',
    categoryName: 'ソフトウェア開発',
    difficulty: 3,
    year: 2024,
    tags: ['デザインパターン', 'GoF'],
    question: 'GoF デザインパターンの「Observer（オブザーバ）」パターンの説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'オブジェクトの生成をサブクラスに委ねることでクラスのインスタンス化を制御する' },
      { index: 1, text: 'あるオブジェクトの状態変化を複数のオブジェクトに自動的に通知・同期する疎結合な仕組み' },
      { index: 2, text: '複数のアルゴリズムを定義し、クライアントが使用するアルゴリズムを切り替えられるようにする' },
      { index: 3, text: '既存クラスのインタフェースを変換して、別のインタフェースとして使えるようにする' },
    ],
    answer: 1,
    explanation: 'Observer パターンは Subject（観測される側）が状態変更時に登録された Observer（観測する側）全員に通知する「発行/購読（Pub/Sub）」の仕組みです。Subject は Observer の具体的な実装を知らなくてよいため疎結合です。選択肢 0 は Factory Method、選択肢 2 は Strategy、選択肢 3 は Adapter パターンの説明です。MVC の Model-View 間の連携、イベント駆動 UI、リアクティブプログラミングの基礎概念です。',
  },
  {
    id: 'SD-012',
    category: 'software-dev',
    categoryName: 'ソフトウェア開発',
    difficulty: 4,
    year: 2024,
    tags: ['ソフトウェアメトリクス', 'FP法'],
    question: 'ファンクションポイント（FP）法によるソフトウェア規模見積もりに関する説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'ソースコードの行数（LOC）を測定してシステム規模を算出する' },
      { index: 1, text: 'ユーザからの機能的な要求（入力・出力・照会・ファイル・外部インタフェース）の複雑さを点数化してシステム規模を測定する' },
      { index: 2, text: 'テストケース数を基準に規模を算出する方法である' },
      { index: 3, text: '開発者の経験年数をもとに工数を算出する' },
    ],
    answer: 1,
    explanation: 'ファンクションポイント（FP）法は IPA も推奨するソフトウェア規模測定手法です。ユーザ視点の機能を①外部入力、②外部出力、③外部照会、④内部論理ファイル、⑤外部インタフェースファイルの 5 種類に分類し、各機能の複雑さ（単純・普通・複雑）に応じた重みで点数化します。プログラミング言語に依存しない点が特長で、開発早期（要件定義段階）から規模推定できます。',
  },

  // ─── プロジェクトマネジメント ─────────────────────
  {
    id: 'PM-011',
    category: 'project-mgmt',
    categoryName: 'プロジェクトマネジメント',
    difficulty: 5,
    year: 2024,
    tags: ['EVM', 'EAC', '完成時総コスト予測'],
    question: 'EVM において BAC = 1000 万円、EV = 400 万円、AC = 500 万円 のとき、現在のコスト効率が今後も続くと仮定した場合の完成時総コスト予測（EAC）はどれか。',
    choices: [
      { index: 0, text: '1000 万円' },
      { index: 1, text: '1100 万円' },
      { index: 2, text: '1250 万円' },
      { index: 3, text: '900 万円' },
    ],
    answer: 2,
    explanation: 'EAC = BAC ÷ CPI。CPI（コスト効率指数）= EV ÷ AC = 400 ÷ 500 = 0.8。EAC = 1000 ÷ 0.8 = 1250 万円。CPI < 1（コスト超過）のため、最終的にはさらに多くのコストがかかると予測されます。残作業コスト予測（ETC）= EAC − AC = 1250 − 500 = 750 万円となります。',
  },
  {
    id: 'PM-012',
    category: 'project-mgmt',
    categoryName: 'プロジェクトマネジメント',
    difficulty: 3,
    year: 2024,
    tags: ['コミュニケーション管理', 'チャネル数'],
    question: 'プロジェクトチームのメンバが 6 人のとき、1 対 1 のコミュニケーションチャネル数として正しいものはどれか。',
    choices: [
      { index: 0, text: '6' },
      { index: 1, text: '12' },
      { index: 2, text: '15' },
      { index: 3, text: '30' },
    ],
    answer: 2,
    explanation: 'コミュニケーションチャネル数 = n(n-1)/2（n：メンバ数）。6×(6-1)/2 = 6×5/2 = 15 チャネル。PMBOK のコミュニケーション管理では、メンバ増加によりチャネル数が急増（二次関数的）することを把握しておくことが重要です。例：5 人→10、10 人→45、20 人→190 チャネル。',
  },

  // ─── サービスマネジメント ─────────────────────────
  {
    id: 'SM-010',
    category: 'service-mgmt',
    categoryName: 'サービスマネジメント',
    difficulty: 4,
    year: 2024,
    tags: ['BCP', 'BCM', '事業継続'],
    question: 'BCP（Business Continuity Plan：事業継続計画）に関する説明として、最も適切なものはどれか。',
    choices: [
      { index: 0, text: 'システム障害発生後の IT 復旧手順のみを記述した技術文書' },
      { index: 1, text: '災害・事故などの緊急事態発生時に重要業務を継続または早期再開するための計画' },
      { index: 2, text: '年間のセキュリティ監査スケジュールを定めた計画書' },
      { index: 3, text: '新規システム導入プロジェクトの計画書' },
    ],
    answer: 1,
    explanation: 'BCP は地震・洪水・火災・サイバー攻撃などの緊急事態が発生した際に、重要業務を継続または許容範囲内の時間で再開させるための計画です。IT 復旧（DR）だけでなく、代替拠点・要員確保・サプライチェーン維持なども含みます。BCP を継続的に維持・改善する管理活動全体を BCM（Business Continuity Management）と呼びます。RTO・RPO と組み合わせて出題されることが多いです。',
  },
  {
    id: 'SM-011',
    category: 'service-mgmt',
    categoryName: 'サービスマネジメント',
    difficulty: 3,
    year: 2024,
    tags: ['ナレッジ管理', 'ITIL', 'SKMS'],
    question: 'ITIL におけるサービスナレッジ管理システム（SKMS）の目的として、最も適切なものはどれか。',
    choices: [
      { index: 0, text: 'ソースコードのバージョン管理を行うこと' },
      { index: 1, text: 'IT サービスの提供と支援に必要な情報・データ・知識を一元管理し意思決定を支援すること' },
      { index: 2, text: '顧客の個人情報を管理すること' },
      { index: 3, text: 'プロジェクトのリスクを管理すること' },
    ],
    answer: 1,
    explanation: 'ITIL の SKMS（Service Knowledge Management System）はサービスマネジメントに必要なデータ・情報・知識を統合管理するシステム群です。構成管理データベース（CMDB）・既知エラーデータベース（KEDB）・確定ライブラリ（DML）などを包含します。SKMS を活用することでインシデント対応の迅速化・問題管理の効率化・変更管理の精度向上が図れます。',
  },

  // ─── 経営戦略 ─────────────────────────────────────
  {
    id: 'BS-011',
    category: 'business-strategy',
    categoryName: 'システム戦略・経営戦略',
    difficulty: 4,
    year: 2024,
    tags: ['オープンイノベーション', 'M&A'],
    question: 'オープンイノベーションの説明として、最も適切なものはどれか。',
    choices: [
      { index: 0, text: '自社の研究開発部門のみで全ての技術・製品を開発するクローズド戦略' },
      { index: 1, text: '社外の知識・技術・アイデアを積極的に取り込み、社内のイノベーションと結合して価値創出を加速する戦略' },
      { index: 2, text: '特許をすべて公開してイノベーションを促進する戦略' },
      { index: 3, text: '海外企業と合弁会社を設立して製品を共同開発する戦略' },
    ],
    answer: 1,
    explanation: 'オープンイノベーション（Chesbrough, 2003）は自前主義（クローズドイノベーション）を脱し、大学・スタートアップ・他社などの外部知識・技術・人材を積極的に取り込み、社内リソースと組み合わせてイノベーションのスピードと質を高める経営戦略です。手法としてはアライアンス・M&A・VC投資・アクセラレータ・API公開・OSS活動などがあります。',
  },
  {
    id: 'BS-012',
    category: 'business-strategy',
    categoryName: 'システム戦略・経営戦略',
    difficulty: 4,
    year: 2024,
    tags: ['KPI', 'OKR', '目標管理'],
    question: 'OKR（Objectives and Key Results）の特徴として、KPI（Key Performance Indicator）と比較した説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'OKR は達成率 100% を目標とし、未達の場合は評価に直結する' },
      { index: 1, text: 'OKR は定性的な目標（O）と定量的な達成指標（KR）を組み合わせ、野心的な目標設定と頻繁な進捗確認を重視する' },
      { index: 2, text: 'OKR は年間の財務指標を管理するためのフレームワークである' },
      { index: 3, text: 'OKR と KPI は同一のフレームワークで、呼び方が異なるだけである' },
    ],
    answer: 1,
    explanation: 'OKR は Intel・Google が採用したことで広まったフレームワークで、定性的な野心的目標（Objective）と 3〜5 個の定量的達成指標（Key Results）を四半期単位で設定します。達成率 60〜70% を理想とする「ストレッチゴール」が特徴で、評価連動は推奨されません（野心的挑戦を阻害するため）。KPI は現状指標の継続モニタリングが主目的であり、OKR は組織の方向性と優先事項の整合（アライメント）を重視します。',
  },

  // ─── 企業と法務 ──────────────────────────────────
  {
    id: 'LG-010',
    category: 'legal',
    categoryName: '企業と法務',
    difficulty: 4,
    year: 2024,
    tags: ['サイバーセキュリティ', '法令', '不正アクセス禁止法'],
    question: '不正アクセス禁止法（不正アクセス行為の禁止等に関する法律）で禁止される行為として、該当しないものはどれか。',
    choices: [
      { index: 0, text: '他人のパスワードを入力して許可なくシステムにログインすること' },
      { index: 1, text: 'セキュリティホールを悪用して認証を回避しシステムに侵入すること' },
      { index: 2, text: '自社所有のサーバに管理者権限でアクセスして設定変更をすること' },
      { index: 3, text: 'フィッシングサイトを用いて他人の ID・パスワードを不正に取得すること' },
    ],
    answer: 2,
    explanation: '不正アクセス禁止法は①不正アクセス行為（他人の識別符号を入力してのアクセス・セキュリティホールを突いたアクセス）、②不正アクセスを助長する行為（他人の識別符号を無断提供）、③識別符号の不正取得・保管（フィッシング含む）を禁止します。自社サーバへの正規の管理者アクセス（選択肢 2）はアクセス権限を有するため、不正アクセスには該当しません。',
  },
  {
    id: 'LG-011',
    category: 'legal',
    categoryName: '企業と法務',
    difficulty: 3,
    year: 2024,
    tags: ['会計', '損益計算書', '貸借対照表'],
    question: '貸借対照表（B/S）に関する説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: '一定期間の収益と費用を対比させてその差額（利益）を示す財務諸表' },
      { index: 1, text: '一定時点における企業の資産・負債・純資産のバランスを示す財務諸表' },
      { index: 2, text: '一定期間のキャッシュの流入・流出を営業・投資・財務に分けて示す財務諸表' },
      { index: 3, text: '株主資本の変動内容を示す財務諸表' },
    ],
    answer: 1,
    explanation: '財務諸表の種類：損益計算書（P/L）：一定期間の収益・費用・利益（選択肢 0）。貸借対照表（B/S）：期末時点の資産（現預金・売掛金・固定資産等）＝ 負債（借入金・買掛金等）＋ 純資産（資本金・利益剰余金等）（正答）。キャッシュフロー計算書（C/F）：営業・投資・財務活動のキャッシュ増減（選択肢 2）。株主資本等変動計算書：選択肢 3。IT 企業の財務分析問題で出題されます。',
  },

  // ─── システムアーキテクチャ ──────────────────────
  {
    id: 'SA-011',
    category: 'system-arch',
    categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 4,
    year: 2024,
    tags: ['クラウド', 'IaaS', 'SaaS', 'PaaS'],
    question: '次の a〜c の説明とクラウドサービスモデルの組合せとして、正しいものはどれか。\na: OS・ミドルウェアを利用者が管理し、仮想マシンのみを提供\nb: アプリケーション開発・実行環境を提供し、インフラ管理は不要\nc: 完成したアプリケーションをインターネット越しに提供',
    choices: [
      { index: 0, text: 'a=SaaS、b=PaaS、c=IaaS' },
      { index: 1, text: 'a=IaaS、b=PaaS、c=SaaS' },
      { index: 2, text: 'a=PaaS、b=IaaS、c=SaaS' },
      { index: 3, text: 'a=IaaS、b=SaaS、c=PaaS' },
    ],
    answer: 1,
    explanation: 'クラウドサービスモデルの責任範囲：IaaS（Infrastructure as a Service）：仮想マシン・ストレージ・ネットワークを提供。OS 以上は利用者が管理（例：AWS EC2、GCP Compute Engine）。PaaS（Platform as a Service）：OS・ミドルウェア・ランタイムを含むアプリ開発基盤を提供（例：Heroku、Cloud Run）。SaaS（Software as a Service）：完成アプリを提供、全て管理済み（例：Gmail、Salesforce、Microsoft 365）。',
  },
  {
    id: 'SA-012',
    category: 'system-arch',
    categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 4,
    year: 2024,
    tags: ['負荷分散', 'ロードバランサ', 'セッション管理'],
    question: 'ロードバランサを使った Web システムでセッション管理を行う場合、問題が発生しないアーキテクチャとして適切なものはどれか。',
    choices: [
      { index: 0, text: 'セッション情報を各 Web サーバのメモリのみに保持する（スティッキーセッションなし）' },
      { index: 1, text: 'セッション情報を Redis などの外部共有ストアに保持し、どの Web サーバでも参照できるようにする' },
      { index: 2, text: 'ロードバランサなしで 1 台の Web サーバのみで運用する' },
      { index: 3, text: 'セッション情報をクライアントのローカルストレージのみに保存する' },
    ],
    answer: 1,
    explanation: 'ロードバランサで複数の Web サーバに振り分ける構成では、各サーバのメモリにセッション情報を保持すると、次のリクエストが別サーバに振られた際にセッションが失われます（選択肢 0）。解決策は①外部セッションストア（Redis・Memcached）を使いどのサーバからでも参照可能にする（正答）、②スティッキーセッション（同一クライアントを常に同じサーバへ）ですが、スティッキーセッションはサーバ障害時の問題が残るため外部ストアが推奨です。',
  },
];

QUESTIONS_DATA.push(...QUESTIONS_DATA_PHASE5);
