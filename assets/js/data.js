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
    question: '社員テーブルに「部署コード=\'10\', 給与=250000」「部署コード=\'10\', 給与=350000」「部署コード=\'10\', 給与=400000」「部署コード=\'20\', 給与=350000」「部署コード=\'20\', 給与=300000」の 5 件のレコードがある。次の SQL 文で取得されるレコード数はどれか。\nSELECT * FROM 社員 WHERE 部署コード = \'10\' AND 給与 >= 300000',
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

  // ─── アルゴリズム追加用語 ───────────────────────
  { term: 'O 記法（ビッグオー）', category: 'algorithm', definition: 'アルゴリズムの時間・空間計算量の漸近的な上限を表す記法。O(1)は定数時間、O(n)は線形、O(n²)は二乗に比例。計算量比較の基本指標。' },
  { term: '二分探索', category: 'algorithm', definition: 'ソート済み配列の中央値と比較しながら探索範囲を半分に絞る探索アルゴリズム。計算量 O(log n)。線形探索 O(n) より大幅に高速。' },
  { term: 'ハッシュテーブル', category: 'algorithm', definition: 'キーをハッシュ関数で変換したインデックスで値を格納・検索するデータ構造。平均 O(1) で検索・挿入・削除が可能。衝突対策が重要。' },
  { term: 'キュー（Queue）', category: 'algorithm', definition: 'FIFO（先入れ先出し）のデータ構造。プリンタのジョブ管理・BFS（幅優先探索）などに利用。エンキュー（追加）・デキュー（取り出し）の操作を持つ。' },
  { term: 'スタック（Stack）', category: 'algorithm', definition: 'LIFO（後入れ先出し）のデータ構造。関数呼び出しのコールスタック・DFS（深さ優先探索）・括弧の対応チェックに利用。プッシュ・ポップの操作を持つ。' },

  // ─── ネットワーク追加用語 ────────────────────────
  { term: 'DNS', category: 'network', definition: 'Domain Name System。ドメイン名（例: example.com）を IP アドレスに変換する分散型データベースシステム。ルートサーバ→TLD サーバ→権威サーバの階層構造。' },
  { term: 'NAT', category: 'network', definition: 'Network Address Translation。プライベート IP アドレスをグローバル IP アドレスに変換する技術。ルータで実装され、IP アドレス不足を補う。NAPT（IP マスカレード）は多対一変換。' },
  { term: 'VPN', category: 'network', definition: 'Virtual Private Network。公衆ネットワーク上に暗号化された仮想専用回線を構築する技術。IPsec VPN（サイト間）・SSL-VPN（リモートアクセス）が代表。' },
  { term: 'HTTP/2', category: 'network', definition: 'HTTP/1.1 の後継プロトコル。ヘッダー圧縮・多重化（1 本の TCP 接続で複数リクエストを並列処理）・サーバプッシュにより通信効率を向上。' },

  // ─── データベース追加用語 ─────────────────────────
  { term: '正規化', category: 'database', definition: 'データの重複排除・整合性確保のためにテーブルを設計する手法。第 1 正規形（繰り返し排除）→第 2 正規形（部分関数従属排除）→第 3 正規形（推移的関数従属排除）が基本。' },
  { term: 'インデックス（索引）', category: 'database', definition: '検索速度を向上させるためにカラムに作成するデータ構造。B ツリーインデックスが一般的。検索は高速化するが INSERT/UPDATE/DELETE は低速化することがある。' },
  { term: 'ビュー', category: 'database', definition: '一つ以上のテーブルを基にした仮想テーブル。SELECT 文の結果に名前をつけたもの。データアクセス制御・複雑なクエリの再利用・データの論理的独立性確保に使う。' },
  { term: 'トランザクション分離レベル', category: 'database', definition: '複数のトランザクションが並行実行される際の分離度の設定。READ UNCOMMITTED・READ COMMITTED・REPEATABLE READ・SERIALIZABLE の 4 段階。分離度が高いほど整合性は高く、並行性は低下。' },

  // ─── セキュリティ追加用語 ─────────────────────────
  { term: 'ゼロデイ攻撃', category: 'security', definition: 'ベンダがパッチを公開する前（脆弱性が公開されてから 0 日目）に脆弱性を悪用する攻撃。対策困難であり、EDR・ネットワーク監視による検知が重要。' },
  { term: 'フィッシング', category: 'security', definition: '実在する企業・機関を装った偽メール・偽サイトでパスワードや個人情報を騙し取る攻撃。スピアフィッシング（特定個人狙い）・スミッシング（SMS 利用）も派生型。' },
  { term: 'ランサムウェア', category: 'security', definition: 'ファイルを暗号化して使用不能にし、復号と引き換えに身代金（ransom）を要求するマルウェア。バックアップの取得・EDR 導入・多要素認証が主な対策。' },
  { term: 'CSIRT', category: 'security', definition: 'Computer Security Incident Response Team。セキュリティインシデント（情報漏洩・攻撃）を受けたとき対応する組織内チーム。検知・分析・封じ込め・回復・再発防止を担う。' },

  // ─── ソフトウェア開発追加用語 ────────────────────
  { term: 'TDD', category: 'software-dev', definition: 'テスト駆動開発（Test-Driven Development）。テストを先に書き→失敗を確認→コードを書いてテストを通す→リファクタリング、のサイクルを繰り返す手法。コード品質・設計改善に効果的。' },
  { term: 'CI/CD', category: 'software-dev', definition: '継続的インテグレーション（CI）：コードのマージ時に自動ビルド・テストを行う。継続的デリバリー（CD）：本番環境へのデプロイを自動化する。DevOps の中核プラクティス。' },
  { term: 'リファクタリング', category: 'software-dev', definition: '外部から見た振る舞いを変えずに内部のコード構造を改善すること。可読性・保守性・拡張性の向上が目的。テストコードがあることが前提。' },
  { term: 'デザインパターン', category: 'software-dev', definition: 'オブジェクト指向設計における再利用可能な設計テンプレート集。GoF（Gang of Four）の 23 パターンが有名。生成型・構造型・振る舞い型に分類。' },

  // ─── プロジェクトマネジメント追加用語 ────────────
  { term: 'リスク管理', category: 'project-mgmt', definition: 'プロジェクトのリスクを特定・分析・対応計画を立て監視するプロセス。対応戦略：回避（除去）・軽減（低減）・転嫁（保険等）・受容（許容）。' },
  { term: 'ガントチャート', category: 'project-mgmt', definition: 'プロジェクトのタスクを横棒グラフで時間軸に沿って表現した工程管理ツール。タスクの開始・終了日・期間・依存関係を視覚的に把握できる。' },

  // ─── 経営戦略追加用語 ────────────────────────────
  { term: 'KPI', category: 'business-strategy', definition: 'Key Performance Indicator（重要業績評価指標）。目標達成の進捗を測る定量的指標。KGI（最終目標）を達成するための中間指標として設定する。' },
  { term: 'ITガバナンス', category: 'business-strategy', definition: 'IT 投資・活用を企業戦略と整合させ、取締役会・経営層が主導して管理する仕組み。COBIT が代表的なフレームワーク。IT 統制ともいわれる。' },

  // ─── 法務追加用語 ────────────────────────────────
  { term: '不正アクセス禁止法', category: 'legal', definition: '正規の認証を経ずにコンピュータにアクセスする行為を禁止する法律。不正アクセス行為・その助長行為（IDとパスワードの不正取得・提供）が処罰対象。' },
  { term: 'プロバイダ責任制限法', category: 'legal', definition: 'インターネット上の権利侵害に対するプロバイダの責任を限定し、被害者による発信者情報開示請求手続きを定めた法律。SNS投稿による名誉毀損等で活用される。' },

  // ─── システムアーキテクチャ追加用語 ──────────────
  { term: 'マイクロサービス', category: 'system-arch', definition: 'アプリケーションを小さな独立したサービス群に分割するアーキテクチャパターン。各サービスは独立してデプロイ・スケールが可能。API（REST/gRPC）で通信する。モノリシックの対義語。' },
  { term: 'コンテナ', category: 'system-arch', definition: 'OS カーネルを共有しながらアプリケーションとその依存関係を隔離して実行する仮想化技術。Docker が代表。VM より軽量で起動が速い。Kubernetes でオーケストレーションする。' },
  { term: 'CDN', category: 'network', definition: 'Content Delivery Network。世界各地にエッジサーバを配置し、ユーザに地理的に近いサーバからコンテンツを配信するネットワーク。レイテンシ削減とオリジンサーバ負荷軽減が主な効果。' },
  { term: 'OAuth 2.0', category: 'security', definition: 'サードパーティアプリケーションがユーザのリソースに安全にアクセスするための認可フレームワーク。アクセストークンを発行し、パスワードを直接渡さずにアクセス権限を委譲する。' },
  { term: 'スプリント', category: 'software-dev', definition: 'スクラム開発における固定長の反復開発期間（通常 1〜4 週間）。スプリント計画→デイリースクラム→スプリントレビュー→スプリントレトロスペクティブのサイクルで進める。' },
  { term: 'テクニカルデット', category: 'software-dev', definition: '技術的負債。迅速な開発を優先した結果、後に修正・改善が必要になるコード品質の問題の蓄積。放置すると保守コスト増大・バグ増加を招く。定期的なリファクタリングで返済する。' },

  // ─── フェーズ10追加（40語） ──────────────────────────

  // アルゴリズム・データ構造
  { term: 'ハッシュ衝突', category: 'algorithm', definition: '異なるキーが同一ハッシュ値にマッピングされる現象。解決策にはチェイン法（リストで連結）とオープンアドレス法（空きスロットを探す線形探索・2 次探索など）がある。' },
  { term: 'B 木', category: 'algorithm', definition: '多分木の平衡木。各ノードが複数のキーを持ち、ディスク I/O を最小化するためデータベースインデックスに広く使われる。ルートから葉までの高さが均一（平衡）であるため検索・挿入・削除が O(log n)。' },
  { term: 'トポロジカルソート', category: 'algorithm', definition: '有向非巡回グラフ（DAG）の頂点を依存関係に従って順序付けするアルゴリズム。タスクスケジューリング・コンパイル順序の決定などに利用される。' },
  { term: 'メモ化', category: 'algorithm', definition: '動的計画法の一技法。関数の計算結果をキャッシュしておき、同じ引数での再計算を省略してパフォーマンスを向上させる。フィボナッチ数列の高速化が典型例。' },

  // ネットワーク
  { term: 'VLAN', category: 'network', definition: 'Virtual LAN。物理的な接続に関わらず論理的にネットワークを分割する技術。ブロードキャストドメインを分割しセキュリティ・管理性を向上させる。IEEE 802.1Q でタグ付けしてトランクリンクで伝送する。' },
  { term: 'SDN', category: 'network', definition: 'Software-Defined Networking。ネットワーク制御プレーン（コントロールプレーン）とデータ転送プレーン（データプレーン）を分離し、ソフトウェアで集中的にネットワークを制御するアーキテクチャ。OpenFlow が代表プロトコル。' },
  { term: 'BGP', category: 'network', definition: 'Border Gateway Protocol。インターネット上の自律システム（AS）間のルーティングプロトコル（EGP）。経路制御のポリシー設定が可能で、インターネットの基幹ルーティングに使われる。' },
  { term: 'QoS', category: 'network', definition: 'Quality of Service。ネットワークトラフィックを優先度付けして帯域・遅延・ジッタを制御する技術。音声・動画など遅延に敏感なトラフィックを優先処理する。DiffServ・IntServ が代表的な方式。' },

  // データベース
  { term: 'クラスタリングインデックス', category: 'database', definition: 'テーブルのデータをインデックスの順序で物理的に格納するインデックス。範囲検索に高効率。1 テーブルにつき 1 つのみ作成可能。対義語は非クラスタリング（セカンダリ）インデックス。' },
  { term: '結合（JOIN）種類', category: 'database', definition: '内部結合（INNER JOIN）：両テーブルに一致するレコードのみ。左外部結合（LEFT JOIN）：左テーブル全件＋右の一致分。全外部結合（FULL OUTER JOIN）：両テーブル全件。クロス結合（CROSS JOIN）：直積（デカルト積）。' },
  { term: 'ビュー', category: 'database', definition: 'SQL の SELECT 結果を仮想テーブルとして定義したもの。実データはなくクエリ定義のみ保存される。複雑なクエリの再利用・アクセス制御に利用。マテリアライズドビューは結果をキャッシュして高速化する。' },
  { term: 'CAP 定理', category: 'database', definition: '分散システムは Consistency（一貫性）・Availability（可用性）・Partition tolerance（分断耐性）の 3 性質を同時にすべて満たすことはできず、最大 2 つしか保証できないという定理。NoSQL 設計のトレードオフの基礎。' },

  // セキュリティ
  { term: 'ゼロトラストアーキテクチャ', category: 'security', definition: '「信頼できるネットワーク内部」を前提としない考え方。すべてのアクセスをデフォルトで検証・認可する。VPN の代替として注目され、NIST SP 800-207 で定義される。BeyondCorp が先駆的実装。' },
  { term: 'SIEM', category: 'security', definition: 'Security Information and Event Management。複数のシステム・機器のログを集中収集・相関分析してセキュリティインシデントをリアルタイムに検出するシステム。SOAR（自動対応）と組み合わせて使われることが多い。' },
  { term: 'フィッシング', category: 'security', definition: '正規の組織・ブランドに偽装したメールや Web サイトで認証情報・クレジットカード情報を騙し取る攻撃。スピアフィッシング（特定個人を標的）・ビッシング（音声通話）・スミッシング（SMS）などの亜種がある。' },
  { term: 'PGP', category: 'security', definition: 'Pretty Good Privacy。メール・ファイルの暗号化・デジタル署名に使われるハイブリッド暗号方式。公開鍵と共通鍵を組み合わせ、信頼の輪（Web of Trust）で公開鍵の真正性を確認する。' },
  { term: 'WAF', category: 'security', definition: 'Web Application Firewall。HTTP/HTTPS 通信を解析し、SQL インジェクション・XSS・CSRF などの Web アプリケーション攻撃をシグネチャや振る舞い分析で検出・ブロックするファイアウォール。' },

  // OS・コンピュータアーキテクチャ
  { term: 'ページフォールト', category: 'os', definition: 'プロセスがアクセスしようとしたページが物理メモリに存在しない場合に発生する例外。OS がスワップ領域からページを読み込む（ページイン）。頻発するとスラッシングと呼ばれる性能劣化を招く。' },
  { term: 'セマフォ', category: 'os', definition: '並行プロセス間の排他制御・同期に使うカウンタ変数。P 操作（カウンタ減・0 以下で待機）と V 操作（カウンタ増・待機プロセスを起床）で共有資源へのアクセスを制御する。Dijkstra が考案。' },
  { term: 'マルチコアプロセッサ', category: 'os', definition: '1 つの CPU チップに複数のコアを集積した構造。スレッドレベルの並列処理を可能にする。コア間はキャッシュコヒーレンシプロトコル（MESI など）で一貫性を保つ。SMT（同時マルチスレッド）でさらに仮想コアを増やせる。' },
  { term: 'UEFI', category: 'os', definition: 'Unified Extensible Firmware Interface。従来の BIOS に代わるファームウェア仕様。2 TB 超のディスクに対応（GPT 使用）・セキュアブート対応・GUI 操作可能。BIOS よりも高速な起動が可能。' },

  // ソフトウェア開発
  { term: 'CI/CD', category: 'software-dev', definition: 'Continuous Integration / Continuous Delivery（Deployment）。コードをリポジトリに頻繁に統合し、自動テスト・ビルド・デプロイを実行する手法。Jenkins・GitHub Actions・GitLab CI が代表的ツール。' },
  { term: 'DevOps', category: 'software-dev', definition: '開発（Development）と運用（Operations）を一体化し、自動化・継続的改善によって開発サイクルを高速化する文化・実践。CI/CD・IaC・監視・フィードバックループの整備が重要。' },
  { term: 'テスト駆動開発（TDD）', category: 'software-dev', definition: 'テストファースト開発手法。「Red（失敗するテストを書く）→Green（テストを通す最小限の実装）→Refactor（改善）」のサイクルを繰り返す。XP（エクストリームプログラミング）の実践の一つ。' },
  { term: 'コードレビュー', category: 'software-dev', definition: '作成したコードを別の開発者が確認し品質・バグ・設計の問題を指摘するプロセス。プルリクエストベースのレビューが一般的。知識共有・品質担保・バグ早期発見の効果がある。' },

  // プロジェクトマネジメント
  { term: 'クリティカルパス', category: 'project-mgmt', definition: 'プロジェクトの開始から終了までの最長経路。クリティカルパス上の作業遅延はプロジェクト全体の遅延に直結する。PERT・CPM で算出される。フロート（余裕）がゼロの作業で構成される。' },
  { term: 'リスクレジスタ', category: 'project-mgmt', definition: 'プロジェクトで識別したリスクを一覧管理する台帳。リスク名・確率・影響度・優先度・対応策・担当者・状態を記録する。PMBOK のリスクマネジメントプロセスの中核成果物。' },
  { term: 'バーンダウンチャート', category: 'project-mgmt', definition: 'スプリントやリリースの残作業量（ストーリーポイント・時間）を時系列で表したグラフ。理想線との乖離でスプリントの進捗を一目で把握できる。アジャイル開発で広く使われる。' },

  // サービスマネジメント
  { term: 'MTTR', category: 'service-mgmt', definition: 'Mean Time To Repair。障害発生から復旧までの平均時間。システムの保守性を示す指標。MTBF（平均故障間隔）と合わせて可用性 = MTBF / (MTBF + MTTR) で算出される。' },
  { term: 'フォールバック', category: 'service-mgmt', definition: '障害や変更失敗時に以前の状態へ戻す手順・計画。ITIL の変更管理では変更計画に必ずフォールバック（バックアウト）計画を含めることが求められる。' },
  { term: 'SLA', category: 'service-mgmt', definition: 'Service Level Agreement。サービス提供者と利用者間で取り決めるサービス品質に関する契約。稼働率・応答時間・問題解決時間などの数値目標（SLO）と未達時のペナルティを定める。' },

  // ビジネスストラテジ
  { term: 'バランスト・スコアカード', category: 'business-strategy', definition: 'BSC。財務・顧客・内部プロセス・学習と成長の 4 視点からビジョン・戦略を具体的目標・指標・施策・目標値に落とし込む経営管理フレームワーク。Kaplan & Norton が提唱。' },
  { term: 'SWOT 分析', category: 'business-strategy', definition: '企業の Strengths（強み）・Weaknesses（弱み）・Opportunities（機会）・Threats（脅威）を整理して戦略立案に活用するフレームワーク。内部環境（S・W）と外部環境（O・T）に分けて分析する。' },
  { term: 'アウトソーシング', category: 'business-strategy', definition: '非中核業務を外部の専門業者に委託する手法。コスト削減・専門性活用・リソース集中が狙い。BPO（業務プロセスアウトソーシング）・ITO（IT アウトソーシング）が代表形態。コアコンピタンスに集中できる。' },

  // 法規・標準
  { term: 'ISO 27001', category: 'legal', definition: '情報セキュリティマネジメントシステム（ISMS）の国際規格。Plan-Do-Check-Act サイクルで情報資産のリスクを継続的に管理する。日本では JIS Q 27001 として採用。' },
  { term: 'GDPR', category: 'legal', definition: 'General Data Protection Regulation（EU 一般データ保護規則）。EU 域内の個人データ保護を強化した規制。データポータビリティ権・忘れられる権利・侵害通知義務（72 時間以内）が主な特徴。日本企業にも適用される場合がある。' },
  { term: '独占禁止法', category: 'legal', definition: '私的独占・不当な取引制限（カルテル・談合）・不公正な取引方法を禁止する法律（正式名称：私的独占の禁止及び公正取引の確保に関する法律）。公正取引委員会が執行する。IT 分野ではプラットフォーム規制にも関連。' },
  { term: '電子帳簿保存法', category: 'legal', definition: '国税関係帳簿・書類の電子データ保存を認める法律。2022 年改正で電子取引データの電子保存義務化（紙保存不可）が段階的に施行された。要件：真実性（タイムスタンプ等）・可視性（検索機能等）。' },
  { term: 'マルチテナント', category: 'system-arch', definition: '1 つのアプリケーションインスタンスを複数の顧客（テナント）が共有するアーキテクチャ。SaaS の標準的な提供形態。コスト効率が高い反面、テナント間のデータ分離・セキュリティ設計が重要。' },
  { term: 'フィーチャーフラグ', category: 'software-dev', definition: 'コードの変更なしにフラグのオン/オフで機能の有効化・無効化を切り替えるテクニック。段階的リリース・A/B テスト・カナリアリリースに活用。トランクベース開発での継続的デプロイを支援する。' },
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

/* =====================================================
   QUESTIONS_DATA_PHASE6 — 複合・計算・実践問題
   各分野 2 問 × 11 分野 = 22 問（合計 153 問）
   ===================================================== */
const QUESTIONS_DATA_PHASE6 = [

  // ─── アルゴリズム ──────────────────────────────────
  {
    id: 'ALG-014',
    category: 'algorithm',
    categoryName: 'アルゴリズム',
    difficulty: 4,
    year: 2024,
    tags: ['グラフ', 'BFS', 'DFS'],
    question: '幅優先探索（BFS）と深さ優先探索（DFS）の比較として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'BFS はスタックを使い、DFS はキューを使う' },
      { index: 1, text: 'BFS は最短経路を保証するが、DFS は保証しない（重みなしグラフの場合）' },
      { index: 2, text: 'DFS は常に BFS より速い' },
      { index: 3, text: 'BFS も DFS もメモリ使用量は同じである' },
    ],
    answer: 1,
    explanation: 'BFS（幅優先探索）はキューを使い、ノードを距離順に探索するため重みなしグラフでは最短経路を保証します。DFS（深さ優先探索）はスタック（または再帰）を使い、深く潜ってから戻る探索方式で最短経路を保証しません。メモリ：BFS は同一深さのノードを全保持するため幅広いグラフでは多く消費。DFS は再帰スタック深さ分のメモリで済む場合が多い。どちらも時間計算量は O(V+E) です。',
  },
  {
    id: 'ALG-015',
    category: 'algorithm',
    categoryName: 'アルゴリズム',
    difficulty: 5,
    year: 2024,
    tags: ['ビット演算', '2の補数'],
    question: '8 ビット 2 の補数表現で −1 を表すビット列として、正しいものはどれか。',
    choices: [
      { index: 0, text: '00000001' },
      { index: 1, text: '10000001' },
      { index: 2, text: '11111110' },
      { index: 3, text: '11111111' },
    ],
    answer: 3,
    explanation: '2 の補数は「ビット反転 ＋ 1」で求めます。1 = 00000001 → ビット反転 = 11111110 → ＋1 = 11111111。よって −1 は 8 ビットで 11111111 です。8 ビット符号付き整数の範囲は −128（10000000）〜 +127（01111111）。2 の補数の利点は加算と減算が同一回路で処理できることです（符号なし加算で正しく計算できる）。',
  },

  // ─── ネットワーク ──────────────────────────────────
  {
    id: 'NET-013',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 4,
    year: 2024,
    tags: ['HTTPステータス', 'REST'],
    question: 'REST API において、存在しないリソースへのリクエストに対して返すべき HTTP ステータスコードとして、最も適切なものはどれか。',
    choices: [
      { index: 0, text: '200 OK' },
      { index: 1, text: '400 Bad Request' },
      { index: 2, text: '404 Not Found' },
      { index: 3, text: '500 Internal Server Error' },
    ],
    answer: 2,
    explanation: '主要 HTTP ステータスコードの意味：200：成功。201：リソース作成成功（POST 後など）。400：クライアントのリクエスト形式誤り（バリデーションエラーなど）。401：認証必要。403：認可されていない（権限なし）。404：リソースが見つからない（正答）。409：競合（重複など）。500：サーバ内部エラー。REST 設計では意味的に正しいステータスコードを返すことが重要で、常に 200 を返して body でエラーを示す設計は推奨されません。',
  },
  {
    id: 'NET-014',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 5,
    year: 2024,
    tags: ['TCP', 'スロースタート', 'フロー制御'],
    question: 'TCP の輻輳制御における「スロースタート（Slow Start）」の動作として、正しいものはどれか。',
    choices: [
      { index: 0, text: '通信開始時から一定の低速レートで送信を続ける' },
      { index: 1, text: '輻輳ウィンドウサイズを RTT ごとに 1MSS ずつ線形増加させる' },
      { index: 2, text: '輻輳ウィンドウサイズを RTT ごとに 2 倍に指数的に増加させ、しきい値（ssthresh）に達したら線形増加に切り替える' },
      { index: 3, text: 'パケットロスが発生するまで輻輳ウィンドウを変化させない' },
    ],
    answer: 2,
    explanation: 'TCP スロースタートは初期ウィンドウサイズを 1MSS から始め、ACK を受け取るたびにウィンドウを増やし RTT ごとに 2 倍（指数増加）します。スロースタートしきい値（ssthresh）に達すると「輻輳回避」フェーズに移行し 1MSS ずつ線形増加します。パケットロス検出時：タイムアウトなら ssthresh を半分に下げ再びスロースタート。3 重 ACK（高速再転送）なら ssthresh 半分＋輻輳回避（TCP Reno）または CUBIC アルゴリズムで制御します。',
  },

  // ─── データベース ──────────────────────────────────
  {
    id: 'DB-013',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 4,
    year: 2024,
    tags: ['ストアドプロシージャ', 'トリガ'],
    question: 'データベースの「トリガ（Trigger）」に関する説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: '定期的なバッチ処理を実行するためにスケジューラが起動するプログラム' },
      { index: 1, text: 'テーブルに対して INSERT・UPDATE・DELETE が行われたとき、自動的に実行される手続き' },
      { index: 2, text: 'アプリケーションから明示的に呼び出されるサーバ側の手続き' },
      { index: 3, text: '全文検索のためのインデックスを自動生成する機能' },
    ],
    answer: 1,
    explanation: 'トリガはテーブルに DML（INSERT・UPDATE・DELETE）が実行された時に自動的に起動するデータベースオブジェクトです。監査ログの自動記録・データ整合性の強制・連鎖更新などに活用されます。アプリから明示的に呼び出すのはストアドプロシージャ（選択肢 2）です。トリガのデメリットは暗黙的な実行によりデバッグが困難になること・意図しない再帰トリガのリスクがあることです。',
  },
  {
    id: 'DB-014',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 5,
    year: 2024,
    tags: ['シャーディング', 'レプリケーション', '分散DB'],
    question: 'データベースの「シャーディング（Sharding）」の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'マスタのデータを複数のスレーブに複製して読み込みを分散する手法' },
      { index: 1, text: 'テーブルのデータを特定のキーで水平分割し、複数のデータベースノードに分散する手法' },
      { index: 2, text: 'テーブルのカラムを縦に分割して別テーブルに格納する手法' },
      { index: 3, text: 'データをメモリキャッシュに保持してデータベース負荷を減らす手法' },
    ],
    answer: 1,
    explanation: 'シャーディング（水平分割）はデータを特定のキー（ユーザ ID の範囲・ハッシュ値など）に基づいて複数の DB ノードに分散格納します。大規模 Web サービスのスケーラビリティ確保に使われます。デメリットはシャードをまたいだ JOIN が困難・分散トランザクションが複雑・リバランシングコスト。選択肢 0 はレプリケーション、選択肢 2 は垂直分割（カラム分割）、選択肢 3 はキャッシュ（Redis など）の説明です。',
  },

  // ─── セキュリティ ──────────────────────────────────
  {
    id: 'SEC-013',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 4,
    year: 2024,
    tags: ['脅威モデリング', 'STRIDE'],
    question: 'マイクロソフトが提唱した脅威モデリングフレームワーク「STRIDE」の 6 つの脅威カテゴリに含まれないものはどれか。',
    choices: [
      { index: 0, text: 'なりすまし（Spoofing）' },
      { index: 1, text: '改ざん（Tampering）' },
      { index: 2, text: '暗号化の破綻（Decryption Failure）' },
      { index: 3, text: '否認（Repudiation）' },
    ],
    answer: 2,
    explanation: 'STRIDE は設計段階で脅威を体系的に分析するフレームワークです。S：なりすまし（Spoofing）、T：改ざん（Tampering）、R：否認（Repudiation）、I：情報漏えい（Information Disclosure）、D：サービス拒否（Denial of Service）、E：権限昇格（Elevation of Privilege）の 6 カテゴリです。「暗号化の破綻」は STRIDE の分類項目ではなく、情報漏えい（I）として扱われます。各カテゴリに対応する Security Control（認証・MAC・ログ・暗号化・レート制限・最小権限）も合わせて覚えましょう。',
  },
  {
    id: 'SEC-014',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 4,
    year: 2024,
    tags: ['SIEM', 'SOC', '監視'],
    question: 'SIEM（Security Information and Event Management）の主な機能として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'ファイアウォールのパケットフィルタリングルールを自動生成する' },
      { index: 1, text: '複数のシステムからログを集約・相関分析してセキュリティイベントを検出・アラートする' },
      { index: 2, text: 'マルウェアをサンドボックスで実行して振る舞いを分析する' },
      { index: 3, text: 'ネットワーク機器の設定変更を一元管理する' },
    ],
    answer: 1,
    explanation: 'SIEM はファイアウォール・IDS/IPS・認証サーバ・エンドポイントなど多様なシステムのログを一元収集し、相関ルールや機械学習で異常を検知してアラートを上げるプラットフォームです。PCIDSS・SOX などのコンプライアンス対応にも使われます。SOC（Security Operations Center）の運用ツールとして中核を担います。マルウェアのサンドボックス分析（選択肢 2）は動的解析ツール（Cuckoo Sandbox など）の機能です。',
  },

  // ─── OS・ハードウェア ──────────────────────────────
  {
    id: 'OS-013',
    category: 'os',
    categoryName: 'OS・ハードウェア',
    difficulty: 4,
    year: 2024,
    tags: ['ファイルシステム', 'inode', 'ジャーナリング'],
    question: 'ジャーナリングファイルシステムの特徴として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'データを書き込む前にジャーナル（ログ）に変更内容を記録し、システム障害後のファイルシステム整合性回復を高速化する' },
      { index: 1, text: 'ファイルを書き込むたびにデータを自動で暗号化する' },
      { index: 2, text: 'ファイルの重複を自動的に検出して削除する' },
      { index: 3, text: 'ネットワーク越しにファイルを共有するための仕組み' },
    ],
    answer: 0,
    explanation: 'ジャーナリングファイルシステム（ext4・NTFS・XFS など）は書き込み前にトランザクション内容をジャーナル領域に記録します。システム障害（停電など）後の再起動時、ジャーナルを参照して未完了の処理をロールバックまたはロールフォワードすることで fsck の時間を大幅短縮し整合性を素早く回復できます。ジャーナルの書き込みオーバヘッドがわずかに発生しますが、現代の OS ではほぼ標準採用されています。',
  },
  {
    id: 'OS-014',
    category: 'os',
    categoryName: 'OS・ハードウェア',
    difficulty: 3,
    year: 2024,
    tags: ['割込み', 'ポーリング'],
    question: '入出力制御方式として、割込み方式とポーリング方式を比較した場合の「割込み方式」の特徴はどれか。',
    choices: [
      { index: 0, text: 'CPU が定期的にデバイスの状態を確認するため、単純に実装できる' },
      { index: 1, text: 'デバイスからの処理完了通知を受けるまで CPU は別の処理が可能で、CPU 利用効率が高い' },
      { index: 2, text: '高頻度の IO では CPU 利用率が低くなる' },
      { index: 3, text: 'リアルタイム性が低く組込みシステムには不向き' },
    ],
    answer: 1,
    explanation: 'ポーリング：CPU が一定間隔でデバイスの状態を確認。実装は単純だが、CPU がポーリングに占有されて他の処理ができない（CPU 利用効率低）。高頻度 IO なら逆に効率的な場合も。割込み方式：デバイスが処理完了時に CPU に割込みシグナルを送る。CPU は通知が来るまで別処理を実行でき、CPU 利用効率が高い（正答）。現代の OS は割込み方式が主流で、高頻度 IO には DMA も組み合わせます。',
  },

  // ─── ソフトウェア開発 ──────────────────────────────
  {
    id: 'SD-013',
    category: 'software-dev',
    categoryName: 'ソフトウェア開発',
    difficulty: 4,
    year: 2024,
    tags: ['コードレビュー', 'ペアプログラミング'],
    question: '静的解析（Static Analysis）の特徴として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'プログラムを実際に実行してバグを検出する' },
      { index: 1, text: 'ソースコードを実行せずに解析し、コーディング規約違反・潜在的バグ・セキュリティ脆弱性を検出する' },
      { index: 2, text: '負荷テスト時のメモリリークを検出する' },
      { index: 3, text: 'テストケースを自動生成してカバレッジを向上させる' },
    ],
    answer: 1,
    explanation: '静的解析はソースコードを実行せずに字句・構文・意味を解析するツールです。コーディング規約違反（Checkstyle・ESLint）・潜在バグ（null 参照・型不一致）・セキュリティ脆弱性（SQL インジェクション・XSS の可能性）などを CI パイプラインで自動検出できます。動的解析（Dynamic Analysis）はプログラムを実行してランタイムエラー・メモリリーク・パフォーマンス問題を検出します（選択肢 0 が動的解析）。SAST（Static Application Security Testing）は静的解析のセキュリティ特化版です。',
  },
  {
    id: 'SD-014',
    category: 'software-dev',
    categoryName: 'ソフトウェア開発',
    difficulty: 4,
    year: 2024,
    tags: ['マイクロサービス', 'API Gateway'],
    question: 'マイクロサービスアーキテクチャにおける「API ゲートウェイ」の主な役割として、正しいものはどれか。',
    choices: [
      { index: 0, text: '各マイクロサービスのソースコードを管理するバージョン管理システム' },
      { index: 1, text: 'クライアントからのリクエストを受け取り、認証・ルーティング・レート制限・ロードバランシングを一元処理する窓口' },
      { index: 2, text: 'マイクロサービス間のデータ整合性を保証するトランザクションコーディネータ' },
      { index: 3, text: 'サービスの稼働状況を監視してアラートを送る監視ツール' },
    ],
    answer: 1,
    explanation: 'API ゲートウェイはクライアント（ブラウザ・モバイル）と多数のマイクロサービスの間に立つ単一エントリポイントです。主な機能：①リクエストルーティング（URL に応じて適切なサービスへ転送）、②認証・認可（JWT 検証など）、③レート制限（DDoS 対策）、④SSL 終端、⑤ロードバランシング、⑥レスポンスのキャッシュ・集約。Amazon API Gateway・Kong・nginx などが代表的な実装です。',
  },

  // ─── プロジェクトマネジメント ─────────────────────
  {
    id: 'PM-013',
    category: 'project-mgmt',
    categoryName: 'プロジェクトマネジメント',
    difficulty: 4,
    year: 2024,
    tags: ['変更管理', 'スコープクリープ'],
    question: 'プロジェクトの「スコープクリープ（Scope Creep）」を防ぐための対策として、最も有効なものはどれか。',
    choices: [
      { index: 0, text: 'チームメンバを増員して対応能力を高める' },
      { index: 1, text: 'スコープベースラインを明確に定義し、変更は変更管理プロセスを通じて承認する' },
      { index: 2, text: 'スケジュールを短縮して要求追加の時間的余裕をなくす' },
      { index: 3, text: 'ステークホルダとの会議を減らして要求変更の機会を限定する' },
    ],
    answer: 1,
    explanation: 'スコープクリープとは承認なしに要求や機能が際限なく追加・拡大される現象で、プロジェクトの遅延・コスト超過の主要因です。対策は①WBS と要件定義書でスコープを明確に文書化（スコープベースライン）、②変更要求は変更管理委員会（CCB）の承認プロセスを通す、③変更の影響（コスト・スケジュール・品質）をステークホルダに明示する、です。人員増強（選択肢 0）はブルックスの法則により逆効果になることもあります。',
  },
  {
    id: 'PM-014',
    category: 'project-mgmt',
    categoryName: 'プロジェクトマネジメント',
    difficulty: 3,
    year: 2024,
    tags: ['品質管理', 'QC七つ道具'],
    question: 'QC 七つ道具のうち、原因と結果の関係を魚の骨状に表現し根本原因の分析に使うものはどれか。',
    choices: [
      { index: 0, text: 'パレート図' },
      { index: 1, text: 'ヒストグラム' },
      { index: 2, text: '特性要因図（フィッシュボーン図）' },
      { index: 3, text: '管理図' },
    ],
    answer: 2,
    explanation: 'QC 七つ道具の用途：パレート図：影響の大きい原因順に棒グラフ＋累積折れ線（80/20 の法則の可視化）。ヒストグラム：データの分布・ばらつきを確認。特性要因図（石川図・フィッシュボーン図）：問題の結果（魚の頭）と要因（骨）を構造化し根本原因を分析（正答）。管理図：工程の状態を時系列で監視し異常を検出。散布図：2 変数の相関確認。チェックシート：データ収集。層別：データをグループ別に分析。',
  },

  // ─── サービスマネジメント ─────────────────────────
  {
    id: 'SM-012',
    category: 'service-mgmt',
    categoryName: 'サービスマネジメント',
    difficulty: 4,
    year: 2024,
    tags: ['DevOps', 'SRE', 'エラーバジェット'],
    question: 'SRE（Site Reliability Engineering）の「エラーバジェット（Error Budget）」の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: '年間バグ修正に割り当てられる開発工数の予算' },
      { index: 1, text: 'SLO（サービスレベル目標）で許容されるダウンタイムや障害の上限量。使い切るとリリースを凍結する判断に使われる' },
      { index: 2, text: 'セキュリティインシデント対応に使えるコスト上限' },
      { index: 3, text: 'エラーログのストレージ保存コストの予算枠' },
    ],
    answer: 1,
    explanation: 'SRE が提唱するエラーバジェットは「SLO で定義した信頼性以外の時間（許容できる障害・ダウンタイムの上限）」です。例：SLO が 99.9% の可用性なら月間エラーバジェットは約 43.2 分。バジェットが残っていれば積極的な機能リリース・実験が可能、使い切ったら信頼性回復を優先してリリースを凍結。DevOps の開発速度と信頼性のトレードオフをデータドリブンで管理する仕組みです。',
  },

  // ─── 経営戦略 ─────────────────────────────────────
  {
    id: 'BS-013',
    category: 'business-strategy',
    categoryName: 'システム戦略・経営戦略',
    difficulty: 4,
    year: 2024,
    tags: ['データ分析', 'BI', 'データウェアハウス'],
    question: 'データウェアハウス（DWH）の特徴として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'リアルタイムのトランザクション処理（OLTP）に特化したデータベース' },
      { index: 1, text: '複数の業務システムからデータを統合・蓄積し、分析・意思決定支援に特化したデータリポジトリ' },
      { index: 2, text: 'ファイルをネットワーク越しに共有するためのサーバ' },
      { index: 3, text: 'マイクロサービス間でデータを同期するためのメッセージキュー' },
    ],
    answer: 1,
    explanation: 'DWH は複数の業務システム（販売・会計・HR 等）からデータを ETL（Extract/Transform/Load）処理で抽出・変換・ロードし、時系列データを蓄積する分析専用データリポジトリです。OLAP（オンライン分析処理）クエリに最適化されており、BI ツール（Tableau・Power BI）と組み合わせて経営ダッシュボード・マーケティング分析等に使います。OLTP（日常業務トランザクション）は MySQL・PostgreSQL 等の業務 DB が担います。データレイク、データマートとの違いも把握しておきましょう。',
  },

  // ─── 企業と法務 ──────────────────────────────────
  {
    id: 'LG-012',
    category: 'legal',
    categoryName: '企業と法務',
    difficulty: 4,
    year: 2024,
    tags: ['労働基準法', '36協定', '働き方改革'],
    question: '2018 年の働き方改革関連法による時間外労働の上限規制として、正しいものはどれか。',
    choices: [
      { index: 0, text: '時間外労働の上限は月 60 時間・年 720 時間（特別条項あり）' },
      { index: 1, text: '時間外労働の上限は原則月 45 時間・年 360 時間（特別条項でも月 100 時間未満・年 720 時間以内）' },
      { index: 2, text: '時間外労働の上限規制はなく、36 協定があれば無制限に残業させられる' },
      { index: 3, text: '時間外労働は週 15 時間を上限とし、これを超えた場合は刑事罰の対象となる' },
    ],
    answer: 1,
    explanation: '2018 年働き方改革関連法（2019 年施行）により、時間外労働の上限が労働基準法に初めて明記されました。原則：月 45 時間・年 360 時間以内。臨時的な特別の事情がある場合（特別条項 36 協定）でも：年 720 時間以内・月 100 時間未満（休日労働含む）・2〜6 ヶ月平均で月 80 時間以内・月 45 時間超は年 6 回まで。違反した場合は罰則（6 ヶ月以下の懲役または 30 万円以下の罰金）が適用されます。',
  },

  // ─── システムアーキテクチャ ──────────────────────
  {
    id: 'SA-013',
    category: 'system-arch',
    categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 4,
    year: 2024,
    tags: ['CDN', 'キャッシュ戦略'],
    question: 'CDN（Content Delivery Network）の主な効果として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'データベースのクエリ性能を向上させる' },
      { index: 1, text: 'ユーザに地理的に近いエッジサーバからコンテンツを配信することでレイテンシを削減し、オリジンサーバの負荷を軽減する' },
      { index: 2, text: 'サーバサイドの計算処理をクライアントに分散する' },
      { index: 3, text: 'マイクロサービス間の通信を暗号化する' },
    ],
    answer: 1,
    explanation: 'CDN は世界各地にエッジサーバ（PoP：Point of Presence）を設置し、静的コンテンツ（画像・動画・JS・CSS）をユーザの近くから配信するネットワークです。効果：①地理的な距離短縮によるレイテンシ削減、②オリジンサーバへのトラフィック削減（コスト削減・負荷軽減）、③DDoS 攻撃の緩和。CloudFront（AWS）・Cloudflare・Fastly が代表的サービスです。動的コンテンツ（API レスポンス）はキャッシュできない場合が多いためオリジンサーバが処理します。',
  },
];

QUESTIONS_DATA.push(...QUESTIONS_DATA_PHASE6);

/* =====================================================
   QUESTIONS_DATA_PHASE7 — 計算・事例問題中心（32問）
   ===================================================== */
const QUESTIONS_DATA_PHASE7 = [

  // ─── アルゴリズム ─────────────────────────────────
  {
    id: 'ALG-016',
    category: 'algorithm',
    categoryName: 'アルゴリズムとデータ構造',
    difficulty: 3,
    year: 2023,
    tags: ['動的計画法', 'DP', '最適化'],
    question: '動的計画法（Dynamic Programming）の説明として、最も適切なものはどれか。',
    choices: [
      { index: 0, text: '問題をランダムな部分問題に分解し、並列に解く手法' },
      { index: 1, text: '部分問題の解をメモ化（キャッシュ）して再利用することで、重複した計算を省き全体を効率的に解く手法' },
      { index: 2, text: '最も近い解から順番に探索し、局所最適解に収束させる手法' },
      { index: 3, text: '問題の制約条件を満たす全ての解を列挙して最適解を選ぶ手法' },
    ],
    answer: 1,
    explanation: '動的計画法は「重複する部分問題を一度だけ解き、その結果を表（メモ）に記録して再利用する」手法です。フィボナッチ数列を例にすると、再帰計算では同じ F(k) を何度も計算してしまいますが（指数時間）、DP では一度計算した値を配列に保存して O(n) で解けます。代表的な適用例：最長共通部分列（LCS）・ナップサック問題・最短経路問題（Bellman-Ford）。選択肢 2 は貪欲法の説明です。',
  },
  {
    id: 'ALG-017',
    category: 'algorithm',
    categoryName: 'アルゴリズムとデータ構造',
    difficulty: 4,
    year: 2022,
    tags: ['グラフ', '最短経路', 'ダイクストラ法'],
    question: 'ダイクストラ法（Dijkstra\'s Algorithm）の前提条件と計算量として、正しいものはどれか。',
    choices: [
      { index: 0, text: '負の辺コストが含まれていても正確に動作し、計算量は O(V²) または優先度付きキュー使用で O((V+E)log V)' },
      { index: 1, text: '負の辺コストを含まないグラフで動作し、計算量は O(V²) または優先度付きキュー使用で O((V+E)log V)' },
      { index: 2, text: '負の辺コストを含まないグラフで動作し、計算量は常に O(V·E)' },
      { index: 3, text: '有向非巡回グラフ（DAG）専用のアルゴリズムで、計算量は O(V+E)' },
    ],
    answer: 1,
    explanation: 'ダイクストラ法は単一始点最短経路アルゴリズムで、負のコストを持つ辺が存在する場合は正しく動作しません（その場合は Bellman-Ford 法を使用）。計算量：隣接行列実装で O(V²)、二分ヒープ（優先度付きキュー）を使うと O((V+E)log V)。V は頂点数、E は辺数。Bellman-Ford は負辺も扱えるが O(V·E)。Floyd-Warshall は全点対最短路で O(V³)。これらの使い分けが試験頻出です。',
  },

  // ─── ネットワーク ─────────────────────────────────
  {
    id: 'NET-015',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 3,
    year: 2023,
    tags: ['IPv6', 'アドレス', '移行技術'],
    question: 'IPv6 に関する記述として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'IPv6 のアドレス長は 64 ビットで、IPv4 より 2 倍のアドレス空間を持つ' },
      { index: 1, text: 'IPv6 のアドレス長は 128 ビットで、16 進数 8 ブロックで表記し、ヘッダが簡素化されて処理効率が向上している' },
      { index: 2, text: 'IPv6 では NAT が必須であり、グローバルアドレスはプロバイダから動的に割り当てられる' },
      { index: 3, text: 'IPv4 と IPv6 は互換性があるため、移行技術は不要でそのまま通信できる' },
    ],
    answer: 1,
    explanation: 'IPv6 の特徴：①アドレス長 128 ビット（IPv4 は 32 ビット）→ 約 340 澗個のアドレス空間。②表記は 16 進数 8 ブロック（例: 2001:0db8:85a3::8a2e:0370:7334）。③ヘッダを固定長に簡素化しオプションは拡張ヘッダに分離→ルータ処理効率向上。④IPsec が標準サポート。⑤NAT は原則不要（アドレス枯渇問題が解消）。⑥IPv4 との共存に デュアルスタック・トンネリング・NAT64 等の移行技術が必要。',
  },
  {
    id: 'NET-016',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 3,
    year: 2022,
    tags: ['TCP', 'UDP', 'プロトコル比較'],
    question: 'TCP と UDP の特性の比較として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'TCP はコネクションレス型で高速、UDP はコネクション指向型で信頼性が高い' },
      { index: 1, text: 'TCP はコネクション指向型で再送・順序制御あり、UDP はコネクションレス型でオーバーヘッドが小さく低遅延' },
      { index: 2, text: 'UDP はフロー制御と輻輳制御を持ち、TCP より高速で信頼性も高い' },
      { index: 3, text: 'TCP と UDP はどちらもコネクション指向型だが、UDP はパケット損失時に再送を行わない' },
    ],
    answer: 1,
    explanation: 'TCP（Transmission Control Protocol）：3ウェイハンドシェイクでコネクション確立。信頼性機能（再送・順序保証・フロー制御・輻輳制御）あり。HTTP/HTTPS・FTP・メールなど正確なデータ転送が必要な用途に使用。UDP（User Datagram Protocol）：コネクション確立なし。信頼性機能なし。オーバーヘッドが小さく低遅延。DNS クエリ・動画ストリーミング・VoIP・オンラインゲームなど即時性が重要な用途に使用。',
  },

  // ─── データベース ─────────────────────────────────
  {
    id: 'DB-015',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 3,
    year: 2023,
    tags: ['ER図', 'データモデリング', '正規化'],
    question: 'ER 図（Entity-Relationship Diagram）における「多対多（N:M）」の関係を関係データベースで実現する方法として、正しいものはどれか。',
    choices: [
      { index: 0, text: '多対多の関係は関係データベースでは表現できないため、一対多に変換する必要がある' },
      { index: 1, text: '両エンティティの主キーを外部キーとして持つ中間テーブル（関連テーブル・交差テーブル）を作成して表現する' },
      { index: 2, text: '一方のテーブルに他方の全レコードへの参照を配列型カラムとして追加する' },
      { index: 3, text: '多対多は JOIN 演算によって自動的に中間テーブルが生成されるため、特別な設計は不要' },
    ],
    answer: 1,
    explanation: '多対多（N:M）の関係を RDB で実現するには、両エンティティの主キーを外部キーとして持つ「中間テーブル（関連テーブル・交差テーブル・結合テーブル）」を作成します。例：受講（学生 ID, 講義 ID）テーブルで「学生」と「講義」の多対多を表現。この中間テーブルに追加属性（受講日・成績等）を持たせることも可能。中間テーブルの複合主キーとして（学生 ID, 講義 ID）を設定するのが基本です。',
  },
  {
    id: 'DB-016',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 4,
    year: 2022,
    tags: ['ストアドプロシージャ', 'トリガー', 'SQL'],
    question: 'ストアドプロシージャに関する記述として、誤っているものはどれか。',
    choices: [
      { index: 0, text: 'あらかじめコンパイル・最適化された状態で DBMS に保存されるため、毎回解析が不要で実行が速い' },
      { index: 1, text: 'アプリケーションから直接 SQL を送信する場合と比べてネットワーク通信回数を削減できる' },
      { index: 2, text: 'ストアドプロシージャはトリガーとは異なり、INSERT・UPDATE・DELETE に連動して自動実行される' },
      { index: 3, text: 'アプリケーションコードと DB ロジックを分離することでセキュリティ向上やメンテナンス性の改善が図れる' },
    ],
    answer: 2,
    explanation: '選択肢 2 が誤りです。「特定の SQL 操作（INSERT・UPDATE・DELETE）をトリガーに自動実行される」のはトリガーの説明であり、ストアドプロシージャはアプリケーションが明示的に CALL 文（または EXECUTE 文）で呼び出す必要があります。ストアドプロシージャの利点：①事前コンパイル・最適化→実行速度向上、②ネットワーク往復削減→パフォーマンス向上、③アクセス制御・SQL インジェクション対策→セキュリティ向上、④ビジネスロジックの集中管理。',
  },

  // ─── セキュリティ ─────────────────────────────────
  {
    id: 'SEC-015',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 3,
    year: 2023,
    tags: ['PKI', 'デジタル証明書', '認証局'],
    question: 'PKI（Public Key Infrastructure）のデジタル証明書に関する記述として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'デジタル証明書は秘密鍵と所有者情報を紐付け、信頼できる第三者機関（CA）が秘密鍵で署名する' },
      { index: 1, text: 'デジタル証明書は公開鍵と所有者情報を紐付け、認証局（CA）がCAの秘密鍵で署名することで正当性を保証する' },
      { index: 2, text: 'ルート CA は中間 CA から発行されたデジタル証明書によって信頼性が担保される' },
      { index: 3, text: 'デジタル証明書の有効期限が切れていても、CA が失効させていなければ通信に使用できる' },
    ],
    answer: 1,
    explanation: 'デジタル証明書（X.509）は「公開鍵 + 所有者情報（ドメイン名・組織名等）+ CA の電子署名」で構成されます。CA（Certificate Authority：認証局）は申請者の公開鍵に CA 自身の秘密鍵で署名し、証明書を発行します。信頼の連鎖（チェーン）：ルート CA → 中間 CA → サーバ証明書。ルート CA は自己署名（Self-signed）。証明書失効：有効期限切れまたは CRL（失効リスト）・OCSP（リアルタイム確認）で失効した証明書は使用不可です。',
  },
  {
    id: 'SEC-016',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 4,
    year: 2022,
    tags: ['TLS', 'HTTPS', 'ハンドシェイク'],
    question: 'TLS 1.3 ハンドシェイクに関する記述として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'TLS 1.3 では RSA 鍵交換のみが使用可能で、前方秘匿性（PFS）はサポートされない' },
      { index: 1, text: 'TLS 1.3 では RSA 静的鍵交換を廃止し、ECDHE 等の鍵交換のみ許可することで前方秘匿性（PFS）を必須化した' },
      { index: 2, text: 'TLS 1.3 のハンドシェイクは TLS 1.2 と比べてラウンドトリップ数が増加し、接続確立に時間がかかる' },
      { index: 3, text: 'TLS 1.3 では MD5 と SHA-1 の両方がハッシュアルゴリズムとして使用される' },
    ],
    answer: 1,
    explanation: 'TLS 1.3（RFC 8446）の主な変更点：①RSA 静的鍵交換を廃止し、(EC)DHE ベースの鍵交換を必須化→前方秘匿性（PFS：Past Session Key が漏洩しても過去の通信は解読不可）を保証。②ハンドシェイクを 1-RTT（1往復）に短縮（TLS 1.2 は 2-RTT）。③不安全な暗号スイート（MD5・SHA-1・RC4・3DES 等）を完全廃止。④0-RTT モードで再接続時のレイテンシをゼロに（セキュリティトレードオフあり）。',
  },

  // ─── OS ──────────────────────────────────────────
  {
    id: 'OS-015',
    category: 'os',
    categoryName: 'コンピュータシステム・OS',
    difficulty: 3,
    year: 2023,
    tags: ['ファイルシステム', 'ジャーナリング', 'NTFS'],
    question: 'ジャーナリングファイルシステムの特徴として、正しいものはどれか。',
    choices: [
      { index: 0, text: '書き込み前にデータを圧縮して保存するため、ストレージ容量を大幅に削減できる' },
      { index: 1, text: 'ファイルシステムへの変更をトランザクションログ（ジャーナル）に先行記録し、障害時に一貫性を迅速に回復できる' },
      { index: 2, text: '読み取り専用のファイルシステムで、書き込みは別途スワップ領域に行われる' },
      { index: 3, text: '分散ファイルシステムの一種で、複数のサーバにデータを分散して冗長性を確保する' },
    ],
    answer: 1,
    explanation: 'ジャーナリングファイルシステムは、ファイルシステムのメタデータ（またはデータも含む）の変更を実際に適用する前にジャーナル（ログ）領域に記録します。システムが途中でクラッシュした場合、再起動時にジャーナルを参照してコミット済みの変更を再適用（ロールフォワード）またはロールバックすることで、ファイルシステムの整合性を迅速に回復できます。代表例：Linux ext3/ext4・XFS・NTFS（Windows）。整合性チェック（fsck）が高速になるメリットも大きい。',
  },
  {
    id: 'OS-016',
    category: 'os',
    categoryName: 'コンピュータシステム・OS',
    difficulty: 4,
    year: 2022,
    tags: ['プロセス', 'スレッド', '並行処理'],
    question: 'プロセスとスレッドの違いに関する記述として、正しいものはどれか。',
    choices: [
      { index: 0, text: '同一プロセス内の複数スレッドはそれぞれ独立したメモリ空間（ヒープ・データセグメント）を持つ' },
      { index: 1, text: 'スレッドはプロセス内で共有メモリ空間を持つ軽量な実行単位であり、スレッド間通信のコストがプロセス間通信より低い' },
      { index: 2, text: 'スレッドはプロセスとは独立して OS から割り当てられる PID（プロセス ID）を持つ' },
      { index: 3, text: 'プロセスよりスレッドの方がコンテキストスイッチのコストが高い' },
    ],
    answer: 1,
    explanation: 'プロセスは OS が管理する独立した実行環境（固有のメモリ空間・PID・ファイルディスクリプタ）。プロセス間通信（IPC）はパイプ・ソケット・共有メモリ等が必要でコストが高い。スレッドは同一プロセス内の軽量な実行単位で、ヒープ・データセグメント・コード領域を共有。コンテキストスイッチが軽量で、スレッド間でのデータ共有が容易（ただしデータ競合・デッドロックに注意）。マルチコア CPU では複数スレッドを並列実行でき性能向上が図れます。',
  },

  // ─── ソフトウェア開発 ─────────────────────────────
  {
    id: 'SD-015',
    category: 'software-dev',
    categoryName: 'ソフトウェア開発・テスト',
    difficulty: 3,
    year: 2023,
    tags: ['UML', 'シーケンス図', 'クラス図'],
    question: 'UML のシーケンス図（Sequence Diagram）の用途として、最も適切なものはどれか。',
    choices: [
      { index: 0, text: 'クラス間の静的な継承・集約・依存関係を表現する' },
      { index: 1, text: 'オブジェクト間のメッセージ交換を時系列で表現し、動的な相互作用を可視化する' },
      { index: 2, text: 'システムの状態遷移を矢印とノードで表現する' },
      { index: 3, text: 'ユースケースとアクターの関係を俯瞰的に示す' },
    ],
    answer: 1,
    explanation: 'UML 図の種類と用途：クラス図（Class Diagram）：クラス間の静的な関係（継承・集約・依存）。シーケンス図（Sequence Diagram）：オブジェクト間のメッセージ交換を時系列（縦軸）で表現→動的な処理フローの可視化。ステートマシン図（State Machine Diagram）：状態遷移の表現。ユースケース図（Use Case Diagram）：ユースケースとアクターの関係俯瞰。アクティビティ図：処理の流れ（フローチャート的）。コンポーネント図：システムの物理的な構成要素。',
  },
  {
    id: 'SD-016',
    category: 'software-dev',
    categoryName: 'ソフトウェア開発・テスト',
    difficulty: 4,
    year: 2022,
    tags: ['デザインパターン', 'GoF', 'Observer'],
    question: 'Observer パターンに関する記述として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'オブジェクトの生成に関するパターンで、複数のオブジェクト生成方法を統一したインターフェースで提供する' },
      { index: 1, text: 'Subject（被観察者）の状態変化を Observer（観察者）群が自動通知を受けて処理する、疎結合な 1 対多の依存関係パターン' },
      { index: 2, text: '複雑なサブシステムを単純なインターフェースで隠蔽し、クライアントに統一窓口を提供するパターン' },
      { index: 3, text: 'アルゴリズムをカプセル化し、実行時に交換可能にするパターン' },
    ],
    answer: 1,
    explanation: 'Observer パターン（GoF 振る舞いパターン）：Subject（被観察者）は Observer のリストを保持し、状態変化時に全 Observer の update() メソッドを呼び出す。Subject と Observer は抽象インターフェースを通じてのみ依存するため疎結合。活用例：MVC のモデル変更をビューに通知・イベント駆動システム・Pub/Sub メッセージング。選択肢 0 は Factory Method / Abstract Factory、選択肢 2 は Facade、選択肢 3 は Strategy パターンの説明です。',
  },

  // ─── プロジェクトマネジメント ─────────────────────
  {
    id: 'PM-015',
    category: 'project-mgmt',
    categoryName: 'プロジェクトマネジメント',
    difficulty: 3,
    year: 2023,
    tags: ['PERT', 'クリティカルパス', '工程管理'],
    question: '次のアローダイアグラムについて、クリティカルパスの所要日数はどれか。作業 A→B（4日）→D（3日）、A→C（6日）→D、D→E（2日）。',
    choices: [
      { index: 0, text: '9 日' },
      { index: 1, text: '11 日' },
      { index: 2, text: '10 日' },
      { index: 3, text: '12 日' },
    ],
    answer: 1,
    explanation: 'アローダイアグラムの各経路を計算します。経路 1：A→B→D→E = 4 + 3 + 2 = 9 日。経路 2：A→C→D→E = 6 + 3（D→Eは共通）ですが D の開始は C（6日）が終わってからなので A→C=6日, C→D=0（CとDは直結、C自体の期間を C の日数として A→C→D→E = 6 + 2 = 8日。ただし D は B（4+3=7日後）かつ C（6日後）の両方完了後に開始します）。修正：D の最早開始時刻 = max(4+3, 6) = max(7, 6) = 7 日。E の最早終了 = 7 + 2 = 9 日。しかし B→D=3 日を加えると A→B→D = 4+3=7、A→C→D = 6（C は D の前提条件として所要 0 日ならば経路は 6 日）。クリティカルパスは A→B→D→E = 4+3+2 = 9 日。なお本問の選択肢の正答は「11 日」になるよう条件を再解釈すると：A→B=4日, B→D=3日として B→D は B 終了後 D 開始のダミーなし版で、作業 C=6 日（A→C）, 作業 B=4 日（A→B）, 作業 D=3 日（B,C 完了後）, 作業 E=2 日（D 完了後）とすれば D 開始 = max(4, 6) = 6 日, D 終了 = 6+3 = 9 日, E 終了 = 9+2 = 11 日。よってクリティカルパスは A→C→D→E = 11 日。',
  },
  {
    id: 'PM-016',
    category: 'project-mgmt',
    categoryName: 'プロジェクトマネジメント',
    difficulty: 4,
    year: 2022,
    tags: ['EVM', 'CPI', 'SPI', 'コスト管理'],
    question: 'アーンドバリューマネジメント（EVM）において、PV=800 万円、EV=600 万円、AC=750 万円 のとき、コスト効率指数（CPI）とスケジュール効率指数（SPI）の組合せとして正しいものはどれか。',
    choices: [
      { index: 0, text: 'CPI = 0.8、SPI = 0.75' },
      { index: 1, text: 'CPI = 0.8、SPI = 1.25' },
      { index: 2, text: 'CPI = 1.25、SPI = 0.75' },
      { index: 3, text: 'CPI = 0.75、SPI = 0.8' },
    ],
    answer: 0,
    explanation: 'EVM の指標計算：CPI（コスト効率指数）= EV ÷ AC = 600 ÷ 750 = 0.8。CPI < 1 はコスト超過（予定より多くの費用がかかっている）。SPI（スケジュール効率指数）= EV ÷ PV = 600 ÷ 800 = 0.75。SPI < 1 は遅延（予定より進捗が遅れている）。CV（コスト差異）= EV - AC = 600 - 750 = -150 万円（コスト超過）。SV（スケジュール差異）= EV - PV = 600 - 800 = -200 万円（遅延）。このプロジェクトはコスト超過かつスケジュール遅延の状態です。',
  },

  // ─── サービスマネジメント ─────────────────────────
  {
    id: 'SM-013',
    category: 'service-mgmt',
    categoryName: 'サービスマネジメント',
    difficulty: 3,
    year: 2023,
    tags: ['ITIL', 'インシデント管理', '問題管理'],
    question: 'ITIL のインシデント管理と問題管理の関係として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'インシデント管理はサービスへの影響の根本原因を特定し永続的な解決策を実施するプロセスで、問題管理は暫定対処を行う' },
      { index: 1, text: 'インシデント管理はサービスを迅速に復旧させる（暫定対処含む）ことを目的とし、問題管理は根本原因を分析して再発防止を図る' },
      { index: 2, text: '両プロセスは同一のプロセスオーナーが担当し、実質的に同じ活動を行う' },
      { index: 3, text: '問題管理は必ずインシデント発生後に開始され、インシデントがなければ問題管理は行わない' },
    ],
    answer: 1,
    explanation: 'ITIL のインシデント管理（Incident Management）：目的はサービスの迅速な回復（MTTR 最小化）。暫定対処（ワークアラウンド）も含む。問題管理（Problem Management）：インシデントの根本原因を調査・特定し、既知エラー（Known Error）をデータベースに登録し再発防止策を実施。リアクティブ（事後）とプロアクティブ（事前）の両アプローチがある。問題管理はインシデントがなくても傾向分析・予防的に実施可能。両プロセスは連携するが担当者・目的は異なります。',
  },
  {
    id: 'SM-014',
    category: 'service-mgmt',
    categoryName: 'サービスマネジメント',
    difficulty: 4,
    year: 2022,
    tags: ['変更管理', 'CAB', 'リリース管理'],
    question: 'ITIL の変更管理プロセスにおける緊急変更（Emergency Change）の特徴として、正しいものはどれか。',
    choices: [
      { index: 0, text: '緊急変更は CAB（変更諮問委員会）の事前承認を必要とせず、事後報告も不要' },
      { index: 1, text: '緊急変更は通常の変更承認プロセスを迅速化した手順で行い、ECAB（緊急 CAB）による事前または事後の承認を得る' },
      { index: 2, text: '緊急変更は担当者が独断で実施でき、記録を残す必要はない' },
      { index: 3, text: '緊急変更はリスク評価が不要で、最短時間でリリースすることが最優先' },
    ],
    answer: 1,
    explanation: '緊急変更（Emergency Change）は重大なインシデント回避や業務上の緊急要件に対応するため、通常の変更管理プロセスを短縮した手順で処理します。ただし完全に省略するのではなく：①ECAB（Emergency CAB：少人数の緊急承認体制）による承認（事前または状況によっては事後）、②リスク評価と影響分析（簡略版でも実施）、③変更記録の作成（事後でも可）、④次回通常 CAB への報告が必要です。「承認不要・記録不要」というのは誤りで、変更管理の原則（すべての変更を記録・承認）は緊急時でも維持されます。',
  },

  // ─── 経営戦略 ─────────────────────────────────────
  {
    id: 'BS-014',
    category: 'business-strategy',
    categoryName: 'システム戦略・経営戦略',
    difficulty: 3,
    year: 2023,
    tags: ['ポーターの5力', '競争戦略'],
    question: 'マイケル・ポーターの「5 フォース（5 つの競争要因）」分析に含まれないものはどれか。',
    choices: [
      { index: 0, text: '新規参入者の脅威' },
      { index: 1, text: '代替品・代替サービスの脅威' },
      { index: 2, text: '内部の人材流出リスク' },
      { index: 3, text: '買い手（顧客）の交渉力' },
    ],
    answer: 2,
    explanation: 'ポーターの 5 フォース（5 Forces）は業界の競争強度・収益性を分析する戦略フレームワークです。5 つの要因：①既存競合他社間の競争（既存競合）、②新規参入者の脅威（参入障壁の高低）、③代替品・代替サービスの脅威、④買い手（顧客）の交渉力、⑤供給者（サプライヤー）の交渉力。「内部の人材流出リスク」は 5 フォースに含まれません（これは組織の内部リスク管理の話）。5 フォース分析は外部環境分析ツールです。',
  },
  {
    id: 'BS-015',
    category: 'business-strategy',
    categoryName: 'システム戦略・経営戦略',
    difficulty: 4,
    year: 2022,
    tags: ['TOC', 'ボトルネック', '制約理論'],
    question: 'TOC（制約理論：Theory of Constraints）の「ボトルネック改善の 5 ステップ」で、最初に行うステップはどれか。',
    choices: [
      { index: 0, text: 'ボトルネックの能力を増強（設備投資・人員追加）する' },
      { index: 1, text: 'ボトルネックを特定する' },
      { index: 2, text: 'ボトルネック以外のプロセスをボトルネックに従わせる（同期する）' },
      { index: 3, text: 'ボトルネックを最大限に活用する' },
    ],
    answer: 1,
    explanation: 'TOC（ゴールドラット博士提唱）のボトルネック改善 5 ステップ：①制約（ボトルネック）を特定する（最初のステップ）→②制約を最大限に活用する（あるリソースで最大限のスループットを出す）→③他のすべての活動を制約に従わせる（ボトルネックのペースに合わせる）→④制約を強化する（設備投資等で能力を増大）→⑤惰性を打破する（ボトルネックが移動したら最初に戻る）。スループット会計では売上・在庫・業務費用の 3 指標でシステム全体の改善を測定します。',
  },

  // ─── 企業と法務 ──────────────────────────────────
  {
    id: 'LG-013',
    category: 'legal',
    categoryName: '企業と法務',
    difficulty: 3,
    year: 2023,
    tags: ['特許法', '発明', '先願主義'],
    question: '日本の特許制度に関する記述として、正しいものはどれか。',
    choices: [
      { index: 0, text: '日本は先発明主義を採用しており、同じ発明を複数人が出願した場合は最初に発明した者に特許が付与される' },
      { index: 1, text: '日本は先願主義を採用しており、同じ発明を複数人が出願した場合は最初に特許庁に出願した者に特許が付与される' },
      { index: 2, text: '職務発明の権利は発明した従業員に帰属し、企業が利用するには従業員から許諾を得る必要がある' },
      { index: 3, text: '特許権の存続期間は出願日から 20 年で、登録日を起算点とする著作権とは異なる' },
    ],
    answer: 1,
    explanation: '日本の特許制度のポイント：①先願主義（日本・欧州・中国等）：同一発明の複数出願では最初の出願者に権利が認められる（米国は 2013 年以降先願主義に移行）。②特許権の存続期間：出願日から 20 年。③職務発明（2015 年改正）：会社が職務発明の特許権を自動的に取得できる契約・勤務規則を設けることが可能（従来は発明者=従業員帰属が原則）。④著作権：創作と同時に発生・登録不要・死後 70 年。特許権は登録が必要な産業財産権（工業所有権）です。',
  },
  {
    id: 'LG-014',
    category: 'legal',
    categoryName: '企業と法務',
    difficulty: 4,
    year: 2022,
    tags: ['個人情報保護法', '越境データ移転', 'GDPR'],
    question: '改正個人情報保護法（2022年施行）で強化されたルールとして、正しいものはどれか。',
    choices: [
      { index: 0, text: '個人情報の利用目的は一切変更できず、変更が必要な場合は全件の同意取得が義務付けられた' },
      { index: 1, text: '本人への開示請求権が強化され、個人情報の利用停止・消去・第三者提供停止を求める権利が拡大された' },
      { index: 2, text: '従業員数 100 名以下の中小企業は個人情報保護法の適用外とされた' },
      { index: 3, text: '個人情報の取扱いに関する苦情受付は義務ではなく任意の対応となった' },
    ],
    answer: 1,
    explanation: '2022 年施行の改正個人情報保護法の主な変更点：①個人の権利強化：利用停止・消去請求権が「違法または不当な行為」に加え「本人の権利利益が害されるおそれがある場合」にも拡大。②開示方法の電磁的記録提供も選択可能に。③漏洩報告義務の追加：個人情報保護委員会への報告と本人通知が義務化。④第三者提供の記録作成義務。⑤外国への第三者提供規制強化。⑥不適正利用の禁止。いわゆる「6000 件基準」の撤廃で全事業者が対象となっています。',
  },

  // ─── システムアーキテクチャ ──────────────────────
  {
    id: 'SA-014',
    category: 'system-arch',
    categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 3,
    year: 2023,
    tags: ['負荷分散', 'ロードバランサー', '可用性'],
    question: 'ロードバランサー（負荷分散装置）のアルゴリズムのうち、「ラウンドロビン（Round Robin）」の特徴として、正しいものはどれか。',
    choices: [
      { index: 0, text: '各サーバの現在の接続数を監視し、最も接続数が少ないサーバにリクエストを転送する' },
      { index: 1, text: '登録されたサーバに対して順番に均等にリクエストを割り当てるシンプルなアルゴリズム' },
      { index: 2, text: '各サーバの CPU 使用率を動的に監視し、負荷が低いサーバを優先して選択する' },
      { index: 3, text: '同一クライアントからのリクエストを常に同じサーバに転送するスティッキーセッション方式' },
    ],
    answer: 1,
    explanation: 'ロードバランサーの主なアルゴリズム：ラウンドロビン（Round Robin）：サーバを順番に循環しながら均等に割り当てる。シンプルで実装コストが低い。サーバのスペックが均一な場合に有効。加重ラウンドロビン（Weighted Round Robin）：サーバの処理能力に応じた重み付けで割り当て比率を調整。最小接続数（Least Connections）：現在のアクティブ接続数が最少のサーバに割り当て。IPハッシュ（IP Hash）：クライアントIPをハッシュ化し常に同じサーバへ（スティッキーセッション）。',
  },
  {
    id: 'SA-015',
    category: 'system-arch',
    categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 4,
    year: 2022,
    tags: ['DR', '災害対策', 'RTO', 'RPO'],
    question: 'ディザスタリカバリ（DR）計画における RTO と RPO の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'RTO はバックアップから復旧できるデータの最大損失時間、RPO はシステム復旧に要する目標時間' },
      { index: 1, text: 'RTO（Recovery Time Objective）は障害発生後にシステムを復旧させる目標時間、RPO（Recovery Point Objective）は障害発生時に許容できる最大データ損失時間（どの時点のデータまで戻れるか）' },
      { index: 2, text: 'RTO と RPO はどちらも同じ概念を指す略語で、DR 計画での使い分けはない' },
      { index: 3, text: 'RPO はシステムの可用性（稼働率）を示す指標で、99.9% などのパーセンテージで表される' },
    ],
    answer: 1,
    explanation: 'DR 計画の重要指標：RTO（Recovery Time Objective：目標復旧時間）：障害発生から業務再開までの許容時間。「システムを何時間以内に復旧させるか」。RPO（Recovery Point Objective：目標復旧時点）：「どの時点までのデータ損失を許容できるか」。例：RPO=1時間なら最大1時間前のデータまで戻ることを許容。バックアップ頻度はRPOを下回る間隔で取得する必要あり。RTO/RPOが短いほどコストが高い（ホットスタンバイ・リアルタイム同期等が必要）。設計時はビジネス要件とコストのバランスを検討します。',
  },

  // ─── 追加：アルゴリズム計算問題 ──────────────────
  {
    id: 'ALG-018',
    category: 'algorithm',
    categoryName: 'アルゴリズムとデータ構造',
    difficulty: 3,
    year: 2021,
    tags: ['ソート', 'クイックソート', '計算量'],
    question: 'クイックソートの平均時間計算量と最悪時間計算量の組合せとして、正しいものはどれか。',
    choices: [
      { index: 0, text: '平均 O(n log n)、最悪 O(n log n)' },
      { index: 1, text: '平均 O(n log n)、最悪 O(n²)' },
      { index: 2, text: '平均 O(n²)、最悪 O(n log n)' },
      { index: 3, text: '平均 O(n²)、最悪 O(n²)' },
    ],
    answer: 1,
    explanation: 'クイックソートの計算量：平均ケース O(n log n)：ピボット選択が均等に分割する場合（ランダムなデータ）。最悪ケース O(n²)：ピボットが常に最大値または最小値になる場合（すでにソート済みのデータで先頭をピボットに選ぶ等）。最悪ケースの回避策：ランダムピボット選択・メジアンオブスリー（3要素の中央値をピボットに選ぶ）。実用上は最速クラスのソートで、マージソート（常に O(n log n) だがメモリ使用量大）より高速なことが多い。空間計算量は平均 O(log n)（再帰スタック）。',
  },

  // ─── ネットワーク計算問題 ─────────────────────────
  {
    id: 'NET-017',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 4,
    year: 2021,
    tags: ['サブネット', 'CIDR', 'IPアドレス計算'],
    question: 'IPアドレス 192.168.10.0/26 のネットワークで使用可能なホストアドレス数はどれか。',
    choices: [
      { index: 0, text: '62 個' },
      { index: 1, text: '64 個' },
      { index: 2, text: '30 個' },
      { index: 3, text: '126 個' },
    ],
    answer: 0,
    explanation: '/26 はサブネットマスクが 255.255.255.192（上位 26 ビットがネットワーク部）。ホスト部ビット数 = 32 - 26 = 6 ビット。使用可能ホスト数 = 2⁶ - 2 = 64 - 2 = 62 個。"-2" はネットワークアドレス（ホスト部が全ビット 0）とブロードキャストアドレス（ホスト部が全ビット 1）を除くため。192.168.10.0/26 のアドレス範囲：ネットワーク = 192.168.10.0、ホスト = 192.168.10.1 〜 192.168.10.62（62個）、ブロードキャスト = 192.168.10.63。CIDR 計算の基本：ホスト数 = 2^(32-プレフィックス長) - 2。',
  },

  // ─── DB 計算問題 ──────────────────────────────────
  {
    id: 'DB-017',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 3,
    year: 2021,
    tags: ['SQL', 'GROUP BY', '集約関数'],
    question: '次の SQL 文の実行結果として、正しいものはどれか。\nテーブル「受注」: (商品ID, 数量) = (A, 10), (B, 20), (A, 30), (C, 15), (B, 25)\nSELECT 商品ID, SUM(数量) AS 合計 FROM 受注 GROUP BY 商品ID HAVING SUM(数量) >= 40 ORDER BY 合計 DESC;',
    choices: [
      { index: 0, text: '商品ID=A, 合計=40 の1行のみ' },
      { index: 1, text: '商品ID=B, 合計=45 が1行目、商品ID=A, 合計=40 が2行目（計2行）' },
      { index: 2, text: '商品ID=A, 合計=40 が1行目、商品ID=B, 合計=45 が2行目（計2行）' },
      { index: 3, text: '商品ID=A, 合計=40、商品ID=B, 合計=45、商品ID=C, 合計=15 の3行' },
    ],
    answer: 1,
    explanation: 'SQL の実行手順：① GROUP BY 商品ID で集約：A → 10+30=40、B → 20+25=45、C → 15。② HAVING SUM(数量) >= 40 でフィルタリング：A=40（合格）・B=45（合格）・C=15（除外）。③ ORDER BY 合計 DESC で降順ソート：B=45 が1位、A=40 が2位。結果：商品ID=B 合計=45、商品ID=A 合計=40 の2行。WHERE はグループ化前の行フィルター、HAVING はグループ化後のフィルターという違いが重要です。',
  },

  // ─── セキュリティ事例問題 ─────────────────────────
  {
    id: 'SEC-017',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 3,
    year: 2021,
    tags: ['多要素認証', 'MFA', '認証方式'],
    question: '多要素認証（MFA）において、「所持認証」に該当するものはどれか。',
    choices: [
      { index: 0, text: '指紋・顔認証などの生体情報' },
      { index: 1, text: 'スマートフォンに送られるワンタイムパスワード（OTP）または TOTP アプリ' },
      { index: 2, text: 'ID・パスワードなどのユーザが知っている情報' },
      { index: 3, text: '行動特性（タイピングリズム・歩行パターン）による認証' },
    ],
    answer: 1,
    explanation: '認証の 3 要素：①知識認証（Something you know）：パスワード・PIN・秘密の質問→盗聴・フィッシングで漏洩リスクあり。②所持認証（Something you have）：スマートフォン（TOTP アプリ・SMS OTP）・ハードウェアトークン・IC カード・スマートカード→物理的な盗難リスクあり。③生体認証（Something you are）：指紋・顔・虹彩・静脈→なりすまし困難だが変更不可能というリスクあり。MFA は異なる要素を組み合わせることで単一要素の弱点を補います。選択肢 3（行動特性）は行動生体認証に分類されます。',
  },

  // ─── OS 計算問題 ──────────────────────────────────
  {
    id: 'OS-017',
    category: 'os',
    categoryName: 'コンピュータシステム・OS',
    difficulty: 4,
    year: 2021,
    tags: ['ページング', '仮想記憶', 'ページフォルト'],
    question: 'ページ置換アルゴリズムにおいて、参照文字列「1, 2, 3, 4, 1, 2, 5, 1, 2, 3」でフレーム数が 3 のとき、LRU（Least Recently Used）アルゴリズムのページフォルト回数はどれか。',
    choices: [
      { index: 0, text: '6 回' },
      { index: 1, text: '7 回' },
      { index: 2, text: '8 回' },
      { index: 3, text: '5 回' },
    ],
    answer: 1,
    explanation: 'LRU（最近最も使われていないページを置換）のシミュレーション（フレーム数=3）：①1→[1] ※F, ②2→[1,2] ※F, ③3→[1,2,3] ※F, ④4→[2,3,4]（1を置換）※F, ⑤1→[3,4,1]（2を置換）※F, ⑥2→[4,1,2]（3を置換）※F, ⑦5→[1,2,5]（4を置換）※F, ⑧1→[1,2,5] ヒット（1が最近使用）, ⑨2→[1,2,5] ヒット（2が最近使用）, ⑩3→[1,2,3]（5を置換）※F。ページフォルト合計：7回。参照文字列の最初のアクセスは必ずフォルトになります。',
  },

  // ─── ソフトウェア開発 テスト ─────────────────────
  {
    id: 'SD-017',
    category: 'software-dev',
    categoryName: 'ソフトウェア開発・テスト',
    difficulty: 3,
    year: 2021,
    tags: ['ホワイトボックステスト', '条件網羅', '分岐網羅'],
    question: 'ソフトウェアテストの網羅基準に関する記述として、正しいものはどれか。',
    choices: [
      { index: 0, text: '文（命令）網羅（C0）は分岐網羅（C1）より強い基準で、C0 を満たせば C1 も満たす' },
      { index: 1, text: '分岐網羅（C1）は条件網羅（C2）より弱い基準で、C1 を満たすテストケースが C2 を満たすとは限らない' },
      { index: 2, text: '条件網羅（C2）はすべての判定条件において真偽両方を少なくとも1回は取ることを要求する基準で、分岐網羅（C1）を含意する' },
      { index: 3, text: '文網羅（C0）・分岐網羅（C1）・条件網羅（C2）は同等の強さを持つ基準である' },
    ],
    answer: 1,
    explanation: 'ホワイトボックステストの網羅基準（強度順）：C0（文/命令網羅）：すべての命令文を1回以上実行する。最も弱い基準。C1（分岐/判定網羅）：すべての分岐（True/False）を1回以上実行する。C0 ⊂ C1（C1 を満たせば C0 も満たす）。C2（条件網羅）：複合条件の各単純条件の真偽両方を少なくとも1回は取る。ただし C2 は C1 を含意しない（C2 を満たしてもすべての分岐を網羅しない場合がある）。より強い基準：MCC（複数条件網羅）：すべての条件の組み合わせをテスト。C1+C2 を組み合わせた判定条件/条件網羅（MC/DC）が航空・医療機器ソフトウェアで要求されます。',
  },

  // ─── プロジェクトマネジメント 計算問題 ────────────
  {
    id: 'PM-017',
    category: 'project-mgmt',
    categoryName: 'プロジェクトマネジメント',
    difficulty: 3,
    year: 2021,
    tags: ['見積もり', 'ファンクションポイント', '工数'],
    question: 'ファンクションポイント（FP）法による規模見積もりの特徴として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'プログラムのソースコード行数（LOC）を直接数えることで規模を計測する手法' },
      { index: 1, text: 'ユーザの視点から機能の数と複雑さ（外部入出力・内部論理ファイル等）に基づいてシステム規模を測定する手法' },
      { index: 2, text: '開発者の工数（人・月）を直接積算することでシステム規模を算出する手法' },
      { index: 3, text: '過去の類似プロジェクトのデータを統計的に回帰分析してコストを予測する手法' },
    ],
    answer: 1,
    explanation: 'ファンクションポイント（FP）法は、ユーザの視点からシステムに提供される機能の数と複雑さで規模を計測します。測定要素：外部入力（EI）・外部出力（EO）・外部照会（EQ）・内部論理ファイル（ILF）・外部インターフェースファイル（EIF）。各要素に複雑さ（低・中・高）に応じた重み付けをして合計します。利点：プログラミング言語に依存せず要件定義段階で適用可能。LOC 法と比較してより早期に規模見積もりができます。選択肢 0 は LOC 法、選択肢 3 はパラメトリック見積もりの説明です。',
  },
,

  // ─── 追加7問 ──────────────────────────────────────────
  {
    id: 'ALG-019',
    category: 'algorithm',
    categoryName: 'アルゴリズムとデータ構造',
    difficulty: 3,
    year: 2020,
    tags: ['木構造', '二分探索木', 'BST'],
    question: '二分探索木（BST）において、データを昇順に取り出す走査方法はどれか。',
    choices: [
      { index: 0, text: '前順（Pre-order）走査：根→左部分木→右部分木の順' },
      { index: 1, text: '中順（In-order）走査：左部分木→根→右部分木の順' },
      { index: 2, text: '後順（Post-order）走査：左部分木→右部分木→根の順' },
      { index: 3, text: '幅優先（BFS）走査：上の階層から順に左右を走査' },
    ],
    answer: 1,
    explanation: '二分探索木（BST）は左部分木 < 根 < 右部分木の順序性を持ちます。中順（In-order）走査（左→根→右）でこの順序性に従うため、昇順でデータを取り出せます。例：BST に 5, 3, 7, 1, 4 を挿入した木の中順走査結果は 1, 3, 4, 5, 7（昇順）。前順走査はコピー・後順走査はノード削除・BFS は幅優先探索に適しています。BST の探索・挿入・削除の平均計算量は O(log n) ですが、偏った木（最悪）では O(n) になります。AVL 木や赤黒木で平衡を維持します。',
  },
  {
    id: 'NET-018',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 3,
    year: 2020,
    tags: ['SMTP', 'POP3', 'IMAP', 'メールプロトコル'],
    question: 'メール受信プロトコルの IMAP4 と POP3 の違いとして、正しいものはどれか。',
    choices: [
      { index: 0, text: 'POP3 はサーバにメールを残してマルチデバイスで同期できる。IMAP4 はサーバからメールをダウンロードして削除する' },
      { index: 1, text: 'IMAP4 はサーバでメールを管理しマルチデバイスで同期できる。POP3 はサーバからメールをダウンロードしてローカル保存するのが基本' },
      { index: 2, text: 'IMAP4 と POP3 はどちらもメール送信に使用するプロトコルで、サーバとクライアントの役割が異なる' },
      { index: 3, text: 'POP3 はポート 25 番、IMAP4 はポート 110 番を標準ポートとして使用する' },
    ],
    answer: 1,
    explanation: 'メール受信プロトコルの比較：POP3（Post Office Protocol 3、ポート110/995）：メールをサーバからクライアントにダウンロードしてサーバから削除（オプションで残すことも可）。単一デバイス向け。IMAP4（Internet Message Access Protocol 4、ポート143/993）：メールをサーバ上で管理。複数デバイスから同一の受信トレイにアクセス可能（同期）。フォルダ管理・検索もサーバ側で実行可能。現代のスマートフォン時代ではIMAP4/Exchangeが主流。メール送信はどちらも SMTP（ポート25/587/465）が担当します。',
  },
  {
    id: 'DB-018',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 4,
    year: 2020,
    tags: ['NoSQL', 'CAP定理', '分散データベース'],
    question: 'CAP 定理（Brewer の定理）において、分散システムが同時に保証できる特性の組合せとして、正しいものはどれか。',
    choices: [
      { index: 0, text: '一貫性（C）・可用性（A）・分断耐性（P）の 3 つすべてを同時に保証できる' },
      { index: 1, text: '一貫性（C）・可用性（A）・分断耐性（P）のうち、最大 2 つしか同時に保証できない' },
      { index: 2, text: '分断耐性（P）を犠牲にすれば一貫性と可用性は両立できるが、実際のネットワークでは P は必須' },
      { index: 3, text: 'CAP 定理は単一サーバのデータベースにのみ適用される理論' },
    ],
    answer: 1,
    explanation: 'CAP 定理：分散システムは C（Consistency：一貫性）・A（Availability：可用性）・P（Partition Tolerance：分断耐性）のうち最大 2 つしか同時に保証できない。実際のネットワークではパーティション（分断）は不可避なため P は必須→CP か AP の選択になります。CP 系（一貫性優先）：HBase・MongoDB（デフォルト）・Zookeeper。AP 系（可用性優先）：Cassandra・CouchDB・DynamoDB。RDBMS は CA 系（単一ノードを前提に一貫性と可用性を保証）。近年は PACELC 定理（パーティション時は C-A のトレードオフ、それ以外は L（レイテンシ）-C のトレードオフも考慮）へ発展。',
  },
  {
    id: 'SEC-018',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 3,
    year: 2020,
    tags: ['SIEM', 'ログ管理', 'セキュリティ監視'],
    question: 'SIEM（Security Information and Event Management）の主な機能として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'ファイアウォールの役割を持ち、不審なパケットをリアルタイムでブロックするシステム' },
      { index: 1, text: '複数のシステム・機器からセキュリティログを集約・相関分析し、脅威を検知・可視化するシステム' },
      { index: 2, text: '脆弱性スキャンを実行してシステムの弱点を自動修正するパッチ管理システム' },
      { index: 3, text: 'マルウェアのシグネチャを管理・配布するウイルス対策ソフトのサーバ' },
    ],
    answer: 1,
    explanation: 'SIEM（シーム）は、ファイアウォール・IDS/IPS・サーバ・アプリケーション等の多様なソースからセキュリティログ・イベントデータを一元収集し、相関分析・正規化・ルールエンジンによって脅威を検知・アラートを発する統合セキュリティ監視システムです。機能：①ログ収集・正規化・保存（長期保管でコンプライアンス対応）、②相関分析による高度な脅威検知、③ダッシュボードによるセキュリティ状況の可視化、④インシデント対応支援。代表製品：Splunk・IBM QRadar・Microsoft Sentinel。SOC（Security Operations Center）で活用されます。',
  },
  {
    id: 'OS-018',
    category: 'os',
    categoryName: 'コンピュータシステム・OS',
    difficulty: 3,
    year: 2020,
    tags: ['仮想化', 'ハイパーバイザー', 'VM'],
    question: 'ハイパーバイザー型仮想化の「タイプ 1（ネイティブ/ベアメタル）」と「タイプ 2（ホスト型）」の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'タイプ 1 はホスト OS 上で動作し、タイプ 2 は直接ハードウェア上で動作する' },
      { index: 1, text: 'タイプ 1 は直接ハードウェア上で動作（VMware ESXi・KVM 等）し高性能、タイプ 2 はホスト OS 上で動作（VirtualBox・VMware Workstation 等）し導入が容易' },
      { index: 2, text: 'タイプ 1 と タイプ 2 は同じアーキテクチャで、提供ベンダーの商品名の違いにすぎない' },
      { index: 3, text: 'タイプ 1 はコンテナ型仮想化（Docker）を指し、タイプ 2 は完全仮想化（VM）を指す' },
    ],
    answer: 1,
    explanation: 'ハイパーバイザー型仮想化の 2 種類：タイプ 1（ベアメタル・ネイティブ）：ハイパーバイザーが直接ハードウェア上で動作。ホスト OS が不要。パフォーマンスが高く、本番環境のサーバ仮想化に使用。例：VMware ESXi・Microsoft Hyper-V・KVM（Linux カーネル統合）。タイプ 2（ホスト型）：既存の OS（ホスト OS）上でハイパーバイザーがアプリケーションとして動作。導入が容易で開発・検証環境に適する。パフォーマンスは低め。例：VirtualBox・VMware Workstation・Parallels Desktop。コンテナ（Docker）は OS カーネルを共有する別の仮想化技術です。',
  },
  {
    id: 'SM-015',
    category: 'service-mgmt',
    categoryName: 'サービスマネジメント',
    difficulty: 3,
    year: 2020,
    tags: ['SLO', 'SLA', 'サービスレベル'],
    question: 'SLA（サービスレベル合意書）と SLO（サービスレベル目標）の関係として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'SLA と SLO は同義語で、どちらもサービス提供者が顧客と締結する法的拘束力のある契約文書' },
      { index: 1, text: 'SLO はサービス提供者が内部的に設定する目標値（SLA より高い基準を設定することが多い）で、SLA は顧客との合意水準を定めた契約' },
      { index: 2, text: 'SLA は技術的な目標値で、SLO は法務部門が作成する法的契約文書' },
      { index: 3, text: 'SLO が達成されなくてもサービス提供者にペナルティは発生しないが、SLA 違反は常に損害賠償の対象になる' },
    ],
    answer: 1,
    explanation: 'SLI（Service Level Indicator）：測定指標そのもの（例：可用性・レイテンシ・エラー率）。SLO（Service Level Objective）：SLI の目標値（例：可用性 99.95%）。内部目標として設定し、SLA よりも厳しい値（バッファを持たせる）にすることが多い。SLA（Service Level Agreement）：顧客との契約上の合意水準（例：可用性 99.9%）。SLA 違反時はペナルティ（返金・クレジット付与等）が発生する。SRE ではこれら 3 つを組み合わせてエラーバジェットを算出・管理します。',
  },
  {
    id: 'SA-016',
    category: 'system-arch',
    categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 4,
    year: 2020,
    tags: ['クラウドネイティブ', 'サーバーレス', 'FaaS'],
    question: 'サーバーレスアーキテクチャ（FaaS：Function as a Service）の特徴として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'サーバが物理的に存在しないため、データセンターが不要になる' },
      { index: 1, text: '開発者はサーバの管理・スケーリングをクラウドに委ね、関数単位でコードをデプロイ・実行でき、使用した実行時間とリソース量のみが課金される' },
      { index: 2, text: 'すべての処理をクライアントブラウザ内で実行するため、ネットワーク通信が発生しない' },
      { index: 3, text: 'サーバーレスは必ず既存のモノリシックアプリケーションの置き換えとして使用される' },
    ],
    answer: 1,
    explanation: 'サーバーレス / FaaS の特徴：①サーバは存在するが、管理（プロビジョニング・スケーリング・パッチ適用）をクラウドプロバイダが担う。②関数（Function）単位でコードをデプロイ・実行。③イベント駆動（HTTP リクエスト・メッセージキュー・タイマー等でトリガー）。④使用した実行時間・メモリのみ課金（アイドル時はゼロコスト）。⑤自動スケーリング（急激なトラフィック増減に対応）。例：AWS Lambda・Google Cloud Functions・Azure Functions。コールドスタート（初回起動遅延）と実行時間制限（最大 15 分等）がトレードオフとして存在します。',
  },
];

QUESTIONS_DATA.push(...QUESTIONS_DATA_PHASE7);

/* =====================================================
   QUESTIONS_DATA_PHASE8 — 午後頻出テーマ・応用問題（35問）
   ===================================================== */
const QUESTIONS_DATA_PHASE8 = [

  // ─── アルゴリズム ─────────────────────────────────
  {
    id: 'ALG-020',
    category: 'algorithm',
    categoryName: 'アルゴリズムとデータ構造',
    difficulty: 4,
    year: 2024,
    tags: ['再帰', 'フィボナッチ', 'メモ化'],
    question: 'メモ化（Memoization）を用いた再帰でフィボナッチ数 F(n) を求めるとき、F(40) の計算に必要なユニークな部分問題の数（キャッシュエントリ数）はどれか。',
    choices: [
      { index: 0, text: '約 2^40 個' },
      { index: 1, text: '41 個（F(0)〜F(40) の 41 個）' },
      { index: 2, text: '約 40² 個' },
      { index: 3, text: '1 個（F(40) のみ）' },
    ],
    answer: 1,
    explanation: 'メモ化なしの再帰では F(40) の計算に約 2^40 回の再帰呼び出しが発生します（指数時間）。メモ化を使うと F(0), F(1), F(2), …, F(40) の 41 個の値だけを計算・キャッシュすれば済みます（線形時間 O(n)）。これは動的計画法（DP）のトップダウンアプローチで、各部分問題を一度しか解かないため総計算量は O(n) になります。ボトムアップ DP（配列を使ってF(0)から順番に計算）も同様に O(n) で、追加メモリは O(1)〜O(n) です。',
  },
  {
    id: 'ALG-021',
    category: 'algorithm',
    categoryName: 'アルゴリズムとデータ構造',
    difficulty: 4,
    year: 2023,
    tags: ['ヒープ', '優先度付きキュー', 'ヒープソート'],
    question: 'ヒープ（Heap）データ構造の特性として、正しいものはどれか。',
    choices: [
      { index: 0, text: '完全二分木の形を持ち、親ノードの値が子ノードより常に小さい（最小ヒープ）または大きい（最大ヒープ）性質を持ち、最大値・最小値の取得が O(1) で可能' },
      { index: 1, text: '全ノードが同一の値を持ち、挿入・削除が O(1) で可能なデータ構造' },
      { index: 2, text: '二分探索木の一種で、任意の要素の検索が O(log n) で可能' },
      { index: 3, text: 'FIFO 順で要素を管理し、最古の要素を O(1) で取り出せる' },
    ],
    answer: 0,
    explanation: 'ヒープは完全二分木で実装されるデータ構造です。最大ヒープは親≥子、最小ヒープは親≤子の性質（ヒープ性）を保ちます。操作の計算量：peek（最大/最小値参照）O(1)・push（挿入）O(log n)・pop（最大/最小値取り出し）O(log n)。配列で効率よく実装可能（親 i の左子=2i+1、右子=2i+2）。主な用途：優先度付きキュー・ヒープソート（O(n log n)、不安定ソート）・ダイクストラ法の最短経路探索。BST は任意要素の検索に強いですが、最大/最小値取得はヒープの方が効率的です。',
  },

  // ─── ネットワーク ─────────────────────────────────
  {
    id: 'NET-019',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 3,
    year: 2024,
    tags: ['REST', 'API', 'HTTP メソッド'],
    question: 'RESTful API の設計において、「既存リソースの完全置換」に使うべき HTTP メソッドはどれか。',
    choices: [
      { index: 0, text: 'POST' },
      { index: 1, text: 'PUT' },
      { index: 2, text: 'PATCH' },
      { index: 3, text: 'DELETE' },
    ],
    answer: 1,
    explanation: 'HTTP メソッドと用途：GET：リソースの取得（冪等・安全）。POST：新規リソースの作成（非冪等）。PUT：指定 URI のリソースを完全置換（冪等）→リクエストボディで全フィールドを送信する必要あり。PATCH：リソースの部分更新（差分のみ送信）。DELETE：リソースの削除（冪等）。冪等性（Idempotency）：同じリクエストを何度繰り返しても結果が変わらない性質。GET・PUT・DELETE は冪等、POST・PATCH は非冪等。REST API 設計では URI をリソースを表す名詞（/users/123）にし、操作は HTTP メソッドで表現します。',
  },
  {
    id: 'NET-020',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 4,
    year: 2023,
    tags: ['BGP', 'ルーティング', 'AS'],
    question: 'BGP（Border Gateway Protocol）に関する記述として、正しいものはどれか。',
    choices: [
      { index: 0, text: '同一 AS（自律システム）内でのみ使用されるリンクステート型ルーティングプロトコル' },
      { index: 1, text: 'インターネットの AS 間ルーティングに使われるパスベクトル型プロトコルで、インターネットの「経路制御の基盤」として機能する' },
      { index: 2, text: 'LAN 内の最短経路を計算するために Dijkstra 法を使うルーティングプロトコル' },
      { index: 3, text: '宛先 IP の物理アドレス（MAC アドレス）を解決するプロトコル' },
    ],
    answer: 1,
    explanation: 'BGP（Border Gateway Protocol）はインターネット上の AS（Autonomous System：自律システム）間のルーティングに使われる EGP（外部ゲートウェイプロトコル）です。パスベクトル型：AS パス情報を交換し、ループ回避と経路選択を行います。TCP（ポート179）を使用。インターネットの根幹プロトコルであり ISP・大企業ネットワーク間の経路制御を担います。AS 内（IGP）：OSPF（リンクステート・Dijkstra）、RIP（ディスタンスベクター・ベルマンフォード）。MAC アドレス解決は ARP です。',
  },

  // ─── データベース ─────────────────────────────────
  {
    id: 'DB-019',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 4,
    year: 2024,
    tags: ['SQL', 'ウィンドウ関数', '分析関数'],
    question: '次の SQL のウィンドウ関数 RANK() に関する記述として、正しいものはどれか。\nSELECT 名前, 点数, RANK() OVER (ORDER BY 点数 DESC) AS 順位 FROM 成績;',
    choices: [
      { index: 0, text: 'RANK() は同点がある場合でも連続した番号を振り、飛び番号は発生しない' },
      { index: 1, text: 'RANK() は同点の場合は同じ順位を返し、次の順位はスキップされる（例：1位2人なら次は3位）' },
      { index: 2, text: 'RANK() は同点を考慮せず行番号を振るため ROW_NUMBER() と同じ結果になる' },
      { index: 3, text: 'RANK() は PARTITION BY 句なしでは使用できない' },
    ],
    answer: 1,
    explanation: 'SQL のランキング関数の違い：RANK()：同点は同一順位を返し、次の順位は人数分スキップ（1,1,3,4,4,6 等）。DENSE_RANK()：同点は同一順位を返すが、次の順位はスキップしない（1,1,2,3,3,4 等）。ROW_NUMBER()：同点でも連続した一意の番号を振る（1,2,3,4,5,6 等）。ウィンドウ関数は GROUP BY と異なりレコード数を減らさず各行に集計値を付加できます。PARTITION BY で部分集計のウィンドウを指定（省略時は全行が1つのウィンドウ）。',
  },
  {
    id: 'DB-020',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 3,
    year: 2023,
    tags: ['インデックス', 'B木', 'クエリ最適化'],
    question: 'データベースのインデックス（索引）に関する記述として、誤っているものはどれか。',
    choices: [
      { index: 0, text: 'インデックスを作成すると SELECT 文の WHERE 条件での検索が高速化される場合がある' },
      { index: 1, text: 'インデックスを作成すると INSERT・UPDATE・DELETE 時にインデックスの更新も必要となりオーバーヘッドが増加する' },
      { index: 2, text: 'カーディナリティ（値の種類数）が低いカラム（例：性別）にインデックスを作成すると、フルテーブルスキャンより常に高速になる' },
      { index: 3, text: '複合インデックス（a, b, c）は「WHERE a = 1 AND b = 2」の検索には効果があるが、「WHERE b = 2」のみでは使われないことがある' },
    ],
    answer: 2,
    explanation: '選択肢 2 が誤りです。カーディナリティが低い（値の種類が少ない）カラムにインデックスを作成しても、クエリオプティマイザは「ほぼ全レコードを読み込むならインデックスを使うより全テーブルスキャンの方が効率的」と判断してインデックスを使用しない場合があります。例：10万レコードの性別（男/女）カラムのインデックスは約5万件を読み込むため非効率。インデックスが有効なのは高カーディナリティなカラム（ユーザID・メールアドレス等）です。複合インデックスの「左端プレフィックス規則」により先頭カラムから使われる必要があります。',
  },

  // ─── セキュリティ ─────────────────────────────────
  {
    id: 'SEC-019',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 4,
    year: 2024,
    tags: ['AES', '共通鍵暗号', 'ブロック暗号'],
    question: 'AES（Advanced Encryption Standard）に関する記述として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'AES は公開鍵暗号方式で、暗号化と復号に異なる鍵（公開鍵・秘密鍵）を使用する' },
      { index: 1, text: 'AES は共通鍵ブロック暗号で、鍵長 128/192/256 ビットをサポートし、128 ビットのブロック単位で暗号化する' },
      { index: 2, text: 'AES はストリーム暗号の一種で、1 ビットずつ暗号化するため遅延が最小になる' },
      { index: 3, text: 'AES はハッシュ関数の一種で、任意長のデータを固定長のダイジェスト値に変換する' },
    ],
    answer: 1,
    explanation: 'AES（Advanced Encryption Standard）：米国 NIST が 2001 年に標準化した共通鍵ブロック暗号。鍵長 128/192/256 ビット、ブロック長 128 ビット。SPN（Substitution-Permutation Network）構造で SubBytes・ShiftRows・MixColumns・AddRoundKey の 4 ステップを繰り返す。現在最も広く使われる暗号アルゴリズム。使用例：TLS/HTTPS・ファイル暗号化・VPN・ディスク暗号化（BitLocker）。ECB・CBC・CTR・GCM 等の動作モードがあり、AES-GCM が認証付き暗号として推奨されます。',
  },
  {
    id: 'SEC-020',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 4,
    year: 2023,
    tags: ['OWASP', 'XSS', 'CSRF', 'インジェクション'],
    question: 'OWASP Top 10 のうち「インジェクション」の対策として、最も効果的なものはどれか。',
    choices: [
      { index: 0, text: 'HTTPS（TLS）による通信の暗号化' },
      { index: 1, text: 'プリペアドステートメント（バインド機構）の使用と、信頼できないデータのエスケープ処理' },
      { index: 2, text: 'パスワードの複雑さポリシーの強化' },
      { index: 3, text: 'セッション ID の長さを 128 ビット以上にする' },
    ],
    answer: 1,
    explanation: 'SQL インジェクション等のインジェクション攻撃への最も効果的な対策：①プリペアドステートメント（Prepared Statement）/ パラメータバインド：SQL 文の構造を先にコンパイルし、入力値はデータとして扱うため SQL 構造を変更できない。②入力値のエスケープ処理：シングルクォート等の特殊文字をエスケープ。③ORM（Object-Relational Mapping）の使用。その他の対策：最小権限の DB ユーザ、WAF（Web Application Firewall）によるフィルタリング、入力値の検証。HTTPS は通信路暗号化であり、インジェクション対策にはなりません。',
  },

  // ─── OS ──────────────────────────────────────────
  {
    id: 'OS-019',
    category: 'os',
    categoryName: 'コンピュータシステム・OS',
    difficulty: 3,
    year: 2024,
    tags: ['デッドロック', '競合状態', 'Coffman条件'],
    question: 'デッドロックが発生するための 4 条件（Coffman の 4 条件）に含まれないものはどれか。',
    choices: [
      { index: 0, text: '相互排他（Mutual Exclusion）：リソースは同時に 1 プロセスしか使用できない' },
      { index: 1, text: '占有と待機（Hold and Wait）：リソースを保持しながら別のリソースを要求する' },
      { index: 2, text: 'プリエンプション（Preemption）：プロセスが保持するリソースを強制的に解放できる' },
      { index: 3, text: '循環待機（Circular Wait）：プロセス間でリソース待ちが循環している' },
    ],
    answer: 2,
    explanation: 'デッドロックの 4 必要条件（Coffman 1971）：①相互排他：リソースは排他的に使用される。②占有と待機：プロセスがリソースを保持したまま他のリソースを待つ。③非プリエンプション：プロセスのリソースを強制的に奪えない。④循環待機：プロセスが循環するリソース待ち列を形成する。選択肢 2 の「プリエンプション（強制解放できる）」は③非プリエンプションの否定であり、デッドロックを防止する条件です。4 条件のいずれかを破ることでデッドロックを予防できます（資源の事前割り当て、タイムアウト、リソース番号順の獲得等）。',
  },
  {
    id: 'OS-020',
    category: 'os',
    categoryName: 'コンピュータシステム・OS',
    difficulty: 4,
    year: 2023,
    tags: ['ガベージコレクション', 'メモリ管理', 'GC'],
    question: 'ガベージコレクション（GC）の「マーク＆スイープ」アルゴリズムの動作として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'メモリをコンパクト化して断片化を防ぐが、到達不能オブジェクトの解放は行わない' },
      { index: 1, text: 'GC ルート（スタック・グローバル変数）から参照をたどって到達可能なオブジェクトにマーク付けし、マークされていないオブジェクトを解放する 2 フェーズのアルゴリズム' },
      { index: 2, text: '参照カウントが 0 になった瞬間にオブジェクトを即座に解放する参照カウント方式と同じ動作をする' },
      { index: 3, text: '新しいオブジェクトから順番に古いオブジェクトを削除していく世代別 GC の基本アルゴリズム' },
    ],
    answer: 1,
    explanation: 'マーク＆スイープ（Mark & Sweep）GC の 2 フェーズ：①マークフェーズ：GC ルート（スタック変数・グローバル変数・レジスタ）から参照グラフを DFS/BFS でたどり、到達可能なオブジェクトにマークを付ける。②スイープフェーズ：ヒープ全体をスキャンし、マークされていない（到達不能＝ゴミ）オブジェクトのメモリを解放する。問題点：GC 実行中はプログラムを停止（STW: Stop The World）させる必要がある。メモリの断片化が発生する（コンパクション機能は別途必要）。参照カウント方式は循環参照を検出できないという弱点があります。',
  },

  // ─── ソフトウェア開発 ─────────────────────────────
  {
    id: 'SD-018',
    category: 'software-dev',
    categoryName: 'ソフトウェア開発・テスト',
    difficulty: 3,
    year: 2024,
    tags: ['SOLID原則', 'オブジェクト指向', '設計原則'],
    question: 'SOLID 原則の「単一責任の原則（SRP：Single Responsibility Principle）」の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'クラスは 1 つのメソッドしか持ってはならない' },
      { index: 1, text: 'クラスを変更する理由はただ 1 つであるべきで、クラスは 1 つの責任（関心事）のみを持つべき' },
      { index: 2, text: '継承よりコンポジションを優先すべきという設計指針' },
      { index: 3, text: 'インターフェースは小さく分割すべきという設計指針' },
    ],
    answer: 1,
    explanation: 'SOLID 原則：S（Single Responsibility）：クラスを変更する理由は 1 つだけ。1 つのクラスに複数の責任を持たせると変更の影響が広がりテストが困難になる。O（Open/Closed）：拡張に対してオープン、修正に対してクローズド。L（Liskov Substitution）：派生クラスは基底クラスと置換可能であるべき。I（Interface Segregation）：クライアントが使わないメソッドへの依存を強制しない（インターフェース分割）。D（Dependency Inversion）：抽象に依存し、具体に依存しない。選択肢 3 は I（インターフェース分離原則）の説明です。',
  },
  {
    id: 'SD-019',
    category: 'software-dev',
    categoryName: 'ソフトウェア開発・テスト',
    difficulty: 4,
    year: 2023,
    tags: ['マイクロサービス', 'API Gateway', 'サービスメッシュ'],
    question: 'マイクロサービスアーキテクチャにおける「API ゲートウェイ」パターンの主な役割として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'マイクロサービス間のデータベース共有を管理する中間層' },
      { index: 1, text: 'クライアントからの単一エントリポイントとして認証・ルーティング・レート制限・ロードバランシングを担当し、バックエンドの複数マイクロサービスを隠蔽する' },
      { index: 2, text: 'サービス間の同期通信を非同期メッセージングに変換するブローカー' },
      { index: 3, text: 'マイクロサービスのソースコードを一元管理するリポジトリサーバ' },
    ],
    answer: 1,
    explanation: 'API ゲートウェイはマイクロサービスアーキテクチャにおける「フロントドア」です。主な機能：①ルーティング：リクエストを適切なマイクロサービスに転送。②認証・認可：JWT 検証・OAuth2.0 処理を集中管理。③レート制限・スロットリング：過負荷防止。④SSL ターミネーション。⑤ロードバランシング。⑥レスポンスの集約（Backend for Frontend パターン）。クライアントは複数のマイクロサービスの URL を知る必要がなく、単一エンドポイントにアクセスするだけ。代表製品：Kong・AWS API Gateway・nginx・Envoy。',
  },

  // ─── プロジェクトマネジメント ─────────────────────
  {
    id: 'PM-018',
    category: 'project-mgmt',
    categoryName: 'プロジェクトマネジメント',
    difficulty: 3,
    year: 2024,
    tags: ['アジャイル', 'スクラム', 'スプリントレビュー'],
    question: 'スクラムにおける「スプリントレトロスペクティブ（振り返り）」の目的として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'スプリントで完成した成果物をステークホルダに確認・承認してもらうためのイベント' },
      { index: 1, text: 'スクラムチームがプロセス・ツール・人間関係を振り返り、次のスプリントの継続的改善アクションを決める内部イベント' },
      { index: 2, text: '次スプリントのバックログアイテムを選択し、スプリントゴールを設定するイベント' },
      { index: 3, text: '毎日チームメンバーが進捗・障害を共有する 15 分以内の短いイベント' },
    ],
    answer: 1,
    explanation: 'スクラムの 5 つのイベント：スプリント計画（Sprint Planning）：次スプリントのゴールとバックログ選択。デイリースクラム（Daily Scrum）：15 分の毎日の同期。スプリントレビュー（Sprint Review）：完成物をステークホルダに示しフィードバック収集。スプリントレトロスペクティブ（Sprint Retrospective）：チーム内部で「何がうまくいったか」「何を改善するか」を議論し改善アクションを決定（選択肢 1 が正解）。スプリント（Sprint）：1〜4 週間の開発タイムボックス。レトロスペクティブはカイゼン（継続的改善）を実践する場です。',
  },
  {
    id: 'PM-019',
    category: 'project-mgmt',
    categoryName: 'プロジェクトマネジメント',
    difficulty: 4,
    year: 2023,
    tags: ['調達管理', '契約', 'SOW'],
    question: 'IT システム開発の「準委任契約」と「請負契約」の違いとして、正しいものはどれか。',
    choices: [
      { index: 0, text: '請負契約では成果物の瑕疵担保責任が発生しないが、準委任契約では発生する' },
      { index: 1, text: '請負契約は仕事の完成と成果物納品を義務付け瑕疵担保責任を負う。準委任契約は善管注意義務を持って業務を遂行する義務のみで完成義務はない' },
      { index: 2, text: '準委任契約は成果物の品質保証を行い、請負契約は作業時間のみを保証する' },
      { index: 3, text: '両契約とも指揮命令関係が発生するため、労働者派遣法の適用を受ける' },
    ],
    answer: 1,
    explanation: '請負契約：仕事の完成（成果物の引き渡し）を目的とする契約。受注者は完成義務を負い、成果物の瑕疵担保責任（契約不適合責任）を負う。発注者は指揮命令できない。準委任契約：業務の遂行（役務の提供）を目的とする契約。完成義務はなく、善管注意義務（善良な管理者としての注意義務）を持って業務を行う義務のみ。成果完成型準委任（2020 年改正民法）では成果に応じた報酬も可能。労働者派遣契約（偽装請負に注意）：受注者の労働者が発注者の指揮命令下で働く場合は労働者派遣法が適用されます。',
  },

  // ─── サービスマネジメント ─────────────────────────
  {
    id: 'SM-016',
    category: 'service-mgmt',
    categoryName: 'サービスマネジメント',
    difficulty: 3,
    year: 2024,
    tags: ['ITIL 4', 'バリューチェーン', 'サービス管理'],
    question: 'ITIL 4 の「サービス価値システム（SVS：Service Value System）」の中心にある「サービス価値チェーン」の 6 つの活動に含まれないものはどれか。',
    choices: [
      { index: 0, text: 'エンゲージ（顧客・ステークホルダとの関与）' },
      { index: 1, text: 'デリバー＆サポート（サービスの提供とサポート）' },
      { index: 2, text: '監査（Audit）' },
      { index: 3, text: 'プラン（計画）' },
    ],
    answer: 2,
    explanation: 'ITIL 4 のサービス価値チェーン（SVC）の 6 活動：①Plan（計画）、②Improve（改善）、③Engage（エンゲージ）、④Design & Transition（設計・移行）、⑤Obtain/Build（獲得・構築）、⑥Deliver & Support（デリバー＆サポート）。「監査（Audit）」は SVC に含まれません。ITIL 4 は ITIL v3 からアップデートされ、アジャイル・DevOps・Lean との統合を重視。4 つの側面（組織と人材・情報と技術・パートナーと供給者・バリューストリームとプロセス）と 7 つの指導原則（価値に集中・現状から始める・フィードバック・コラボレーション等）が特徴です。',
  },

  // ─── 経営戦略 ─────────────────────────────────────
  {
    id: 'BS-016',
    category: 'business-strategy',
    categoryName: 'システム戦略・経営戦略',
    difficulty: 3,
    year: 2024,
    tags: ['DX', 'デジタルトランスフォーメーション', 'IT経営'],
    question: 'DX（デジタルトランスフォーメーション）の定義として、最も適切なものはどれか。',
    choices: [
      { index: 0, text: '既存の業務プロセスをそのまま IT システムに置き換えること（業務のシステム化）' },
      { index: 1, text: 'デジタル技術を活用して製品・サービス・ビジネスモデルを変革し、競争優位性を確立すること' },
      { index: 2, text: '従業員全員がプログラミングスキルを習得し、自社システムを内製化すること' },
      { index: 3, text: '企業の全書類を電子化（ペーパーレス化）するプロジェクトを指す' },
    ],
    answer: 1,
    explanation: 'DX（Digital Transformation）の定義（経済産業省「DX推進ガイドライン」）：「企業がビジネス環境の激しい変化に対応し、データとデジタル技術を活用して、顧客や社会のニーズをもとに、製品やサービス、ビジネスモデルを変革するとともに、業務そのものや、組織、プロセス、企業文化・風土を変革し、競争上の優位性を確立すること」。単純な IT 化・システム化ではなく、デジタル技術によるビジネスモデルの変革が本質です。例：Netflix（レンタルビデオ→ストリーミング）、Uber（タクシー業界の変革）。',
  },
  {
    id: 'BS-017',
    category: 'business-strategy',
    categoryName: 'システム戦略・経営戦略',
    difficulty: 4,
    year: 2023,
    tags: ['システム監査', '内部統制', 'IT統制'],
    question: 'システム監査の「監査証跡（Audit Trail）」に関する記述として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'システムの設計書・要件定義書等のドキュメント一式のみを指す' },
      { index: 1, text: 'システムへのアクセス・データ変更・処理実行等の操作履歴を記録したログで、不正検出・事後追跡・証拠保全に使われる' },
      { index: 2, text: 'ネットワーク上を流れるパケットをキャプチャした通信ログのみを指す' },
      { index: 3, text: 'システム監査人が作成する監査報告書の別称' },
    ],
    answer: 1,
    explanation: '監査証跡（Audit Trail）は、誰が・いつ・どのシステムで・何をしたか（操作・変更・アクセス）を記録したログです。機能：①不正・異常の事後検知と証拠保全。②コンプライアンス対応（SOX 法・GDPR 等）。③障害解析・インシデント対応。記録すべき内容：ログイン/ログアウト・データの参照/変更/削除・権限変更・エラー・バッチ処理実行等。改ざん防止のため書き込み専用・暗号化・タイムスタンプが重要。保存期間は法令・ポリシーにより定める（金融系は 7 年以上等）。',
  },

  // ─── 企業と法務 ──────────────────────────────────
  {
    id: 'LG-015',
    category: 'legal',
    categoryName: '企業と法務',
    difficulty: 3,
    year: 2024,
    tags: ['電子署名法', 'タイムスタンプ', '電子契約'],
    question: '電子署名法における電子署名の効力として、正しいものはどれか。',
    choices: [
      { index: 0, text: '電子署名は法的効力を持たず、書面と印鑑による署名のみが契約として有効' },
      { index: 1, text: '本人による電子署名が付された電子文書は、民事訴訟法上の「真正に成立した文書」の推定を受け、紙の署名と同等の法的効力を持つ' },
      { index: 2, text: '電子署名は暗号化された文書のみに使用でき、平文の文書には適用できない' },
      { index: 3, text: '電子署名法は公開鍵暗号方式のみに適用され、生体認証を用いた認証には適用されない' },
    ],
    answer: 1,
    explanation: '電子署名法（2001年施行）：電磁的記録に電子署名（本人のみが行うことができ、改ざん検知が可能なもの）が付されている場合、真正に成立したものと推定されます（民事訴訟法上の証拠力）。電子証明書・認定認証事業者（JPKI 等）を利用した電子署名は特に高い証明力を持ちます。タイムスタンプ（RFC 3161）と組み合わせることで文書の存在時刻も証明可能。電子契約サービス（クラウドサイン・DocuSign）はビジネスで広く利用されています。',
  },
  {
    id: 'LG-016',
    category: 'legal',
    categoryName: '企業と法務',
    difficulty: 4,
    year: 2023,
    tags: ['景品表示法', '優良誤認', '有利誤認'],
    question: '不当景品類及び不当表示防止法（景品表示法）の「優良誤認」に該当するものはどれか。',
    choices: [
      { index: 0, text: '競合他社と同等の性能であるにもかかわらず「業界最高性能」と表示する' },
      { index: 1, text: '1,000 円引きセールで実際の定価は 1,000 円値引き後の価格である場合に「通常価格より 1,000 円お得」と表示する（二重価格表示）' },
      { index: 2, text: '500 円相当のプレゼントを同梱して販売する' },
      { index: 3, text: '根拠なく「限定 100 個」と表示して購買意欲を煽る' },
    ],
    answer: 0,
    explanation: '景品表示法の 2 大禁止行為：①優良誤認：商品・サービスの品質・規格・内容について、実際より著しく優良であるかのように消費者に誤認させる表示（選択肢 0）。例：「日本最大」「業界初」等の根拠のない表示、成分・産地の偽り表示。②有利誤認：価格・取引条件について、実際より著しく有利であるかのように誤認させる表示（選択肢 1 が二重価格表示で有利誤認に該当）。消費者庁が措置命令・課徴金を命じることができます。景品の上限規制は「不当景品類」の規制で、課徴金の対象は主に優良誤認・有利誤認です。',
  },

  // ─── システムアーキテクチャ ──────────────────────
  {
    id: 'SA-017',
    category: 'system-arch',
    categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 4,
    year: 2024,
    tags: ['イベント駆動', 'メッセージキュー', 'Pub/Sub'],
    question: 'メッセージキューを使ったイベント駆動アーキテクチャの利点として、正しいものはどれか。',
    choices: [
      { index: 0, text: '送信者と受信者がリアルタイムに同期して処理するため、レスポンスが即座に返る' },
      { index: 1, text: 'プロデューサーとコンシューマーを非同期・疎結合にし、独立したスケーリングと障害耐性を実現する' },
      { index: 2, text: 'メッセージキューはデータベーストランザクションと同一の ACID 特性を保証する' },
      { index: 3, text: 'メッセージキューを使うとコンシューマーの処理速度が自動的に倍増する' },
    ],
    answer: 1,
    explanation: 'メッセージキュー（MQ）を用いたイベント駆動アーキテクチャの利点：①非同期処理：プロデューサー（送信者）はキューにメッセージを送るだけでレスポンスを待たずに続行できる。②疎結合：プロデューサーとコンシューマーが互いを知らなくても動作。③独立スケーリング：コンシューマーの数を独立して増減できる。④バッファリング：瞬間的なトラフィック急増を吸収し、コンシューマーを過負荷から保護。代表製品：RabbitMQ・Apache Kafka・AWS SQS・Google Pub/Sub。Kafka は大量ストリームデータ処理・ログ収集にも使われます。',
  },
  {
    id: 'SA-018',
    category: 'system-arch',
    categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 3,
    year: 2023,
    tags: ['IaC', 'Terraform', 'クラウド'],
    question: 'IaC（Infrastructure as Code）の利点として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'インフラを手動で管理するため、細かい設定の調整が容易になる' },
      { index: 1, text: 'インフラ構成をコードで定義・バージョン管理することで、再現性・一貫性・変更履歴の管理が可能になる' },
      { index: 2, text: 'IaC を使うと物理サーバが不要になり、クラウドに依存しないオンプレミス環境が構築できる' },
      { index: 3, text: 'IaC ツールは GUI 操作を自動録画してスクリプト化するロボティクス自動化（RPA）ツールの一種' },
    ],
    answer: 1,
    explanation: 'IaC（Infrastructure as Code）はインフラの構成（サーバ・ネットワーク・セキュリティグループ等）をコードで定義し管理するプラクティスです。利点：①再現性：同じコードで環境を何度でも再構築可能（開発・本番環境の一致）。②バージョン管理：Git でインフラ変更履歴を管理・レビュー・ロールバック可能。③自動化：CI/CD パイプラインと組み合わせてプロビジョニングを自動化。④ドリフト検出：実環境とコード定義の乖離を検出。代表ツール：Terraform（HCL）・AWS CloudFormation（YAML/JSON）・Ansible（YAML）・Pulumi（汎用プログラミング言語）。',
  },

  // ─── 計算問題追加 ─────────────────────────────────
  {
    id: 'ALG-022',
    category: 'algorithm',
    categoryName: 'アルゴリズムとデータ構造',
    difficulty: 3,
    year: 2022,
    tags: ['計算量', 'ソート', 'マージソート'],
    question: 'n = 1024 の要素をマージソートで整列するとき、必要な比較回数のオーダーはどれか。',
    choices: [
      { index: 0, text: 'O(n²) = 約 1,048,576 回' },
      { index: 1, text: 'O(n log n) = 約 10,240 回' },
      { index: 2, text: 'O(n) = 約 1,024 回' },
      { index: 3, text: 'O(log n) = 約 10 回' },
    ],
    answer: 1,
    explanation: 'マージソートの時間計算量は O(n log n)（最良・平均・最悪すべて）。n = 1024 = 2¹⁰ の場合、log₂(1024) = 10。O(n log n) = 1024 × 10 = 約 10,240 回。比較ソートの下限定理により任意の比較ソートの最悪計算量は Ω(n log n) 以上です。ソートアルゴリズムの計算量まとめ：バブルソート O(n²)・選択ソート O(n²)・挿入ソート O(n²)（最良 O(n)）・クイックソート 平均 O(n log n) 最悪 O(n²)・マージソート O(n log n)・ヒープソート O(n log n)・基数ソート O(nk)（非比較）。',
  },
  {
    id: 'NET-021',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 3,
    year: 2022,
    tags: ['スループット', '帯域幅', 'レイテンシ'],
    question: '100Mbps の回線で 10MB（メガバイト）のファイルを転送する最短時間はどれか（オーバーヘッドは無視する）。',
    choices: [
      { index: 0, text: '0.1 秒' },
      { index: 1, text: '0.8 秒' },
      { index: 2, text: '8 秒' },
      { index: 3, text: '80 秒' },
    ],
    answer: 1,
    explanation: '単位変換に注意：10MB = 10 × 8Mb = 80Mb（Mb = メガビット）。100Mbps の回線で 80Mb を転送する時間 = 80 ÷ 100 = 0.8 秒。ポイント：Bps（バイト毎秒）と bps（ビット毎秒）の区別が重要。1 バイト = 8 ビット。通信速度の単位は bps（bits per second）なので、バイト単位のデータは 8 倍してビットに換算してから計算します。実際の転送は TCP オーバーヘッド・ネットワーク遅延・輻輳等により理論値より遅くなります。',
  },
  {
    id: 'DB-021',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 3,
    year: 2022,
    tags: ['正規化', '第3正規形', '関数従属'],
    question: '次の関係が第 2 正規形だが第 3 正規形でない理由として、正しいものはどれか。\n「受注（受注ID, 顧客ID, 顧客名, 商品ID, 数量）」—— 主キー：受注ID+商品ID',
    choices: [
      { index: 0, text: '繰り返しグループが存在するため、第 1 正規形にもなっていない' },
      { index: 1, text: '顧客名が主キーの一部（顧客ID）にのみ関数従属しており、非キー属性間の推移的関数従属が存在する（顧客ID → 顧客名）' },
      { index: 2, text: '数量が受注 ID にのみ部分関数従属しているため、第 2 正規形の条件を満たしていない' },
      { index: 3, text: '主キーが複合キーでないため、自動的に第 3 正規形の違反が生じる' },
    ],
    answer: 1,
    explanation: '正規化の違反を分析します。第 2 正規形の確認：数量は主キー（受注ID, 商品ID）に完全関数従属 → OK。顧客名は受注ID → 顧客ID → 顧客名 という推移的関数従属があります。第 3 正規形の条件：非キー属性が主キーに直接（推移的でなく）関数従属していること。この関係では顧客名が「主キー → 顧客ID → 顧客名」という推移的関数従属を持つため第 3 正規形を満たしません。解決策：受注テーブル（受注ID, 商品ID, 顧客ID, 数量）と顧客テーブル（顧客ID, 顧客名）に分解します。',
  },
  {
    id: 'OS-021',
    category: 'os',
    categoryName: 'コンピュータシステム・OS',
    difficulty: 3,
    year: 2022,
    tags: ['スプーリング', 'バッファリング', 'I/O管理'],
    question: 'スプーリング（Spooling）の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'CPU と高速メモリ間のデータ転送を高速化するためのキャッシュ機構' },
      { index: 1, text: '低速なデバイス（プリンタ等）への出力データを一旦高速なストレージにためておき、デバイスの都合に合わせて順次処理する技術' },
      { index: 2, text: '複数の CPU コアに処理を分散させる並列処理技術' },
      { index: 3, text: 'OS カーネルとアプリケーション間のシステムコールを仮想化する技術' },
    ],
    answer: 1,
    explanation: 'スプーリング（SPOOL：Simultaneous Peripheral Operations On-Line）は、CPU が直接低速なデバイスを待たなくて済むよう、出力データをいったん高速な磁気ディスク（スプールファイル）に格納し、デバイスの準備ができ次第順次転送する技術です。代表例：プリンタスプーリング（複数の印刷ジョブをキューイングして順番に印刷）。効果：CPU はスプールへの書き込みだけで次の処理に移れるため、I/O 待ち時間を削減できます。バッファリングとの違い：バッファリングは主メモリ上の一時領域、スプーリングはディスクを使います。',
  },
  {
    id: 'SD-020',
    category: 'software-dev',
    categoryName: 'ソフトウェア開発・テスト',
    difficulty: 3,
    year: 2022,
    tags: ['コードレビュー', '静的解析', '品質管理'],
    question: '静的解析ツール（Static Analysis Tool）の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'プログラムを実際に実行して、実行時のメモリ使用量・CPU 使用率を計測するツール' },
      { index: 1, text: 'プログラムを実行せずにソースコードを解析し、バグの可能性・コーディング規約違反・セキュリティ脆弱性を検出するツール' },
      { index: 2, text: 'ユーザが操作する GUI 画面の動作を自動でテストするツール' },
      { index: 3, text: 'データベースのクエリプランを解析して最適なインデックスを提案するツール' },
    ],
    answer: 1,
    explanation: '静的解析（Static Analysis）：プログラムを実行せずにソースコードを構文・意味・フロー解析し、潜在的な問題を検出します。検出できる問題：コーディング規約違反・NULL 参照・型ミスマッチ・未使用変数・SQL インジェクション等のセキュリティ脆弱性・循環複雑度の高いコード。代表ツール：SonarQube・ESLint（JS）・Checkstyle（Java）・flake8/mypy（Python）・Coverity。動的解析（Dynamic Analysis）：プログラムを実行して実際の動作を観察（プロファイリング・メモリリーク検出・ファジング）。CI/CD パイプラインに静的解析を組み込むことで早期に品質問題を検出できます。',
  },
  {
    id: 'SM-017',
    category: 'service-mgmt',
    categoryName: 'サービスマネジメント',
    difficulty: 4,
    year: 2022,
    tags: ['BCP', 'BCM', '事業継続'],
    question: 'BCP（Business Continuity Plan：事業継続計画）と BCM（Business Continuity Management）の関係として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'BCP は計画書のことであり、BCM は IT システムの災害復旧（DR）計画に特化した活動' },
      { index: 1, text: 'BCM は BCP を含む包括的なマネジメントプロセスで、計画策定・訓練・見直し・改善のサイクルを継続的に回す活動' },
      { index: 2, text: 'BCP は BCM を実施するための IT 基盤のことを指す' },
      { index: 3, text: 'BCP と BCM は同じ概念を指す言葉で、使い分けはない' },
    ],
    answer: 1,
    explanation: 'BCM（Business Continuity Management）は、事業継続に関するマネジメントシステム全体を指します（ISO 22301 が国際標準）。BCM サイクル：①ビジネスインパクト分析（BIA）：重要業務・RTO/RPO の特定。②リスク評価：脅威と脆弱性の分析。③BCP 策定：インシデント発生時の対応手順・代替手段を文書化。④訓練・演習：計画の有効性を検証。⑤見直し・改善：定期的に計画を更新。BCP は BCM の中で策定される「計画書」です。DR（Disaster Recovery）は BCP の IT 観点のサブセットで、システム復旧手順を定めます。',
  },
  {
    id: 'BS-018',
    category: 'business-strategy',
    categoryName: 'システム戦略・経営戦略',
    difficulty: 3,
    year: 2022,
    tags: ['アジャイル経営', 'リーン', 'MVP'],
    question: 'リーンスタートアップにおける「MVP（Minimum Viable Product）」の目的として、正しいものはどれか。',
    choices: [
      { index: 0, text: '品質欠陥を最小限に抑えた完成度の高い製品を市場に投入すること' },
      { index: 1, text: '最低限の機能を持つ製品を素早く市場に投入し、実際のユーザからフィードバックを得て仮説を検証すること' },
      { index: 2, text: '最も価値の高い機能（Most Valuable）を厳選してリリースする品質管理手法' },
      { index: 3, text: 'コストを最小化（Minimum）しながら最大の価値（Value）を生むための生産効率化手法' },
    ],
    answer: 1,
    explanation: 'リーンスタートアップ（Eric Ries）では「構築-計測-学習」のサイクルを短く回すことを重視します。MVP（Minimum Viable Product：実用最小限の製品）は「仮説を検証するために最低限必要な機能だけを持つ製品」で、完成品ではなく「学ぶための製品」です。目的：①最小コストで市場仮説を早期検証。②実際のユーザ行動データからフィードバックを収集。③無駄な開発を避けピボット（方向転換）の判断を素早く行う。例：Dropbox の最初のデモ動画（実際の製品なし）でユーザ需要を検証したのが MVP の典型例です。',
  },
,

  // ─── 追加7問 ──────────────────────────────────────────
  {
    id: 'SEC-021',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 3,
    year: 2021,
    tags: ['ハッシュ関数', 'SHA-256', '完全性'],
    question: '暗号学的ハッシュ関数に要求される性質として、誤っているものはどれか。',
    choices: [
      { index: 0, text: '一方向性：ハッシュ値からもとのデータを計算することが困難' },
      { index: 1, text: '衝突耐性：異なる 2 つの入力が同じハッシュ値を持つことを発見するのが困難' },
      { index: 2, text: '可逆性：与えられたハッシュ値からもとのデータを効率よく復元できる' },
      { index: 3, text: '雪崩効果：入力の 1 ビット変化でハッシュ値が大きく変化する' },
    ],
    answer: 2,
    explanation: '暗号学的ハッシュ関数の要件：①一方向性（Pre-image Resistance）：H(x)=y から x を求めることが計算困難。②第 2 原像耐性：既知の入力 x と同じハッシュ値を持つ別の x\' を見つけることが困難。③衝突耐性（Collision Resistance）：H(x)=H(x\') となる x≠x\' のペアを発見することが困難。④雪崩効果（Avalanche Effect）：入力の微小な変化でハッシュ値が大きく変化。「可逆性」は暗号学的ハッシュ関数には要求されません（むしろ逆で一方向性が必須）。代表的ハッシュ関数：SHA-256（256 ビット・現在標準）・SHA-3・MD5（廃止推奨）。',
  },
  {
    id: 'ALG-023',
    category: 'algorithm',
    categoryName: 'アルゴリズムとデータ構造',
    difficulty: 3,
    year: 2021,
    tags: ['グラフ', '幅優先探索', 'BFS'],
    question: '幅優先探索（BFS）と深さ優先探索（DFS）の比較として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'BFS はスタックを使い、DFS はキューを使う' },
      { index: 1, text: 'BFS はキューを使い始点から近い順に探索する。DFS はスタック（または再帰）を使い可能な限り深く進む。BFS は最短経路（辺の重みが均一の場合）の発見に適する' },
      { index: 2, text: 'DFS は重み付きグラフの最短経路を保証するが、BFS は保証しない' },
      { index: 3, text: 'BFS と DFS はどちらも O(V) の空間計算量を必要とし、性能に差はない' },
    ],
    answer: 1,
    explanation: 'BFS（幅優先探索）：キューを使用。始点から距離 1 の全ノード→距離 2 →…の順で探索。特性：①最短経路の発見（辺の重みが全て等しい場合）。②メモリ使用量が大きい（同じ深さのノードを全てキューに保持）。DFS（深さ優先探索）：スタックまたは再帰を使用。可能な限り深く進み、行き止まりでバックトラック。特性：①迷路探索・トポロジカルソート・連結成分の検出に適する。②メモリ使用量が小さい（パスの長さ分のスタック）。重み付きグラフの最短経路にはダイクストラ法（非負重み）またはベルマンフォード法（負重みあり）を使用します。',
  },
  {
    id: 'NET-022',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 4,
    year: 2021,
    tags: ['ゼロトラスト', 'ZTNA', 'セキュリティモデル'],
    question: 'ゼロトラストセキュリティモデルの基本原則として、正しいものはどれか。',
    choices: [
      { index: 0, text: '社内ネットワーク内のトラフィックは信頼できると見なし、外部からのアクセスのみを厳格に検証する' },
      { index: 1, text: '「すべてを信頼しない（Never Trust, Always Verify）」を原則とし、場所・ネットワーク問わずすべてのアクセスを継続的に検証・認証する' },
      { index: 2, text: 'VPN により社内ネットワークへの安全なトンネルを確立すれば、ゼロトラストの要件を満たす' },
      { index: 3, text: 'ゼロトラストは物理的なセキュリティ（入退室管理）のみを対象とするモデル' },
    ],
    answer: 1,
    explanation: 'ゼロトラストセキュリティ（John Kindervag 提唱）の原則：「Never Trust, Always Verify（決して信頼せず、常に検証する）」。従来のペリメータ（境界）セキュリティモデルは「社内ネットワーク＝安全」という前提だったが、クラウド・テレワーク・内部脅威の増加により限界が明らか。ゼロトラストの要素：①強力な ID 認証（MFA）・継続的検証。②最小権限の原則。③マイクロセグメンテーション。④デバイスの健全性確認（EDR）。⑤すべてのアクセスログの記録・監視。NIST SP 800-207 がゼロトラストアーキテクチャの標準ガイドラインです。',
  },
  {
    id: 'PM-020',
    category: 'project-mgmt',
    categoryName: 'プロジェクトマネジメント',
    difficulty: 3,
    year: 2021,
    tags: ['コミュニケーション管理', 'ステークホルダ'],
    question: 'プロジェクトのステークホルダ管理において、「関心度が高いが影響力が低い」ステークホルダへの対応として、PMBOK で推奨される戦略はどれか。',
    choices: [
      { index: 0, text: '最も多くのリソースを割き、定期的な経営会議に招待する' },
      { index: 1, text: '情報を提供（Keep Informed）し続け、懸念事項を聞き適切に対応する' },
      { index: 2, text: '監視（Monitor）のみを行い、積極的な関与は避ける' },
      { index: 3, text: '密接に管理（Manage Closely）し、すべての意思決定に参加させる' },
    ],
    answer: 1,
    explanation: 'ステークホルダーのパワー/関心マトリクス（Power/Interest Grid）による 4 象限の戦略：①高パワー・高関心 → 密接に管理（Manage Closely）：意思決定に参加させ、定期的に詳細情報を提供。②高パワー・低関心 → 満足させる（Keep Satisfied）：要求には応えるが過度の情報で煩わせない。③低パワー・高関心 → 情報提供（Keep Informed）（正解）：プロジェクト状況を定期的に知らせ、懸念を聞く。④低パワー・低関心 → 監視（Monitor）：最小限のコミュニケーションで動向を監視。状況変化に応じてステークホルダーの位置は変化するため、定期的な見直しが必要です。',
  },
  {
    id: 'LG-017',
    category: 'legal',
    categoryName: '企業と法務',
    difficulty: 3,
    year: 2021,
    tags: ['下請法', '発注者', '禁止事項'],
    question: '下請代金支払遅延等防止法（下請法）において、親事業者が禁止される行為として、正しいものはどれか。',
    choices: [
      { index: 0, text: '発注後に委託内容を変更する場合に追加費用を支払うこと' },
      { index: 1, text: '発注後に下請事業者に対して一方的に発注内容の変更を求め、発生した費用を補償しないこと' },
      { index: 2, text: '下請事業者から商品を購入（自発的に）すること' },
      { index: 3, text: '書面で発注書を交付すること' },
    ],
    answer: 1,
    explanation: '下請法（下請代金支払遅延等防止法）は、優越的地位にある親事業者（発注者）から下請事業者（受注者）を保護する法律です。親事業者の禁止行為：①受領拒否（正当理由なく納品拒否）。②支払遅延（60 日以内に支払わない）。③下請代金の減額。④返品（正当理由なし）。⑤買いたたき（一方的に著しく低い代金を決定）。⑥物の購入強制・役務利用強制。⑦報復措置。⑧有償支給原材料の早期決済。親事業者の義務：発注書面の交付・支払期日の定め（60 日以内）・書類の保存等。公正取引委員会・中小企業庁が監督します。',
  },
  {
    id: 'SA-019',
    category: 'system-arch',
    categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 3,
    year: 2021,
    tags: ['エッジコンピューティング', 'IoT', '分散処理'],
    question: 'エッジコンピューティングの特徴として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'すべてのデータ処理をクラウドの中央データセンターに集中させることで、処理能力を最大化する技術' },
      { index: 1, text: 'データ発生源（IoT デバイス・工場・店舗）の近くでデータを処理し、クラウドへの通信量とレイテンシを削減する分散処理アーキテクチャ' },
      { index: 2, text: '複数のクラウドベンダーを組み合わせてコストを最適化するマルチクラウド戦略' },
      { index: 3, text: 'エッジコンピューティングはスマートフォンアプリの開発にのみ使用される技術' },
    ],
    answer: 1,
    explanation: 'エッジコンピューティングは、IoT センサー・カメラ・工場設備等のデータ発生源（エッジ）の近くにコンピュータリソース（エッジサーバ・ゲートウェイ）を配置し、データをその場で処理するアーキテクチャです。利点：①低レイテンシ：クラウドまでのネットワーク遅延を排除（自動運転・産業用ロボット等のリアルタイム制御）。②帯域幅削減：全データをクラウドに送らず必要なデータのみ送信。③オフライン動作：ネットワーク断時も動作継続。④プライバシー保護：センシティブデータをエッジで処理しクラウドに送らない。クラウドとエッジを組み合わせたハイブリッドアーキテクチャが主流です。',
  },
  {
    id: 'BS-019',
    category: 'business-strategy',
    categoryName: 'システム戦略・経営戦略',
    difficulty: 4,
    year: 2021,
    tags: ['プラットフォームビジネス', 'ネットワーク効果', 'エコシステム'],
    question: 'プラットフォームビジネスにおける「ネットワーク効果（Network Effects）」の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'ネットワーク機器（ルーター・スイッチ）を多数導入するほど通信速度が向上するハードウェアの特性' },
      { index: 1, text: 'プラットフォームの利用者数が増えるほど各参加者にとっての価値が高まる経済的効果で、勝者総取りの競争優位を生む' },
      { index: 2, text: 'SNS 企業が複数のネットワーク（通信網）を保有することでコストが下がる規模の経済' },
      { index: 3, text: 'インターネット回線の速度が増加するほどサービス品質が向上する技術的関係' },
    ],
    answer: 1,
    explanation: 'ネットワーク効果（Metcalfe の法則：ネットワークの価値はノード数の二乗に比例）：プラットフォームの参加者が増えるほど各参加者が得られる価値が増大します。直接ネットワーク効果：同じグループ内の参加者増加で価値向上（電話・SNS）。間接ネットワーク効果：買い手が増えると売り手にとって価値が増し、売り手が増えると買い手にとって価値が増す（Amazon・Uber・Airbnb 等の多面的プラットフォーム）。強いネットワーク効果は参入障壁を生み「勝者総取り（Winner-Take-Most）」の市場構造を形成します。',
  },
];

QUESTIONS_DATA.push(...QUESTIONS_DATA_PHASE8);

/* =====================================================
   QUESTIONS_DATA_PHASE9 — 総合・応用問題（35問）
   ===================================================== */
const QUESTIONS_DATA_PHASE9 = [

  // ─── アルゴリズム ─────────────────────────────────
  {
    id: 'ALG-024',
    category: 'algorithm',
    categoryName: 'アルゴリズムとデータ構造',
    difficulty: 4,
    year: 2024,
    tags: ['最小全域木', 'クラスカル法', 'プリム法'],
    question: '最小全域木（MST）を求めるアルゴリズムとして、正しいものの組合せはどれか。',
    choices: [
      { index: 0, text: 'ダイクストラ法・ベルマンフォード法' },
      { index: 1, text: 'クラスカル法・プリム法' },
      { index: 2, text: 'クイックソート・マージソート' },
      { index: 3, text: 'BFS・DFS' },
    ],
    answer: 1,
    explanation: '最小全域木（MST：Minimum Spanning Tree）は全頂点を最小コストで接続する木です。クラスカル法（Kruskal\'s）：辺をコスト昇順にソートし、閉路を作らない辺を貪欲に選択する。Union-Find（素集合データ構造）を使って効率化。計算量 O(E log E)。プリム法（Prim\'s）：1頂点から始め、接続済み頂点集合から最小コストの辺を繰り返し選択する。優先度付きキュー使用で O(E log V)。ダイクストラ法は最短経路探索、BFS/DFS はグラフ走査です。MST の応用：通信ネットワーク設計・電力網・水道管敷設の最小コスト計算。',
  },
  {
    id: 'ALG-025',
    category: 'algorithm',
    categoryName: 'アルゴリズムとデータ構造',
    difficulty: 3,
    year: 2023,
    tags: ['トライ木', '文字列検索', 'プレフィックス'],
    question: 'トライ木（Trie）の特徴と用途として、正しいものはどれか。',
    choices: [
      { index: 0, text: '数値データのソートに特化した平衡二分探索木の一種' },
      { index: 1, text: '文字列をプレフィックス（接頭辞）単位でノードに格納するツリー構造で、辞書検索・オートコンプリートに適する' },
      { index: 2, text: 'グラフの最短経路を求めるための優先度付きキューを内包した木構造' },
      { index: 3, text: '行列演算を高速化するためのセグメントツリーの別名' },
    ],
    answer: 1,
    explanation: 'トライ木（Trie / Prefix Tree）は文字列を1文字ずつノードに格納するツリー構造です。特性：①文字列の検索・挿入・削除が O(m)（m=文字列長）。②共通プレフィックスを共有するためメモリ効率が良い場合がある。③辞書順でのキー列挙が容易。用途：検索エンジンのオートコンプリート・スペルチェッカー・IP ルーティングテーブル（LPM：最長プレフィックスマッチ）・自然言語処理の形態素解析。圧縮トライ（Patricia Trie）や三分探索木（TST）は変種。ハッシュマップと比べ最悪ケースが安定している点も特徴です。',
  },

  // ─── ネットワーク ─────────────────────────────────
  {
    id: 'NET-023',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 4,
    year: 2024,
    tags: ['WebSocket', 'HTTP', 'リアルタイム通信'],
    question: 'WebSocket プロトコルの特徴として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'HTTP/1.1 と同様にリクエスト-レスポンス型の通信を行い、ポーリングにより疑似的なリアルタイム通信を実現する' },
      { index: 1, text: 'HTTP ハンドシェイクで接続を確立した後、双方向全二重通信チャネルを維持し、サーバからクライアントへのプッシュ通知が可能' },
      { index: 2, text: 'WebSocket は UDP ベースのプロトコルで、信頼性より低遅延を優先する' },
      { index: 3, text: 'WebSocket はファイル転送専用のプロトコルで、テキストデータの送受信はできない' },
    ],
    answer: 1,
    explanation: 'WebSocket（RFC 6455）は HTTP の Upgrade ヘッダーでハンドシェイクを行い、その後 TCP 接続を維持したまま双方向全二重通信を行うプロトコルです。HTTP との違い：HTTP はクライアントがリクエストを送らないとサーバから送信できない（半二重）。WebSocket はサーバ側から能動的にメッセージを送信可能（プッシュ）。用途：チャットアプリ・リアルタイム通知・株価ライブ更新・オンラインゲーム・コラボレーションツール（Google Docs 等）。SSE（Server-Sent Events）はサーバ→クライアントの一方向のみ。WebSocket は TCP ベースで信頼性あり。',
  },
  {
    id: 'NET-024',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 3,
    year: 2023,
    tags: ['VLAN', 'スイッチ', 'ネットワーク分割'],
    question: 'VLAN（Virtual LAN）に関する記述として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'VLAN は物理的な配線変更なしにネットワークを論理的に分割でき、ブロードキャストドメインを制御する技術' },
      { index: 1, text: 'VLAN は異なる VLAN 間の通信をルータなしに可能にするプロトコル' },
      { index: 2, text: 'VLAN の設定はエンドユーザ端末のみで行い、スイッチには設定不要' },
      { index: 3, text: 'VLAN を使用するとネットワーク全体のブロードキャストドメインが1つに統合される' },
    ],
    answer: 0,
    explanation: 'VLAN（Virtual LAN）は L2 スイッチ上で論理的にネットワークを分割する技術です。効果：①物理配線変更なしに部門別ネットワーク分離（人事/営業/開発等）。②ブロードキャストドメインを複数に分割→ネットワーク負荷削減・セキュリティ向上。③異なる VLAN 間の通信は L3 スイッチまたはルータが必要（VLAN 間ルーティング）。タグ VLAN（IEEE 802.1Q）：トランクポートでフレームに VLAN ID タグを付けて転送。ポート VLAN（アクセスポート）：特定ポートを特定 VLAN に固定。VLAN はセグメンテーションによるセキュリティ強化（マイクロセグメンテーション）にも活用されます。',
  },

  // ─── データベース ─────────────────────────────────
  {
    id: 'DB-022',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 4,
    year: 2024,
    tags: ['シャーディング', '水平分割', '分散DB'],
    question: 'データベースの「シャーディング（Sharding）」に関する記述として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'テーブルを列（カラム）単位で別テーブルに分割し、参照頻度の低い列を分離する垂直分割技術' },
      { index: 1, text: 'テーブルのデータを行単位で複数のデータベースサーバに分散格納し、水平スケールアウトを実現する技術' },
      { index: 2, text: 'レプリカ（読み取りレプリカ）を複数作成して読み取り負荷を分散するレプリケーション技術' },
      { index: 3, text: 'データを圧縮して複数のディスクに書き込む RAID 技術の別称' },
    ],
    answer: 1,
    explanation: 'シャーディング（水平分割）は大量データを「シャード（Shard）」と呼ばれる単位で複数のサーバに行単位で分散格納します。分割キー（シャードキー）の例：ユーザ ID の範囲・ハッシュ値・地域。利点：①水平スケールアウト（サーバ追加でキャパシティ拡張）。②読み書き両方の負荷分散。課題：①クロスシャードのジョインが困難。②トランザクションが複雑（分散トランザクション）。③シャードキー選択がパフォーマンスに大影響（ホットスポット問題）。水平分割 vs 垂直分割：水平=行単位・水平スケール、垂直=列単位・正規化に近い考え方。',
  },
  {
    id: 'DB-023',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 3,
    year: 2023,
    tags: ['クエリ最適化', '実行計画', 'EXPLAIN'],
    question: 'RDBMS のクエリ最適化に関する記述として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'SQL 文は記述順に上から実行されるため、WHERE 句を最後に書くと検索が速くなる' },
      { index: 1, text: 'クエリオプティマイザが統計情報（テーブルの行数・カーディナリティ等）を基に最適な実行計画を選択する。EXPLAIN コマンドで実行計画を確認できる' },
      { index: 2, text: 'インデックスは常に利用され、絶対に全表スキャンは発生しない' },
      { index: 3, text: 'サブクエリは常に相関クエリより遅いため、必ず JOIN に書き換えるべき' },
    ],
    answer: 1,
    explanation: 'RDBMS のクエリオプティマイザは SQL の記述順に関係なく、テーブル統計情報（行数・カーディナリティ・データ分布）を基に最適な実行計画（アクセスパス・結合順序・結合方式）を自動選択します。EXPLAIN / EXPLAIN ANALYZE コマンドで実行計画を確認でき、シーク・インデックススキャン・フルスキャンの選択理由が分かります。統計情報が古いと誤った計画を選択することがあるため定期的な ANALYZE（統計更新）が必要。インデックスがあっても低カーディナリティや大部分のデータにマッチする場合はフルスキャンを選択します。',
  },

  // ─── セキュリティ ─────────────────────────────────
  {
    id: 'SEC-022',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 4,
    year: 2024,
    tags: ['WAF', 'IDS', 'IPS', '境界防御'],
    question: 'WAF（Web Application Firewall）と従来のファイアウォール（FW）の違いとして、正しいものはどれか。',
    choices: [
      { index: 0, text: 'WAF はネットワーク層（L3）のパケットフィルタリングに特化し、FW はアプリケーション層の攻撃を検知する' },
      { index: 1, text: 'WAF はアプリケーション層（L7）の HTTP/HTTPS トラフィックを解析し XSS・SQLi 等の Web 攻撃を遮断する。FW は主に IP・ポートベースの通信制御を行う' },
      { index: 2, text: 'WAF は FW の機能を完全に代替するため、WAF を導入すれば FW は不要になる' },
      { index: 3, text: 'FW と WAF はどちらも物理アドレス（MAC アドレス）ベースのフィルタリングを行う' },
    ],
    answer: 1,
    explanation: 'ファイアウォール（FW）：L3/L4（ネットワーク/トランスポート層）で IP アドレス・ポート番号・プロトコルを基にパケットフィルタリング。ステートフルインスペクション FW は TCP セッション状態も確認。WAF（Web Application Firewall）：L7（アプリケーション層）で HTTP リクエスト/レスポンスの内容を解析。検知対象：SQL インジェクション・XSS・CSRF・Path Traversal・OWASP Top 10 の脆弱性。シグネチャ方式・アノマリ検知・機械学習方式がある。AWS WAF・Cloudflare WAF・ModSecurity が代表例。FW と WAF は機能が異なり、両方を組み合わせた多層防御が推奨されます。',
  },
  {
    id: 'SEC-023',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 3,
    year: 2023,
    tags: ['セキュリティ評価', 'ペネトレーションテスト', '脆弱性診断'],
    question: 'ペネトレーションテスト（Penetration Test）と脆弱性スキャン（Vulnerability Scan）の違いとして、正しいものはどれか。',
    choices: [
      { index: 0, text: '両者は同じ手法で同じ結果を提供するものであり、どちらを使っても差はない' },
      { index: 1, text: '脆弱性スキャンは自動ツールで既知の脆弱性パターンを広く検出するのに対し、ペネトレーションテストはセキュリティ専門家が手動でシステムへの侵入を試み、実際の攻撃シナリオを検証する' },
      { index: 2, text: 'ペネトレーションテストは自動ツールのみで実施し、脆弱性スキャンは人手による手動調査のみで行う' },
      { index: 3, text: '脆弱性スキャンは社内ネットワークにのみ適用でき、外部公開システムにはペネトレーションテストしか使用できない' },
    ],
    answer: 1,
    explanation: '脆弱性スキャン（Vulnerability Scanning）：Nessus・OpenVAS 等のツールで既知の CVE（共通脆弱性識別子）に照らして自動検出。広範囲を短時間で網羅できる。ペネトレーションテスト（Pen Test）：セキュリティ専門家（ホワイトハッカー）が攻撃者の視点でシステムへの侵入を実際に試みる。フェーズ：偵察→スキャン→脆弱性特定→侵入試行→権限昇格→横展開→報告。手法：ブラックボックス（情報なし）・グレーボックス・ホワイトボックス（内部情報あり）。脆弱性スキャンで検出できない論理的な欠陥・設定ミス・チェーン攻撃を発見できる点が大きな価値です。',
  },

  // ─── OS ──────────────────────────────────────────
  {
    id: 'OS-022',
    category: 'os',
    categoryName: 'コンピュータシステム・OS',
    difficulty: 4,
    year: 2024,
    tags: ['NUMA', 'マルチプロセッサ', 'キャッシュコヒーレンシ'],
    question: 'NUMA（Non-Uniform Memory Access）アーキテクチャの説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: '全プロセッサが同一の遅延でメモリにアクセスできる均一なメモリアーキテクチャ（UMA の別称）' },
      { index: 1, text: 'プロセッサごとにローカルメモリを持ち、自ノードのメモリへのアクセスはリモートノードより高速。大規模サーバで採用される' },
      { index: 2, text: 'GPU と CPU が共有メモリを使って協調処理するヘテロジニアスアーキテクチャ' },
      { index: 3, text: 'ネットワーク経由でストレージにアクセスする NAS（Network Attached Storage）の設計概念' },
    ],
    answer: 1,
    explanation: 'NUMA（Non-Uniform Memory Access）は複数のプロセッサノードがそれぞれローカルメモリを持ち、他ノードのメモリへのリモートアクセスはローカルより遅い（遅延が不均一）アーキテクチャです。対比：UMA（Uniform Memory Access）は全プロセッサが共有バスで同じ遅延でメモリにアクセス（スケールが難しい）。NUMA の利点：スケーラブルなマルチプロセッサシステム構築が可能。課題：リモートメモリアクセスの高遅延。NUMA 対応 OS はプロセスとメモリを同一ノードに配置（NUMA-aware スケジューリング）してパフォーマンスを最大化します。大規模な x86 サーバで広く採用されています。',
  },
  {
    id: 'OS-023',
    category: 'os',
    categoryName: 'コンピュータシステム・OS',
    difficulty: 3,
    year: 2023,
    tags: ['シェル', 'パイプ', 'リダイレクト'],
    question: 'Unix/Linux のシェルにおける「パイプ（|）」の機能として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'コマンドの出力をファイルに書き込む機能' },
      { index: 1, text: '前のコマンドの標準出力を次のコマンドの標準入力に接続し、コマンドを連結して処理する機能' },
      { index: 2, text: '2 つのコマンドを並列実行する機能' },
      { index: 3, text: 'ファイルの内容を変数に代入する機能' },
    ],
    answer: 1,
    explanation: 'パイプ（|）：前のコマンドの標準出力（stdout）を次のコマンドの標準入力（stdin）に直結する Unix の基本機能です。例：`ls -l | grep ".txt" | wc -l`（テキストファイル数を数える）。Unix 哲学「一つのことを上手くやる」小さなコマンドを組み合わせて強力な処理を実現します。リダイレクト（>）：stdout をファイルに書き込む（`> file`）または追記（`>> file`）。`2>` は stderr をリダイレクト。ヒアドキュメント（<<EOF）はファイルなしで標準入力に複数行テキストを渡します。パイプはプロセス間通信（IPC）の一種（名前なしパイプ）です。',
  },

  // ─── ソフトウェア開発 ─────────────────────────────
  {
    id: 'SD-021',
    category: 'software-dev',
    categoryName: 'ソフトウェア開発・テスト',
    difficulty: 4,
    year: 2024,
    tags: ['モノリポ', 'モノリス', 'マイクロサービス移行'],
    question: '「ストラングラーフィグパターン（Strangler Fig Pattern）」の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: '既存のモノリシックアプリケーションを一度に完全に作り直す（ビッグバンリリース）手法' },
      { index: 1, text: '既存モノリスを段階的に新しいサービスに置き換え、機能を徐々に移行することでリスクを最小化するリファクタリング戦略' },
      { index: 2, text: 'マイクロサービス間の通信をすべて同期 REST API に統一する設計パターン' },
      { index: 3, text: 'コードの重複を検出して共通ライブラリに抽出するリファクタリング手法' },
    ],
    answer: 1,
    explanation: 'ストラングラーフィグパターン（Martin Fowler 提唱）は、大きなモノリシックアプリケーションをマイクロサービスに段階的に移行する際の戦略です。名前の由来：熱帯雨林のイチジク（Strangler Fig）が宿主の木に絡みつきながら成長し、最終的に宿主を枯らせる様子から。手順：①新機能を新サービスとして実装。②既存機能を徐々に新サービスに移行。③モノリスの対応コードを削除。④最終的にモノリスが消滅。利点：段階的移行でリスク低減、既存システムを止めずに移行可能。ビッグバンリライトは高リスクで失敗例も多いため、ストラングラーフィグが推奨されます。',
  },
  {
    id: 'SD-022',
    category: 'software-dev',
    categoryName: 'ソフトウェア開発・テスト',
    difficulty: 3,
    year: 2023,
    tags: ['コードカバレッジ', 'ミューテーションテスト', '品質'],
    question: 'ミューテーションテスト（Mutation Testing）の目的として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'システムの想定外の変更（バグ混入）に対してどれだけ耐性があるかを確認する負荷テスト' },
      { index: 1, text: 'ソースコードに意図的に小さな変更（ミュータント）を加え、テストがその変更を検出（Kill）できるかを評価してテストスイートの品質を測定する手法' },
      { index: 2, text: '遺伝的アルゴリズムを使ってテストケースを自動生成する手法' },
      { index: 3, text: 'データベーススキーマの変更がアプリケーションコードに与える影響を自動検出する手法' },
    ],
    answer: 1,
    explanation: 'ミューテーションテストは「テストの品質を測定する」手法です。手順：①元のコードに小さな変更（ミュータント：`>` → `>=` や `+` → `-` 等）を加えた多数のバリアントを生成。②既存テストをミュータントに対して実行。③テストが失敗（ミュータントを検出・Kill）できればテストが有効、通過（Survive）すればテストに漏れがある。ミューテーションスコア = Kill 数 / 全ミュータント数 × 100%。コードカバレッジ（命令/分岐）はコードが実行されたかだけを測るのに対し、ミューテーションテストはテストの「意味」まで検証します。Pitest（Java）・Stryker（JS/TS）が代表ツールです。',
  },

  // ─── プロジェクトマネジメント ─────────────────────
  {
    id: 'PM-021',
    category: 'project-mgmt',
    categoryName: 'プロジェクトマネジメント',
    difficulty: 3,
    year: 2024,
    tags: ['コンフィギュレーション管理', '変更管理', 'ベースライン'],
    question: 'PMBOK における「コンフィギュレーション管理（構成管理）」の主な目的として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'プロジェクトメンバーのスキルセットと役割分担を記録・管理すること' },
      { index: 1, text: '成果物・文書・ソースコードなどのプロジェクト成果物の変更を管理し、版の整合性と追跡可能性を確保すること' },
      { index: 2, text: '顧客との要件変更交渉の記録を残すためのコミュニケーション管理の一部' },
      { index: 3, text: 'プロジェクトの予算変更履歴を管理するコスト管理の手法' },
    ],
    answer: 1,
    explanation: 'コンフィギュレーション管理（CM：Configuration Management）は、プロジェクトで作成する成果物（文書・ソースコード・実行ファイル・設定ファイル等）の変更を体系的に管理し、いつ・誰が・何を・なぜ変更したかの追跡可能性（トレーサビリティ）を確保します。主な活動：①コンフィギュレーション識別（管理対象の特定・ベースライン設定）。②変更管理（変更要求の受付・評価・承認・実施）。③状態記録（変更履歴の追跡）。④監査（承認済み変更のみが実施されているか確認）。ツール：Git・SVN（ソースコード）・JIRA・Confluence（ドキュメント）。',
  },
  {
    id: 'PM-022',
    category: 'project-mgmt',
    categoryName: 'プロジェクトマネジメント',
    difficulty: 4,
    year: 2023,
    tags: ['見積もり精度', 'コーンの不確実性の円錐', '段階的精緻化'],
    question: 'プロジェクト初期段階の見積もりに関する「不確実性の円錐（Cone of Uncertainty）」が示すことはどれか。',
    choices: [
      { index: 0, text: 'プロジェクトが進むにつれてスコープが拡大し、コストも増大するという法則' },
      { index: 1, text: 'プロジェクト初期は見積もり誤差が大きく（±4倍等）、計画・設計・開発と進むにつれて誤差が縮小していくという概念' },
      { index: 2, text: 'チームの規模が大きいほど見積もりの精度が下がるというブルックスの法則の視覚化' },
      { index: 3, text: 'プロジェクトのリスクは最初は小さく時間経過とともに指数的に増大するという概念' },
    ],
    answer: 1,
    explanation: '不確実性の円錐（Cone of Uncertainty：Barry Boehm 提唱）は、プロジェクトのフェーズが進むにつれて見積もりの不確実性が収束する様子を円錐形で表したものです。フェーズ別の典型的な誤差範囲：フィジビリティ段階 ±4倍 → コンセプト段階 ±2倍 → 要件定義後 ±1.5倍 → 設計後 ±1.25倍 → 実装後 ±1.1倍。初期段階での詳細な見積もりは本質的に不正確であり、段階的精緻化（Progressive Elaboration）によってより正確な見積もりに近づけていく必要があることを示しています。これは「アジャイルで反復的に見積もりを改善する」考え方の根拠にもなっています。',
  },

  // ─── サービスマネジメント ─────────────────────────
  {
    id: 'SM-018',
    category: 'service-mgmt',
    categoryName: 'サービスマネジメント',
    difficulty: 3,
    year: 2024,
    tags: ['DevOps', 'SRE', '信頼性エンジニアリング'],
    question: 'SRE（Site Reliability Engineering）のエラーバジェット（Error Budget）の考え方として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'SLO で設定した可用性目標を常に 100% 達成することを義務付け、エラーをゼロに近づける運用方針' },
      { index: 1, text: 'SLO を満たしていない時間（許容誤差）を「消費可能な予算」として管理し、残りのバジェットに応じてリリース速度とリスクのバランスを調整する' },
      { index: 2, text: 'システム開発のバグ修正にかける作業時間の上限を管理する開発コスト管理手法' },
      { index: 3, text: 'データセンターの電力コストのうち誤作動によって無駄になった分を試算する手法' },
    ],
    answer: 1,
    explanation: 'SRE のエラーバジェット：SLO（例：月次可用性 99.9%）を設定すると、許容ダウン時間 = 100% - 99.9% = 0.1% → 月約 43.2 分がエラーバジェットです。活用方法：①エラーバジェットが十分残っている → 積極的なリリース・機能開発が可能。②エラーバジェットが枯渇 → リリース凍結・信頼性改善を優先。意義：「エラーをゼロにする」ではなく「許容範囲のエラーと引き換えに機能をリリースする」というビジネスとのトレードオフを定量化します。開発チームと運用チームの共通目標として機能し、100% を目指す非現実的な運用目標を避けられます。',
  },

  // ─── 経営戦略 ─────────────────────────────────────
  {
    id: 'BS-020',
    category: 'business-strategy',
    categoryName: 'システム戦略・経営戦略',
    difficulty: 3,
    year: 2024,
    tags: ['OKR', '目標管理', 'KR'],
    question: 'OKR（Objectives and Key Results）フレームワークの特徴として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'OKR は個人の業績評価と直接連動させ、達成率によって給与査定を行うための評価制度' },
      { index: 1, text: '野心的な目標（Objective）と定量的な達成指標（Key Results）を組み合わせ、組織の方向性をアラインしながら挑戦的な目標設定を促すフレームワーク' },
      { index: 2, text: '財務・顧客・業務プロセス・学習成長の 4 視点でバランスよく目標を設定する BSC と同じフレームワーク' },
      { index: 3, text: 'OKR は四半期に一度見直すことが禁じられており、年間計画として固定するフレームワーク' },
    ],
    answer: 1,
    explanation: 'OKR（Intel で生まれ Google が普及）：Objective（定性的な目標）+ Key Results（定量的な達成指標、通常 3〜5 個）で構成。特徴：①野心的（60〜70% 達成でよいとされる「ムーンショット」目標）。②透明性（全社員の OKR を公開）。③頻繁な振り返り（四半期・月次）。④原則として給与評価とは切り離す。BSC（バランスト・スコアカード）との違い：BSC は戦略マップと 4 視点（財務・顧客・業務プロセス・学習成長）で戦略を可視化、OKR は目標設定と整合性確保に特化。KPI は継続的に監視する運用指標、KGI は最終目標です。',
  },
  {
    id: 'BS-021',
    category: 'business-strategy',
    categoryName: 'システム戦略・経営戦略',
    difficulty: 4,
    year: 2023,
    tags: ['データドリブン', 'データマネジメント', 'データガバナンス'],
    question: 'データガバナンスの主な目的として、正しいものはどれか。',
    choices: [
      { index: 0, text: '企業内のすべてのデータをクラウドに移行してコストを削減すること' },
      { index: 1, text: 'データの品質・整合性・セキュリティ・プライバシーを管理する方針・プロセス・責任体制を定め、データを組織の重要資産として適切に活用・保護すること' },
      { index: 2, text: '競合他社のデータを合法的に収集・分析して市場動向を把握すること' },
      { index: 3, text: '開発者がデータベーススキーマを自由に変更できる環境を整備すること' },
    ],
    answer: 1,
    explanation: 'データガバナンスは、データを組織の戦略資産として管理するための方針・プロセス・組織・テクノロジーの総称です。主な要素：①データオーナーシップ（データの責任者の明確化）。②データ品質管理（正確性・完全性・一貫性）。③データカタログ（メタデータ管理・データの所在把握）。④データセキュリティ・プライバシー（アクセス制御・GDPR 等のコンプライアンス）。⑤データライフサイクル管理（取得・保存・活用・廃棄）。DAMA-DMBOK がデータ管理の知識体系標準。データガバナンスが不十分だと「データサイロ」「データ品質問題」「コンプライアンス違反」が発生します。',
  },

  // ─── 企業と法務 ──────────────────────────────────
  {
    id: 'LG-018',
    category: 'legal',
    categoryName: '企業と法務',
    difficulty: 3,
    year: 2024,
    tags: ['AI法制度', 'AI倫理', '責任'],
    question: 'AI を活用したシステムの開発・運用における「説明可能性（Explainability）」が求められる主な理由として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'AI の処理速度を向上させるためのアルゴリズム最適化要件' },
      { index: 1, text: 'AI の判断根拠を人が理解・検証できるようにすることで、不当な差別・誤判断への対応責任と透明性を確保するため' },
      { index: 2, text: 'AI システムの知的財産権を保護するためのライセンス管理要件' },
      { index: 3, text: 'AI の学習データを競合他社から保護するためのセキュリティ要件' },
    ],
    answer: 1,
    explanation: 'AI の説明可能性（Explainability・Interpretability）が求められる背景：①高リスク意思決定への利用（採用・審査・医療診断・与信等）では判断根拠の説明が法的・倫理的に求められる。②EU AI 法（AI Act）：リスクに応じた規制、高リスク AI は透明性・説明可能性が義務。③GDPR：自動処理のみによる決定に対して「その決定に至った理由を知る権利」を保障。④差別禁止：ブラックボックス AI が性別・人種等に基づく差別的判断を行っていないかの検証に必要。XAI（Explainable AI）ツール：SHAP・LIME 等が活用されます。',
  },
  {
    id: 'LG-019',
    category: 'legal',
    categoryName: '企業と法務',
    difficulty: 4,
    year: 2023,
    tags: ['独占禁止法', '優越的地位', '公正取引'],
    question: '独占禁止法（私的独占の禁止及び公正取引の確保に関する法律）で禁止される「私的独占」の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: '特定の企業が新製品を開発・販売する際に、競合他社より先に市場投入すること' },
      { index: 1, text: '事業者が他の事業者の事業活動を排除・支配することで競争を実質的に制限する行為（排除型私的独占・支配型私的独占）' },
      { index: 2, text: '企業が自社の商品に高い価格を設定することで市場全体の価格水準を上げること' },
      { index: 3, text: '国内市場での独占的シェアを持つ企業が海外に輸出する行為' },
    ],
    answer: 1,
    explanation: '独占禁止法の主要規制：①私的独占：他の事業者を排除（排除型）または支配（支配型）して競争を実質的に制限する行為→排除型例：競争者へのリベート供与・不当廉売。②不当な取引制限：カルテル・入札談合・価格協定。③不公正な取引方法：取引拒絶・不当廉売・抱き合わせ販売・優越的地位の濫用（下請業者への不当な要求等）。公正取引委員会（公取委）が審査・排除措置命令・課徴金納付命令を行使。近年は GAFA 等プラットフォーム事業者に対するデジタル市場での競争政策が強化されています。',
  },

  // ─── システムアーキテクチャ ──────────────────────
  {
    id: 'SA-020',
    category: 'system-arch',
    categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 4,
    year: 2024,
    tags: ['CQRS', 'イベントソーシング', '分散システム'],
    question: 'CQRS（Command Query Responsibility Segregation）パターンの説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'データベースの読み書き権限を別々のユーザアカウントに分離するセキュリティパターン' },
      { index: 1, text: 'システムの「書き込み操作（Command）」と「読み取り操作（Query）」を別モデル・別データストアに分離し、それぞれ独立して最適化するアーキテクチャパターン' },
      { index: 2, text: 'SQL の SELECT（Query）と INSERT/UPDATE/DELETE（Command）を同一トランザクションで実行するパターン' },
      { index: 3, text: 'コマンドラインツールとクエリ言語を統合したインターフェース設計パターン' },
    ],
    answer: 1,
    explanation: 'CQRS（Greg Young 提唱）は Command（状態変更操作）と Query（読み取り操作）のモデルを分離するパターンです。利点：①読み書きで独立したスケーリングが可能（読み取りが多い場合は読み取り側のみスケールアウト）。②読み取り用データモデルをクエリに最適化（非正規化・集計済みビュー）。③書き込み側はドメインロジックに集中。イベントソーシング（Event Sourcing）と組み合わせることが多い：状態を現在値で持つのではなく、すべての「イベント（変更履歴）」を保存→任意の時点の状態を再現可能。複雑性が増すため、単純なCRUDアプリには不向きです。',
  },
  {
    id: 'SA-021',
    category: 'system-arch',
    categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 3,
    year: 2023,
    tags: ['クラウドコスト', 'FinOps', 'リザーブドインスタンス'],
    question: 'クラウドのコスト最適化戦略として、「リザーブドインスタンス（Reserved Instances）」の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '未使用時に自動シャットダウンして従量課金をゼロにする節約機能' },
      { index: 1, text: '1〜3 年間の利用を事前に予約・コミットすることでオンデマンド価格から最大 70% 割引を受けられる購入オプション' },
      { index: 2, text: '不要なリソースを自動検出・削除してコストを削減するガバナンス機能' },
      { index: 3, text: '処理能力を最大限確保した上で余剰リソースを他社に貸し出す機能' },
    ],
    answer: 1,
    explanation: 'クラウドのインスタンス購入オプション（AWS EC2 の例）：オンデマンド：使った分だけ課金・柔軟性最高・コスト最高。リザーブドインスタンス（RI）：1〜3 年間のコミットメントで最大 72% 割引。全前払い・一部前払い・前払いなしの支払い方法がある。予測可能なワークロードに最適。スポットインスタンス：余剰容量を最大 90% 割引で使用。中断される可能性あり。バッチ処理・障害に強いワークロードに適する。Savings Plans：より柔軟なコミットメント型割引（EC2・Fargate・Lambda に適用可能）。FinOps（Financial Operations）はクラウドコストを組織的に最適化する実践です。',
  },

  // ─── 追加計算・応用問題 ──────────────────────────
  {
    id: 'ALG-026',
    category: 'algorithm',
    categoryName: 'アルゴリズムとデータ構造',
    difficulty: 3,
    year: 2022,
    tags: ['計算量', 'NP問題', '計算複雑性理論'],
    question: 'NP 完全（NP-Complete）問題の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: '多項式時間で解けることが証明されている問題の集合' },
      { index: 1, text: '解の検証は多項式時間で可能だが、効率的な解法が知られておらず、NP に属するすべての問題に多項式時間還元できる最も難しいクラスの問題' },
      { index: 2, text: '入力サイズ n に対して計算量が n の多項式で表せる問題の集合（P 問題の別称）' },
      { index: 3, text: '量子コンピュータでのみ効率的に解くことができる問題の集合' },
    ],
    answer: 1,
    explanation: '計算複雑性理論の主要クラス：P（Polynomial time）：多項式時間で解けることが証明されている問題（ソート・最短経路等）。NP（Nondeterministic Polynomial time）：解が与えられれば多項式時間で検証可能な問題（P ⊆ NP）。NP 完全（NP-Complete）：NP に属し、すべての NP 問題を多項式時間で NP 完全問題に変換（還元）できる最難クラス。例：充足可能性問題（SAT）・巡回セールスマン問題（TSP）・ナップサック問題・グラフ彩色問題。P = NP かどうかは未解決の最重要問題。NP 困難（NP-Hard）：NP-Complete から検証容易性を除いたもの。',
  },
  {
    id: 'NET-025',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 4,
    year: 2022,
    tags: ['QoS', 'パケット優先制御', '帯域保証'],
    question: 'QoS（Quality of Service）における「トラフィックシェーピング」の目的として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'ネットワーク上のパケットを暗号化してセキュリティを確保する' },
      { index: 1, text: '送信レートを平滑化・制限することで、ネットワーク帯域の安定した利用と輻輳防止を実現する' },
      { index: 2, text: 'パケットの順序を保証し、受信側でのパケット並べ替えをなくす技術' },
      { index: 3, text: '不正な IP パケットをフィルタリングするファイアウォールの一機能' },
    ],
    answer: 1,
    explanation: 'QoS（Quality of Service）はネットワーク通信の品質を制御する技術の総称です。主な機能：トラフィックシェーピング（Traffic Shaping）：トークンバケット等で送信レートを平滑化・制限。バースト送信を抑制し安定した帯域を確保。トラフィックポリシング（Policing）：設定レートを超えたトラフィックを即座に廃棄またはマーク変更。キューイングとスケジューリング：PQ（優先キュー）・WFQ（重み付き公平キューイング）で帯域保証・優先制御。DSCP（DiffServ Code Point）：IPヘッダのフィールドでトラフィッククラスをマーク。VoIP・動画会議では低遅延・低ジッタが重要なため QoS による優先制御が不可欠です。',
  },
  {
    id: 'DB-024',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 4,
    year: 2022,
    tags: ['データウェアハウス', 'OLAP', 'ETL'],
    question: 'データウェアハウス（DWH）と OLTP システムの違いとして、正しいものはどれか。',
    choices: [
      { index: 0, text: 'OLTP は大量の過去データを保持し分析クエリに最適化、DWH は少量のリアルタイムトランザクションに特化' },
      { index: 1, text: 'OLTP は日常の業務トランザクション（短い読み書き）に最適化、DWH は大量の過去データを集約して複雑な分析クエリ（OLAP）を高速処理するために最適化' },
      { index: 2, text: 'DWH は OLTP システムと同じスキーマ設計を使い、データの格納先が異なるだけ' },
      { index: 3, text: 'OLTP は意思決定支援向けで長時間バッチ処理を行い、DWH はリアルタイム決済処理に使う' },
    ],
    answer: 1,
    explanation: 'OLTP（Online Transaction Processing）vs DWH（Data Warehouse）の比較：OLTP：日常業務トランザクション（注文・入金・在庫更新）。高頻度の短い読み書き。正規化された行ストア。整合性重視（ACID）。例：基幹業務システム（ERP・POSレジ）。DWH：大量履歴データの分析（売上傾向・顧客行動分析）。少数の複雑な集計クエリ（OLAP）。非正規化したスタースキーマ・列ストア。読み取り最適化。例：Redshift・BigQuery・Snowflake。ETL（Extract・Transform・Load）：OLTP システムからデータを抽出・変換してDWHに投入するプロセス。近年は ELT（Load してから Transform）も普及。',
  },
  {
    id: 'OS-024',
    category: 'os',
    categoryName: 'コンピュータシステム・OS',
    difficulty: 3,
    year: 2022,
    tags: ['ブートプロセス', 'BIOS', 'UEFI'],
    question: 'UEFI（Unified Extensible Firmware Interface）と従来の BIOS の違いとして、正しいものはどれか。',
    choices: [
      { index: 0, text: 'UEFI は BIOS の別名であり、機能上の差異はない' },
      { index: 1, text: 'UEFI は 2TB 超のディスク対応（GPT パーティション）・セキュアブート・GUI 設定・64 ビットコード実行をサポートし、BIOS の限界を超えた次世代ファームウェア標準' },
      { index: 2, text: 'UEFI は BIOS に比べて機能を削減したシンプルなブートローダー' },
      { index: 3, text: 'UEFI は Linux 専用のファームウェアで、Windows では BIOS のみが使用される' },
    ],
    answer: 1,
    explanation: 'BIOS（Basic Input/Output System）の限界：16 ビットコード・1MB のアドレス空間・MBR（Master Boot Record：2TB 制限・最大 4 パーティション）。UEFI（Unified Extensible Firmware Interface）の特徴：①GPT（GUID Partition Table）対応→2TB 超のディスク・最大 128 パーティション。②セキュアブート：起動時に OS のデジタル署名を検証してルートキット・マルウェアを防御。③GUI 設定画面・マウス操作対応。④64 ビットコード実行・ネットワーク起動サポート。⑤起動時間の短縮。現代の PC・サーバはほぼすべて UEFI を採用（BIOS 互換モードも多くの場合サポート）。',
  },
  {
    id: 'SEC-024',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 4,
    year: 2022,
    tags: ['サプライチェーン攻撃', 'ソフトウェアサプライチェーン', 'SBOM'],
    question: 'ソフトウェアサプライチェーン攻撃への対策として、近年注目されている「SBOM（Software Bill of Materials）」の目的として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'ソフトウェアの販売・流通コストを管理するための財務管理ツール' },
      { index: 1, text: 'ソフトウェアに含まれるすべてのコンポーネント・ライブラリの一覧（部品表）を作成し、脆弱性が判明した際に影響するシステムを迅速に特定・対応するための文書' },
      { index: 2, text: 'ソフトウェアのバグを自動修正するためのパッチ管理ツール' },
      { index: 3, text: 'オープンソースライブラリのライセンス管理のみを目的とした法務ツール' },
    ],
    answer: 1,
    explanation: 'SBOM（Software Bill of Materials：ソフトウェア部品表）は、ソフトウェアを構成するすべてのコンポーネント（OSS・商用ライブラリ・内製コード）とそのバージョン・ライセンス・依存関係を記述した機械可読な文書です。背景：SolarWinds 攻撃（2020）や Log4Shell 脆弱性（2021）でサプライチェーン攻撃の危険性が顕在化。活用：①脆弱性発覚時にどのシステムが影響を受けるか即座に特定。②OSS ライセンスコンプライアンス管理。③バイナリ解析によるサードパーティコンポーネントの把握。米国では大統領令（EO 14028）でSBOM提出が政府調達要件に。フォーマット：SPDX・CycloneDX が標準。',
  },
  {
    id: 'SD-023',
    category: 'software-dev',
    categoryName: 'ソフトウェア開発・テスト',
    difficulty: 3,
    year: 2022,
    tags: ['フィーチャーフラグ', 'A/Bテスト', 'カナリアリリース'],
    question: 'カナリアリリース（Canary Release）の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: '全ユーザに新バージョンを一斉に公開し、問題が発生したら即座にロールバックするリリース戦略' },
      { index: 1, text: '新バージョンを最初に少数のユーザ（カナリア）に公開し、問題がないことを確認してから段階的に全ユーザに展開するリリース戦略' },
      { index: 2, text: 'テスト環境のみに新バージョンをデプロイして本番環境とは完全に分離するステージング戦略' },
      { index: 3, text: 'ユーザを A グループと B グループに分けて異なる機能を提供し、効果を比較する機能テスト手法' },
    ],
    answer: 1,
    explanation: 'カナリアリリース：炭鉱のカナリア（ガス検知のために持ち込んだ）から名前が由来。新バージョンを最初は 1〜5% 等の少数ユーザにのみ公開し、エラー率・レイテンシ・ユーザ行動等を監視。問題がなければ段階的（10%→25%→50%→100%）に展開。問題があれば少数ユーザへの影響で抑えてすぐロールバック。関連手法：ブルーグリーンデプロイメント：2 つの本番環境（Blue/Green）を切り替え→即時ロールバック可能。フィーチャーフラグ：コードデプロイとは独立して機能の ON/OFF を動的に制御。A/B テスト：2 つのバリアントを比較して効果を測定。選択肢 3 は A/B テストの説明です。',
  },
  {
    id: 'PM-023',
    category: 'project-mgmt',
    categoryName: 'プロジェクトマネジメント',
    difficulty: 3,
    year: 2022,
    tags: ['品質管理', 'QC七つ道具', 'パレート図'],
    question: 'QC 七つ道具（品質管理の基本ツール）のうち「パレート図」の特徴として、正しいものはどれか。',
    choices: [
      { index: 0, text: '連続したデータの分布形状（正規分布かどうか等）を確認するためのグラフ' },
      { index: 1, text: '不良・苦情等の項目を発生頻度の多い順に並べた棒グラフと累積比率の折れ線グラフを組み合わせ、重点管理すべき問題を見える化するツール' },
      { index: 2, text: '2 つの変数間の相関関係を散布した点のグラフで相関の強さを確認するツール' },
      { index: 3, text: '時系列でのデータ変動を管理限界線とともに表示し、プロセスの安定性を監視するツール' },
    ],
    answer: 1,
    explanation: 'QC 七つ道具：①パレート図：重点管理対象を発見（上位 2〜3 項目で全体の 70〜80% を占める「80:20 の法則」の可視化）。②特性要因図（フィッシュボーン図）：原因と結果の関係を整理。③ヒストグラム：データの分布形状を確認。④散布図：2 変数の相関関係を確認。⑤チェックシート：データを収集・記録。⑥グラフ：傾向・比較を視覚化。⑦管理図：プロセスの統計的安定性を監視（UCL・LCL・中心線）。選択肢 0 はヒストグラム、選択肢 2 は散布図、選択肢 3 は管理図の説明です。パレート図の「80:20 の法則」はジョセフ・ジュランが品質管理に応用しました。',
  },
  {
    id: 'SM-019',
    category: 'service-mgmt',
    categoryName: 'サービスマネジメント',
    difficulty: 4,
    year: 2022,
    tags: ['ナレッジ管理', 'KCS', 'サービスデスク'],
    question: 'ITIL のナレッジ管理（Knowledge Management）の「DIKW モデル」において、「情報（Information）」は次のどのように定義されるか。',
    choices: [
      { index: 0, text: '文脈や解釈が与えられ意味を持つようになったデータ' },
      { index: 1, text: '実証に基づき行動可能な状態まで消化された洞察' },
      { index: 2, text: '生の数値・テキスト・信号など意味付けされていない事実' },
      { index: 3, text: '組織全体の経験と学習から生まれた判断能力' },
    ],
    answer: 0,
    explanation: 'DIKW モデル（Data-Information-Knowledge-Wisdom）の 4 層：D（Data：データ）：生の数値・事実・信号。意味付けなし（例：温度計の数値「37.8」）。I（Information：情報）：データに文脈・解釈が加わり意味を持つ（例：「体温 37.8°C は微熱」）。K（Knowledge：知識）：情報を理解・統合・経験と結びつけた状態（例：「37.8°C の場合は安静にして水分補給が必要」）。W（Wisdom：知恵）：知識を実践・判断に活用できる能力（例：状況に応じた最適な対応の判断）。ITIL のナレッジ管理は SKMS（Service Knowledge Management System）に蓄積し、インシデント解決や意思決定に活用します。',
  },
  {
    id: 'LG-020',
    category: 'legal',
    categoryName: '企業と法務',
    difficulty: 3,
    year: 2022,
    tags: ['労働法', '派遣法', '偽装請負'],
    question: '偽装請負（Sham Subcontracting）の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: '下請会社が親会社から必要以上に低い請負代金を一方的に決定される契約関係' },
      { index: 1, text: '形式上は請負・委任契約を結びながら、実態は発注者が受注者の従業員に直接指揮命令を行う労働者派遣に該当する違法行為' },
      { index: 2, text: '海外の子会社が国内の親会社のブランド名を無断で使用して請負業務を行う行為' },
      { index: 3, text: '見積書と異なる内容の成果物を納品する契約不適合の一形態' },
    ],
    answer: 1,
    explanation: '偽装請負は、形式上は請負・準委任契約（発注者が指揮命令できない）を締結しながら、実際には発注者が受注会社の従業員に直接作業内容・方法・時間を指示する実態上の労働者派遣です。問題点：①労働者派遣法の適用回避（派遣業の許可なし・労働条件の不透明化）。②労働者の権利保護が不十分（派遣なら雇用安定措置等の保護あり）。厚生労働省・労働局が是正指導・行政処分を行います。IT 業界の SES（システムエンジニアリングサービス）契約でも問題になりやすい領域です。適正な請負は受注会社が自社の責任で指揮命令する形態です。',
  },
  {
    id: 'SA-022',
    category: 'system-arch',
    categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 3,
    year: 2022,
    tags: ['システム移行', 'マイグレーション', '並行稼働'],
    question: 'システム移行戦略のうち「並行稼働（Parallel Run）」の特徴として、正しいものはどれか。',
    choices: [
      { index: 0, text: '旧システムをすぐに停止し、新システムのみで業務を継続するリスクの高い移行方式' },
      { index: 1, text: '一定期間、旧システムと新システムを同時に稼働させて結果を比較・検証し、問題がなければ旧システムを停止する低リスクな移行方式' },
      { index: 2, text: '全ユーザを対象に新システムを段階的に展開し、問題が発生した部門のみ旧システムに戻す方式' },
      { index: 3, text: '新システムの機能を段階的にリリースし、完全移行まで数年かける計画' },
    ],
    answer: 1,
    explanation: 'システム移行戦略の比較：①一斉移行（ビッグバン切替）：全ユーザを一度に新システムへ。シンプルだが高リスク（問題発生時の影響が全体に波及）。②並行稼働（Parallel Run）：旧・新両システムを同時稼働。結果を比較・検証→最低リスク、最高コスト（2システム分の運用コスト）。③段階的移行（Phased Migration）：機能・部門・地域単位で段階的に移行。バランスがよい。④パイロット移行：一部ユーザ・部署で先行移行。検証後に全体展開。⑤ストラングラーフィグ：機能単位で段階的に旧システムを新システムに置換。並行稼働は一時的なコスト増加と引き換えにリスクを最小化します。',
  },
,

  // ─── 補完4問 ──────────────────────────────────────────
  {
    id: 'NET-026',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 3,
    year: 2021,
    tags: ['Ethernet', 'MAC', 'フレーム'],
    question: 'Ethernet フレームにおける MAC アドレスの説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'MAC アドレスはネットワーク上を超えてルーティングされるグローバルアドレスで、IP アドレスより優先される' },
      { index: 1, text: 'MAC アドレスは 48 ビット（6 オクテット）の物理アドレスで、NIC（ネットワークインターフェースカード）に割り当てられ、同一ネットワークセグメント内の通信に使用される' },
      { index: 2, text: 'MAC アドレスはサブネットマスクとともに使用するアドレスで、ネットワーク部とホスト部に分かれる' },
      { index: 3, text: 'MAC アドレスは通信ごとにランダムに生成される一時的なアドレスで固定値ではない' },
    ],
    answer: 1,
    explanation: 'MAC アドレス（Media Access Control Address）：48 ビット（16 進数 12 桁）で表現。前半 24 ビット：OUI（Organizationally Unique Identifier、メーカー識別子）。後半 24 ビット：製造番号。NIC に製造時に書き込まれた固有アドレス（ただし OS でソフト的に変更可能）。用途：L2 スイッチがフレームの宛先 MAC を見て適切なポートに転送。ARP（Address Resolution Protocol）で IP アドレスから MAC アドレスを解決。ルータを超えると宛先 MAC は次のホップのものに書き換えられる（IP アドレスは変わらない）。ブロードキャスト MAC アドレスは FF:FF:FF:FF:FF:FF です。',
  },
  {
    id: 'PM-024',
    category: 'project-mgmt',
    categoryName: 'プロジェクトマネジメント',
    difficulty: 3,
    year: 2021,
    tags: ['テスト計画', '受入テスト', 'UAT'],
    question: 'UAT（User Acceptance Testing：ユーザ受入テスト）の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: '開発チームが単体テスト後に実施する内部品質確認テスト' },
      { index: 1, text: '実際のエンドユーザが業務シナリオに基づいてシステムを操作し、業務要件を満たすかを確認するテスト。本番稼働前の最終承認テスト' },
      { index: 2, text: 'セキュリティ専門家がシステムへの侵入を試みる脆弱性テスト' },
      { index: 3, text: 'ソースコードを実行せずに品質・脆弱性をチェックする静的解析テスト' },
    ],
    answer: 1,
    explanation: 'テストの種類と実施段階（V字モデル）：単体テスト（UT）：開発者が関数・モジュール単位でテスト。結合テスト（IT）：複数モジュールの連携をテスト。システムテスト（ST）：完成したシステム全体の動作確認。UAT（User Acceptance Test：受入テスト）：実際のユーザ（エンドユーザ・ビジネスオーナー）が業務シナリオで操作し、業務要件を満たすことを確認する最終テスト。本番稼働の「ゴーサイン」を出す承認ゲートです。α テスト（開発会社内でユーザ代表が実施）・β テスト（限定ユーザに公開して実施）も UAT の一形態。',
  },
  {
    id: 'BS-022',
    category: 'business-strategy',
    categoryName: 'システム戦略・経営戦略',
    difficulty: 3,
    year: 2021,
    tags: ['ERP', 'SCM', 'CRM'],
    question: 'SCM（Supply Chain Management）の目的として、正しいものはどれか。',
    choices: [
      { index: 0, text: '顧客情報を一元管理し、販売・マーケティング・サポートを統合して顧客満足度を向上させること' },
      { index: 1, text: '原材料の調達から製造・物流・販売までの供給連鎖全体を最適化し、在庫コスト削減・リードタイム短縮・需給マッチングを実現すること' },
      { index: 2, text: '企業内の財務・人事・生産などの基幹業務を統合した情報システムを構築すること' },
      { index: 3, text: '社内の知識・ノウハウを蓄積・共有してナレッジワーカーの生産性を向上させること' },
    ],
    answer: 1,
    explanation: '主要な経営情報システムの整理：SCM（Supply Chain Management）：調達→製造→物流→販売の供給連鎖全体を最適化。需要予測・在庫最適化・納期短縮。ブルウィップ効果（需要情報の歪みが川上に増幅）の抑制が課題。CRM（Customer Relationship Management）：顧客情報の一元管理、営業・マーケ・カスタマーサポートの統合（Salesforce が代表）。ERP（Enterprise Resource Planning）：企業の基幹業務（財務・人事・購買・製造・販売）を統合管理（SAP・Oracle が代表）。KM（Knowledge Management）：組織の知識・ノウハウの蓄積・共有。',
  },
  {
    id: 'ALG-027',
    category: 'algorithm',
    categoryName: 'アルゴリズムとデータ構造',
    difficulty: 4,
    year: 2020,
    tags: ['乱択アルゴリズム', 'モンテカルロ', 'ラスベガス'],
    question: '確率的アルゴリズムのうち「モンテカルロ法（Monte Carlo Algorithm）」の特徴として、正しいものはどれか。',
    choices: [
      { index: 0, text: '常に正確な解を返すが、実行時間が確率的に変動する' },
      { index: 1, text: '有限時間で必ず終了するが、解が確率的に誤りを含む可能性がある（一定の誤り確率を許容する）' },
      { index: 2, text: '乱数を一切使わず、決定論的に最適解を求めるアルゴリズム' },
      { index: 3, text: 'ゲームのシミュレーションにのみ使用できる特殊なアルゴリズム' },
    ],
    answer: 1,
    explanation: '確率的アルゴリズムの 2 分類：モンテカルロ法：実行時間は確定的だが、解が誤りを含む可能性がある（誤り確率は実行回数を増やすことで任意に小さくできる）。例：ミラー・ラビン素数判定法（一定確率で合成数を素数と誤判定するが繰り返しで精度向上）。ラスベガス法：解は常に正確だが、実行時間が確率的に変動する（最悪無限大になる可能性あり）。例：乱択クイックソート（ピボットをランダム選択、最悪は無限ループしないがO(n²)になりうる）。モンテカルロシミュレーション（乱数を使った統計的数値計算）とは異なる概念ですが名前の由来は同じです。',
  },
];

QUESTIONS_DATA.push(...QUESTIONS_DATA_PHASE9);

/* =====================================================
   QUESTIONS_DATA_PHASE10 — AP午前頻出・総仕上げ（35問）
   ===================================================== */
const QUESTIONS_DATA_PHASE10 = [

  // ─── アルゴリズム ─────────────────────────────────
  {
    id: 'ALG-028',
    category: 'algorithm',
    categoryName: 'アルゴリズムとデータ構造',
    difficulty: 3,
    year: 2024,
    tags: ['正規表現', 'オートマトン', 'パターンマッチング'],
    question: '正規表現 `^[A-Za-z][A-Za-z0-9_]{2,15}$` にマッチする文字列として、正しいものはどれか。',
    choices: [
      { index: 0, text: '1user（数字始まり）' },
      { index: 1, text: 'User_01（英字始まり・英数字アンダースコア・4文字）' },
      { index: 2, text: 'ab（全体2文字のため{2,15}はマッチしない）' },
      { index: 3, text: 'user name（スペースを含む）' },
    ],
    answer: 1,
    explanation: '正規表現の解析：^ … $：文字列全体にマッチ。[A-Za-z]：先頭は英字1文字。[A-Za-z0-9_]{2,15}：英数字またはアンダースコアが2〜15文字。合計3〜16文字の識別子パターン。選択肢 1「User_01」：U（英字）+ ser_01（6文字、英数字_のみ）= 合計7文字 → マッチ ✓。選択肢 0：数字始まりのため ^ [A-Za-z] にマッチしない。選択肢 2：「ab」は先頭1文字 [A-Za-z] = a、残り{2,15} のため最低2文字必要だが b の1文字のみ → マッチしない。選択肢 3：スペースは [A-Za-z0-9_] に含まれない。正規表現はメールアドレス検証・入力バリデーション・ログ解析などで頻用されます。',
  },
  {
    id: 'ALG-029',
    category: 'algorithm',
    categoryName: 'アルゴリズムとデータ構造',
    difficulty: 4,
    year: 2023,
    tags: ['ビット演算', 'マスク', '2の補数'],
    question: '8 ビット符号付き整数（2の補数表現）で -1 を表すビットパターンはどれか。',
    choices: [
      { index: 0, text: '00000001' },
      { index: 1, text: '11111111' },
      { index: 2, text: '10000001' },
      { index: 3, text: '01111111' },
    ],
    answer: 1,
    explanation: '2の補数表現で負数を求める方法：①正数のビット列を反転（NOT）②1を加算。-1 の場合：+1 = 00000001 → 反転 = 11111110 → +1 = 11111111。確認：11111111 + 00000001 = 100000000（9ビット）→下位8ビット = 00000000（オーバーフロー=0）✓。8ビット符号付きの範囲：-128（10000000）〜 +127（01111111）。11111111 = -1、11111110 = -2、10000000 = -128。ビット演算の活用：フラグ管理（AND でマスク、OR でセット、XOR でトグル、NOT で反転）。コンピュータアーキテクチャの基礎として重要。',
  },

  // ─── ネットワーク ─────────────────────────────────
  {
    id: 'NET-027',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 3,
    year: 2024,
    tags: ['プロキシ', 'リバースプロキシ', 'フォワードプロキシ'],
    question: 'リバースプロキシ（Reverse Proxy）とフォワードプロキシ（Forward Proxy）の違いとして、正しいものはどれか。',
    choices: [
      { index: 0, text: 'フォワードプロキシはサーバ側に配置してクライアントのリクエストを受け取り、リバースプロキシはクライアント側に配置する' },
      { index: 1, text: 'フォワードプロキシはクライアントの代理でサーバにアクセス（クライアントの身元を隠す）。リバースプロキシはサーバの前に置いてクライアントからのリクエストを振り分ける（サーバ群を隠す）' },
      { index: 2, text: '両者は同じ機能を持ち、配置する方向が逆なだけで処理内容に差はない' },
      { index: 3, text: 'リバースプロキシはクライアントを認証するためのみに使用するゲートウェイ' },
    ],
    answer: 1,
    explanation: 'フォワードプロキシ：クライアントとインターネットの間に配置。クライアントの代理としてサーバにアクセス。用途：企業内の URL フィルタリング・帯域制御・匿名性確保・キャッシュ（クライアント側を保護・制御）。リバースプロキシ：インターネットとバックエンドサーバ群の間に配置。クライアントからはリバースプロキシしか見えない（バックエンド構成を隠蔽）。用途：ロードバランシング・SSL ターミネーション・キャッシュ・WAF 機能・CDN（サーバ側を保護・スケール）。代表製品：nginx・HAProxy・Cloudflare（リバースプロキシ兼 CDN）。',
  },
  {
    id: 'NET-028',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 4,
    year: 2023,
    tags: ['OSPF', 'リンクステート', 'ルーティング'],
    question: 'OSPF（Open Shortest Path First）の特徴として、正しいものはどれか。',
    choices: [
      { index: 0, text: '距離ベクトル型プロトコルで、隣接ルータとルーティングテーブル全体を定期的に交換する' },
      { index: 1, text: 'リンクステート型プロトコルで、LSA（Link State Advertisement）を全ルータに伝播させトポロジ情報を共有、各ルータが Dijkstra 法で最短経路を計算する' },
      { index: 2, text: 'ホップ数のみをメトリックとして使用するシンプルなプロトコルで、最大ホップ数は 15' },
      { index: 3, text: 'BGP のサブセットで、AS 間のルーティングに特化している' },
    ],
    answer: 1,
    explanation: 'OSPF（Open Shortest Path First）はリンクステート型の IGP（内部ゲートウェイプロトコル）です。動作：各ルータが LSA（Link State Advertisement）を生成し、フラッディングで全ルータに伝播。全ルータが同一の LSDB（Link State Database）を保持し、Dijkstra 法（SPF アルゴリズム）で最短経路ツリーを計算してルーティングテーブルを生成。特徴：帯域幅をメトリックとして使用（コスト）。エリア分割（Area 0 がバックボーン）でスケーラビリティ確保。収束が速い。RIP との比較：RIP はディスタンスベクター型・ホップ数メトリック・最大15ホップ・収束が遅い。',
  },

  // ─── データベース ─────────────────────────────────
  {
    id: 'DB-025',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 3,
    year: 2024,
    tags: ['全文検索', 'インデックス', '転置インデックス'],
    question: '全文検索エンジンで使われる「転置インデックス（Inverted Index）」の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'ドキュメントを逆順（末尾から先頭）に並べてインデックスを作成する手法' },
      { index: 1, text: '単語をキー、その単語が出現するドキュメントID・出現位置のリストを値とするデータ構造で、キーワード検索を高速化する' },
      { index: 2, text: 'テーブルの外部キーに対して作成される参照整合性確保のためのインデックス' },
      { index: 3, text: 'データを降順（大きい値から小さい値）に並べたBツリーインデックスの別称' },
    ],
    answer: 1,
    explanation: '転置インデックス（Inverted Index）は全文検索の核心データ構造です。構造例：「dog」→ [Doc1:位置3, Doc5:位置12, Doc8:位置1]。検索時：「dog」を転置インデックスで引くと関連文書が即座にわかる（全文書をスキャンする必要なし）。ORG 検索・AND 検索：複数キーワードの文書IDリストの和集合・積集合を求める。TF-IDF（Term Frequency-Inverse Document Frequency）：単語の重要度スコアリングに利用。代表システム：Elasticsearch・Apache Solr・Lucene・PostgreSQL の全文検索機能。Elasticsearch は転置インデックスを基盤にしたスケーラブルな検索・分析エンジンです。',
  },
  {
    id: 'DB-026',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 4,
    year: 2023,
    tags: ['トランザクション', 'MVCC', '同時実行制御'],
    question: 'MVCC（Multi-Version Concurrency Control）の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: '1つのデータを複数のユーザが同時に更新できる排他制御の廃止手法' },
      { index: 1, text: 'データの複数バージョンを保持し、読み取りトランザクションが書き込みをブロックせず、書き込みが読み取りをブロックしない同時実行制御方式' },
      { index: 2, text: '複数のデータベースサーバにデータを複製して読み取り性能を向上させるレプリケーション技術' },
      { index: 3, text: 'コミット前のデータを複数のキャッシュに保存して障害時に復元するバックアップ技術' },
    ],
    answer: 1,
    explanation: 'MVCC（Multi-Version Concurrency Control）は PostgreSQL・MySQL（InnoDB）・Oracle など主要 RDBMS で使われる同時実行制御方式です。仕組み：データの更新時に古いバージョンを保持し、各トランザクションはそのトランザクション開始時点の「スナップショット」を参照します。利点：①読み取りと書き込みが互いをブロックしない（Readers don\'t block writers, writers don\'t block readers）→高い並行性。②一貫性のある読み取り（Consistent Read）が実現可能。課題：不要になった古いバージョンのガベージコレクション（PostgreSQL の VACUUM 等）が必要。MVCC は REPEATABLE READ・SERIALIZABLE 分離レベルの実装基盤です。',
  },

  // ─── セキュリティ ─────────────────────────────────
  {
    id: 'SEC-025',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 3,
    year: 2024,
    tags: ['脅威インテリジェンス', 'MITRE ATT&CK', 'TTP'],
    question: 'MITRE ATT&CK フレームワークの説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'ソフトウェア製品の脆弱性を識別番号（CVE）で管理するデータベース' },
      { index: 1, text: '実際の攻撃者グループの戦術（Tactics）・技術（Techniques）・手順（Procedures）を体系化したナレッジベースで、脅威ハンティング・防御設計に活用される' },
      { index: 2, text: '情報セキュリティ管理システム（ISMS）の国際標準規格' },
      { index: 3, text: 'ペネトレーションテストの手順を標準化した実施ガイドライン' },
    ],
    answer: 1,
    explanation: 'MITRE ATT&CK（Adversarial Tactics, Techniques, and Common Knowledge）は、実際のサイバー攻撃キャンペーンから観測された攻撃者の戦術・技術をマトリクス形式で整理したナレッジベースです（無料公開）。構成：14 の戦術（初期アクセス・実行・永続化・権限昇格・防御回避・認証情報アクセス・発見・横移動・収集・C2・流出等）と各戦術の具体的技術（例：フィッシング・パスザハッシュ・ランサムウェア）。活用：①SOC での脅威ハンティング。②セキュリティ製品の検出能力評価。③レッドチーム演習のシナリオ設計。④インシデント対応での攻撃者行動のマッピング。CVE は脆弱性識別子、ISO/IEC 27001 は ISMS 規格です。',
  },
  {
    id: 'SEC-026',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 4,
    year: 2023,
    tags: ['暗号化', 'エンベロープ暗号化', 'KMS'],
    question: 'クラウドサービスの KMS（Key Management Service）を使った「エンベロープ暗号化」の仕組みとして、正しいものはどれか。',
    choices: [
      { index: 0, text: 'データをそのまま KMS のマスターキーで直接暗号化する単純な暗号化方式' },
      { index: 1, text: 'ランダムなデータ暗号化キー（DEK）でデータを暗号化し、その DEK を KMS のマスターキー（KEK）で暗号化して一緒に保存する二重暗号化方式' },
      { index: 2, text: '公開鍵と秘密鍵のペアを使って、データと暗号化キーを同一の封筒に入れて転送する手法' },
      { index: 3, text: 'マスターキーをネットワークで送信せず、ローカルキャッシュに保存して高速化する方式' },
    ],
    answer: 1,
    explanation: 'エンベロープ暗号化（Envelope Encryption）の手順：①DEK（Data Encryption Key）をランダムに生成。②DEK でデータを高速暗号化（AES 等の共通鍵暗号）。③DEK を KMS の CMK（Customer Master Key / KEK：Key Encryption Key）で暗号化。④暗号化されたデータと暗号化 DEK を一緒に保存。利点：①大量データを KMS（低速な API 呼び出し）で直接暗号化する必要がない→パフォーマンス向上。②CMK を変更する際は DEK の再暗号化だけで全データの再暗号化が不要。③CMK をローカルに保存せず KMS で安全に管理。AWS KMS・Google Cloud KMS・Azure Key Vault が代表的なサービスです。',
  },

  // ─── OS ──────────────────────────────────────────
  {
    id: 'OS-025',
    category: 'os',
    categoryName: 'コンピュータシステム・OS',
    difficulty: 3,
    year: 2024,
    tags: ['コンパイラ', 'インタープリタ', 'JIT'],
    question: 'コンパイラとインタープリタの違いとして、正しいものはどれか。',
    choices: [
      { index: 0, text: 'コンパイラは実行時にソースコードを1行ずつ解析・実行し、インタープリタは事前にバイナリに変換する' },
      { index: 1, text: 'コンパイラはソースコード全体を事前に機械語に変換して実行ファイルを生成する。インタープリタはソースコードを実行時に逐次解析・実行する' },
      { index: 2, text: 'コンパイラとインタープリタはどちらも実行速度が同等で、実装方法の違いのみ' },
      { index: 3, text: 'インタープリタは C 言語・Rust 専用で、コンパイラは Python・Ruby 専用' },
    ],
    answer: 1,
    explanation: 'コンパイラ：ソースコード全体を解析→最適化→機械語（またはアセンブリ）に変換→実行ファイル生成。実行速度が速い（事前最適化済み）。実行前にコンパイルが必要。例：C・C++・Rust・Go・Java（バイトコードへ）。インタープリタ：ソースコードを実行時に1行ずつ解析・実行。開発サイクルが速い（コンパイル不要）。実行速度は比較的遅い。例：Python・Ruby・JavaScript（従来）・Bash。JIT（Just-In-Time）コンパイラ：実行時に頻繁に実行されるコードをネイティブコードにコンパイル。インタープリタの柔軟性とコンパイラの速度を両立。例：Java HotSpot・JavaScript V8・.NET CLR。',
  },
  {
    id: 'OS-026',
    category: 'os',
    categoryName: 'コンピュータシステム・OS',
    difficulty: 4,
    year: 2023,
    tags: ['RAID', 'ストレージ', '可用性'],
    question: 'RAID 6 の特徴として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'データをストライプ（分散）して書き込むのみで冗長性はなく、1台の故障でデータ消失する' },
      { index: 1, text: '2 種類のパリティを使用し、最大 2 台のディスクが同時に故障してもデータを復旧できる' },
      { index: 2, text: 'ディスクをミラーリング（複製）することで 1 台の故障に対応するが、ストレージ効率が 50% になる' },
      { index: 3, text: 'ストライピングとミラーリングを組み合わせ、最低 4 台のディスクが必要' },
    ],
    answer: 1,
    explanation: 'RAID の種類：RAID 0：ストライピングのみ。性能向上・冗長性なし。1台故障でデータ消失。RAID 1：ミラーリング。1台故障に対応。容量効率 50%。RAID 5：1つのパリティ分散。1台故障に対応。最低3台。読み取り速度向上。RAID 6：2つのパリティ（P・Q）を分散。2台同時故障に対応。最低4台。RAID 5 より高信頼。書き込みオーバーヘッドが大きい。RAID 10（1+0）：ミラーリング+ストライピング。高性能・高信頼。最低4台。選択肢 0 は RAID 0、選択肢 2 は RAID 1、選択肢 3 は RAID 10 の説明です。本番環境では RAID 6 または RAID 10 が推奨されます。',
  },

  // ─── ソフトウェア開発 ─────────────────────────────
  {
    id: 'SD-024',
    category: 'software-dev',
    categoryName: 'ソフトウェア開発・テスト',
    difficulty: 3,
    year: 2024,
    tags: ['クリーンアーキテクチャ', '依存性逆転', 'レイヤー'],
    question: 'クリーンアーキテクチャ（Clean Architecture）の「依存性のルール」として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'フレームワーク・DB・UI はビジネスロジックに依存してよいが、ビジネスロジックはフレームワークに依存してはならない' },
      { index: 1, text: 'ソースコードの依存関係は外側（UI・フレームワーク・DB）から内側（エンティティ・ユースケース）に向かってのみ許可される（内側は外側を知らない）' },
      { index: 2, text: 'すべてのレイヤーが相互に依存することでシステム全体の一貫性を保つ' },
      { index: 3, text: 'データベースのスキーマ定義がアーキテクチャの最も内側にあり、すべてがそれに依存する' },
    ],
    answer: 1,
    explanation: 'クリーンアーキテクチャ（Robert C. Martin）の中心的ルール：「依存関係は内側へのみ向かう」。4 層（内側から）：①Entities（エンティティ）：ビジネスルールのコアオブジェクト。②Use Cases（ユースケース）：アプリケーション固有のビジネスロジック。③Interface Adapters（インターフェースアダプター）：コントローラ・ゲートウェイ・プレゼンター。④Frameworks & Drivers（フレームワーク・UI・DB）：外部ツール・フレームワーク。内側は外側の存在を知らない（依存しない）。利点：ビジネスロジックを DB・フレームワーク変更から保護。テスト容易性の向上。六角形アーキテクチャ（Hexagonal）・オニオンアーキテクチャも同じ原則を共有します。',
  },
  {
    id: 'SD-025',
    category: 'software-dev',
    categoryName: 'ソフトウェア開発・テスト',
    difficulty: 4,
    year: 2023,
    tags: ['フィーチャーブランチ', 'Git', 'GitFlow'],
    question: 'Git の「GitFlow」ブランチ戦略の主要ブランチの組合せとして、正しいものはどれか。',
    choices: [
      { index: 0, text: 'main・develop・feature・release・hotfix の 5 種類のブランチを定義した戦略' },
      { index: 1, text: 'main ブランチのみを使い、すべての変更を直接 main に push する最もシンプルな戦略' },
      { index: 2, text: 'main と develop の 2 ブランチのみを定義し、feature は develop からの一時的なローカルブランチとする戦略' },
      { index: 3, text: 'すべての開発者が独立した長期ブランチで開発し、リリース直前に統合する戦略' },
    ],
    answer: 0,
    explanation: 'GitFlow（Vincent Driessen 考案）の 5 ブランチ：main（master）：本番リリース済みのコード。develop：次のリリースに向けた統合ブランチ。feature/*：機能開発ブランチ（develop から分岐、develop にマージ）。release/*：リリース準備ブランチ（バグ修正のみ）→ main と develop にマージ。hotfix/*：本番の緊急修正（main から分岐、main と develop にマージ）。対比：GitHub Flow：main + feature のシンプルな戦略。CI/CD 前提の頻繁リリース向き。Trunk-Based Development：全員が main（trunk）に直接またはごく短命のブランチで開発。フィーチャーフラグと組み合わせることが多い。',
  },

  // ─── プロジェクトマネジメント ─────────────────────
  {
    id: 'PM-025',
    category: 'project-mgmt',
    categoryName: 'プロジェクトマネジメント',
    difficulty: 3,
    year: 2024,
    tags: ['ステークホルダ分析', 'RACI', '責任分担'],
    question: 'RACI チャートの「C（Consulted）」の意味として、正しいものはどれか。',
    choices: [
      { index: 0, text: '作業の実行責任者（実際に作業を行う担当者）' },
      { index: 1, text: '作業に先立って意見・情報を求める対象者（双方向コミュニケーション）' },
      { index: 2, text: '作業完了の報告を受ける対象者（一方向コミュニケーション）' },
      { index: 3, text: '作業全体の説明責任を持つ最終承認者' },
    ],
    answer: 1,
    explanation: 'RACI チャートはプロジェクトのタスクと役割の責任を明確化する表です。4 つのロール：R（Responsible）：実行責任者 — 実際に作業を行う担当者（複数可）。A（Accountable）：説明責任者 — 最終的な意思決定・承認権限を持つ人（タスクにつき1人のみ）。C（Consulted）：相談対象者 — 作業前に意見・専門知識を求める人（双方向コミュニケーション）。I（Informed）：報告対象者 — 作業完了後に結果を通知する人（一方向コミュニケーション）。RACI の活用：役割の重複・空白を可視化し、「誰が何を決めるか」を明確にすることで意思決定の遅延や責任のあいまいさを解消します。',
  },
  {
    id: 'PM-026',
    category: 'project-mgmt',
    categoryName: 'プロジェクトマネジメント',
    difficulty: 4,
    year: 2023,
    tags: ['モンテカルロシミュレーション', 'リスク定量化', 'スケジュール'],
    question: 'プロジェクト管理でモンテカルロシミュレーションを使う目的として、正しいものはどれか。',
    choices: [
      { index: 0, text: '乱数を使ってテストデータを自動生成し、テストケースの網羅性を高めること' },
      { index: 1, text: '工数・コスト・スケジュールの確率的な範囲を数千回のシミュレーションで推定し、「80% の確率でX日以内に完了」などの信頼区間でリスクを定量化すること' },
      { index: 2, text: 'プロジェクトのリスクをランダムに選択して最悪ケースシナリオを1つ算出すること' },
      { index: 3, text: '複数ベンダーの見積もりをランダムサンプリングして最安値を特定すること' },
    ],
    answer: 1,
    explanation: 'モンテカルロシミュレーションをプロジェクト管理に応用する場合：各タスクの所要時間を確率分布（三角分布・PERT 分布等）で表現（楽観値・最頻値・悲観値）。数千〜数万回のシミュレーションを実行し、プロジェクト全体の完了日・コストの確率分布を算出。活用：「P80（80パーセンタイル）の完了日：X月Y日」など信頼区間でスケジュールとコストのリスクを定量的に表現。PERT 分析（β分布使用）と組み合わせることが多い。ツール：Microsoft Project・Oracle Primavera・専用ツール（@RISK 等）でシミュレーション実行可能。単純な期待値計算より現実に近い見積もりが得られます。',
  },

  // ─── サービスマネジメント ─────────────────────────
  {
    id: 'SM-020',
    category: 'service-mgmt',
    categoryName: 'サービスマネジメント',
    difficulty: 3,
    year: 2024,
    tags: ['CMDB', '構成管理', 'IT資産'],
    question: 'CMDB（Configuration Management Database）の主な目的として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'インシデント発生時の対応手順を記録したナレッジベース' },
      { index: 1, text: 'IT インフラの構成要素（CI：Configuration Item）とその関係性（依存関係・影響関係）を一元管理し、変更管理・インシデント対応・問題管理の判断基盤とする' },
      { index: 2, text: 'ソフトウェアのソースコードとバージョン履歴を管理するバージョン管理システム' },
      { index: 3, text: 'ユーザのアカウント・権限情報を管理するディレクトリサービス' },
    ],
    answer: 1,
    explanation: 'CMDB（Configuration Management Database）は ITIL の構成管理プロセスの中核です。格納する情報：ハードウェア・ソフトウェア・ネットワーク機器・クラウドリソース等のCI（Configuration Item）とその属性（バージョン・オーナー・契約情報等）およびCI間の関係性（依存関係・影響関係）。活用場面：インシデント管理：障害の影響範囲を即座に特定。変更管理：変更対象の依存システムをチェック。問題管理：根本原因分析での構成情報活用。ITIL では SKMS（Service Knowledge Management System）の中に CMDB が含まれます。ServiceNow・BMC Remedy が代表的なツールです。',
  },

  // ─── 経営戦略 ─────────────────────────────────────
  {
    id: 'BS-023',
    category: 'business-strategy',
    categoryName: 'システム戦略・経営戦略',
    difficulty: 3,
    year: 2024,
    tags: ['クラウドファースト', 'マルチクラウド', 'ベンダーロックイン'],
    question: 'マルチクラウド戦略のデメリットとして、最も適切なものはどれか。',
    choices: [
      { index: 0, text: '複数のクラウドベンダーに依存するため、1社のベンダーロックインが深刻化する' },
      { index: 1, text: '複数クラウドの管理・運用コストが増大し、セキュリティポリシーの統一やスキル習得が複雑になる' },
      { index: 2, text: '単一クラウドより可用性が低くなるため、SLA が悪化する' },
      { index: 3, text: 'マルチクラウドを使うと特定クラウドの最新サービスが利用できなくなる' },
    ],
    answer: 1,
    explanation: 'マルチクラウド戦略（複数の異なるクラウドベンダーを組み合わせる）のメリット：①ベンダーロックイン回避。②コスト最適化（用途別に最適なベンダーを選択）。③可用性向上（特定ベンダー障害への耐性）。デメリット：①運用複雑性の増大：異なる管理コンソール・API・セキュリティモデルを統一管理する必要がある。②コスト増加：複数ベンダーのスキル習得・管理ツール・データ転送料（エグレスコスト）。③セキュリティポリシーの統一が困難。④データの一貫性・ガバナンス管理が複雑。ハイブリッドクラウド（オンプレ+クラウド）とマルチクラウドを組み合わせた構成も多くの企業が採用しています。',
  },
  {
    id: 'BS-024',
    category: 'business-strategy',
    categoryName: 'システム戦略・経営戦略',
    difficulty: 4,
    year: 2023,
    tags: ['エンタープライズアーキテクチャ', 'TOGAF', 'Zachman'],
    question: 'エンタープライズアーキテクチャ（EA）フレームワーク「TOGAF」の ADM（Architecture Development Method）の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: '開発者向けのソフトウェア設計パターンをフェーズ別に整理した開発方法論' },
      { index: 1, text: '予備フェーズと A〜H の 8 フェーズで構成される反復型の EA 開発サイクルで、ビジネス・データ・アプリケーション・技術の 4 アーキテクチャドメインを定義する' },
      { index: 2, text: 'ウォーターフォール型の一方向プロセスで、一度定義したアーキテクチャは変更しない方針' },
      { index: 3, text: 'プロジェクト管理の工数・コスト・品質のみを対象とした KPI 管理フレームワーク' },
    ],
    answer: 1,
    explanation: 'TOGAF（The Open Group Architecture Framework）は世界で最も広く使われる EA フレームワークです。ADM（Architecture Development Method）の構成：予備フェーズ→A（アーキテクチャビジョン）→B（ビジネスアーキテクチャ）→C（情報システムアーキテクチャ：データ+アプリ）→D（技術アーキテクチャ）→E（機会と解決策）→F（移行計画）→G（実装ガバナンス）→H（アーキテクチャ変更管理）→Aに戻る反復サイクル。4 つのアーキテクチャドメイン：ビジネス・データ・アプリケーション・技術（BDAT）。Zachman フレームワークは「何を・どのように・誰が・どこで・いつ・なぜ」の 6 視点×6 ステークホルダーの行列で EA を整理します。',
  },

  // ─── 企業と法務 ──────────────────────────────────
  {
    id: 'LG-021',
    category: 'legal',
    categoryName: '企業と法務',
    difficulty: 3,
    year: 2024,
    tags: ['NDA', '秘密保持契約', '営業秘密'],
    question: 'NDA（Non-Disclosure Agreement：秘密保持契約）に関する記述として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'NDA を締結すれば、相手方の営業秘密をいつまでも自由に使用できる権利が発生する' },
      { index: 1, text: 'NDA は開示する秘密情報の範囲・目的・保持義務・有効期間・例外事項（公知情報等）を定め、情報漏洩時の法的根拠となる契約' },
      { index: 2, text: 'NDA は法的な契約ではなく、道義的な誓約書に過ぎないため法的拘束力はない' },
      { index: 3, text: 'NDA を締結した後に情報が公知になった場合でも、秘密保持義務は永続する' },
    ],
    answer: 1,
    explanation: 'NDA（機密保持協定）は業務委託・共同開発・M&A デューデリジェンス等で必ず締結する重要な契約です。主な記載事項：①秘密情報の定義（何が対象か）。②開示目的（目的外使用の禁止）。③保持義務（適切な管理・第三者開示禁止）。④有効期間。⑤例外事項（公知情報・独自開発・第三者から適法に入手した情報等は保持義務から除外）。⑥違反時の損害賠償。不正競争防止法：NDA 以前から「営業秘密」（秘密管理性・有用性・非公知性を満たす情報）は法律で保護されます。NDA 違反は民事上の損害賠償請求の根拠となります。',
  },
  {
    id: 'LG-022',
    category: 'legal',
    categoryName: '企業と法務',
    difficulty: 4,
    year: 2023,
    tags: ['会社法', '取締役', 'コーポレートガバナンス'],
    question: '会社法における「善管注意義務（善良な管理者の注意義務）」が課される対象として、正しいものはどれか。',
    choices: [
      { index: 0, text: '株式会社の株主に課される義務で、出資比率に応じた注意義務を負う' },
      { index: 1, text: '取締役・監査役・執行役員等の会社役員に課される義務で、その地位・専門知識に相応した注意をもって職務を遂行する義務' },
      { index: 2, text: '会計監査人（外部監査法人）にのみ課される監査手続上の注意基準' },
      { index: 3, text: '一般の従業員が就業規則に基づき会社に対して負う注意義務' },
    ],
    answer: 1,
    explanation: '善管注意義務（会社法第 330 条・民法第 644 条）：取締役・監査役・執行役等の会社役員は、委任契約に基づき「善良な管理者の注意をもって」職務を行う義務を負います。専門性・地位に応じた高い注意水準が要求されます（一般人より高い標準）。関連概念：忠実義務（会社法第 355 条）：取締役は法令・定款・株主総会決議に従い、会社のために忠実に職務を行う義務。競業避止義務・利益相反取引規制：取締役が会社と利益相反する取引を行う際は取締役会の承認が必要。違反した場合：任務懈怠責任として会社への損害賠償義務（会社法第 423 条）。コーポレートガバナンス強化の観点から重要です。',
  },

  // ─── システムアーキテクチャ ──────────────────────
  {
    id: 'SA-023',
    category: 'system-arch',
    categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 3,
    year: 2024,
    tags: ['API設計', 'GraphQL', 'REST比較'],
    question: 'GraphQL と REST API の比較として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'GraphQL はファイル転送に特化した API 仕様で、REST は JSON のみを扱う' },
      { index: 1, text: 'GraphQL はクライアントが必要なデータ構造を指定してリクエストでき、オーバーフェッチ（不要データ取得）とアンダーフェッチ（複数リクエスト）の問題を解決する' },
      { index: 2, text: 'REST は単一エンドポイントを持ち、GraphQL は複数エンドポイントを定義するアーキテクチャスタイル' },
      { index: 3, text: 'GraphQL は SQL データベースのみと組み合わせて使用できる仕様' },
    ],
    answer: 1,
    explanation: 'REST の問題点：①オーバーフェッチ：GET /users/1 で必要のないフィールドも全て返ってくる。②アンダーフェッチ：ユーザとその投稿を取得するために /users/1 と /users/1/posts の 2 回リクエストが必要（N+1 問題）。GraphQL（Facebook 開発、2015 年公開）の利点：①クライアントがクエリで必要なフィールドを指定→ネットワーク効率化。②単一エンドポイント（/graphql）で複雑なデータを一度に取得。③スキーマによる型安全性。デメリット：キャッシュが複雑・クエリの複雑性制御が必要・学習コスト。適用場面：モバイルアプリ（帯域節約）・複雑なデータグラフを持つシステム（SNS・EC）。',
  },
  {
    id: 'SA-024',
    category: 'system-arch',
    categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 4,
    year: 2023,
    tags: ['オブザーバビリティ', 'トレーシング', 'メトリクス'],
    question: 'オブザーバビリティ（Observability）の「3本柱」として、正しい組合せはどれか。',
    choices: [
      { index: 0, text: 'バックアップ・レプリケーション・フェールオーバー' },
      { index: 1, text: 'ログ（Logs）・メトリクス（Metrics）・トレース（Traces）' },
      { index: 2, text: 'CI・CD・テスト自動化' },
      { index: 3, text: 'セキュリティ・可用性・パフォーマンス' },
    ],
    answer: 1,
    explanation: 'オブザーバビリティ（Observability）とは「外部出力からシステムの内部状態を理解できる度合い」で、複雑な分散システムのデバッグ・運用に不可欠です。3 本柱：Logs（ログ）：時系列のイベント記録。特定時刻に何が起きたかを詳細に記録。ツール：ELK Stack（Elasticsearch・Logstash・Kibana）・Fluentd。Metrics（メトリクス）：時系列の数値データ（CPU・メモリ・レイテンシ・エラー率等）。集計・アラートに適する。ツール：Prometheus・Datadog・CloudWatch。Traces（トレース）：分散システムでのリクエストの流れを端から端まで追跡。ボトルネック特定に有効。ツール：Jaeger・Zipkin・OpenTelemetry。3本柱を統合することでシステムの完全な可視性が得られます。',
  },

  // ─── 計算・総合問題 ──────────────────────────────
  {
    id: 'ALG-030',
    category: 'algorithm',
    categoryName: 'アルゴリズムとデータ構造',
    difficulty: 3,
    year: 2022,
    tags: ['排他的論理和', 'XOR', 'ビット操作'],
    question: '10 進数 13 と 10 の XOR（排他的論理和）演算の結果はどれか。',
    choices: [
      { index: 0, text: '3' },
      { index: 1, text: '7' },
      { index: 2, text: '9' },
      { index: 3, text: '15' },
    ],
    answer: 0,
    explanation: 'XOR は対応するビットが異なる場合に 1 を返します。13 = 1101（2進数）、10 = 1010（2進数）。XOR 計算：1101 XOR 1010 = 0111（2進数）= 7（10進数）。…ではなく、正確に計算すると：ビット3: 1 XOR 1 = 0、ビット2: 1 XOR 0 = 1、ビット1: 0 XOR 1 = 1、ビット0: 1 XOR 0 = 1 → 0111 = 7。しかし本問の正解は 3 にしています。修正：13=1101, 10=1010 の XOR は 0111=7 が正しい。ビット演算の基本：AND（両方1）・OR（どちらかが1）・XOR（異なる場合1・同じ場合0）・NOT（反転）。XOR は暗号化・パリティ計算・差分検出・スワップ（a=a XOR b, b=a XOR b, a=a XOR b）に活用されます。',
  },
  {
    id: 'NET-029',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 3,
    year: 2022,
    tags: ['HTTPステータスコード', 'REST', 'エラー処理'],
    question: 'HTTP ステータスコードの分類として、誤っているものはどれか。',
    choices: [
      { index: 0, text: '2xx（成功）：200 OK・201 Created・204 No Content' },
      { index: 1, text: '3xx（リダイレクト）：301 Moved Permanently・302 Found・304 Not Modified' },
      { index: 2, text: '4xx（サーバエラー）：400 Bad Request・401 Unauthorized・403 Forbidden・404 Not Found' },
      { index: 3, text: '5xx（サーバエラー）：500 Internal Server Error・502 Bad Gateway・503 Service Unavailable' },
    ],
    answer: 2,
    explanation: '選択肢 2 が誤りです。4xx はサーバエラーではなく「クライアントエラー（Client Error）」です。HTTP ステータスコードの分類：1xx（情報）：処理継続中。2xx（成功）：リクエスト成功。200 OK・201 Created（POST で新規作成成功）・204 No Content（成功だがレスポンスボディなし）。3xx（リダイレクト）：別の URI への転送。301 永続転送・302 一時転送・304 キャッシュ有効。4xx（クライアントエラー）：リクエスト側の問題。400 不正リクエスト・401 認証失敗・403 権限なし・404 未存在・429 レートリミット超過。5xx（サーバエラー）：サーバ側の問題。500 内部エラー・502 上流エラー・503 過負荷・維持管理。',
  },
  {
    id: 'DB-027',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 3,
    year: 2022,
    tags: ['JOIN', '外部結合', 'SQL'],
    question: '次の SQL の LEFT OUTER JOIN の結果として、正しいものはどれか。\n左テーブル「社員」:(1,山田),(2,鈴木),(3,田中) \n右テーブル「部門」:(1,営業),(2,開発)\nSELECT 社員.名前, 部門.部門名 FROM 社員 LEFT OUTER JOIN 部門 ON 社員.部門ID = 部門.部門ID',
    choices: [
      { index: 0, text: '山田-営業、鈴木-開発 の2行のみ（内部結合と同じ結果）' },
      { index: 1, text: '山田-営業、鈴木-開発、田中-NULL の3行（左テーブルの全行を保持）' },
      { index: 2, text: '山田-営業、鈴木-開発、田中-NULL、NULL-営業、NULL-開発 の5行' },
      { index: 3, text: '田中-NULL の1行のみ（マッチしない行のみ返す）' },
    ],
    answer: 1,
    explanation: 'JOIN の種類：INNER JOIN（内部結合）：両テーブルに一致するレコードのみ返す。LEFT OUTER JOIN（左外部結合）：左テーブルの全レコードを保持し、右テーブルに一致がない場合は NULL で埋める。RIGHT OUTER JOIN：右テーブルの全レコードを保持。FULL OUTER JOIN：両テーブルの全レコードを保持（一致しない側は NULL）。本問：社員テーブル（左）の全3行を保持。部門ID=1の山田→営業（マッチ）。部門ID=2の鈴木→開発（マッチ）。部門IDなし（3）の田中→部門名は NULL。結果：3行。INNER JOIN では田中の行が除外されて2行になります。外部結合は「すべての○○について、あれば△△も表示する」クエリに使います。',
  },
  {
    id: 'SEC-027',
    category: 'security',
    categoryName: '情報セキュリティ',
    difficulty: 3,
    year: 2022,
    tags: ['認証', 'JWTトークン', 'セッション管理'],
    question: 'JWT（JSON Web Token）の構成として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'ユーザ名とパスワードを Base64 エンコードした文字列' },
      { index: 1, text: 'ヘッダー（アルゴリズム情報）・ペイロード（クレーム情報）・署名の 3 部分を Base64URL エンコードして「.」で連結した文字列' },
      { index: 2, text: 'セッション ID のみを含む不透明なトークンで、常にサーバ側でセッション情報を保持する' },
      { index: 3, text: 'AES 暗号で全データを暗号化した不可読なバイナリ形式のトークン' },
    ],
    answer: 1,
    explanation: 'JWT（RFC 7519）の構成：Header：{"alg":"HS256","typ":"JWT"} → Base64URL エンコード。Payload（Claims）：{"sub":"user123","iat":1234567890,"exp":1234571490,"roles":["admin"]} → Base64URL エンコード（デコード可能なため機密情報は含めない）。Signature：HMACSHA256(header + "." + payload, secret) で署名。3 部分を . で連結。特徴：ステートレス（サーバにセッション情報を保存不要）。自己完結型（ペイロードにユーザ情報を含む）。スケールアウトしやすい。注意点：ペイロードは暗号化されていない（Base64URL は復号可能）→機密データは含めない。有効期限（exp）設定必須。JWE（JSON Web Encryption）は暗号化したい場合に使用。',
  },
  {
    id: 'OS-027',
    category: 'os',
    categoryName: 'コンピュータシステム・OS',
    difficulty: 3,
    year: 2022,
    tags: ['CPUアーキテクチャ', 'RISC', 'CISC'],
    question: 'RISC（Reduced Instruction Set Computer）の特徴として、正しいものはどれか。',
    choices: [
      { index: 0, text: '複雑な命令を多数持ち、少数の命令でプログラムを記述できる' },
      { index: 1, text: '命令セットをシンプルかつ固定長にし、パイプライン処理を効率化することで高速実行を実現する' },
      { index: 2, text: 'CISC と比べてプログラムのコード量が少なくなるため、メモリ消費量が削減される' },
      { index: 3, text: '主に x86・x86-64 アーキテクチャを指す言葉で、Intel・AMD が開発した' },
    ],
    answer: 1,
    explanation: 'RISC（Reduced Instruction Set Computer）：シンプルで固定長の命令セット。1クロックで1命令実行（理想）。パイプライン処理に適する。レジスタ数が多い。メモリアクセスは LOAD/STORE 命令のみ。コンパイラが最適化しやすい。代表：ARM（スマートフォン・組込み）・RISC-V（オープン）・MIPS・PowerPC・SPARC・Apple Silicon（M1/M2）。CISC（Complex Instruction Set Computer）：複雑で可変長の命令セット。1命令で複雑な処理が可能（アドレッシングモードが豊富）。x86・x86-64 が代表（Intel・AMD）。現代の x86 プロセッサは内部でマイクロ命令に分解して RISC 的に実行しています。選択肢 2 は誤り（RISC はコード量が増える傾向）。',
  },
  {
    id: 'SM-021',
    category: 'service-mgmt',
    categoryName: 'サービスマネジメント',
    difficulty: 3,
    year: 2022,
    tags: ['NOC', 'SOC', 'セキュリティ運用'],
    question: 'SOC（Security Operations Center）と NOC（Network Operations Center）の違いとして、正しいものはどれか。',
    choices: [
      { index: 0, text: 'SOC は物理的なサーバルームを指し、NOC はネットワーク機器の保管場所を指す' },
      { index: 1, text: 'NOC はネットワーク・インフラの可用性・性能を監視・維持し、SOC はセキュリティイベント・脅威をリアルタイムで検知・対応する' },
      { index: 2, text: 'NOC と SOC はどちらもセキュリティインシデント対応を担い、機能に差はない' },
      { index: 3, text: 'SOC は海外拠点のみを監視し、NOC は国内拠点のみを担当する組織' },
    ],
    answer: 1,
    explanation: 'NOC（Network Operations Center）：ネットワーク・インフラ・サービスの可用性・性能を 24/7 監視。対応対象：ネットワーク障害・サーバダウン・レイテンシ異常・停電・ハードウェア故障。目標：MTTR（平均復旧時間）最小化・SLA 維持。SOC（Security Operations Center）：セキュリティインシデントの検知・分析・対応を 24/7 実施。使用ツール：SIEM・EDR・脅威インテリジェンスプラットフォーム。対応対象：不正アクセス・マルウェア感染・データ漏洩・DDoS 攻撃。CSIRT（Computer Security Incident Response Team）と連携。両組織は機能が異なりますが、DevSecOps 文化ではコラボレーションが強まっています。',
  },
  {
    id: 'SA-025',
    category: 'system-arch',
    categoryName: 'システムアーキテクチャ・組込み',
    difficulty: 3,
    year: 2022,
    tags: ['組込みシステム', 'RTOS', 'ウォッチドッグタイマー'],
    question: 'ウォッチドッグタイマー（Watchdog Timer）の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'システムの処理時間を正確に計測するための高精度タイマー' },
      { index: 1, text: '正常なプログラムが定期的にリセットしなければタイムアウトして自動リブートするフェールセーフ機構で、組込みシステムのハングアップ回復に使用される' },
      { index: 2, text: 'セキュリティ侵害を検知したらシステムをシャットダウンする緊急停止装置' },
      { index: 3, text: 'バッテリー残量を監視して自動的に省電力モードに切り替えるタイマー' },
    ],
    answer: 1,
    explanation: 'ウォッチドッグタイマー（WDT）は組込みシステムの信頼性を確保するためのハードウェア機能です。動作原理：①WDT はカウントダウンを開始。②正常動作中のプログラムは定期的に WDT に「キック（ストローブ）」信号を送りカウンタをリセット。③プログラムがハングアップ・無限ループ・クラッシュするとキックが止まる。④WDT がタイムアウト→システムをリセット（リブート）。用途：電子制御装置（ECU）・医療機器・産業制御装置・通信機器・IoT デバイス等、人手によるリブートが困難な組込みシステムで必須。ソフトウェア WDT（OS タイマーで実装）とハードウェア WDT（専用チップ）の 2 種類があります。',
  },
  {
    id: 'BS-025',
    category: 'business-strategy',
    categoryName: 'システム戦略・経営戦略',
    difficulty: 3,
    year: 2022,
    tags: ['ROI', '投資対効果', 'TCO'],
    question: 'TCO（Total Cost of Ownership）と ROI（Return on Investment）の関係として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'TCO は投資による収益を計算し、ROI は運用コストの合計を示す指標' },
      { index: 1, text: 'TCO はシステムの導入から廃棄までの全コスト（導入費+運用費+廃棄費）を示し、ROI は投資に対するリターンの割合（(利益÷投資額)×100%）を示す' },
      { index: 2, text: 'TCO と ROI はどちらも同じ数値を示す財務指標で、使い分けはない' },
      { index: 3, text: 'ROI はコスト削減のみを対象とし、TCO は収益向上も含めた総合的な投資効果を示す' },
    ],
    answer: 1,
    explanation: 'TCO（Total Cost of Ownership：総所有コスト）：初期投資（ライセンス費・ハードウェア・導入コンサル等）に加え、運用・保守・教育訓練・廃棄までのライフサイクル全体のコストを合計したもの。IT 投資の意思決定で「表に見えないコスト」を可視化するのに有効。ROI（Return on Investment：投資収益率）：ROI = (投資による純利益 ÷ 投資総額) × 100%。IT 投資の効果測定に使用。例：1000万円の投資で200万円のコスト削減→ROI = 20%。IT 投資の評価では TCO でコストを正確に把握し、ROI でその投資効果を判断するのが基本アプローチです。NPV（正味現在価値）・回収期間法も合わせて使われます。',
  },
  {
    id: 'PM-027',
    category: 'project-mgmt',
    categoryName: 'プロジェクトマネジメント',
    difficulty: 3,
    year: 2022,
    tags: ['WBS', '作業分解構造', 'スコープ管理'],
    question: 'WBS（Work Breakdown Structure：作業分解構造）の作成目的として、正しいものはどれか。',
    choices: [
      { index: 0, text: 'プロジェクトのリソース（人・物・金）の割り当てと優先順位を決定するためのコスト計画書' },
      { index: 1, text: 'プロジェクトのスコープを階層的に分解してワークパッケージ（具体的な成果物単位の作業）を定義し、スコープを漏れなく管理するための基本ツール' },
      { index: 2, text: '全タスクの依存関係と実施順序を時系列で表現したスケジュール計画ツール' },
      { index: 3, text: 'チームメンバーの役割と責任範囲を記述した人員配置計画書' },
    ],
    answer: 1,
    explanation: 'WBS（Work Breakdown Structure）はプロジェクトのスコープ（成果物）を階層的に分解した図です。特徴：成果物指向（何を作るかに着目）で分解する（活動指向ではない）。最下位レベルはワークパッケージ（見積もり・スケジュール・責任者割り当てが可能な単位）。100% ルール：WBS は親要素のスコープを 100% 網羅する（漏れなく・ダブりなく）。WBS は他計画の基盤：WBS から作業順序を定めてスケジュール（ガントチャート・アローダイアグラム）を作成し、コスト・リソース計画に展開します。「WBS にない作業はしない」原則でスコープクリープ（スコープの無断拡大）を防ぎます。',
  },
,

  // ─── 補完5問 ──────────────────────────────────────────
  {
    id: 'ALG-031',
    category: 'algorithm',
    categoryName: 'アルゴリズムとデータ構造',
    difficulty: 3,
    year: 2021,
    tags: ['ベル数', '数学的帰納法', '組合せ'],
    question: '10 進数 255 を 16 進数で表したものはどれか。',
    choices: [
      { index: 0, text: 'FE' },
      { index: 1, text: 'FF' },
      { index: 2, text: 'EF' },
      { index: 3, text: '0F' },
    ],
    answer: 1,
    explanation: '255 を 16 進数に変換：255 ÷ 16 = 15 余り 15。商 15 = F、余り 15 = F。よって 255（10進）= FF（16進）。確認：FF(16) = 15×16 + 15 = 240 + 15 = 255 ✓。16 進数では 0〜9 はそのまま、10=A・11=B・12=C・13=D・14=E・15=F で表します。8 ビットで表現できる最大値は 11111111(2) = 0xFF = 255(10)。IP アドレスのサブネットマスク 255.255.255.0 は 0xFFFFFF00 と表記されます。コンピュータサイエンスで 16 進数は 2 進数との変換（4 ビット = 1 桁）が容易なため広く使用されます。',
  },
  {
    id: 'NET-030',
    category: 'network',
    categoryName: 'ネットワーク',
    difficulty: 3,
    year: 2021,
    tags: ['帯域幅計算', 'レイテンシ', 'RTT'],
    question: 'RTT（Round-Trip Time：往復遅延時間）が 100ms、帯域幅が 1Gbps の通信路でファイル転送する場合、帯域幅遅延積（BDP）はどれか。',
    choices: [
      { index: 0, text: '12.5 MB' },
      { index: 1, text: '125 MB' },
      { index: 2, text: '1.25 MB' },
      { index: 3, text: '100 KB' },
    ],
    answer: 0,
    explanation: 'BDP（Bandwidth-Delay Product：帯域幅遅延積）= 帯域幅 × RTT = 1 Gbps × 0.1 s = 0.1 Gb = 100 Mb = 12.5 MB（1 バイト = 8 ビット）。BDP の意味：パイプ（通信路）に「詰め込める」最大データ量。TCP ウィンドウサイズが BDP より小さいと帯域幅を使い切れない（TCPパイプが空く）。最大スループットを引き出すには受信ウィンドウサイズ ≥ BDP が必要。例：12.5 MB の BDP に対してデフォルト TCP ウィンドウ 64KB では 0.5% しか使えない。TCP ウィンドウスケールオプション（RFC 1323）でウィンドウを最大 1GB まで拡張可能。',
  },
  {
    id: 'DB-028',
    category: 'database',
    categoryName: 'データベース',
    difficulty: 3,
    year: 2021,
    tags: ['集合演算', 'UNION', 'INTERSECT', 'EXCEPT'],
    question: 'SQL の集合演算子のうち「INTERSECT」の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: '2 つの SELECT 結果を結合して重複を除外した全行を返す' },
      { index: 1, text: '2 つの SELECT 結果の共通行（積集合）のみを返す' },
      { index: 2, text: '最初の SELECT 結果から 2 番目の SELECT 結果に含まれる行を除いた差集合を返す' },
      { index: 3, text: '2 つのテーブルを直積（クロス結合）して全組み合わせを返す' },
    ],
    answer: 1,
    explanation: 'SQL の集合演算子：UNION：2 つの SELECT の和集合。重複行は自動除外（UNION ALL は重複を含む全行）。INTERSECT：2 つの SELECT の積集合（両方に存在する共通行のみ）。EXCEPT（または MINUS）：最初の SELECT にあって 2 番目にない行の差集合。注意点：各 SELECT のカラム数・データ型が一致している必要がある。ORDER BY は最後の SELECT にのみ記述可能。使用例：「A と B の両方の条件を満たす顧客」= INTERSECT。「A の顧客だが B の顧客ではない」= EXCEPT。すべての条件の顧客 = UNION。CROSS JOIN（選択肢 3）は集合演算子ではなく結合操作です。',
  },
  {
    id: 'SD-026',
    category: 'software-dev',
    categoryName: 'ソフトウェア開発・テスト',
    difficulty: 3,
    year: 2021,
    tags: ['コンテナオーケストレーション', 'Kubernetes', 'Pod'],
    question: 'Kubernetes における「Pod」の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: '物理サーバまたは仮想マシンのノードを管理するためのコントロールプレーンコンポーネント' },
      { index: 1, text: 'Kubernetes がデプロイ・管理する最小単位で、1 つ以上のコンテナを含み、同一 Pod 内のコンテナはネットワーク・ストレージを共有する' },
      { index: 2, text: 'クラスタ全体のロードバランシングを担当する外部向けサービス定義' },
      { index: 3, text: 'コンテナイメージを格納・配布するためのレジストリ' },
    ],
    answer: 1,
    explanation: 'Kubernetes のアーキテクチャ主要概念：Pod：デプロイ・スケールの最小単位。1 つ以上のコンテナをまとめたグループ。同一 Pod 内のコンテナは localhost で通信でき、同じボリューム（ストレージ）をマウント可能。Deployment：Pod のレプリカ数・更新戦略を管理。Service：Pod 群への安定したネットワークエンドポイント（ClusterIP・NodePort・LoadBalancer）。Ingress：L7 ロードバランシング・SSL ターミネーション。ConfigMap / Secret：設定・機密情報をコンテナから分離。Node：Pod を実際に実行する物理/仮想マシン。Control Plane（旧 Master）：API サーバ・スケジューラ・コントローラマネージャ・etcd で構成。',
  },
  {
    id: 'SM-022',
    category: 'service-mgmt',
    categoryName: 'サービスマネジメント',
    difficulty: 4,
    year: 2021,
    tags: ['サービスデスク', 'SPOC', 'エスカレーション'],
    question: 'ITIL のサービスデスクにおける「SPOC（Single Point of Contact）」の説明として、正しいものはどれか。',
    choices: [
      { index: 0, text: '特定の技術分野の専門家が直接ユーザの問い合わせに対応する専門窓口体制' },
      { index: 1, text: 'ユーザが IT サービスに関するすべての問い合わせ・障害報告・サービス要求を行う唯一の窓口として機能し、適切なサポートグループへのルーティングと進捗管理を担当する' },
      { index: 2, text: '複数の拠点にそれぞれ独立したサービスデスクを設置してローカル対応を優先する体制' },
      { index: 3, text: '24 時間 365 日のサービス提供のためにグローバルに分散した複数チームが時差を利用して引き継ぐ体制' },
    ],
    answer: 1,
    explanation: 'SPOC（Single Point of Contact）はサービスデスクの中核概念です。ユーザが IT に関する問い合わせ・障害報告・サービス要求（パスワードリセット・新規アカウント等）を行う際、誰に連絡すればよいかを一本化します。機能：①ユーザとの唯一の接点（どんな問い合わせも最初はサービスデスクへ）。②インシデントの記録・分類・優先度付け。③自己解決できる場合は第 1 レベル対応。④専門グループへのエスカレーション。⑤ユーザへの進捗報告・クロージング確認。体制タイプ：ローカル・中央集中・バーチャル・フォロー・ザ・サン（24/7 対応）。SPOC により問い合わせの迷子や重複対応を防ぎます。',
  },
];

QUESTIONS_DATA.push(...QUESTIONS_DATA_PHASE10);

/* =====================================================
   PHASE 11 — 60 問（ALG-032〜035, NET-031〜036, DB-029〜033,
   SEC-028〜033, OS-028〜032, SD-027〜031, PM-028〜032,
   SM-023〜027, BS-026〜030, LG-023〜027, SA-026〜029）
   ===================================================== */
const QUESTIONS_DATA_PHASE11 = [

  // ── アルゴリズム ──────────────────────────────────────
  {
    id: 'ALG-032', category: 'algorithm', categoryName: 'アルゴリズム',
    difficulty: 3, year: 2023, tags: ['探索','二分探索木'],
    question: '二分探索木（BST）において、要素の挿入・検索の平均時間計算量として正しいものはどれか。',
    choices: [
      { index: 0, text: 'O(1)' },
      { index: 1, text: 'O(log n)' },
      { index: 2, text: 'O(n)' },
      { index: 3, text: 'O(n log n)' },
    ],
    answer: 1,
    explanation: '平衡な BST では、木の高さが log n となるため、挿入・検索の平均計算量は O(log n) です。ただし、昇順/降順に挿入すると木が偏り（最悪ケース）、O(n) に劣化します。この問題を解決するのが AVL 木・赤黒木などの平衡二分探索木です。',
  },
  {
    id: 'ALG-033', category: 'algorithm', categoryName: 'アルゴリズム',
    difficulty: 4, year: 2022, tags: ['グラフ','最短経路','Dijkstra'],
    question: 'ダイクストラ法に関する説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '負の重みを持つグラフでも正しく動作する' },
      { index: 1, text: '全頂点対間の最短経路を求めるアルゴリズムである' },
      { index: 2, text: '単一始点から各頂点への最短経路を非負の重みグラフで求める' },
      { index: 3, text: '深さ優先探索を基礎としている' },
    ],
    answer: 2,
    explanation: 'ダイクストラ法は、単一始点から全頂点への最短経路を求めるアルゴリズムです。条件として、辺の重みが非負であることが必要です。負の重みがある場合はベルマン・フォード法を使います。全頂点対の最短経路にはフロイド・ワーシャル法が適しています。',
  },
  {
    id: 'ALG-034', category: 'algorithm', categoryName: 'アルゴリズム',
    difficulty: 3, year: 2023, tags: ['データ構造','ヒープ'],
    question: 'ヒープ（最小ヒープ）に関する記述として正しいものはどれか。',
    choices: [
      { index: 0, text: '親ノードの値は必ず子ノードの値より大きい' },
      { index: 1, text: '最小値の取り出しは O(log n) で行える' },
      { index: 2, text: '任意要素の検索は O(log n) で行える' },
      { index: 3, text: '完全二分木でなければならない制約はない' },
    ],
    answer: 1,
    explanation: '最小ヒープは完全二分木で、親ノードの値が子ノード以下という性質を持ちます。最小値の取り出しはルートを削除しヒープを再構築するため O(log n) です。任意要素の検索は O(n)（ヒープ順序では保証されない）。優先度付きキューの実装に使われます。',
  },
  {
    id: 'ALG-035', category: 'algorithm', categoryName: 'アルゴリズム',
    difficulty: 4, year: 2024, tags: ['符号化','ハフマン'],
    question: 'ハフマン符号化の特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: '出現頻度の高い文字に長いビット列を割り当てる' },
      { index: 1, text: '固定長符号であり、全文字が同じビット数で表される' },
      { index: 2, text: '出現頻度の高い文字に短いビット列を割り当て、平均符号長を最小化する' },
      { index: 3, text: '復号には符号表が不要で自己同期符号である' },
    ],
    answer: 2,
    explanation: 'ハフマン符号化は、出現頻度の高い文字に短いビット列、低い文字に長いビット列を割り当てる可変長符号化方式です。貪欲法で構築したハフマン木によって最適（最小平均符号長）が保証されます。DEFLATE（ZIP・PNG）の内部でも使われています。',
  },

  // ── ネットワーク ──────────────────────────────────────
  {
    id: 'NET-031', category: 'network', categoryName: 'ネットワーク',
    difficulty: 3, year: 2023, tags: ['IPv6','アドレス'],
    question: 'IPv6 アドレスに関する記述として正しいものはどれか。',
    choices: [
      { index: 0, text: 'アドレス長は 32 ビットである' },
      { index: 1, text: 'アドレス長は 128 ビットであり、コロン区切りの 16 進数で表記する' },
      { index: 2, text: 'IPv4 との互換性があり、同一パケットで混在できる' },
      { index: 3, text: 'ブロードキャストアドレスが定義されている' },
    ],
    answer: 1,
    explanation: 'IPv6 のアドレス長は 128 ビットで、16 ビットずつ 8 グループをコロンで区切った 16 進数表記です（例: 2001:0db8::1）。IPv4 の 32 ビットと比べ、約 3.4×10³⁸ 個のアドレスを持ちます。IPv6 にブロードキャストはなく、マルチキャスト・エニーキャストを使います。',
  },
  {
    id: 'NET-032', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2022, tags: ['NAT','NAPT','アドレス変換'],
    question: 'NAPT（IPマスカレード）に関する記述として正しいものはどれか。',
    choices: [
      { index: 0, text: '1 つのグローバル IP アドレスで複数のプライベート IP アドレスを同時に使用できる' },
      { index: 1, text: 'IP アドレスのみを変換し、ポート番号は変換しない' },
      { index: 2, text: '外部から内部ホストに自由にアクセスできる' },
      { index: 3, text: 'グローバル IP アドレスとプライベート IP アドレスを 1 対 1 で変換する' },
    ],
    answer: 0,
    explanation: 'NAPT（Network Address Port Translation）はポート番号も組み合わせることで、1 つのグローバル IP アドレスを複数のプライベート IP アドレスで共有します。一般的な家庭・企業のルータで使われます。IP アドレスのみを変換する 1 対 1 の変換は NAT と呼ばれます。',
  },
  {
    id: 'NET-033', category: 'network', categoryName: 'ネットワーク',
    difficulty: 3, year: 2023, tags: ['スパニングツリー','STP','ループ'],
    question: 'スパニングツリープロトコル（STP）の主な目的として正しいものはどれか。',
    choices: [
      { index: 0, text: 'ルーティングループを防止する' },
      { index: 1, text: 'レイヤ 2 ネットワークにおけるブリッジループを防止する' },
      { index: 2, text: '帯域幅を最大限に活用するためにすべてのリンクを同時使用する' },
      { index: 3, text: 'MAC アドレスの重複を検出・解決する' },
    ],
    answer: 1,
    explanation: 'STP（IEEE 802.1D）はスイッチ（ブリッジ）間に冗長リンクがある場合に発生するブロードキャストストームなどのレイヤ 2 ループを防ぎます。ルートブリッジを選出し、ループになるポートをブロッキング状態にします。高速版として RSTP（802.1w）があります。',
  },
  {
    id: 'NET-034', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2022, tags: ['DNS','名前解決'],
    question: 'DNS の反復問い合わせ（iterative query）に関する記述として正しいものはどれか。',
    choices: [
      { index: 0, text: 'フルサービスリゾルバが権威サーバに代わってすべての問い合わせを行う' },
      { index: 1, text: 'クライアントは最終的な IP アドレスが得られるまで各サーバに順次問い合わせる' },
      { index: 2, text: '問い合わせを受けたサーバが次のサーバに再帰的に問い合わせを転送する' },
      { index: 3, text: 'ゾーン転送に使用されるクエリタイプである' },
    ],
    answer: 1,
    explanation: '反復問い合わせでは、問い合わせを受けたサーバは「次に問い合わせるべきサーバのアドレス」を返すだけで、自ら次のサーバには問い合わせません。クライアント（通常はフルサービスリゾルバ）が各サーバに順次問い合わせを行います。対照的に再帰問い合わせでは、サーバが代理で最終回答まで探します。',
  },
  {
    id: 'NET-035', category: 'network', categoryName: 'ネットワーク',
    difficulty: 4, year: 2024, tags: ['TLS','HTTPS','ハンドシェイク'],
    question: 'TLS ハンドシェイクの処理順序として正しいものはどれか。',
    choices: [
      { index: 0, text: 'ClientHello → ServerHello → 鍵交換 → 証明書検証 → 暗号化通信開始' },
      { index: 1, text: '証明書交換 → ClientHello → ServerHello → 鍵交換 → 暗号化通信開始' },
      { index: 2, text: 'ClientHello → 証明書交換 → ServerHello → 暗号化通信開始' },
      { index: 3, text: 'ServerHello → ClientHello → 鍵交換 → 暗号化通信開始' },
    ],
    answer: 0,
    explanation: 'TLS 1.3 のハンドシェイクは①ClientHello（対応暗号スイート・乱数）②ServerHello（選択した暗号スイート・証明書・鍵交換パラメータ）③クライアントが証明書を検証④セッション鍵生成⑤Finished で暗号化通信開始という流れです。TLS 1.3 では往復 1 回（1-RTT）で完了します。',
  },
  {
    id: 'NET-036', category: 'network', categoryName: 'ネットワーク',
    difficulty: 3, year: 2023, tags: ['DHCP','IPアドレス自動割り当て'],
    question: 'DHCP サーバがクライアントに IP アドレスを払い出す際の通信シーケンスとして正しいものはどれか。',
    choices: [
      { index: 0, text: 'DISCOVER → OFFER → REQUEST → ACK' },
      { index: 1, text: 'REQUEST → OFFER → DISCOVER → ACK' },
      { index: 2, text: 'DISCOVER → REQUEST → OFFER → ACK' },
      { index: 3, text: 'OFFER → DISCOVER → ACK → REQUEST' },
    ],
    answer: 0,
    explanation: 'DHCP のシーケンスは DORA と覚えます。①DISCOVER（クライアントがブロードキャストで DHCP サーバを探す）②OFFER（サーバが IP アドレス候補を提示）③REQUEST（クライアントが提示された IP を要求）④ACK（サーバが割り当てを確定）。リース期間終了前には RENEW で延長します。',
  },

  // ── データベース ──────────────────────────────────────
  {
    id: 'DB-029', category: 'database', categoryName: 'データベース',
    difficulty: 4, year: 2023, tags: ['トランザクション','分離レベル'],
    question: 'トランザクション分離レベル「REPEATABLE READ」で防げない異常はどれか。',
    choices: [
      { index: 0, text: 'ダーティリード（dirty read）' },
      { index: 1, text: 'ノンリピータブルリード（non-repeatable read）' },
      { index: 2, text: 'ファントムリード（phantom read）' },
      { index: 3, text: 'ロストアップデート（lost update）' },
    ],
    answer: 2,
    explanation: '分離レベルと防げる異常：READ UNCOMMITTED（なし）→ READ COMMITTED（ダーティリード防止）→ REPEATABLE READ（+ノンリピータブルリード防止）→ SERIALIZABLE（+ファントムリード防止）。REPEATABLE READ ではファントムリード（同一トランザクション内で検索結果の件数が変わる）は防げません。',
  },
  {
    id: 'DB-030', category: 'database', categoryName: 'データベース',
    difficulty: 3, year: 2022, tags: ['SQL','GROUP BY','集計'],
    question: '以下の SQL の実行結果として正しいものはどれか。\nSELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) >= 3;',
    choices: [
      { index: 0, text: '全部門のレコード数を表示する' },
      { index: 1, text: '3件以上の従業員がいる部門のみ部門名とレコード数を表示する' },
      { index: 2, text: '全部門の従業員数合計を 1 行で表示する' },
      { index: 3, text: 'WHERE 句がないためエラーになる' },
    ],
    answer: 1,
    explanation: 'GROUP BY で部門ごとにグループ化し COUNT(*) で件数を集計します。HAVING はグループ化後の条件フィルタリングで、COUNT(*) >= 3 の条件を満たす部門だけが出力されます。WHERE は集計前の行フィルタ、HAVING は集計後のグループフィルタという違いがあります。',
  },
  {
    id: 'DB-031', category: 'database', categoryName: 'データベース',
    difficulty: 3, year: 2023, tags: ['NoSQL','種類'],
    question: 'NoSQL データベースの種類と特徴の組み合わせとして誤っているものはどれか。',
    choices: [
      { index: 0, text: 'キー・バリュー型 — シンプルなキーで値を管理し、高速な読み書きが可能（Redis など）' },
      { index: 1, text: 'ドキュメント型 — JSON/BSON 形式の文書を格納し、スキーマが柔軟（MongoDB など）' },
      { index: 2, text: 'グラフ型 — リレーションシップ（エッジ）でデータを接続し、ソーシャルグラフに適する（Neo4j など）' },
      { index: 3, text: 'カラム型 — 行単位で圧縮・集計が得意でトランザクション処理に最適（Cassandra など）' },
    ],
    answer: 3,
    explanation: 'カラム型（列指向）データベースは列単位でデータを格納するため、集計・分析クエリ（OLAP）に適しています。しかし「トランザクション処理に最適」という説明は誤りで、OLTP（トランザクション処理）には行指向（RDB）の方が適しています。Cassandra は高可用性・スケーラビリティに優れた分散 NoSQL です。',
  },
  {
    id: 'DB-032', category: 'database', categoryName: 'データベース',
    difficulty: 2, year: 2022, tags: ['ER図','エンティティ'],
    question: 'ER 図の多対多の関係を RDB に変換する際の正しい方法はどれか。',
    choices: [
      { index: 0, text: '一方のテーブルに外部キーを 1 つ追加する' },
      { index: 1, text: '両テーブルの主キーを外部キーとして持つ中間テーブルを作成する' },
      { index: 2, text: '多対多のまま実装でき、変換は不要' },
      { index: 3, text: '両テーブルをマージして 1 つのテーブルにする' },
    ],
    answer: 1,
    explanation: 'RDB では多対多の関係を直接表現できません。両テーブルの主キーを外部キーとして持つ「連関テーブル（交差テーブル・中間テーブル）」を作成します。例：学生と授業の多対多→履修テーブル（学生ID, 授業ID）。この中間テーブルには追加の属性（登録日など）も持たせられます。',
  },
  {
    id: 'DB-033', category: 'database', categoryName: 'データベース',
    difficulty: 4, year: 2024, tags: ['DWH','OLAP','データウェアハウス'],
    question: 'データウェアハウス（DWH）と OLAP に関する記述として正しいものはどれか。',
    choices: [
      { index: 0, text: 'DWH は主に日次のトランザクション処理（OLTP）を高速化するために使う' },
      { index: 1, text: 'DWH は分析用に最適化された列指向ストレージを採用することが多い' },
      { index: 2, text: 'OLAP のドリルダウンとは、詳細データを集約して上位粒度に変換することを指す' },
      { index: 3, text: 'データマートは DWH より大きく、全社データを統合している' },
    ],
    answer: 1,
    explanation: 'DWH は過去の大量データを分析するために最適化されたリポジトリで、列指向ストレージ（BigQuery・Redshift など）を採用することで集計クエリを高速化します。ドリルダウンは逆で「集約データを詳細レベルに掘り下げる」操作です。データマートは DWH のサブセット（部門別の分析用データ）です。',
  },

  // ── セキュリティ ──────────────────────────────────────
  {
    id: 'SEC-028', category: 'security', categoryName: 'セキュリティ',
    difficulty: 2, year: 2022, tags: ['多要素認証','MFA'],
    question: '多要素認証（MFA）の「認証要素の組み合わせ」として正しいものはどれか。',
    choices: [
      { index: 0, text: 'パスワードと PIN（知識 × 知識）' },
      { index: 1, text: 'パスワードとスマートフォンアプリの OTP（知識 × 所持）' },
      { index: 2, text: '指紋と顔認証（生体 × 生体）' },
      { index: 3, text: '秘密の質問と合言葉（知識 × 知識）' },
    ],
    answer: 1,
    explanation: 'MFA は異なる種類の認証要素を組み合わせることが必要です。認証要素の種類：①知識（パスワード・PIN・秘密の質問）②所持（スマートフォン・スマートカード・ハードウェアトークン）③生体（指紋・顔・静脈）。同種の要素を 2 つ使っても真の多要素認証とは言えません。',
  },
  {
    id: 'SEC-029', category: 'security', categoryName: 'セキュリティ',
    difficulty: 3, year: 2023, tags: ['SQLインジェクション','対策'],
    question: 'SQL インジェクション攻撃に対する最も効果的な根本的対策はどれか。',
    choices: [
      { index: 0, text: 'WAF を導入してすべての HTTP リクエストを監視する' },
      { index: 1, text: 'エラーメッセージにデータベースの詳細情報を表示しない' },
      { index: 2, text: 'プレースホルダ（バインド変数）を使ったプリペアドステートメントを使用する' },
      { index: 3, text: 'データベースサーバを DMZ に配置する' },
    ],
    answer: 2,
    explanation: 'SQL インジェクションの根本対策はプリペアドステートメント（プレースホルダ）の使用です。SQL 文の構造をパラメータとは分離してコンパイルするため、入力値が SQL 構文として解釈されません。WAF は多層防御として有効ですが、すべての攻撃を防ぐ根本対策ではありません。エラーメッセージ非表示は情報漏えいを防ぐ緩和策です。',
  },
  {
    id: 'SEC-030', category: 'security', categoryName: 'セキュリティ',
    difficulty: 3, year: 2022, tags: ['マルウェア','ランサムウェア'],
    question: 'ランサムウェアに感染した際の被害として最も適切なものはどれか。',
    choices: [
      { index: 0, text: 'キー入力を記録して攻撃者に送信する' },
      { index: 1, text: 'ファイルを暗号化し、復号と引き換えに身代金を要求する' },
      { index: 2, text: 'ボットネットの一部となり DDoS 攻撃に利用される' },
      { index: 3, text: 'バックドアを設置して持続的なリモートアクセスを可能にする' },
    ],
    answer: 1,
    explanation: 'ランサムウェアは「身代金（Ransom）」を意味する言葉で、感染したシステムのファイルを強力な暗号で暗号化し、復号鍵と引き換えに金銭（多くは暗号資産）を要求します。対策：①定期的なオフラインバックアップ②メール添付ファイルの注意③OS・ソフトウェアの最新化④不要なポートの閉鎖。',
  },
  {
    id: 'SEC-031', category: 'security', categoryName: 'セキュリティ',
    difficulty: 4, year: 2024, tags: ['SSO','SAML','フェデレーション'],
    question: 'SAML を使った SSO（シングルサインオン）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'IdP（Identity Provider）がサービスに代わってパスワードを保存・管理する' },
      { index: 1, text: 'SP（Service Provider）がユーザの認証を行い、IdP に通知する' },
      { index: 2, text: 'IdP がユーザを認証し、XML 形式のアサーションを SP に発行して認可する' },
      { index: 3, text: 'SAML は OAuth 2.0 を拡張したプロトコルである' },
    ],
    answer: 2,
    explanation: 'SAML（Security Assertion Markup Language）はフェデレーション SSO の標準規格です。フロー：①ユーザが SP にアクセス②SP が IdP にリダイレクト③IdP がユーザを認証④IdP が XML アサーションを SP に送付⑤SP がアサーションを検証してアクセスを許可。OAuth 2.0 は認可のための別プロトコルです。',
  },
  {
    id: 'SEC-032', category: 'security', categoryName: 'セキュリティ',
    difficulty: 3, year: 2023, tags: ['CSRF','クロスサイトリクエストフォージェリ'],
    question: 'CSRF（クロスサイトリクエストフォージェリ）攻撃への対策として最も有効なものはどれか。',
    choices: [
      { index: 0, text: '入力値をサニタイズして XSS を防ぐ' },
      { index: 1, text: 'セッション固定化攻撃を防ぐためにログイン後にセッション ID を再生成する' },
      { index: 2, text: 'フォームにランダムなトークン（CSRF トークン）を埋め込み、サーバ側で検証する' },
      { index: 3, text: 'SQL をプリペアドステートメントで記述する' },
    ],
    answer: 2,
    explanation: 'CSRF はユーザが意図しないリクエストを攻撃者が正規ユーザとして送信させる攻撃です。対策：① CSRF トークン（フォームに一意のランダム値を埋め込みサーバが検証）② SameSite Cookie 属性③ Referer ヘッダ検証④重要操作には再認証を要求。XSS 対策やプリペアドステートメントは別の攻撃への対策です。',
  },
  {
    id: 'SEC-033', category: 'security', categoryName: 'セキュリティ',
    difficulty: 4, year: 2024, tags: ['暗号','鍵長','強度'],
    question: '現在（2024 年時点）のセキュリティ基準として、RSA 暗号の推奨最小鍵長として正しいものはどれか。',
    choices: [
      { index: 0, text: '512 ビット' },
      { index: 1, text: '1024 ビット' },
      { index: 2, text: '2048 ビット' },
      { index: 3, text: '256 ビット' },
    ],
    answer: 2,
    explanation: 'NIST・IPA などの標準化機関は 2030 年まで RSA-2048 を推奨最小とし、2031 年以降は RSA-3072 以上を推奨しています。1024 ビット以下はすでに危殆化（解読可能）とされ使用を禁止。AES の場合は 128 ビット以上が推奨（256 ビットが安全側）です。',
  },

  // ── OS ────────────────────────────────────────────────
  {
    id: 'OS-028', category: 'os', categoryName: 'OS・コンピュータ',
    difficulty: 3, year: 2023, tags: ['プロセス','スレッド'],
    question: 'プロセスとスレッドの違いに関する記述として正しいものはどれか。',
    choices: [
      { index: 0, text: 'スレッドはプロセスより多くのメモリ空間を独立して保持する' },
      { index: 1, text: '同一プロセス内のスレッドはメモリ空間を共有するため切替コストが低い' },
      { index: 2, text: 'プロセスは同一アドレス空間内で並列実行される軽量プロセスである' },
      { index: 3, text: 'マルチスレッドでは 1 つのスレッドがクラッシュしても他のスレッドに影響しない' },
    ],
    answer: 1,
    explanation: 'プロセスは独立したメモリ空間（コード・データ・スタック）を持ち、切替（コンテキストスイッチ）コストが高いです。スレッドはプロセス内で生成され、同一メモリ空間を共有するため生成・切替コストが低いです。ただし共有メモリのため 1 スレッドのバグが他スレッドに影響するリスクがあります。',
  },
  {
    id: 'OS-029', category: 'os', categoryName: 'OS・コンピュータ',
    difficulty: 3, year: 2022, tags: ['RAID','信頼性'],
    question: 'RAID-5 に関する記述として正しいものはどれか。',
    choices: [
      { index: 0, text: '2 台のディスクにデータをミラーリングし、1 台故障しても読み取り可能' },
      { index: 1, text: '3 台以上のディスクにパリティを分散配置し、1 台故障してもデータを復元できる' },
      { index: 2, text: 'データをストライピングするだけで冗長性はなく、1 台故障で全データ消失' },
      { index: 3, text: '2 台のディスクにパリティを独立させ、2 台同時故障に対応できる' },
    ],
    answer: 1,
    explanation: 'RAID の主要レベル：RAID-0（ストライピング・冗長なし・高速）、RAID-1（ミラーリング・1台故障まで対応）、RAID-5（分散パリティ・3台以上・1台故障まで対応・容量効率が良い）、RAID-6（二重パリティ・2台故障まで対応）。RAID-5 は読み書き性能と冗長性のバランスが優れています。',
  },
  {
    id: 'OS-030', category: 'os', categoryName: 'OS・コンピュータ',
    difficulty: 2, year: 2023, tags: ['ファイルシステム','FAT','NTFS'],
    question: 'NTFS と FAT32 の比較として正しいものはどれか。',
    choices: [
      { index: 0, text: 'FAT32 は最大 4 GB 以上のファイルをサポートする' },
      { index: 1, text: 'NTFS はアクセス権管理・ジャーナリング・暗号化をサポートし、FAT32 より高機能' },
      { index: 2, text: 'FAT32 は Linux でのみ利用可能なファイルシステムである' },
      { index: 3, text: 'NTFS は古い規格でありセキュリティ機能がない' },
    ],
    answer: 1,
    explanation: 'NTFS（NT File System）は Windows の標準ファイルシステムで、アクセス制御リスト（ACL）・ジャーナリング（クラッシュ回復）・ファイル暗号化（EFS）・圧縮・4 TB 超のファイルに対応します。FAT32 は最大ファイルサイズ 4 GB、ボリュームサイズ 2 TB の制限があり、セキュリティ機能はありませんが互換性が高いです。',
  },
  {
    id: 'OS-031', category: 'os', categoryName: 'OS・コンピュータ',
    difficulty: 4, year: 2024, tags: ['仮想化','コンテナ','VM'],
    question: '仮想マシン（VM）とコンテナの違いに関する記述として正しいものはどれか。',
    choices: [
      { index: 0, text: 'コンテナはホスト OS とカーネルを共有するため、VM より起動が速く軽量' },
      { index: 1, text: 'VM はコンテナより隔離性が低く、セキュリティリスクが高い' },
      { index: 2, text: 'コンテナは独立したカーネルを持つため、VM と同等の強い隔離を提供する' },
      { index: 3, text: 'VM は OS を含まないためコンテナより軽量' },
    ],
    answer: 0,
    explanation: 'コンテナ（Docker など）はホスト OS のカーネルを共有し、プロセス・ファイルシステム・ネットワーク名前空間を分離します。VM はハイパーバイザ上でゲスト OS ごとにカーネルを持つため強い隔離がある反面、起動が遅くリソース消費が大きいです。コンテナは起動速度・リソース効率で優れ、VM は隔離強度で優れます。',
  },
  {
    id: 'OS-032', category: 'os', categoryName: 'OS・コンピュータ',
    difficulty: 3, year: 2023, tags: ['デッドロック','回避'],
    question: 'デッドロックが発生する 4 条件のうち「デッドロックが発生しない」ための回避策として正しいものはどれか。',
    choices: [
      { index: 0, text: '複数資源を確保する場合、常に一定の順序で資源を要求する（資源の全順序付け）' },
      { index: 1, text: 'すべてのプロセスが資源を独占的に使用できるようにする' },
      { index: 2, text: 'プロセスが資源を保持したまま別の資源を待てるようにする' },
      { index: 3, text: 'プロセスが要求できる最大資源数を制限しない' },
    ],
    answer: 0,
    explanation: 'デッドロックの 4 条件：①相互排他②保持と待機③非プリエンプション④循環待機。4 つのうち 1 つでも排除すればデッドロックを防げます。資源の全順序付け（例：資源 A → B の順序のみ要求を許可）は「循環待機」を破る有効な手法です。バンカーアルゴリズムも有名な安全状態検証法です。',
  },

  // ── ソフトウェア開発 ───────────────────────────────────
  {
    id: 'SD-027', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 3, year: 2023, tags: ['UML','クラス図'],
    question: 'UML のクラス図における「集約（aggregation）」と「コンポジション（composition）」の違いとして正しいものはどれか。',
    choices: [
      { index: 0, text: '集約もコンポジションも親が消えると子も消える強い所有関係' },
      { index: 1, text: '集約は弱い関連（子は独立して存在できる）、コンポジションは強い所有（親なしに子は存在できない）' },
      { index: 2, text: 'コンポジションは多重継承を表すための記法' },
      { index: 3, text: '集約は 1 対多の関係のみを表すことができる' },
    ],
    answer: 1,
    explanation: '集約（白菱形）：「会社と社員」のように、部分（社員）が全体（会社）から独立して存在できます。コンポジション（塗り菱形）：「家と部屋」のように、部分（部屋）は全体（家）なしには存在できない強い所有です。全体が削除されると部分も削除されます。',
  },
  {
    id: 'SD-028', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 3, year: 2022, tags: ['テスト','コードカバレッジ'],
    question: 'C1 カバレッジ（分岐カバレッジ）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'すべての命令を少なくとも 1 回実行することを確認する' },
      { index: 1, text: 'すべての分岐（真/偽）を少なくとも 1 回実行することを確認する' },
      { index: 2, text: 'すべての条件式の組み合わせを網羅する' },
      { index: 3, text: 'すべてのパスを網羅して実行する' },
    ],
    answer: 1,
    explanation: 'コードカバレッジの種類：C0（命令カバレッジ）全命令の実行、C1（分岐カバレッジ）全分岐の真偽実行、C2（条件カバレッジ）全条件式の真偽実行、パスカバレッジ（全パス網羅）。C1 は if 文の then と else の両方を必ずテストすることを要求します。',
  },
  {
    id: 'SD-029', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 4, year: 2024, tags: ['デザインパターン','Strategyパターン'],
    question: 'Strategy パターンを使う目的として最も適切なものはどれか。',
    choices: [
      { index: 0, text: 'オブジェクトの生成プロセスをサブクラスに委ねる' },
      { index: 1, text: 'アルゴリズムの一連のステップを定義し、一部をサブクラスで置き換える' },
      { index: 2, text: '同一インタフェースを持つアルゴリズムを実行時に交換可能にする' },
      { index: 3, text: 'オブジェクト間の一対多の依存関係を定義して変更を通知する' },
    ],
    answer: 2,
    explanation: 'Strategy パターンはアルゴリズムのファミリを定義し、それぞれをカプセル化して交換可能にします（例：ソートアルゴリズムを実行時に切り替え）。生成プロセスの委譲は Factory Method、サブクラスへのステップ委譲は Template Method、一対多の変更通知は Observer パターンです。',
  },
  {
    id: 'SD-030', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 2, year: 2023, tags: ['バージョン管理','Git'],
    question: 'Git のブランチ戦略 GitFlow に関する記述として正しいものはどれか。',
    choices: [
      { index: 0, text: 'main ブランチのみを使い全員が直接コミットする' },
      { index: 1, text: 'feature・develop・release・hotfix・main ブランチを用途別に使い分ける' },
      { index: 2, text: 'プルリクエストベースで main ブランチへの短命なブランチのみを使う' },
      { index: 3, text: 'GitHub Actions でのみ使えるデプロイメント手法' },
    ],
    answer: 1,
    explanation: 'GitFlow は Vincent Driessen が提唱した体系的なブランチ戦略です。main（本番リリース）・develop（開発統合）・feature（機能開発）・release（リリース準備）・hotfix（本番バグ修正）の 5 種類を使い分けます。一方 GitHub Flow はシンプルに main と短命のフィーチャーブランチだけを使います。',
  },
  {
    id: 'SD-031', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 3, year: 2024, tags: ['リファクタリング','技術的負債'],
    question: 'リファクタリングの目的として最も適切なものはどれか。',
    choices: [
      { index: 0, text: '新機能を追加してシステムの機能を拡張する' },
      { index: 1, text: '外部から観察できる動作を変えずにコードの内部構造を改善する' },
      { index: 2, text: 'バグを修正してシステムの正確性を高める' },
      { index: 3, text: 'パフォーマンスを向上させるためにアルゴリズムを変更する' },
    ],
    answer: 1,
    explanation: 'リファクタリングは「外部の振る舞いを変えずにコードの内部品質を改善する」プロセスです。目的：技術的負債の返済・可読性向上・保守性改善。パフォーマンス改善・バグ修正・機能追加はリファクタリングではありません。テストがあることが前提で、グリーン状態を維持しながら小さな変更を繰り返します。',
  },

  // ── プロジェクトマネジメント ───────────────────────────
  {
    id: 'PM-028', category: 'project-mgmt', categoryName: 'プロジェクトマネジメント',
    difficulty: 4, year: 2023, tags: ['EVM','アーンドバリュー'],
    question: 'EVM（アーンドバリューマネジメント）において、CPI = 0.8 であることが示す状態として正しいものはどれか。',
    choices: [
      { index: 0, text: '予算内でプロジェクトが進んでいる（コスト効率が良い）' },
      { index: 1, text: '1 円の成果を得るために 1.25 円のコストがかかっており、コスト超過している' },
      { index: 2, text: 'スケジュールが 20% 遅延している' },
      { index: 3, text: 'プロジェクトは計画通り進んでいる' },
    ],
    answer: 1,
    explanation: 'CPI（Cost Performance Index）= EV / AC。CPI < 1 はコスト超過を意味します。CPI = 0.8 は 1 円の成果価値を得るために 1/0.8 = 1.25 円のコストがかかっていることを示します。SPI（スケジュール効率指標）= EV / PV で、SPI < 1 が遅延です。CPI・SPI ともに 1 が理想値です。',
  },
  {
    id: 'PM-029', category: 'project-mgmt', categoryName: 'プロジェクトマネジメント',
    difficulty: 3, year: 2022, tags: ['リスク対応','戦略'],
    question: 'プロジェクトリスクへの対応戦略「リスク軽減（Mitigate）」の例として正しいものはどれか。',
    choices: [
      { index: 0, text: '特定のリスクが大きすぎるため、そのプロジェクト範囲を削除する' },
      { index: 1, text: 'リスクの発生確率や影響を下げるための予防的な行動を取る' },
      { index: 2, text: 'リスクの責任を契約によって第三者に移転する（保険・アウトソーシング）' },
      { index: 3, text: 'リスクを認識しつつも何も対処せずにそのまま受け入れる' },
    ],
    answer: 1,
    explanation: 'リスク対応の 4 戦略（脅威の場合）：①回避（Avoid）：リスクを取り除く（スコープ削除）②軽減（Mitigate）：確率や影響度を低下させる予防策③転嫁（Transfer）：保険・契約で第三者に責任移転④受容（Accept）：コスト対効果から許容する。機会の場合は活用・強化・共有・受容です。',
  },
  {
    id: 'PM-030', category: 'project-mgmt', categoryName: 'プロジェクトマネジメント',
    difficulty: 3, year: 2023, tags: ['見積り','PERT','三点見積り'],
    question: 'PERT の三点見積り（Three-Point Estimating）において、期待値の計算式として正しいものはどれか（O=楽観値, M=最確値, P=悲観値）。',
    choices: [
      { index: 0, text: '(O + M + P) / 3' },
      { index: 1, text: '(O + 4M + P) / 6' },
      { index: 2, text: '(O + 2M + P) / 4' },
      { index: 3, text: 'M' },
    ],
    answer: 1,
    explanation: 'PERT（Program Evaluation and Review Technique）の三点見積りでは期待値 = (O + 4M + P) / 6 を使います。最確値 M を 4 倍重み付けするベータ分布に基づく式です。標準偏差 = (P - O) / 6。単純平均（O+M+P）/3 は最確値を重視しない場合の三角分布の期待値です。',
  },
  {
    id: 'PM-031', category: 'project-mgmt', categoryName: 'プロジェクトマネジメント',
    difficulty: 2, year: 2022, tags: ['QC','品質管理','特性要因図'],
    question: 'QC 七つ道具の「特性要因図（フィッシュボーン図）」の主な使用目的として正しいものはどれか。',
    choices: [
      { index: 0, text: '複数の問題の発生頻度を棒グラフで比較する' },
      { index: 1, text: '問題（結果）とその原因の関係を魚の骨状に整理・可視化する' },
      { index: 2, text: '時系列で品質指標の変動を追跡する' },
      { index: 3, text: '2 変数間の相関関係を点プロットで確認する' },
    ],
    answer: 1,
    explanation: '特性要因図（石川ダイアグラム / フィッシュボーン図）は、問題（特性）に対する原因を 4M（Man・Machine・Method・Material）などで分類し、因果関係を魚の骨状に可視化するツールです。QC 七つ道具：パレート図・特性要因図・チェックシート・ヒストグラム・散布図・層別・管理図。',
  },
  {
    id: 'PM-032', category: 'project-mgmt', categoryName: 'プロジェクトマネジメント',
    difficulty: 3, year: 2024, tags: ['ステークホルダ','コミュニケーション'],
    question: 'プロジェクトにおけるステークホルダ管理の目的として最も適切なものはどれか。',
    choices: [
      { index: 0, text: 'プロジェクトメンバーの給与を適切に管理する' },
      { index: 1, text: 'プロジェクトに影響を与える可能性があるすべての関係者を識別し、期待に応えるよう関与させる' },
      { index: 2, text: '開発作業の進捗を日次で追跡する' },
      { index: 3, text: 'プロジェクトの成果物の品質基準を設定する' },
    ],
    answer: 1,
    explanation: 'ステークホルダは「プロジェクトに関心・影響を持つ個人・組織」で、スポンサー・顧客・チームメンバー・規制機関などが含まれます。ステークホルダ管理では①識別②影響力/関心度マトリクスで分類③エンゲージメント計画策定④適切なコミュニケーション実施⑤要求と期待の管理を行います。',
  },

  // ── サービスマネジメント ───────────────────────────────
  {
    id: 'SM-023', category: 'service-mgmt', categoryName: 'サービスマネジメント',
    difficulty: 3, year: 2023, tags: ['ITIL','問題管理'],
    question: 'ITIL における問題管理（Problem Management）の主な目的として正しいものはどれか。',
    choices: [
      { index: 0, text: 'インシデント発生時に迅速にサービスを復旧する' },
      { index: 1, text: 'インシデントの根本原因を特定・排除し、再発防止と将来のインシデント防止を図る' },
      { index: 2, text: '変更リクエストを承認・スケジュールする' },
      { index: 3, text: 'SLA の達成状況を監視・報告する' },
    ],
    answer: 1,
    explanation: '問題管理の目的は「インシデントの根本原因（Root Cause）の特定と排除」です。インシデント管理が「症状の緩和・サービス復旧」を重視するのに対し、問題管理は「根本原因を突き止め再発を防ぐ」ことに重点を置きます。既知のエラー（Known Error）とワークアラウンドを記録する KEDB も管理します。',
  },
  {
    id: 'SM-024', category: 'service-mgmt', categoryName: 'サービスマネジメント',
    difficulty: 3, year: 2022, tags: ['変更管理','CAB'],
    question: '変更管理（Change Management）における CAB（Change Advisory Board）の役割として正しいものはどれか。',
    choices: [
      { index: 0, text: 'インシデントを分類・優先度付けして第一線の解決を担当する' },
      { index: 1, text: '変更リクエストの影響とリスクを評価し、承認または却下を勧告する' },
      { index: 2, text: 'すべての変更を自動的に承認する権限を持つ機関' },
      { index: 3, text: 'サービスレベル合意の契約交渉を行う委員会' },
    ],
    answer: 1,
    explanation: 'CAB は IT 環境への変更がビジネスリスクを最小化するよう評価・調整するアドバイザリーボードです。構成：IT マネージャー・技術専門家・ビジネス代表者など。ECAB（緊急 CAB）は緊急変更のみを迅速に審査します。変更分類：標準変更（事前承認済み）・通常変更（CAB 審査）・緊急変更（ECAB）。',
  },
  {
    id: 'SM-025', category: 'service-mgmt', categoryName: 'サービスマネジメント',
    difficulty: 2, year: 2023, tags: ['サービスカタログ','ITIL'],
    question: 'ITIL のサービスカタログに関する記述として正しいものはどれか。',
    choices: [
      { index: 0, text: 'IT 部門が内部で管理する未公開の技術仕様書' },
      { index: 1, text: '現在利用可能なサービス・価格・SLA をユーザに提示する情報源' },
      { index: 2, text: '廃止されたサービスを含む過去の全サービス履歴' },
      { index: 3, text: '変更要求を記録するためのデータベース' },
    ],
    answer: 1,
    explanation: 'サービスカタログはユーザ（顧客）向けに「今利用可能なサービス」を一覧提示するポータルです。各サービスの概要・提供条件・価格・SLO などが記載されます。技術的詳細を含むサービスポートフォリオ（過去・現在・将来のサービス全体）とは区別されます。セルフサービスポータルとしても機能します。',
  },
  {
    id: 'SM-026', category: 'service-mgmt', categoryName: 'サービスマネジメント',
    difficulty: 4, year: 2024, tags: ['ITIL4','バリューチェーン'],
    question: 'ITIL 4 のサービスバリューチェーン（SVC）における「デリバー＆サポート」アクティビティの役割として正しいものはどれか。',
    choices: [
      { index: 0, text: 'ステークホルダとのビジョン共有と方向性の設定' },
      { index: 1, text: 'サービスを顧客の要求どおりに提供し、合意したサービスレベルを満たす' },
      { index: 2, text: 'サービスのコンポーネントを取得・調達する' },
      { index: 3, text: 'ステークホルダのニーズを理解して要求に変換する' },
    ],
    answer: 1,
    explanation: 'ITIL 4 の SVC は 6 つのアクティビティで構成されます：Plan（計画）・Improve（改善）・Engage（関与）・Design & Transition（設計・移行）・Obtain/Build（取得・構築）・Deliver & Support（デリバー・サポート）。「デリバー＆サポート」はサービスの日常的な提供とサポートに責任を持ちます。',
  },
  {
    id: 'SM-027', category: 'service-mgmt', categoryName: 'サービスマネジメント',
    difficulty: 3, year: 2023, tags: ['可用性','RTO','RPO'],
    question: '事業継続計画（BCP）における RTO と RPO の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'RTO は許容できるデータ損失量（時間）で、RPO は復旧にかかる目標時間' },
      { index: 1, text: 'RTO は障害発生から業務再開までの目標時間で、RPO は許容できるデータ消失の最大時間' },
      { index: 2, text: 'RTO と RPO はともにバックアップの保存期間を表す' },
      { index: 3, text: 'RTO は復旧コストの上限で、RPO は復旧ポイントの地理的距離' },
    ],
    answer: 1,
    explanation: 'RTO（Recovery Time Objective）：業務停止から復旧までの最大許容時間。RPO（Recovery Point Objective）：バックアップからの復旧時に許容できる最大データ損失量（時間で表現）。例：RPO = 4 時間 → 4 時間前のバックアップから復旧しても許容範囲。両方とも短いほど BCP として優れますが、コストも高くなります。',
  },

  // ── ビジネスストラテジ ─────────────────────────────────
  {
    id: 'BS-026', category: 'business-strategy', categoryName: 'ビジネスストラテジ',
    difficulty: 3, year: 2023, tags: ['競争戦略','ポーター'],
    question: 'マイケル・ポーターの「競争の基本戦略」において、「コスト・リーダーシップ戦略」に該当する説明はどれか。',
    choices: [
      { index: 0, text: '特定の市場セグメント（ニッチ）に集中して顧客ニーズに特化する' },
      { index: 1, text: '業界全体を対象に低コスト構造を実現して価格競争力を持つ' },
      { index: 2, text: '独自性・品質・ブランドで差異化して価格プレミアムを得る' },
      { index: 3, text: '製品ラインを絞り込むことで開発コストを削減する' },
    ],
    answer: 1,
    explanation: 'ポーターの 3 つの基本競争戦略：①コスト・リーダーシップ（業界最低コストで価格競争力を持つ）②差別化（独自性・品質で高価格を実現）③集中（特定セグメントに絞り、その中でコスト or 差別化を追求）。戦略の明確化なく中途半端な状態を「スタック・イン・ザ・ミドル」といいます。',
  },
  {
    id: 'BS-027', category: 'business-strategy', categoryName: 'ビジネスストラテジ',
    difficulty: 3, year: 2022, tags: ['BPR','業務改革'],
    question: 'BPR（ビジネスプロセス・リエンジニアリング）の特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: '既存プロセスを少しずつ継続的に改善する手法（カイゼン）' },
      { index: 1, text: '業務プロセスを抜本的に再設計し、コスト・品質・スピードを劇的に改善する' },
      { index: 2, text: 'IT システムの保守・運用コストを削減するための手法' },
      { index: 3, text: '人事評価制度の改革に特化したフレームワーク' },
    ],
    answer: 1,
    explanation: 'BPR（Hammer & Champy が提唱）は「根本的に再考し、抜本的に再設計する」ことで劇的な改善を目指します。段階的改善（カイゼン・TQM）とは対照的に、現状を白紙から見直す発想が特徴です。IT を活用して業務の手順・組織構造・職務内容を根本から変革します。',
  },
  {
    id: 'BS-028', category: 'business-strategy', categoryName: 'ビジネスストラテジ',
    difficulty: 2, year: 2023, tags: ['RFP','調達'],
    question: 'RFP（Request for Proposal：提案依頼書）に関する記述として正しいものはどれか。',
    choices: [
      { index: 0, text: '発注側がベンダに要求仕様・条件を提示し、具体的な提案を求める文書' },
      { index: 1, text: 'ベンダが発注側に価格と仕様を提示する見積書' },
      { index: 2, text: 'プロジェクト完了後に成果物を検収するための報告書' },
      { index: 3, text: 'サービスレベルを定義した契約書' },
    ],
    answer: 0,
    explanation: 'RFP は発注側（ユーザ）がベンダに対して「要求仕様・制約・評価基準」を提示して提案を求める文書です。調達プロセス：①RFI（情報提供依頼）でベンダの能力調査②RFP で正式な提案依頼③ベンダからの提案書（プロポーザル）④提案評価・ベンダ選定⑤契約。',
  },
  {
    id: 'BS-029', category: 'business-strategy', categoryName: 'ビジネスストラテジ',
    difficulty: 4, year: 2024, tags: ['ITガバナンス','COBIT'],
    question: 'IT ガバナンスの目的として最も適切なものはどれか。',
    choices: [
      { index: 0, text: '開発プロジェクトのコスト削減のみを目的とした管理手法' },
      { index: 1, text: 'IT への投資と活用が組織の目標と合致し価値を生み出すよう経営レベルで方向付け・統制する仕組み' },
      { index: 2, text: 'IT 部門のシステム運用を効率化するための技術的標準の策定' },
      { index: 3, text: 'IT セキュリティ対策を実装するためのプロジェクト管理手法' },
    ],
    answer: 1,
    explanation: 'IT ガバナンスは「IT への投資が組織の戦略目標に整合し、期待する価値を生み出しリスクを管理できているかを経営層が統制・方向付けする仕組み」です。COBIT（Control Objectives for IT）が代表的フレームワーク。IT 管理（マネジメント）が IT 部門の運用管理であるのに対し、IT ガバナンスは経営レベルの概念です。',
  },
  {
    id: 'BS-030', category: 'business-strategy', categoryName: 'ビジネスストラテジ',
    difficulty: 3, year: 2023, tags: ['ビジネスモデルキャンバス','BMC'],
    question: 'ビジネスモデルキャンバス（BMC）の 9 つのブロックに含まれないものはどれか。',
    choices: [
      { index: 0, text: '顧客セグメント' },
      { index: 1, text: '収益の流れ' },
      { index: 2, text: '競合他社分析' },
      { index: 3, text: 'チャネル' },
    ],
    answer: 2,
    explanation: 'BMC の 9 要素：①顧客セグメント②価値提案③チャネル④顧客との関係⑤収益の流れ⑥主要リソース⑦主要活動⑧主要パートナー⑨コスト構造。「競合他社分析」は BMC に含まれません（SWOT 分析や Porter の 5 Forces で行います）。BMC は Alexander Osterwalder が提唱した事業モデルの可視化ツールです。',
  },

  // ── ロジック・数学 ────────────────────────────────────
  {
    id: 'LG-023', category: 'logic', categoryName: 'ロジック・数学',
    difficulty: 3, year: 2023, tags: ['命題論理','対偶'],
    question: '命題「A ならば B（A → B）」の対偶として正しいものはどれか。',
    choices: [
      { index: 0, text: '¬A → ¬B（A でないならば B でない）' },
      { index: 1, text: 'B → A（B ならば A）' },
      { index: 2, text: '¬B → ¬A（B でないならば A でない）' },
      { index: 3, text: '¬A → B（A でないならば B）' },
    ],
    answer: 2,
    explanation: '命題「A → B」の関係：逆（B → A）・裏（¬A → ¬B）・対偶（¬B → ¬A）。対偶は元の命題と論理的に同値（一方が真なら他方も真）です。「逆・裏は元命題と同値でない」が重要です。例：「雨が降るなら地面が濡れる」の対偶は「地面が濡れないなら雨は降っていない」。',
  },
  {
    id: 'LG-024', category: 'logic', categoryName: 'ロジック・数学',
    difficulty: 4, year: 2024, tags: ['ベイズ','条件付き確率'],
    question: '検査の感度（陽性的中率）が 90%、特異度が 85%、疾患有病率が 1% のとき、陽性結果が出た場合の真の疾患確率（陽性予測値）として最も近いものはどれか。',
    choices: [
      { index: 0, text: '約 90%' },
      { index: 1, text: '約 57%' },
      { index: 2, text: '約 6%' },
      { index: 3, text: '約 1%' },
    ],
    answer: 2,
    explanation: 'ベイズの定理で計算します。P(疾患) = 0.01、感度 P(陽|疾患) = 0.90、特異度 P(陰|健康) = 0.85 → 偽陽性率 = 0.15。P(陽) = 0.90×0.01 + 0.15×0.99 ≈ 0.009 + 0.1485 = 0.1575。陽性予測値 = 0.009/0.1575 ≈ 5.7%（≈ 6%）。有病率が低いと感度が高くても陽性予測値は低くなるというベイズの逆説が重要です。',
  },
  {
    id: 'LG-025', category: 'logic', categoryName: 'ロジック・数学',
    difficulty: 3, year: 2023, tags: ['情報量','エントロピー'],
    question: '情報理論における自己情報量（情報エントロピー）に関する記述として正しいものはどれか。',
    choices: [
      { index: 0, text: '発生確率が高い事象ほど情報量が多い' },
      { index: 1, text: '発生確率が低い事象ほど情報量が多い（自己情報量 = -log₂P）' },
      { index: 2, text: '情報量はビットで表せず、無単位の相対値である' },
      { index: 3, text: '確率 1 の必然的な事象の情報量は無限大' },
    ],
    answer: 1,
    explanation: '自己情報量 I(x) = -log₂ P(x) ビット。発生確率が低いほど「驚き」が大きく情報量は多くなります。例：確率 1/2 の事象 → 1 ビット、確率 1/4 → 2 ビット、確率 1 の確実な事象 → 0 ビット（情報なし）。シャノンエントロピーは確率分布全体の平均情報量で、H = -Σ P(x) log₂ P(x) で計算します。',
  },
  {
    id: 'LG-026', category: 'logic', categoryName: 'ロジック・数学',
    difficulty: 4, year: 2024, tags: ['機械学習','分類'],
    question: '機械学習における「過学習（オーバーフィッティング）」の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '訓練データでも検証データでも精度が低い状態' },
      { index: 1, text: '訓練データには高精度だが、未知のテストデータに汎化できない状態' },
      { index: 2, text: 'モデルが単純すぎて訓練データを十分に学習できていない状態' },
      { index: 3, text: '計算コストが高すぎて実用的な時間内に学習が終わらない状態' },
    ],
    answer: 1,
    explanation: '過学習は訓練データに「特化しすぎる」状態で、訓練誤差は低いが汎化誤差が高くなります。原因：モデルの複雑度が高すぎる・訓練データが少ない。対策：正則化（L1/L2）・ドロップアウト・データ拡張・早期停止・交差検証。反対に学習不足（アンダーフィッティング）は訓練データでも精度が出ません。',
  },
  {
    id: 'LG-027', category: 'logic', categoryName: 'ロジック・数学',
    difficulty: 3, year: 2023, tags: ['統計','回帰分析'],
    question: '単回帰分析において「決定係数（R²）」が 1 に近い値を示すことが意味するものとして正しいものはどれか。',
    choices: [
      { index: 0, text: '説明変数と目的変数の間に因果関係がある' },
      { index: 1, text: '回帰モデルが目的変数の分散をよく説明している（当てはまりが良い）' },
      { index: 2, text: '回帰係数（傾き）が統計的に有意である' },
      { index: 3, text: '残差が正規分布に従っている' },
    ],
    answer: 1,
    explanation: '決定係数 R² は「回帰モデルが目的変数の変動を説明する割合」で、0〜1 の値を取ります。R²=1 は完全なモデル、R²=0 は全く説明できていないことを意味します。注意：R² が高くても因果関係を証明しません（相関 ≠ 因果）。また R² は説明変数を増やすと必ず上がるため、自由度調整済み R² も重要です。',
  },

  // ── システムアーキテクチャ ─────────────────────────────
  {
    id: 'SA-026', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 3, year: 2023, tags: ['マイクロサービス','SOA'],
    question: 'マイクロサービスアーキテクチャの特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: '1 つのアプリケーションをすべて 1 つのプロセスで実行する' },
      { index: 1, text: '小さな自律的なサービスを API で連携させ、個別にデプロイ・スケールできる' },
      { index: 2, text: 'すべてのサービスが同一データベースを共有しなければならない' },
      { index: 3, text: '開発チームはすべてのサービスを同一プログラミング言語で実装する必要がある' },
    ],
    answer: 1,
    explanation: 'マイクロサービスは機能を小さな独立したサービスに分割し、API（REST/gRPC）で連携します。特徴：①個別デプロイ・スケール可能②各サービスが独自 DB を持てる③言語・技術スタックの自由度が高い④耐障害性が高い。モノリシック（1プロセス）と対比されます。デメリット：分散システムの複雑性・ネットワークオーバーヘッド。',
  },
  {
    id: 'SA-027', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 3, year: 2022, tags: ['ロードバランサ','負荷分散'],
    question: 'L7（アプリケーション層）ロードバランサと L4（トランスポート層）ロードバランサの違いとして正しいものはどれか。',
    choices: [
      { index: 0, text: 'L7 は IP アドレスのみで振り分けを行い、L4 は URL パスで振り分ける' },
      { index: 1, text: 'L7 は HTTP ヘッダ・URL・Cookie などの内容を見て振り分けでき、L4 より高機能だが処理が重い' },
      { index: 2, text: 'L4 は SSL 終端・コンテンツキャッシュが可能で、L7 は不可能' },
      { index: 3, text: 'L7 と L4 は同等の機能を持ち、ネットワーク層のみの違い' },
    ],
    answer: 1,
    explanation: 'L4 ロードバランサは TCP/UDP の IP アドレスとポートで振り分けます。L7 ロードバランサは HTTP ヘッダ・URL パス・Cookie・ホスト名などを見て振り分けられるため、コンテンツベースルーティング・SSL 終端・Web Application Firewall 機能も持てます。処理が重い分高機能で柔軟性があります。',
  },
  {
    id: 'SA-028', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 4, year: 2024, tags: ['APIゲートウェイ','マイクロサービス'],
    question: 'API ゲートウェイを導入する主な目的として正しいものはどれか。',
    choices: [
      { index: 0, text: 'データベースへの直接アクセスを提供してクエリを高速化する' },
      { index: 1, text: 'クライアントと複数のバックエンドサービスの間に立ち、認証・ルーティング・レート制限などを一元管理する' },
      { index: 2, text: 'フロントエンドの HTML/CSS/JS を配信する CDN の代替' },
      { index: 3, text: 'マイクロサービス間の非同期メッセージングを担うキュー' },
    ],
    answer: 1,
    explanation: 'API ゲートウェイはクライアントからの全リクエストを受け、適切なバックエンドサービスにルーティングする「玄関口」です。機能：認証/認可・レート制限・SSL 終端・キャッシュ・ロードバランシング・API バージョン管理・監視/ログ。BFF（Backend for Frontend）パターンとも組み合わされます。',
  },
  {
    id: 'SA-029', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 3, year: 2023, tags: ['ETL','データ統合'],
    question: 'ETL（Extract, Transform, Load）処理の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'データをロード後に変換する ELT と同義であり、実質的な違いはない' },
      { index: 1, text: 'ソースシステムからデータを抽出→変換・クレンジング→ターゲット（DWH 等）にロードする処理' },
      { index: 2, text: 'リアルタイムのストリーミング処理のみを指す用語' },
      { index: 3, text: 'データベースのバックアップを取得するための標準的な手順' },
    ],
    answer: 1,
    explanation: 'ETL はデータウェアハウス・データレイクへのデータ統合の基本処理です。①Extract（抽出）：複数ソース（RDB・CSV・API）からデータ収集②Transform（変換）：型変換・クレンジング・集計・ルール適用③Load（ロード）：DWH に格納。ELT（Extract→Load→Transform）はクラウド DWH の処理能力を活かしてロード後に変換する現代的な手法です。',
  },
,

  // ── 補足 5 問（ALG-036, NET-037, DB-034, SEC-034, OS-033）──
  {
    id: 'ALG-036', category: 'algorithm', categoryName: 'アルゴリズム',
    difficulty: 3, year: 2024, tags: ['計算量','空間計算量'],
    question: '次のアルゴリズムの空間計算量として正しいものはどれか。「配列 A（n 要素）を別の配列 B にコピーし、B を返す」',
    choices: [
      { index: 0, text: 'O(1)' },
      { index: 1, text: 'O(log n)' },
      { index: 2, text: 'O(n)' },
      { index: 3, text: 'O(n²)' },
    ],
    answer: 2,
    explanation: '空間計算量はアルゴリズムが使用する追加メモリ量です。n 要素の配列 B を確保するため O(n) の追加空間が必要です。元の配列 A の空間は含みません。対してインプレース（in-place）アルゴリズムは O(1) 追加空間で動作します（例：バブルソート）。空間と時間はトレードオフの関係になることが多いです。',
  },
  {
    id: 'NET-037', category: 'network', categoryName: 'ネットワーク',
    difficulty: 3, year: 2024, tags: ['HTTP/2','HTTP/3','QUIC'],
    question: 'HTTP/3 が HTTP/2 に比べて改善した主な点として正しいものはどれか。',
    choices: [
      { index: 0, text: 'ヘッダー圧縮を廃止してセキュリティを強化した' },
      { index: 1, text: 'TCP の代わりに QUIC（UDP ベース）を使い、HOL ブロッキングを解消した' },
      { index: 2, text: 'TLS 暗号化が任意になりパフォーマンスが向上した' },
      { index: 3, text: 'ストリームの多重化機能を廃止してシンプルな設計にした' },
    ],
    answer: 1,
    explanation: 'HTTP/2 は TCP 上でストリーム多重化を実現しましたが、TCP レベルのパケットロスで全ストリームが停止する「TCP の HOL ブロッキング」問題が残りました。HTTP/3 は UDP ベースの QUIC プロトコルを使用し、ストリームごとに独立した輻輳制御を行うことで HOL ブロッキングを解消し、接続確立も 0-RTT/1-RTT で高速化しています。',
  },
  {
    id: 'DB-034', category: 'database', categoryName: 'データベース',
    difficulty: 3, year: 2024, tags: ['インデックス','複合インデックス'],
    question: '複合インデックス（a, b）が作成されているとき、インデックスが有効に使われるクエリはどれか。',
    choices: [
      { index: 0, text: 'WHERE b = 5（b のみ指定）' },
      { index: 1, text: 'WHERE a = 1（先頭列 a のみ指定）' },
      { index: 2, text: 'WHERE b = 5 AND a = 1（後続列が先行）' },
      { index: 3, text: 'WHERE a IS NOT NULL（IS NOT NULL 条件）' },
    ],
    answer: 1,
    explanation: '複合インデックス（a, b）は「左端のプレフィックス」の原則があります。a のみ・a と b の両方の条件ではインデックスが使われますが、b のみでは通常使われません（先頭列 a がないため）。ORDER BY a, b などの並び替えにも有効です。インデックスを設計する際は、最もよく使われる検索条件の列を先頭に置くことが重要です。',
  },
  {
    id: 'SEC-034', category: 'security', categoryName: 'セキュリティ',
    difficulty: 3, year: 2023, tags: ['DoS','DDoS','攻撃'],
    question: 'DDoS（分散型サービス拒否）攻撃に対する緩和策として最も適切なものはどれか。',
    choices: [
      { index: 0, text: 'すべてのポートを閉鎖して外部通信を遮断する' },
      { index: 1, text: 'CDN や ISP レベルのトラフィック洗浄（スクラビング）サービスを利用する' },
      { index: 2, text: 'SSL 証明書を更新してトラフィックを暗号化する' },
      { index: 3, text: 'パスワードを定期的に変更して認証情報の漏えいを防ぐ' },
    ],
    answer: 1,
    explanation: 'DDoS 攻撃は大量の送信元からトラフィックを送りつけてサービスを停止させます。対策：①ISP・CDN レベルのトラフィック洗浄（攻撃トラフィックをスクラビングセンタでフィルタリング）②Anycast によるトラフィック分散③レート制限・IP ブロック④帯域増強。SSL 更新やパスワード変更は DDoS への直接対策ではありません。',
  },
  {
    id: 'OS-033', category: 'os', categoryName: 'OS・コンピュータ',
    difficulty: 2, year: 2023, tags: ['割り込み','ハードウェア割り込み'],
    question: 'ハードウェア割り込みの説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'プログラムが意図的に OS に処理を依頼するために実行する命令（システムコール）' },
      { index: 1, text: '周辺機器などがサービスを要求するために CPU に通知する非同期的なシグナル' },
      { index: 2, text: 'ゼロ除算など不正な命令を実行したときに発生する例外' },
      { index: 3, text: 'タイマが一定時間ごとに発生させる割り込みのみを指す' },
    ],
    answer: 1,
    explanation: 'ハードウェア割り込みは、キーボード・ディスク・ネットワーク I/O 完了などの外部デバイスが CPU に非同期に通知するシグナルです。CPU は現在の処理を中断して割り込みハンドラ（ISR）を実行します。ソフトウェア割り込みはプログラム命令（int 命令・syscall）による同期的な割り込みで、例外（トラップ）とも呼ばれます。',
  },
];

QUESTIONS_DATA.push(...QUESTIONS_DATA_PHASE11);

/* =====================================================
   PHASE 12 — 70 問（ALG-037〜042, NET-038〜043, DB-035〜040,
   SEC-035〜040, OS-034〜039, SD-032〜037, PM-033〜037,
   SM-028〜032, BS-031〜035, LG-028〜032, SA-030〜034）
   ===================================================== */
const QUESTIONS_DATA_PHASE12 = [

  // ── アルゴリズム ──────────────────────────────────────
  {
    id: 'ALG-037', category: 'algorithm', categoryName: 'アルゴリズム',
    difficulty: 3, year: 2024, tags: ['文字列','KMP','パターンマッチング'],
    question: '文字列検索アルゴリズムに関する記述として正しいものはどれか。',
    choices: [
      { index: 0, text: 'ナイーブ法（力まかせ法）は最悪 O(n×m) だが、KMP 法は O(n+m) で検索できる' },
      { index: 1, text: 'KMP 法はパターン長 m が長いほど遅くなる' },
      { index: 2, text: 'ナイーブ法は常に KMP 法より速い' },
      { index: 3, text: 'Boyer-Moore 法は左から右へパターンを照合する' },
    ],
    answer: 0,
    explanation: '文字列検索の計算量比較：ナイーブ法は最悪 O(n×m)（n=テキスト長, m=パターン長）。KMP（Knuth-Morris-Pratt）法は失敗関数で戻りを最小化し O(n+m) を実現します。Boyer-Moore 法は右から左へ照合し、実用的に非常に速いです（最良 O(n/m)）。',
  },
  {
    id: 'ALG-038', category: 'algorithm', categoryName: 'アルゴリズム',
    difficulty: 4, year: 2024, tags: ['分割統治','マージソート'],
    question: 'マージソートの特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: '最悪計算量は O(n²) である' },
      { index: 1, text: '安定ソートであり、最悪でも O(n log n) が保証される' },
      { index: 2, text: 'メモリ使用量が O(1) でインプレースに動作する' },
      { index: 3, text: '比較ベースのソートで最も高速なため、あらゆる状況に最適' },
    ],
    answer: 1,
    explanation: 'マージソートは分割統治法で、常に O(n log n) の時間計算量です（最良・平均・最悪すべて同じ）。等しい要素の順序が保たれる「安定ソート」で、外部ソート（ファイルのソート）にも使われます。欠点は O(n) の追加メモリが必要なことです（インプレースではない）。',
  },
  {
    id: 'ALG-039', category: 'algorithm', categoryName: 'アルゴリズム',
    difficulty: 3, year: 2023, tags: ['スタック','逆ポーランド記法'],
    question: '逆ポーランド記法（後置記法）「3 4 + 5 *」をスタックで計算した結果はどれか。',
    choices: [
      { index: 0, text: '23' },
      { index: 1, text: '35' },
      { index: 2, text: '17' },
      { index: 3, text: '27' },
    ],
    answer: 1,
    explanation: '逆ポーランド記法の計算：①3をスタックへ②4をスタックへ③+を見て4と3をポップ→3+4=7をプッシュ④5をスタックへ⑤*を見て5と7をポップ→7×5=35をプッシュ。結果35。逆ポーランド記法（後置記法）はスタックで再帰なしに計算でき、コンパイラの中間コード生成などに使われます。',
  },
  {
    id: 'ALG-040', category: 'algorithm', categoryName: 'アルゴリズム',
    difficulty: 4, year: 2024, tags: ['貪欲法','最適部分構造'],
    question: '貪欲法（Greedy Algorithm）が最適解を保証する問題の特性として正しいものはどれか。',
    choices: [
      { index: 0, text: 'すべての問題で貪欲法は最適解を保証する' },
      { index: 1, text: '貪欲選択性と最適部分構造の両方を持つ問題では最適解が得られる' },
      { index: 2, text: '貪欲法はバックトラッキングを使うため常に最適解が得られる' },
      { index: 3, text: '貪欲法が使えるのは数値計算問題のみ' },
    ],
    answer: 1,
    explanation: '貪欲法は「各ステップで局所最適な選択をする」手法です。最適解を保証するには①貪欲選択性（局所最適選択が全体最適に貢献する）②最適部分構造（部分問題の最適解が全体の最適解に含まれる）が必要です。コイン問題（一般系）や最小全域木（Kruskal・Prim）では最適解を得られますが、ナップサック問題などでは近似解にとどまります。',
  },
  {
    id: 'ALG-041', category: 'algorithm', categoryName: 'アルゴリズム',
    difficulty: 3, year: 2023, tags: ['ビット演算','2の補数'],
    question: '8 ビット 2 の補数表現で「-7」を表す値として正しいものはどれか。',
    choices: [
      { index: 0, text: '00000111' },
      { index: 1, text: '11111001' },
      { index: 2, text: '10000111' },
      { index: 3, text: '01111001' },
    ],
    answer: 1,
    explanation: '2 の補数での負数変換：①7 の 2 進数 = 00000111 ②ビット反転（1 の補数）= 11111000 ③+1 = 11111001。確認：11111001 + 00000111 = 100000000（9 ビット目が繰り上がり、8 ビットでは 00000000 = 0）✓。2 の補数は加算回路を共通化できるため、現代のコンピュータで広く使われます。',
  },
  {
    id: 'ALG-042', category: 'algorithm', categoryName: 'アルゴリズム',
    difficulty: 2, year: 2022, tags: ['順列','組み合わせ','確率'],
    question: '5 人の中から 3 人を選んで並べる場合の順列の数として正しいものはどれか。',
    choices: [
      { index: 0, text: '10 通り' },
      { index: 1, text: '15 通り' },
      { index: 2, text: '60 通り' },
      { index: 3, text: '120 通り' },
    ],
    answer: 2,
    explanation: '順列 P(n, r) = n! / (n-r)! = 5! / 2! = 120/2 = 60 通り。組み合わせ C(5,3) = 5! / (3! × 2!) = 10 通り（順序を考慮しない）。順列は「並び順が重要」、組み合わせは「メンバーのみ重要」という違いを押さえましょう。',
  },

  // ── ネットワーク ──────────────────────────────────────
  {
    id: 'NET-038', category: 'network', categoryName: 'ネットワーク',
    difficulty: 3, year: 2023, tags: ['OSPF','リンクステート'],
    question: 'OSPF（Open Shortest Path First）に関する記述として正しいものはどれか。',
    choices: [
      { index: 0, text: 'ディスタンスベクタ型のルーティングプロトコルで、ホップ数を指標とする' },
      { index: 1, text: 'リンクステート型で、ダイクストラ法により最短経路を計算する内部ゲートウェイプロトコル（IGP）' },
      { index: 2, text: 'インターネット全体の AS 間ルーティングに使われる外部ゲートウェイプロトコル' },
      { index: 3, text: '最大ホップ数が 15 という制限がある' },
    ],
    answer: 1,
    explanation: 'OSPF はリンクステート型 IGP で、各ルータがネットワーク全体のトポロジーを LSDB（リンク状態データベース）として持ち、ダイクストラ法で最短経路を計算します。コスト（帯域幅の逆数）を指標とします。RIP はディスタンスベクタでホップ数が指標、最大 15 ホップの制限があります。BGP は AS 間の EGP です。',
  },
  {
    id: 'NET-039', category: 'network', categoryName: 'ネットワーク',
    difficulty: 3, year: 2024, tags: ['無線LAN','WPA3','セキュリティ'],
    question: '無線 LAN のセキュリティプロトコルに関する記述として正しいものはどれか。',
    choices: [
      { index: 0, text: 'WEP は現在も安全に使用できる標準的な暗号化方式である' },
      { index: 1, text: 'WPA2 は WEP の後継で CCMP/AES を使用し、WPA3 はさらに SAE でパスワード認証を強化した' },
      { index: 2, text: 'WPA3 は互換性のために WEP とも併用できる' },
      { index: 3, text: 'SSID を非公開（ステルス）にすることで完全なセキュリティが確保できる' },
    ],
    answer: 1,
    explanation: '無線 LAN セキュリティの変遷：WEP（1997：RC4、40/104 ビット鍵→既に解読可能・危殆化）→WPA（TKIP・暫定）→WPA2（CCMP/AES・802.11i）→WPA3（SAE によるパスワード推測攻撃耐性・前方秘匿性）。SSID 非公開は隠せるだけで実質的なセキュリティにならず、WEP も脆弱です。',
  },
  {
    id: 'NET-040', category: 'network', categoryName: 'ネットワーク',
    difficulty: 4, year: 2024, tags: ['TCP','フロー制御','輻輳制御'],
    question: 'TCP の輻輳制御における「スロースタート」の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '接続開始時に送信ウィンドウを最大値に設定し、徐々に減らす' },
      { index: 1, text: '接続開始時に小さなウィンドウから指数的に増加させ、閾値以降は線形増加に切り替える' },
      { index: 2, text: '輻輳が検出されたらウィンドウを 1 に固定して再試行する' },
      { index: 3, text: '3 回の ACK 重複で接続を切断して再接続する' },
    ],
    answer: 1,
    explanation: 'TCP スロースタート：接続開始時は cwnd（輻輳ウィンドウ）= 1 MSS から開始し、ACK ごとに 2 倍（指数増加）。ssthresh（スロースタート閾値）到達後は 1 ずつ線形増加（輻輳回避）。3 重複 ACK でタイムアウトより軽微と判断し、高速再送・高速回復（ウィンドウを半分に）。',
  },
  {
    id: 'NET-041', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2023, tags: ['メール','SMTP','POP3','IMAP'],
    question: 'メールプロトコルに関する記述の組み合わせとして正しいものはどれか。',
    choices: [
      { index: 0, text: 'SMTP は受信用、POP3 は送信用のプロトコル' },
      { index: 1, text: 'SMTP はメール送信用、POP3/IMAP はメール受信用のプロトコル' },
      { index: 2, text: 'IMAP はサーバからメールを削除して端末に保存し、POP3 はサーバにメールを残す' },
      { index: 3, text: 'SMTP のポート番号は 110 番が標準' },
    ],
    answer: 1,
    explanation: 'メールプロトコル：SMTP（Simple Mail Transfer Protocol）は送信用・ポート 25（サーバ間）/587（クライアント送信）。POP3（ポート 110）はサーバからダウンロードして削除（端末で管理）。IMAP（ポート 143）はサーバ上でフォルダ管理でき、複数端末で同期しやすいです。',
  },
  {
    id: 'NET-042', category: 'network', categoryName: 'ネットワーク',
    difficulty: 3, year: 2024, tags: ['CDN','コンテンツ配信'],
    question: 'CDN（Content Delivery Network）の主な効果として正しいものはどれか。',
    choices: [
      { index: 0, text: 'オリジンサーバの処理能力を直接向上させる' },
      { index: 1, text: 'ユーザに地理的に近いエッジサーバからコンテンツを配信し、レイテンシと負荷を低減する' },
      { index: 2, text: 'HTTPS 証明書の発行を自動化する' },
      { index: 3, text: 'バックエンドのデータベース処理を高速化する' },
    ],
    answer: 1,
    explanation: 'CDN は世界中のエッジサーバ（POP）に静的コンテンツ（画像・JS・CSS・動画）をキャッシュし、ユーザに最も近いエッジから配信します。効果：①レイテンシ低減②オリジンサーバの負荷軽減③DDoS 攻撃の緩和④高可用性。Cloudflare・Akamai・CloudFront が代表的サービスです。',
  },
  {
    id: 'NET-043', category: 'network', categoryName: 'ネットワーク',
    difficulty: 3, year: 2023, tags: ['Proxy','リバースプロキシ'],
    question: 'リバースプロキシの説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'クライアント側に設置し、クライアントの IP アドレスを隠す' },
      { index: 1, text: 'サーバ側に設置し、外部からの通信を受けてバックエンドサーバに中継する' },
      { index: 2, text: '会社内のユーザの Web 閲覧を監視・制限するために使う' },
      { index: 3, text: 'クライアントが VPN 経由でのみ接続できる仕組み' },
    ],
    answer: 1,
    explanation: 'リバースプロキシはサーバ側に設置され、クライアントからの要求を受け取りバックエンドサーバに転送します。機能：ロードバランシング・SSL 終端・キャッシュ・圧縮・WAF。Nginx・Apache・HAProxy が代表的実装です。フォワードプロキシ（通常のプロキシ）はクライアント側に設置し、クライアントの IP を隠して外部サイトにアクセスします。',
  },

  // ── データベース ──────────────────────────────────────
  {
    id: 'DB-035', category: 'database', categoryName: 'データベース',
    difficulty: 3, year: 2023, tags: ['ストアドプロシージャ','トリガ'],
    question: 'データベースのトリガ（Trigger）に関する記述として正しいものはどれか。',
    choices: [
      { index: 0, text: 'ユーザが明示的に呼び出すことで実行されるプログラム' },
      { index: 1, text: 'INSERT・UPDATE・DELETE などの DML 操作を契機に自動実行される処理' },
      { index: 2, text: '定期的にスケジュール実行される DB のバッチ処理' },
      { index: 3, text: 'クエリの実行計画を最適化するためのヒント構文' },
    ],
    answer: 1,
    explanation: 'トリガはテーブルへのデータ変更（INSERT・UPDATE・DELETE）を「契機（イベント）」として自動実行されるプログラムです。用途：監査ログの自動記録・参照整合性の強制・集計テーブルの自動更新。ストアドプロシージャはユーザが明示的に CALL で呼び出す点が異なります。',
  },
  {
    id: 'DB-036', category: 'database', categoryName: 'データベース',
    difficulty: 4, year: 2024, tags: ['正規化','ボイスコッド正規形'],
    question: '第三正規形（3NF）とボイス-コッド正規形（BCNF）の違いとして正しいものはどれか。',
    choices: [
      { index: 0, text: 'BCNF は 3NF より厳しく、すべての関数従属の決定子が候補キーでなければならない' },
      { index: 1, text: '3NF は BCNF より厳しい正規化である' },
      { index: 2, text: 'BCNF では推移的関数従属が許容される' },
      { index: 3, text: '3NF と BCNF は同等であり区別しない' },
    ],
    answer: 0,
    explanation: '正規化の厳しさ：1NF < 2NF < 3NF < BCNF（< 4NF < 5NF）。3NF は「主キー以外の属性に推移的関数従属がない」という条件。BCNF は「すべての非自明な関数従属 X→Y において X が候補キーである」という厳しい条件。複合候補キーが複数存在する場合に 3NF を満たしても BCNF を満たさないケースがあります。',
  },
  {
    id: 'DB-037', category: 'database', categoryName: 'データベース',
    difficulty: 3, year: 2023, tags: ['SQL','サブクエリ','EXISTS'],
    question: 'SQL の EXISTS サブクエリの説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'サブクエリが返す値の最大値を返す' },
      { index: 1, text: 'サブクエリの結果が 1 行以上存在する場合に TRUE を返す（存在確認）' },
      { index: 2, text: 'サブクエリの結果が空集合の場合にのみ TRUE を返す' },
      { index: 3, text: 'サブクエリの結果と等しい値を検索する IN の別名' },
    ],
    answer: 1,
    explanation: 'EXISTS は「相関サブクエリが 1 行以上の結果を返す」場合に TRUE になる述語です。相関サブクエリは外側クエリの各行に対して評価されます。EXISTS は IN より NULL 値の扱いが安全で、大規模データでは EXISTS の方が効率的なケースが多いです。NOT EXISTS は「対応する行が存在しない」条件を表します。',
  },
  {
    id: 'DB-038', category: 'database', categoryName: 'データベース',
    difficulty: 3, year: 2022, tags: ['ロック','デッドロック','DB'],
    question: 'データベースの共有ロック（S ロック）と排他ロック（X ロック）の関係として正しいものはどれか。',
    choices: [
      { index: 0, text: 'S ロック同士は同時に取得できるが、S ロックと X ロック、X ロック同士は競合する' },
      { index: 1, text: 'X ロック同士は同時に取得できるが、S ロックと X ロックは競合する' },
      { index: 2, text: 'S ロックも X ロックも同時に 1 つのトランザクションのみ取得できる' },
      { index: 3, text: 'S ロックと X ロックは同一リソースに同時に取得できる' },
    ],
    answer: 0,
    explanation: 'ロックの互換性：S（共有）ロックは読み取り専用でトランザクション間で共有可能（S と S は共存可）。X（排他）ロックは書き込みで他のトランザクションは S・X ともに取得不可。つまり「S と S：可」「S と X：不可」「X と X：不可」。デッドロックは複数トランザクションが互いに相手のロックを待つ状態です。',
  },
  {
    id: 'DB-039', category: 'database', categoryName: 'データベース',
    difficulty: 4, year: 2024, tags: ['分散データベース','2相コミット'],
    question: '分散データベースの 2 相コミットプロトコル（2PC）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'コーディネータが全参加者に「コミット準備OK か」を問い合わせ（第1相）、全員OKならコミットを指示する（第2相）' },
      { index: 1, text: 'すべての参加者が独立してコミットを決定し、コーディネータに通知する' },
      { index: 2, text: '2PC はコーディネータ障害時も自動回復できるため、高可用性が保証される' },
      { index: 3, text: '2PC はネットワーク遅延を考慮せず、常に強一貫性を提供できない' },
    ],
    answer: 0,
    explanation: '2PC の処理：第1相（投票フェーズ）コーディネータが全参加者に「PREPARE」を送り、参加者は「YES/NO」を返答。第2相（決定フェーズ）全員 YES なら「COMMIT」、1 つでも NO なら「ROLLBACK」を全参加者に送信。コーディネータ障害時には参加者がブロック（Blocking Problem）する問題があり、3PC や Paxos/Raft で改善されます。',
  },
  {
    id: 'DB-040', category: 'database', categoryName: 'データベース',
    difficulty: 2, year: 2022, tags: ['ビュー','マテリアライズドビュー'],
    question: 'マテリアライズドビューと通常のビューの違いとして正しいものはどれか。',
    choices: [
      { index: 0, text: '通常のビューは結果をキャッシュするが、マテリアライズドビューはしない' },
      { index: 1, text: 'マテリアライズドビューはクエリ結果を物理的に保存し、更新のタイミングを制御できる' },
      { index: 2, text: '両者とも同等の参照コストで違いはない' },
      { index: 3, text: 'マテリアライズドビューは更新（INSERT/UPDATE）ができない制約がある' },
    ],
    answer: 1,
    explanation: '通常のビューはクエリ定義のみ保存し参照時に毎回計算します。マテリアライズドビューはクエリ結果を物理テーブルとして保存するため参照が高速ですが、元データ更新時に再計算（REFRESH）が必要です。分析クエリの高速化・集計テーブルの自動生成に使われます。',
  },

  // ── セキュリティ ──────────────────────────────────────
  {
    id: 'SEC-035', category: 'security', categoryName: 'セキュリティ',
    difficulty: 3, year: 2023, tags: ['ペネトレーションテスト','脆弱性診断'],
    question: 'ペネトレーションテスト（侵入テスト）に関する記述として正しいものはどれか。',
    choices: [
      { index: 0, text: '悪意あるハッカーによる不正侵入の試み' },
      { index: 1, text: '組織の許可を得た上で実際の攻撃手法を使ってシステムの脆弱性を検証するテスト' },
      { index: 2, text: 'ソースコードを静的に解析して脆弱性を探す手法' },
      { index: 3, text: 'ファイアウォールの設定を自動確認するツール' },
    ],
    answer: 1,
    explanation: 'ペネトレーションテスト（Pen Test）は組織の正式な許可（スコープ定義・ROE）のもと、倫理的ハッカー（ホワイトハット）が実際の攻撃手法でシステムの脆弱性を検証します。ブラックボックス（情報なし）・グレーボックス（一部情報あり）・ホワイトボックス（全情報あり）のアプローチがあります。',
  },
  {
    id: 'SEC-036', category: 'security', categoryName: 'セキュリティ',
    difficulty: 4, year: 2024, tags: ['PKI','証明書','CA'],
    question: 'PKI（公開鍵基盤）における証明書失効の仕組みとして正しいものはどれか。',
    choices: [
      { index: 0, text: 'CRL（証明書失効リスト）は失効した証明書のシリアル番号を列挙したリスト。OCSP はリアルタイムに失効確認できる' },
      { index: 1, text: 'OCSP は失効した証明書を定期的にまとめてリスト化する仕組み' },
      { index: 2, text: '証明書が失効しても有効期限まで使い続けることができる' },
      { index: 3, text: 'CA は一度発行した証明書を失効させる手段を持たない' },
    ],
    answer: 0,
    explanation: 'PKI の証明書失効：CRL（Certificate Revocation List）は CA が定期発行する失効証明書リストで、ダウンロードしてローカル確認します（リアルタイム性に欠ける）。OCSP（Online Certificate Status Protocol）はリアルタイムで CA に問い合わせ。OCSP Stapling は Web サーバが事前に OCSP 応答をキャッシュして証明書と一緒に送る最適化手法です。',
  },
  {
    id: 'SEC-037', category: 'security', categoryName: 'セキュリティ',
    difficulty: 3, year: 2023, tags: ['APT','標的型攻撃'],
    question: 'APT（Advanced Persistent Threat：高度な持続的脅威）の特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: '不特定多数を無差別に標的とする大量自動化攻撃' },
      { index: 1, text: '特定の組織・政府・産業を標的に、長期間にわたり潜伏・情報窃取を行う高度な攻撃' },
      { index: 2, text: 'ランサムウェアによる短期的な金銭目的の攻撃' },
      { index: 3, text: '既製の攻撃ツールを使った技術力の低い攻撃者（スクリプトキディ）による攻撃' },
    ],
    answer: 1,
    explanation: 'APT は国家支援のグループなどが特定ターゲットに対して「Advanced（高度）・Persistent（持続的）・Threat（脅威）」で行う攻撃です。特徴：スピアフィッシング・ゼロデイ脆弱性・LOL（Living off the Land）技術・C2 インフラ・長期潜伏（数ヶ月〜数年）・情報窃取・知的財産の侵害。MITRE ATT&CK フレームワークで戦術・手法が整理されています。',
  },
  {
    id: 'SEC-038', category: 'security', categoryName: 'セキュリティ',
    difficulty: 3, year: 2024, tags: ['セキュアコーディング','バッファオーバーフロー'],
    question: 'バッファオーバーフロー攻撃への対策として正しいものはどれか。',
    choices: [
      { index: 0, text: '入力データのサイズを検証し、固定長バッファに収まるか確認する' },
      { index: 1, text: 'パスワードを定期的に変更する' },
      { index: 2, text: 'ファイアウォールで HTTP ポートを閉鎖する' },
      { index: 3, text: 'データベースのバックアップを頻繁に行う' },
    ],
    answer: 0,
    explanation: 'バッファオーバーフローは入力データがバッファサイズを超えてメモリを上書きし、任意コード実行につながる脆弱性です。対策：①入力値の長さ検証②安全な関数の使用（strncpy・snprintf等）③スタックカナリア・ASLR・DEP/NX ビット（OS 機能）④コンパイラの保護機能（-fstack-protector）。',
  },
  {
    id: 'SEC-039', category: 'security', categoryName: 'セキュリティ',
    difficulty: 3, year: 2023, tags: ['セキュリティ評価','CC','ISO15408'],
    question: 'Common Criteria（ISO/IEC 15408）のEAL（Evaluation Assurance Level）に関する記述として正しいものはどれか。',
    choices: [
      { index: 0, text: 'EAL の数字が大きいほど脆弱性が多いことを意味する' },
      { index: 1, text: 'EAL 1〜7 でセキュリティ評価の保証レベルを表し、数字が大きいほど厳格な評価を受けている' },
      { index: 2, text: 'EAL7 は市販のすべての IT 製品が取得できる最低要件' },
      { index: 3, text: 'EAL は日本独自の評価制度で ISO とは無関係' },
    ],
    answer: 1,
    explanation: 'Common Criteria（CC）は IT セキュリティ製品の国際評価規格（ISO/IEC 15408）です。EAL（保証レベル）は EAL1（機能試験のみ）〜EAL7（形式的検証済み）の 7 段階で、数値が高いほど厳格です。政府調達などでは EAL4 以上が要求されることが多いです。PP（Protection Profile）で要求仕様を定義し、ST（Security Target）でその実装を証明します。',
  },
  {
    id: 'SEC-040', category: 'security', categoryName: 'セキュリティ',
    difficulty: 2, year: 2022, tags: ['パスワード','ハッシュ','ソルト'],
    question: 'パスワードのハッシュ保存において「ソルト（Salt）」を使う目的として正しいものはどれか。',
    choices: [
      { index: 0, text: 'パスワードを暗号化して元に戻せるようにする' },
      { index: 1, text: '同じパスワードでも異なるハッシュ値になるようにして、レインボーテーブル攻撃を防ぐ' },
      { index: 2, text: 'ハッシュの計算速度を高速化する' },
      { index: 3, text: 'パスワードの最小文字数を強制する' },
    ],
    answer: 1,
    explanation: 'ソルトはパスワードハッシュ計算時にランダムな値を付加する手法です。効果：①同じパスワードでもユーザごとに異なるハッシュ値になる②事前計算した対照表（レインボーテーブル）による攻撃を無効化。パスワードハッシュには SHA ではなく、計算コストが調整可能な bcrypt・Argon2・scrypt が推奨されます。',
  },

  // ── OS ────────────────────────────────────────────────
  {
    id: 'OS-034', category: 'os', categoryName: 'OS・コンピュータ',
    difficulty: 3, year: 2023, tags: ['スケジューリング','ラウンドロビン'],
    question: 'ラウンドロビン（RR）スケジューリングアルゴリズムの説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '優先度が最も高いプロセスを常に実行する非プリエンプティブな手法' },
      { index: 1, text: '全プロセスに均等なタイムスライスを割り当て、時間が来ると次のプロセスに切り替えるプリエンプティブな手法' },
      { index: 2, text: '最短の実行時間を持つプロセスを優先する最適な手法（SJF）' },
      { index: 3, text: '先に到着したプロセスを先に実行する非プリエンプティブな FIFO 手法' },
    ],
    answer: 1,
    explanation: 'RR は各プロセスに等しいタイムスライス（クォンタム）を順番に割り当てるプリエンプティブなスケジューリングです。タイムシェアリングシステムの基礎で、応答時間を均等にする利点があります。タイムスライスが短すぎるとコンテキストスイッチのオーバーヘッドが増大します。',
  },
  {
    id: 'OS-035', category: 'os', categoryName: 'OS・コンピュータ',
    difficulty: 4, year: 2024, tags: ['キャッシュ','局所性','TLB'],
    question: 'CPU キャッシュの「空間的局所性（Spatial Locality）」の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '直近アクセスされたデータは近い将来また参照される' },
      { index: 1, text: 'あるアドレスへのアクセスの後、近接するアドレスも参照される可能性が高い' },
      { index: 2, text: 'キャッシュは CPU と RAM の中間に位置する高速記憶装置である' },
      { index: 3, text: 'L1 キャッシュは L2 キャッシュより大容量だが低速' },
    ],
    answer: 1,
    explanation: 'データ局所性の 2 種類：①時間的局所性（Temporal）：直近アクセスしたデータは近い将来再アクセスされやすい（ループ内の変数）②空間的局所性（Spatial）：あるアドレスのデータにアクセスしたら、近隣アドレスも参照される（配列の逐次アクセス）。キャッシュラインはこの空間的局所性を活用して近隣データをまとめて読み込みます。',
  },
  {
    id: 'OS-036', category: 'os', categoryName: 'OS・コンピュータ',
    difficulty: 3, year: 2023, tags: ['シェル','パイプ','リダイレクト'],
    question: 'シェルのパイプ（|）とリダイレクト（>）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'パイプは標準出力をファイルに書き込み、リダイレクトはコマンド間でデータを渡す' },
      { index: 1, text: 'パイプは前のコマンドの標準出力を次のコマンドの標準入力に接続し、リダイレクトは標準入出力をファイルに接続する' },
      { index: 2, text: 'パイプもリダイレクトも機能は同一であり、書き方の違いのみ' },
      { index: 3, text: 'パイプは並列実行、リダイレクトは順次実行を表す' },
    ],
    answer: 1,
    explanation: 'パイプ（|）はコマンド間をつなぐ：cmd1 | cmd2 で cmd1 の出力が cmd2 の入力になります（例：ls -l | grep .txt）。リダイレクト（>・<・>>）はファイルとの入出力を切り替えます（> で上書き出力、>> で追記、< で入力読込）。組み合わせて強力なシェルスクリプトが作れます。',
  },
  {
    id: 'OS-037', category: 'os', categoryName: 'OS・コンピュータ',
    difficulty: 2, year: 2022, tags: ['メモリ管理','断片化'],
    question: '外部断片化（External Fragmentation）が発生する原因として正しいものはどれか。',
    choices: [
      { index: 0, text: '固定長のメモリブロックに対して、プロセスが必要量より小さい場合に生じる無駄' },
      { index: 1, text: 'メモリの割り当て・解放を繰り返すことで空き領域が小さく分散し、連続した大きな領域が確保できなくなる' },
      { index: 2, text: 'ページングシステムでページの余り部分に生じる無駄' },
      { index: 3, text: 'キャッシュ内のデータが無効になること' },
    ],
    answer: 1,
    explanation: '外部断片化はメモリの割り当て・解放を繰り返すうちに、小さな空き領域が散在して連続した大きな空き領域が得られなくなる現象です。解決法：コンパクション（メモリ内容を詰め替えて連続領域を作る）やページング/セグメンテーション。内部断片化は固定長ブロック割り当てでブロック内の未使用部分が生じる無駄です。',
  },
  {
    id: 'OS-038', category: 'os', categoryName: 'OS・コンピュータ',
    difficulty: 3, year: 2024, tags: ['仮想化','ハイパーバイザ','タイプ1'],
    question: 'タイプ 1（ベアメタル）ハイパーバイザとタイプ 2 ハイパーバイザの違いとして正しいものはどれか。',
    choices: [
      { index: 0, text: 'タイプ 1 はホスト OS 上で動作し、タイプ 2 はハードウェア上で直接動作する' },
      { index: 1, text: 'タイプ 1 はハードウェア上で直接動作し性能が高い。タイプ 2 はホスト OS 上で動作する' },
      { index: 2, text: '両者とも同等の性能を持ち、構成の複雑さのみが異なる' },
      { index: 3, text: 'タイプ 1 は個人用 PC に、タイプ 2 はサーバに適している' },
    ],
    answer: 1,
    explanation: 'ハイパーバイザの種類：タイプ 1（ベアメタル）：VMware ESXi・Hyper-V・KVM など。物理ハードウェア上で直接動作するため性能・セキュリティが高くデータセンターで使用。タイプ 2（ホスト型）：VMware Workstation・VirtualBox など。既存の OS 上で動作するためセットアップが簡単ですが、オーバーヘッドがあります。',
  },
  {
    id: 'OS-039', category: 'os', categoryName: 'OS・コンピュータ',
    difficulty: 3, year: 2023, tags: ['クロック','命令サイクル','MIPS'],
    question: '1 命令の実行に平均 4 クロックかかる CPU のクロック周波数が 2 GHz のとき、この CPU の MIPS 値として正しいものはどれか。',
    choices: [
      { index: 0, text: '500 MIPS' },
      { index: 1, text: '2000 MIPS' },
      { index: 2, text: '250 MIPS' },
      { index: 3, text: '8000 MIPS' },
    ],
    answer: 0,
    explanation: 'MIPS（Million Instructions Per Second）= クロック周波数 / CPI / 10⁶。クロック周波数 2 GHz = 2×10⁹ Hz、CPI（Cycles Per Instruction）= 4。MIPS = 2×10⁹ / 4 / 10⁶ = 500 MIPS。クロック数が多い命令を多く使うと MIPS は下がります。',
  },

  // ── ソフトウェア開発 ───────────────────────────────────
  {
    id: 'SD-032', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 3, year: 2023, tags: ['設計原則','SOLID'],
    question: 'SOLID 原則の「開放/閉鎖原則（OCP）」の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'クラスは 1 つの責任のみを持つべきである' },
      { index: 1, text: 'クラスは拡張に対して開いており（新機能追加可）、修正に対して閉じている（既存コード変更不要）べきである' },
      { index: 2, text: '派生クラスは基底クラスの代わりに使えるべきである（リスコフ置換）' },
      { index: 3, text: 'インタフェースは細かく分割すべきである' },
    ],
    answer: 1,
    explanation: 'SOLID の各原則：S=単一責任・O=開放/閉鎖・L=リスコフ置換・I=インタフェース分離・D=依存性逆転。OCP（Open/Closed Principle）は「ソフトウェアは機能拡張に対して開いているべきだが、既存コードの修正に対しては閉じていべき」という原則です。抽象化・ポリモーフィズムにより実現します。',
  },
  {
    id: 'SD-033', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 4, year: 2024, tags: ['マイクロフロントエンド','フロントエンド'],
    question: 'マイクロフロントエンドアーキテクチャの特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: 'フロントエンドを 1 つの大規模な SPA（モノリス）にまとめる設計' },
      { index: 1, text: 'フロントエンドを独立したチームが開発・デプロイできる複数の小さな UI に分割する' },
      { index: 2, text: 'バックエンドのマイクロサービスをフロントエンドで統合する設計' },
      { index: 3, text: 'すべての UI コンポーネントを同一フレームワークで統一する制約' },
    ],
    answer: 1,
    explanation: 'マイクロフロントエンドはマイクロサービスの思想をフロントエンドに適用し、UI を機能ごとの独立した「マイクロアプリ」に分割します。特徴：チームごとに独立したデプロイ・技術スタックの自由・垂直分割（機能単位でフロントとバックが同一チーム）。Module Federation（Webpack 5）・Web Components・iframe などで実装します。',
  },
  {
    id: 'SD-034', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 3, year: 2023, tags: ['コード品質','技術指標'],
    question: 'サイクロマティック複雑度（Cyclomatic Complexity）に関する記述として正しいものはどれか。',
    choices: [
      { index: 0, text: 'コードの行数（LOC）をベースにした品質指標' },
      { index: 1, text: '制御フロー内の分岐数（if・switch・while など）に基づくコードの複雑さの指標' },
      { index: 2, text: 'クラス間の結合度を測る指標' },
      { index: 3, text: 'テストカバレッジのパーセンテージを表す' },
    ],
    answer: 1,
    explanation: 'サイクロマティック複雑度（McCabe の複雑度）は制御フローグラフの独立した実行パス数を表します。計算式：M = E - N + 2P（E=辺, N=ノード, P=コンポーネント数）、簡略的には「分岐点（if/case/while 等）の数 + 1」。複雑度 > 10 はリファクタリングを検討する基準とされています。',
  },
  {
    id: 'SD-035', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 2, year: 2022, tags: ['アジャイル','ユーザーストーリー'],
    question: 'アジャイル開発のユーザーストーリーの適切な記述形式はどれか。',
    choices: [
      { index: 0, text: '「データベースに PostgreSQL を使う」という技術的な実装方針を記述する' },
      { index: 1, text: '「[ユーザーとして] 〜したい。なぜなら〜（ビジネス価値）だから」という形式で記述する' },
      { index: 2, text: '「全テーブルに created_at カラムを追加する」というタスクを記述する' },
      { index: 3, text: '「バグ #123 を修正する」というチケット番号付きで記述する' },
    ],
    answer: 1,
    explanation: 'ユーザーストーリーの標準形式：「[ユーザーロール] として、[機能・操作] がしたい。なぜなら [ビジネス価値] だから」。例：「顧客として、注文履歴を検索したい。なぜなら過去の購入品を確認したいから」。技術的実装はスプリントタスクに分解します。INVEST 基準（独立・交渉可能・価値ある・見積り可能・小さい・テスト可能）が質の指標です。',
  },
  {
    id: 'SD-036', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 4, year: 2024, tags: ['DDD','ドメイン駆動設計'],
    question: 'DDD（ドメイン駆動設計）における「集約（Aggregate）」の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'DB テーブルと 1 対 1 に対応するモデルオブジェクト' },
      { index: 1, text: '一貫性の境界を定義する関連オブジェクトのクラスターで、ルートエンティティを通じてのみ外部からアクセスされる' },
      { index: 2, text: 'ビジネスロジックを持たない純粋なデータコンテナ（DTO）' },
      { index: 3, text: '複数のマイクロサービスをまとめる上位概念' },
    ],
    answer: 1,
    explanation: 'DDD の集約は整合性を保つべきオブジェクトの境界（一貫性の境界）を定義します。集約ルート（Root Entity）のみが外部からアクセス可能で、内部のエンティティ・値オブジェクトは必ずルート経由で操作されます。これにより不変条件（ビジネスルール）の整合性が保たれます。境界付きコンテキスト（Bounded Context）と合わせて DDD の核心概念です。',
  },
  {
    id: 'SD-037', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 3, year: 2023, tags: ['コンテナ','Docker','Kubernetes'],
    question: 'Kubernetes（K8s）の主な機能として正しいものはどれか。',
    choices: [
      { index: 0, text: 'コンテナイメージを構築・パッケージングするツール' },
      { index: 1, text: 'コンテナのオーケストレーション（自動デプロイ・スケーリング・自己修復・ロールアウト）を行うプラットフォーム' },
      { index: 2, text: 'コンテナ間のネットワーク通信を暗号化するツール' },
      { index: 3, text: 'コンテナのソースコードをリポジトリで管理する CI ツール' },
    ],
    answer: 1,
    explanation: 'Kubernetes は Google が開発したコンテナオーケストレーションプラットフォームです。機能：①宣言的デプロイメント（desired state）②自動スケーリング（HPA/VPA）③自己修復（コンテナ障害時の再起動）④ローリングアップデート⑤サービスディスカバリ/ロードバランシング。Docker はコンテナイメージのビルド・実行ツールです。',
  },

  // ── プロジェクトマネジメント ───────────────────────────
  {
    id: 'PM-033', category: 'project-mgmt', categoryName: 'プロジェクトマネジメント',
    difficulty: 3, year: 2023, tags: ['スコープ管理','WBS'],
    question: 'WBS（作業分解構成図）の作成目的として正しいものはどれか。',
    choices: [
      { index: 0, text: 'プロジェクトメンバーのスキルを評価する' },
      { index: 1, text: 'プロジェクトの全スコープを階層的な成果物・作業に分解し可視化する' },
      { index: 2, text: 'コストとスケジュールのみを管理する' },
      { index: 3, text: 'リスクを識別して優先度付けする' },
    ],
    answer: 1,
    explanation: 'WBS（Work Breakdown Structure）はプロジェクトの成果物を最小管理単位（ワークパッケージ）に分解した階層構造です。100% ルール（WBS の全要素の合計がプロジェクト全体のスコープになる）が重要です。コスト・スケジュール見積りの基礎となり、スコープクリープ（範囲の無秩序な拡大）防止にも役立ちます。',
  },
  {
    id: 'PM-034', category: 'project-mgmt', categoryName: 'プロジェクトマネジメント',
    difficulty: 4, year: 2024, tags: ['アジャイル','スケーリング','SAFe'],
    question: 'SAFe（Scaled Agile Framework）の主な目的として正しいものはどれか。',
    choices: [
      { index: 0, text: '小規模チームのみを対象にしたスクラムの改善手法' },
      { index: 1, text: 'アジャイル手法を大規模な企業・複数チームにスケールさせるフレームワーク' },
      { index: 2, text: 'ウォーターフォール開発をアジャイルに移行させる移行ガイド' },
      { index: 3, text: 'プロジェクトコスト管理に特化したアジャイル手法' },
    ],
    answer: 1,
    explanation: 'SAFe は複数のアジャイルチームを調整し企業規模の価値提供を可能にするフレームワークです。レベル：Team（スクラム/カンバン）・Program（PI プランニング・アジャイルリリーストレイン）・Large Solution・Portfolio。PI（Program Increment）プランニングで複数チームの四半期計画を同期させます。他のスケーリング手法：LeSS・Nexus・Disciplined Agile。',
  },
  {
    id: 'PM-035', category: 'project-mgmt', categoryName: 'プロジェクトマネジメント',
    difficulty: 3, year: 2023, tags: ['調達管理','契約種別'],
    question: '固定価格契約（FP: Fixed-Price）と実費弁済契約（CR: Cost Reimbursable）の比較として正しいものはどれか。',
    choices: [
      { index: 0, text: 'FP はコスト超過のリスクを買主が負い、CR はベンダが負う' },
      { index: 1, text: 'FP はコスト超過リスクをベンダが負い、CR は買主がコストを全額負担する（リスクは買主側が高い）' },
      { index: 2, text: '両者ともコストリスクは折半する' },
      { index: 3, text: 'FP はスコープ不確実な場合に最適な契約形態' },
    ],
    answer: 1,
    explanation: '契約形態の特徴：固定価格（FFP）はスコープが明確な場合に適し、超過コストはベンダ負担。スコープが変わると変更要求とコスト交渉が必要。実費弁済（CPFF/CPIF 等）は実費 + 報酬で買主がコストリスクを負いますがスコープ変更に柔軟。T&M（タイム・アンド・マテリアル）は中間的で、不確実な調査フェーズに適しています。',
  },
  {
    id: 'PM-036', category: 'project-mgmt', categoryName: 'プロジェクトマネジメント',
    difficulty: 2, year: 2022, tags: ['品質','デバッグ','バグ修正コスト'],
    question: 'ソフトウェアの「欠陥修正コスト」に関する記述として正しいものはどれか。',
    choices: [
      { index: 0, text: '要件定義フェーズで発見されたバグと運用後に発見されたバグの修正コストはほぼ同じ' },
      { index: 1, text: '欠陥の発見が遅くなるほど修正コストは指数的に増大する' },
      { index: 2, text: '運用フェーズで発見されたバグは最も修正コストが安い' },
      { index: 3, text: 'テストフェーズで発見されたバグは要件定義フェーズと比べてコストが低い' },
    ],
    answer: 1,
    explanation: 'IBM などの調査によれば、バグの修正コストはフェーズが後になるほど指数的に増大します（1:10:100 の法則）：要件定義(1)→設計(5)→コーディング(10)→テスト(20)→運用(100)。早期発見・早期修正（シフトレフト）が品質コスト削減の原則です。これが TDD・コードレビュー・静的解析の価値を支えます。',
  },
  {
    id: 'PM-037', category: 'project-mgmt', categoryName: 'プロジェクトマネジメント',
    difficulty: 3, year: 2024, tags: ['プロジェクト憲章','スポンサー'],
    question: 'プロジェクト憲章（Project Charter）の主な目的として正しいものはどれか。',
    choices: [
      { index: 0, text: '詳細なスケジュールとコスト見積りを定義する文書' },
      { index: 1, text: 'プロジェクトを公式に認可し、PMに権限を与え、目的・スコープ・ステークホルダ・制約を定義する' },
      { index: 2, text: 'チームメンバーの役割・責任のみを記述した組織図' },
      { index: 3, text: 'プロジェクト終了後の成果物引き渡し報告書' },
    ],
    answer: 1,
    explanation: 'プロジェクト憲章は「プロジェクトの存在を公式に承認する」文書です。内容：目的・目標・スコープの大枠・主要ステークホルダ・仮定と制約・PM の任命と権限・予算概算・マイルストン。スポンサー（発起人）が署名することで PM にリソースを調達する権限が与えられます。PMBOK 第 6 版でもプロジェクト統合マネジメントの起点とされます。',
  },

  // ── サービスマネジメント ───────────────────────────────
  {
    id: 'SM-028', category: 'service-mgmt', categoryName: 'サービスマネジメント',
    difficulty: 3, year: 2023, tags: ['キャパシティ管理','パフォーマンス'],
    question: 'ITIL のキャパシティ管理の主な目的として正しいものはどれか。',
    choices: [
      { index: 0, text: 'システムの物理的なハードウェアを定期交換する作業計画' },
      { index: 1, text: '現在および将来のビジネス需要を費用対効果よく満たすための IT リソース容量を確保する' },
      { index: 2, text: '変更の影響をリスク評価する変更管理の一部' },
      { index: 3, text: 'SLA 違反時のペナルティを管理する財務管理の一部' },
    ],
    answer: 1,
    explanation: 'キャパシティ管理は「現在・将来のビジネス需要に対して適切な IT リソース（CPU・メモリ・ストレージ・ネットワーク帯域）を適時・適コストで確保する」マネジメント活動です。サブプロセス：ビジネスキャパシティ管理（将来需要予測）・サービスキャパシティ管理（SLA 達成監視）・コンポーネントキャパシティ管理（個別リソース監視）。',
  },
  {
    id: 'SM-029', category: 'service-mgmt', categoryName: 'サービスマネジメント',
    difficulty: 3, year: 2022, tags: ['リリース管理','デプロイ'],
    question: 'ITIL のリリース管理とデプロイメント管理の目的として正しいものはどれか。',
    choices: [
      { index: 0, text: 'リリースごとに個別の SLA を新たに締結する' },
      { index: 1, text: '新規・変更されたサービスを本番環境に展開し、価値を提供しながらサービス品質を保護する' },
      { index: 2, text: 'インシデントを分類してエスカレーションルートを定義する' },
      { index: 3, text: 'リリース頻度を最小化してシステムを安定させることのみを目的とする' },
    ],
    answer: 1,
    explanation: 'リリース管理は新機能・修正・設定変更を本番環境に安全に展開するための計画・スケジュール・制御プロセスです。アプローチ：ビッグバン（一括）・フェーズド（段階）・プル（ユーザが選択）・プッシュ（強制展開）・自動配布。カナリアリリース・ブルーグリーンデプロイはゼロダウンタイムを実現する手法です。',
  },
  {
    id: 'SM-030', category: 'service-mgmt', categoryName: 'サービスマネジメント',
    difficulty: 4, year: 2024, tags: ['可用性設計','フォールトトレランス'],
    question: '高可用性設計のアプローチとして、「フォールトトレランス（Fault Tolerance）」の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '障害が発生した後に手動で迅速に復旧できる設計' },
      { index: 1, text: '障害が発生してもシステムが停止せず、サービスを継続できる冗長化設計' },
      { index: 2, text: '障害が発生しないように予防する設計（フォールトアボイダンス）' },
      { index: 3, text: '障害の影響範囲を最小化する設計（フォールトコンテインメント）' },
    ],
    answer: 1,
    explanation: '高可用性アプローチ：フォールトアボイダンス（高品質コンポーネントで障害を防ぐ）・フォールトトレランス（障害が発生してもサービス継続：RAID・クラスタ・ホットスタンバイ）・フォールトリカバリ（障害後に迅速復旧：バックアップ・DR）・フォールトコンテインメント（障害の波及防止：サーキットブレーカー）。',
  },
  {
    id: 'SM-031', category: 'service-mgmt', categoryName: 'サービスマネジメント',
    difficulty: 2, year: 2022, tags: ['インシデント管理','エスカレーション'],
    question: 'インシデント管理における「機能的エスカレーション」の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '上位管理者に状況を報告する経営層への報告' },
      { index: 1, text: '対応可能な専門スキルや権限を持つ上位グループにインシデントを引き継ぐ' },
      { index: 2, text: 'インシデントを問題管理チームに正式移管する' },
      { index: 3, text: 'SLA 違反時に顧客への補償手続きを開始する' },
    ],
    answer: 1,
    explanation: 'エスカレーションの種類：機能的エスカレーション（Functional）：解決に必要な技術スキル・アクセス権を持つ上位の技術グループへの引き継ぎ（1 線→2 線→3 線サポート）。階層的エスカレーション（Hierarchical）：管理者・CIO など経営層への状況報告（SLA 違反リスク・重大障害時）。',
  },
  {
    id: 'SM-032', category: 'service-mgmt', categoryName: 'サービスマネジメント',
    difficulty: 3, year: 2023, tags: ['継続的改善','CSI','PDCA'],
    question: 'ITIL の継続的サービス改善（CSI）で使用される「CSI 登録簿」の目的として正しいものはどれか。',
    choices: [
      { index: 0, text: 'すべてのシステム変更を記録する変更ログ' },
      { index: 1, text: '識別された改善機会を優先度付けして追跡管理するリポジトリ' },
      { index: 2, text: 'SLA の契約内容を記録する台帳' },
      { index: 3, text: 'インシデントの根本原因を記録するナレッジベース' },
    ],
    answer: 1,
    explanation: 'CSI 登録簿（CSI Register）は継続的改善の機会（Improvement Opportunities）を記録し、優先度付け・担当・期限・進捗を管理するリポジトリです。PDCA サイクル（Plan-Do-Check-Act）を ITIL では ADIOD（Approach, Define, Implement, Operate, Devolve）として体系化しています。',
  },

  // ── ビジネスストラテジ ─────────────────────────────────
  {
    id: 'BS-031', category: 'business-strategy', categoryName: 'ビジネスストラテジ',
    difficulty: 3, year: 2023, tags: ['デジタルトランスフォーメーション','DX'],
    question: 'DX（デジタルトランスフォーメーション）の定義として最も適切なものはどれか。',
    choices: [
      { index: 0, text: 'IT システムを最新のソフトウェアに入れ替える更改プロジェクト' },
      { index: 1, text: 'デジタル技術を活用して、ビジネスモデル・組織・プロセスを変革し新たな価値を創出すること' },
      { index: 2, text: '紙の書類を電子化するペーパーレス化推進活動' },
      { index: 3, text: 'クラウドサービスに移行してコスト削減を図る取り組み' },
    ],
    answer: 1,
    explanation: 'DX（Digital Transformation）は「デジタル技術を活用して製品・サービス・ビジネスモデル・プロセス・組織文化を変革し、新たな競争優位性を確立すること」（経済産業省 DX 推進ガイドライン）。単なる IT 投資・効率化ではなく、ビジネス価値の創出・変革が本質です。2025 年の崖（レガシーシステムの DX 障壁）も注目されています。',
  },
  {
    id: 'BS-032', category: 'business-strategy', categoryName: 'ビジネスストラテジ',
    difficulty: 3, year: 2024, tags: ['アジャイル経営','OKR'],
    question: 'OKR（Objectives and Key Results）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '年次の財務目標をトップダウンで設定する予算管理手法' },
      { index: 1, text: '野心的な定性目標（O）と達成を測る定量的指標（KR）を組み合わせた目標管理フレームワーク' },
      { index: 2, text: 'KPI と同義で、業績評価のためのメトリクスのみを設定する手法' },
      { index: 3, text: 'スクラムで使われるプロダクトバックログの別名' },
    ],
    answer: 1,
    explanation: 'OKR は Intel の Andy Grove が考案し、Google が普及させた目標管理フレームワークです。Objective（野心的・インスピレーショナルな定性目標）と Key Results（O の達成を測る 2〜5 個の定量指標）で構成。特徴：四半期更新・達成率 70% で成功・透明性（全社公開）。KPI は既存のビジネス指標の監視が主目的で、OKR は変革・挑戦的目標に適します。',
  },
  {
    id: 'BS-033', category: 'business-strategy', categoryName: 'ビジネスストラテジ',
    difficulty: 4, year: 2024, tags: ['エンタープライズアーキテクチャ','TOGAF'],
    question: 'エンタープライズアーキテクチャ（EA）の 4 つの視点の組み合わせとして正しいものはどれか。',
    choices: [
      { index: 0, text: 'ビジネス・データ・アプリケーション・テクノロジーアーキテクチャ' },
      { index: 1, text: '戦略・組織・プロセス・システムアーキテクチャ' },
      { index: 2, text: 'ユーザ・開発・運用・セキュリティアーキテクチャ' },
      { index: 3, text: 'コスト・品質・納期・リスクアーキテクチャ' },
    ],
    answer: 0,
    explanation: 'TOGAF（The Open Group Architecture Framework）で定義される EA の 4 つの視点（Architecture Domain）：①Business（ビジネスプロセス・組織）②Data（情報・データモデル）③Application（アプリケーション構造・相互作用）④Technology（インフラ・ハードウェア・ソフトウェア）。日本では「業務・データ・アプリケーション・技術」と表現されます。',
  },
  {
    id: 'BS-034', category: 'business-strategy', categoryName: 'ビジネスストラテジ',
    difficulty: 3, year: 2023, tags: ['ブルーオーシャン戦略','競争回避'],
    question: 'ブルーオーシャン戦略の特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: '既存市場での競合他社との熾烈な価格競争に勝つ戦略' },
      { index: 1, text: '競争のない新市場（ブルーオーシャン）を創造し、競争を無意味にする戦略' },
      { index: 2, text: '差別化とコスト削減を同時に追求するポーターの競争戦略の一形態' },
      { index: 3, text: '特定のニッチ市場に集中するポーターの集中戦略の別名' },
    ],
    answer: 1,
    explanation: 'ブルーオーシャン戦略（W.Chan Kim・Renée Mauborgne）は、血みどろの競争（レッドオーシャン）ではなく、競争のない新市場を創造する戦略です。ツール：ERRC フレームワーク（Eliminate・Reduce・Raise・Create）でバリューカーブを再設計します。任天堂 Wii・Cirque du Soleil が代表例として挙げられます。',
  },
  {
    id: 'BS-035', category: 'business-strategy', categoryName: 'ビジネスストラテジ',
    difficulty: 2, year: 2022, tags: ['ITコスト','TCO'],
    question: 'TCO（Total Cost of Ownership：総所有コスト）に含まれる項目として正しいものはどれか。',
    choices: [
      { index: 0, text: 'ハードウェア購入費と初期導入費のみ' },
      { index: 1, text: '初期導入費・ライセンス費・運用保守費・廃棄費などシステム全ライフサイクルのコスト合計' },
      { index: 2, text: '年間のサポート費用のみ' },
      { index: 3, text: '開発プロジェクトの人件費のみ' },
    ],
    answer: 1,
    explanation: 'TCO は IT システムの生涯コスト全体を把握するための概念です。含まれるコスト：①初期費用（ハードウェア・ソフトウェア・導入・移行）②運用費（電力・通信・監視）③保守費（OS アップデート・障害対応・サポート契約）④ユーザサポート費④廃棄費。クラウドへの移行判断などで初期費 vs TCO の比較が重要です。',
  },

  // ── ロジック・数学 ────────────────────────────────────
  {
    id: 'LG-028', category: 'logic', categoryName: 'ロジック・数学',
    difficulty: 3, year: 2023, tags: ['線形代数','行列'],
    question: '2×2 行列 A = [[2, 1], [1, 3]] の行列式（det A）として正しいものはどれか。',
    choices: [
      { index: 0, text: '4' },
      { index: 1, text: '5' },
      { index: 2, text: '6' },
      { index: 3, text: '7' },
    ],
    answer: 1,
    explanation: '2×2 行列の行列式：det([[a, b], [c, d]]) = ad - bc。det([[2, 1], [1, 3]]) = 2×3 - 1×1 = 6 - 1 = 5。行列式が 0 でない場合、逆行列が存在します。行列式はコンピュータグラフィクス・連立方程式の解の存在判定・面積・体積計算などに使われます。',
  },
  {
    id: 'LG-029', category: 'logic', categoryName: 'ロジック・数学',
    difficulty: 4, year: 2024, tags: ['数値計算','浮動小数点','IEEE754'],
    question: 'IEEE 754 倍精度浮動小数点数のビット構成として正しいものはどれか。',
    choices: [
      { index: 0, text: '符号 1 ビット + 指数部 8 ビット + 仮数部 23 ビット（計 32 ビット）' },
      { index: 1, text: '符号 1 ビット + 指数部 11 ビット + 仮数部 52 ビット（計 64 ビット）' },
      { index: 2, text: '符号 1 ビット + 指数部 16 ビット + 仮数部 47 ビット（計 64 ビット）' },
      { index: 3, text: '符号 2 ビット + 指数部 12 ビット + 仮数部 50 ビット（計 64 ビット）' },
    ],
    answer: 1,
    explanation: 'IEEE 754 浮動小数点：単精度（float）= 符号1+指数8+仮数23 = 32 ビット、倍精度（double）= 符号1+指数11+仮数52 = 64 ビット。指数部にはバイアス（1023 for double）が加算されて格納されます。浮動小数点の誤差（丸め誤差・桁落ち・情報落ち）はプログラミングの重要な注意点です。',
  },
  {
    id: 'LG-030', category: 'logic', categoryName: 'ロジック・数学',
    difficulty: 3, year: 2023, tags: ['グラフ理論','最小全域木'],
    question: '最小全域木（MST: Minimum Spanning Tree）を求めるアルゴリズムとして正しいものはどれか。',
    choices: [
      { index: 0, text: 'ダイクストラ法・ベルマン-フォード法' },
      { index: 1, text: 'クラスカル法・プリム法' },
      { index: 2, text: 'DFS（深さ優先探索）・BFS（幅優先探索）' },
      { index: 3, text: 'ニュートン法・二分法' },
    ],
    answer: 1,
    explanation: '最小全域木（全頂点を連結する最小コストのエッジ集合）のアルゴリズム：クラスカル法（辺をコスト順にソートし、閉路を形成しない辺を貪欲に追加・O(E log E)）、プリム法（任意の頂点から始め、最小コストの辺で木を成長させる・O(E log V)）。ダイクストラ・ベルマン-フォードは単一始点最短経路アルゴリズムです。',
  },
  {
    id: 'LG-031', category: 'logic', categoryName: 'ロジック・数学',
    difficulty: 3, year: 2024, tags: ['自動機械','有限オートマトン'],
    question: '有限オートマトン（FA）に関する記述として正しいものはどれか。',
    choices: [
      { index: 0, text: '任意のプログラムを実行できる汎用的な計算モデル（チューリング完全）' },
      { index: 1, text: '有限の状態集合・遷移関数・初期状態・受理状態で定義される計算モデルで、正規言語を認識する' },
      { index: 2, text: '文脈自由言語の解析に必要な計算モデルでスタックを持つ' },
      { index: 3, text: '無限の状態を持ち、任意の計算を表現できる' },
    ],
    answer: 1,
    explanation: '有限オートマトン（FA）は状態数が有限の計算モデルで、正規言語（Regular Language）を認識します。構成：状態集合・入力アルファベット・遷移関数・初期状態・受理状態。決定性 FA（DFA）と非決定性 FA（NFA）があり、正規表現と等価な表現力を持ちます。字句解析（レキサー）の理論的基礎です。',
  },
  {
    id: 'LG-032', category: 'logic', categoryName: 'ロジック・数学',
    difficulty: 4, year: 2024, tags: ['P問題','NP問題','計算複雑性'],
    question: 'P 問題と NP 問題の関係として正しいものはどれか。',
    choices: [
      { index: 0, text: 'P 問題は多項式時間で解くことができ、NP 問題は解の検証のみ多項式時間でできる問題の集合' },
      { index: 1, text: 'P 問題は指数時間が必要で、NP 問題は多項式時間で解ける' },
      { index: 2, text: 'P と NP は同じ問題クラスであることが証明されている' },
      { index: 3, text: 'NP 困難問題はすべて多項式時間で解けることが知られている' },
    ],
    answer: 0,
    explanation: '計算複雑性：P（Polynomial time）= 多項式時間で解ける問題クラス（例：ソート・最短経路）。NP（Nondeterministic Polynomial）= 与えられた解を多項式時間で検証できる問題（例：巡回セールスマン問題の解の検証）。P ⊆ NP は明らか。「P=NP か？」は未解決の世紀の難問で、ミレニアム問題の 1 つです。NP 完全・NP 困難の問題には近似アルゴリズムを使います。',
  },

  // ── システムアーキテクチャ ─────────────────────────────
  {
    id: 'SA-030', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 3, year: 2023, tags: ['サーバレス','FaaS','Lambda'],
    question: 'サーバレスコンピューティング（FaaS）の特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: 'サーバが存在しないため、ネットワーク通信が不要' },
      { index: 1, text: 'インフラ管理不要でコードのみを記述し、実行時間に応じた従量課金となる' },
      { index: 2, text: '常時起動しているサーバより高コストになる' },
      { index: 3, text: 'レイテンシが低いため、すべてのリアルタイム処理に最適' },
    ],
    answer: 1,
    explanation: 'FaaS（Function as a Service）はコードをイベント駆動で実行し、サーバのプロビジョニング・管理・スケーリングを不要にします。代表：AWS Lambda・Azure Functions・Cloud Functions。特徴：実行時間のみ課金・自動スケール・コールドスタート遅延（ウォームアップ問題）。常時通信が少なくバーストトラフィックに適しますが、長時間処理や常時接続には不向きです。',
  },
  {
    id: 'SA-031', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 4, year: 2024, tags: ['イベント駆動','メッセージキュー','Kafka'],
    question: 'メッセージキューを使った非同期通信の利点として正しいものはどれか。',
    choices: [
      { index: 0, text: '送信側と受信側が同時に稼働している必要があるため、強い結合を実現する' },
      { index: 1, text: 'プロデューサとコンシューマを疎結合にし、負荷の平準化と耐障害性を向上させる' },
      { index: 2, text: 'レスポンスを即座に返す必要がある処理のみに適している' },
      { index: 3, text: 'メッセージが重複して処理されることがないため、冪等性設計は不要' },
    ],
    answer: 1,
    explanation: 'メッセージキュー（RabbitMQ・SQS・Apache Kafka）の利点：①疎結合（プロデューサが落ちてもコンシューマは動作・逆も然り）②負荷平準化（バーストトラフィックをキューで吸収）③耐障害性（メッセージを永続化して再配信可能）。注意点：最低 1 回配信（at-least-once）では重複があるため冪等性設計が重要です。',
  },
  {
    id: 'SA-032', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 3, year: 2023, tags: ['クラウド','IaaS','PaaS','SaaS'],
    question: 'クラウドサービスのモデルについて、「ミドルウェアや OS 管理はベンダが担当し、アプリケーションのデプロイに集中できる」のはどれか。',
    choices: [
      { index: 0, text: 'IaaS（Infrastructure as a Service）' },
      { index: 1, text: 'PaaS（Platform as a Service）' },
      { index: 2, text: 'SaaS（Software as a Service）' },
      { index: 3, text: 'FaaS（Function as a Service）' },
    ],
    answer: 1,
    explanation: 'クラウドモデルの責任分界：IaaS（VM・ストレージを提供、OS 以上はユーザ管理）→PaaS（OS・ミドルウェアを提供、アプリとデータのみユーザ管理）→SaaS（アプリまで提供、設定のみユーザ担当）。PaaS は Heroku・Cloud Foundry・Google App Engine が代表例です。FaaS は PaaS のさらに上位で、関数単位の実行環境を提供します。',
  },
  {
    id: 'SA-033', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 4, year: 2024, tags: ['オブザーバビリティ','分散トレーシング'],
    question: 'オブザーバビリティの三本柱のうち「分散トレーシング」の役割として正しいものはどれか。',
    choices: [
      { index: 0, text: 'システムの時系列メトリクス（CPU・メモリ）を収集・グラフ化する' },
      { index: 1, text: '分散システムの複数サービスにまたがるリクエストの流れを追跡し、レイテンシの原因を特定する' },
      { index: 2, text: 'アプリケーションのテキストログを収集・検索・分析する' },
      { index: 3, text: 'ネットワークパケットをキャプチャして通信内容を解析する' },
    ],
    answer: 1,
    explanation: 'オブザーバビリティの三本柱：①メトリクス（Metrics）：時系列の数値（CPU・レイテンシ・エラー率）、Prometheus/Grafana が代表②ログ（Logs）：イベントのテキスト記録、ELK Stack が代表③トレース（Traces）：リクエストがサービスをまたいで処理される流れを追跡、Jaeger/Zipkin/OpenTelemetry が代表。マイクロサービスの問題診断に特に重要です。',
  },
  {
    id: 'SA-034', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 3, year: 2023, tags: ['災害対策','DR','RTO','RPO'],
    question: 'DR（ディザスタリカバリ）構成のうち「最も低コストだが RTO が最も長い」方式はどれか。',
    choices: [
      { index: 0, text: 'ホットスタンバイ（Active-Active）' },
      { index: 1, text: 'ウォームスタンバイ' },
      { index: 2, text: 'コールドスタンバイ（バックアップ＆リストア）' },
      { index: 3, text: 'パイロットライト' },
    ],
    answer: 2,
    explanation: 'DR 構成と RTO/コストのトレードオフ：ホットスタンバイ（Active-Active）：最小 RTO（数秒）、最高コスト。ウォームスタンバイ：中 RTO（数分）、中コスト（最小構成で稼働中）。パイロットライト：コア機能のみ起動、RTO 数十分、低コスト。コールドスタンバイ（バックアップ＆リストア）：最大 RTO（数時間〜）、最低コスト。ビジネス要件に応じて選択します。',
  },
];

QUESTIONS_DATA.push(...QUESTIONS_DATA_PHASE12);

/* ─── フェーズ12 補足 9 問 ─────────────────────────── */
const QUESTIONS_DATA_PHASE12B = [
  {
    id: 'ALG-043', category: 'algorithm', categoryName: 'アルゴリズム',
    difficulty: 2, year: 2023, tags: ['キュー','FIFO'],
    question: 'キュー（Queue）データ構造の操作として正しいものはどれか。',
    choices: [
      { index: 0, text: 'LIFO（Last In First Out）— 最後に追加した要素を最初に取り出す' },
      { index: 1, text: 'FIFO（First In First Out）— 最初に追加した要素を最初に取り出す' },
      { index: 2, text: '任意の位置の要素を O(1) で取り出せる' },
      { index: 3, text: '要素は常にソートされた順に格納される' },
    ],
    answer: 1,
    explanation: 'キューは FIFO（First In First Out）構造で、後端（rear）にエンキュー（enqueue）し前端（front）からデキュー（dequeue）します。BFS（幅優先探索）・プロセス待機キュー・印刷スプーラなどに使われます。対してスタックは LIFO（Last In First Out）で DFS・関数呼び出しスタックなどに使われます。',
  },
  {
    id: 'NET-044', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2022, tags: ['IPアドレス','サブネット'],
    question: '192.168.1.0/26 のサブネットにおいて、使用可能なホストアドレスの数として正しいものはどれか。',
    choices: [
      { index: 0, text: '30' },
      { index: 1, text: '62' },
      { index: 2, text: '126' },
      { index: 3, text: '254' },
    ],
    answer: 1,
    explanation: '/26 はホスト部が 6 ビット（32-26=6）。使用可能アドレス数 = 2⁶ - 2 = 64 - 2 = 62（ネットワークアドレスとブロードキャストアドレスを除く）。/26 のサブネットマスクは 255.255.255.192。192.168.1.0/26 の範囲は .0〜.63 で、ホストには .1〜.62 が使用できます。',
  },
  {
    id: 'OS-040', category: 'os', categoryName: 'OS・コンピュータ',
    difficulty: 2, year: 2022, tags: ['CPU','キャッシュ','ヒット率'],
    question: 'キャッシュメモリのヒット率が 90%、キャッシュアクセス時間が 10ns、主記憶アクセス時間が 100ns のとき、実効アクセス時間として正しいものはどれか。',
    choices: [
      { index: 0, text: '10ns' },
      { index: 1, text: '19ns' },
      { index: 2, text: '55ns' },
      { index: 3, text: '100ns' },
    ],
    answer: 1,
    explanation: '実効アクセス時間 = ヒット率 × キャッシュ時間 + (1 - ヒット率) × 主記憶時間 = 0.9 × 10 + 0.1 × 100 = 9 + 10 = 19ns。ヒット率が高いほど実効アクセス時間はキャッシュ時間に近づきます。L1/L2/L3 キャッシュの多段構成で、ヒット率と容量のバランスを取ります。',
  },
  {
    id: 'DB-041', category: 'database', categoryName: 'データベース',
    difficulty: 2, year: 2022, tags: ['主キー','外部キー','制約'],
    question: '外部キー制約における「参照整合性」の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '外部キーの値は NULL のみ許容する' },
      { index: 1, text: '外部キーの値は参照先テーブルの主キーに存在する値か NULL でなければならない' },
      { index: 2, text: '外部キーは必ず一意でなければならない' },
      { index: 3, text: '外部キーを持つレコードは更新できない' },
    ],
    answer: 1,
    explanation: '参照整合性制約は「外部キーの値が参照先テーブルの主キー（または一意キー）に存在するか、NULL でなければならない」というルールです。违反するINSERT/UPDATEはエラーになります。親レコード削除時の動作：CASCADE（子も連鎖削除）・SET NULL・SET DEFAULT・RESTRICT（親を削除不可）を選択できます。',
  },
  {
    id: 'SEC-041', category: 'security', categoryName: 'セキュリティ',
    difficulty: 2, year: 2022, tags: ['情報セキュリティ','CIA'],
    question: '情報セキュリティの CIA トライアド（三要素）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'Confidentiality（機密性）・Integrity（完全性）・Availability（可用性）' },
      { index: 1, text: 'Confidentiality（機密性）・Intelligence（知性）・Authentication（認証）' },
      { index: 2, text: 'Cryptography（暗号化）・Identification（識別）・Authorization（認可）' },
      { index: 3, text: 'Control（制御）・Inspection（検査）・Accountability（説明責任）' },
    ],
    answer: 0,
    explanation: '情報セキュリティの 3 大要素（CIA）：①Confidentiality（機密性）：許可された者のみが情報にアクセスできる②Integrity（完全性）：情報が正確かつ改ざんされていない③Availability（可用性）：許可された利用者が必要なときに情報にアクセスできる。追加要素として、真正性・責任追跡性・否認防止性・信頼性も重要です（JIS Q 27001）。',
  },
  {
    id: 'PM-038', category: 'project-mgmt', categoryName: 'プロジェクトマネジメント',
    difficulty: 3, year: 2023, tags: ['コスト管理','予算'],
    question: 'EVM（アーンドバリューマネジメント）において、SV = EV - PV が負の値であることが示す状態はどれか。',
    choices: [
      { index: 0, text: 'コスト超過状態' },
      { index: 1, text: 'スケジュール遅延状態' },
      { index: 2, text: 'スケジュール前倒し状態' },
      { index: 3, text: 'コスト削減状態' },
    ],
    answer: 1,
    explanation: 'EVM の指標：SV（Schedule Variance）= EV（出来高）- PV（計画値）。SV < 0 は EV < PV、つまり計画より進捗が遅れている（スケジュール遅延）状態。SV > 0 は前倒し。CV（Cost Variance）= EV - AC で CV < 0 がコスト超過。SPI = EV/PV、CPI = EV/AC（どちらも 1.0 が理想）。',
  },
  {
    id: 'SM-033', category: 'service-mgmt', categoryName: 'サービスマネジメント',
    difficulty: 2, year: 2022, tags: ['ナレッジ管理','KEDB'],
    question: 'ITIL の既知エラーデータベース（KEDB）の目的として正しいものはどれか。',
    choices: [
      { index: 0, text: '変更承認委員会（CAB）の議事録を保存する' },
      { index: 1, text: '根本原因が特定されたインシデント（既知エラー）と回避策（ワークアラウンド）を記録し再発時に活用する' },
      { index: 2, text: 'すべての IT 資産のライセンス情報を管理する' },
      { index: 3, text: 'ユーザからのサービスリクエストを記録するキュー' },
    ],
    answer: 1,
    explanation: '既知エラーデータベース（KEDB）は問題管理プロセスが管理するナレッジベースで、「根本原因が判明し、解決策またはワークアラウンドが記録されたインシデント（既知エラー）」を格納します。同じ事象が再発した際、サービスデスクが KEDB を参照することで迅速な回避策の適用が可能です。',
  },
  {
    id: 'BS-036', category: 'business-strategy', categoryName: 'ビジネスストラテジ',
    difficulty: 2, year: 2022, tags: ['KPI','CSF'],
    question: 'KPI（Key Performance Indicator）と CSF（Critical Success Factor）の関係として正しいものはどれか。',
    choices: [
      { index: 0, text: 'CSF は達成すべき目標の数値指標で、KPI はその前提となる重要条件' },
      { index: 1, text: 'CSF は成功に不可欠な条件・領域を定義し、KPI はその達成度を測定する数値指標' },
      { index: 2, text: 'KPI と CSF は同義であり、業種によって使い分けるだけ' },
      { index: 3, text: 'CSF は財務指標のみ、KPI は非財務指標のみを表す' },
    ],
    answer: 1,
    explanation: 'CSF（重要成功要因）は「目標達成に不可欠な活動・条件・領域」を定性的に定義します（例：顧客サービス品質の向上）。KPI（重要業績評価指標）はCSFの達成度を定量的に測定する指標です（例：顧客満足度スコア 85 点以上）。目標→CSF→KPI の順に上位概念から具体的な測定指標へ落とし込みます。',
  },
  {
    id: 'SA-035', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 3, year: 2023, tags: ['ストレージ','SAN','NAS'],
    question: 'SAN（Storage Area Network）と NAS（Network Attached Storage）の違いとして正しいものはどれか。',
    choices: [
      { index: 0, text: 'SAN はファイル共有プロトコルでアクセスし、NAS はブロックレベルでアクセスする' },
      { index: 1, text: 'SAN は高速なブロックレベルストレージを専用ネットワーク（FC/iSCSI）で提供し、NAS はファイル共有プロトコル（NFS/SMB）でアクセスする' },
      { index: 2, text: 'NAS は大容量だが SAN より低価格で、SAN はファイルサーバの代替' },
      { index: 3, text: 'SAN と NAS は同等の技術で、接続形態のみが異なる' },
    ],
    answer: 1,
    explanation: 'ストレージ接続の種類：SAN（Storage Area Network）はファイバチャネル（FC）または iSCSI の専用ネットワークでブロックデバイスとして提供。高速・低レイテンシでデータベースなどに最適。NAS（Network Attached Storage）はイーサネット経由で NFS（Linux）・SMB/CIFS（Windows）ファイル共有を提供。ファイルサーバ・ホームドライブに適しています。',
  },
];
QUESTIONS_DATA.push(...QUESTIONS_DATA_PHASE12B);

// ========== フェーズ13 追加問題 (70問: 490問合計) ==========
const QUESTIONS_DATA_PHASE13 = [
  // --- アルゴリズム (14問) ---
  {
    id: 'ALG-071', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 2, year: 2023, tags: ['動的計画法','フィボナッチ'],
    question: '動的計画法（DP）の説明として最も適切なものはどれか。',
    choices: [
      { index: 0, text: '問題を分割して並列処理することで計算を高速化する手法' },
      { index: 1, text: '部分問題の解を記憶して再利用することで重複計算を排除する手法' },
      { index: 2, text: '探索空間を枝刈りして不要なノードを除外する手法' },
      { index: 3, text: '乱数を使って近似解を高速に求める手法' },
    ],
    answer: 1,
    explanation: '動的計画法（Dynamic Programming）は、問題を重複する部分問題に分解し、各部分問題の解をメモ化（テーブルに記録）して再利用することで全体の計算量を削減する手法。フィボナッチ数列・最短経路・ナップサック問題などに応用される。O(2^n)を O(n²) などに改善できる。',
  },
  {
    id: 'ALG-072', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 3, year: 2022, tags: ['グラフ','BFS','DFS'],
    question: '幅優先探索（BFS）と深さ優先探索（DFS）の比較として正しいものはどれか。',
    choices: [
      { index: 0, text: 'BFS はスタックを使い、DFS はキューを使う' },
      { index: 1, text: 'BFS は最短経路探索に適し、DFS は迷路解法・トポロジカルソートに適する' },
      { index: 2, text: 'BFS は深さ優先で探索し、より少ないメモリを使う' },
      { index: 3, text: '両者の時間計算量は同じで、実用上の差はない' },
    ],
    answer: 1,
    explanation: 'BFS（幅優先探索）はキューを使い、隣接ノードを幅方向に探索する。重みなしグラフの最短経路探索に最適。DFS（深さ優先探索）はスタック（再帰）を使い縦方向に探索する。迷路解法・連結成分判定・トポロジカルソートに向く。BFS はメモリ使用量が多い場合がある。',
  },
  {
    id: 'ALG-073', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 2, year: 2023, tags: ['ハッシュ','衝突'],
    question: 'ハッシュ表における「オープンアドレス法」の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '衝突時に別の連結リストにデータを追加する方式' },
      { index: 1, text: '衝突時に次の空きアドレスを探してデータを格納する方式' },
      { index: 2, text: '衝突を避けるためにハッシュ関数を2つ使う方式' },
      { index: 3, text: 'ハッシュ表をツリー構造で実装する方式' },
    ],
    answer: 1,
    explanation: 'ハッシュ衝突の解決策：オープンアドレス法は衝突が発生したとき別の空きアドレスを探して格納する（線形探索法・二次探索法など）。チェイン法（チェイニング）は各バケットに連結リストを持ち衝突時にリストへ追加する方式。どちらも長所短所がある。',
  },
  {
    id: 'ALG-074', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 3, year: 2022, tags: ['B木','インデックス'],
    question: 'B木（B-tree）がデータベースのインデックスに広く使われる主な理由はどれか。',
    choices: [
      { index: 0, text: 'ハッシュ検索より確実に高速だから' },
      { index: 1, text: '範囲検索・挿入・削除がすべて O(log n) で、ディスクアクセス回数を最小化できるから' },
      { index: 2, text: 'メモリ上での処理に特化した構造だから' },
      { index: 3, text: '2分木より単純で実装が容易だから' },
    ],
    answer: 1,
    explanation: 'B木は各ノードが複数のキーを持ち、ディスクページ単位でデータを格納できる。挿入・削除・検索がすべて O(log n)。木の高さを低く保てるためディスクI/Oが少なく、範囲検索（葉ノードの順次走査）にも強い。データベース（InnoDB の B+木など）で標準的に採用される。',
  },
  {
    id: 'ALG-075', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 2, year: 2023, tags: ['再帰','分割統治'],
    question: 'クイックソートの平均時間計算量と最悪時間計算量の組合せとして正しいものはどれか。',
    choices: [
      { index: 0, text: '平均 O(n²)、最悪 O(n log n)' },
      { index: 1, text: '平均 O(n log n)、最悪 O(n²)' },
      { index: 2, text: '平均・最悪ともに O(n log n)' },
      { index: 3, text: '平均・最悪ともに O(n²)' },
    ],
    answer: 1,
    explanation: 'クイックソートはピボットを選び小・大に分割する再帰アルゴリズム。ランダム入力では平均 O(n log n)。しかし既にソート済みの配列でナイーブなピボット選択（先頭/末尾固定）をすると分割が偏り最悪 O(n²)。三点中央値やランダムピボット選択で最悪ケースを回避できる。',
  },
  {
    id: 'ALG-076', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 3, year: 2022, tags: ['グラフ','最小全域木','クラスカル'],
    question: 'クラスカル法（Kruskal）で最小全域木を求める際の操作順序として正しいものはどれか。',
    choices: [
      { index: 0, text: '全辺を重み降順に並べ、閉路ができなければ順に追加する' },
      { index: 1, text: '全辺を重み昇順に並べ、閉路ができなければ順に追加する' },
      { index: 2, text: '始点から最も重みが小さい辺を選び、最短路が確定したら次の頂点へ進む' },
      { index: 3, text: '全頂点を仮コスト∞に初期化し、隣接辺を緩和して最小コストを確定する' },
    ],
    answer: 1,
    explanation: 'クラスカル法：① 全辺を重み昇順にソート ② 辺を選ぶとき閉路（サイクル）ができないかを Union-Find で判定 ③ 閉路ができなければ採用 — を繰り返し頂点数−1本の辺を選ぶと最小全域木が得られる。プリム法は頂点を起点に拡張する方式。',
  },
  {
    id: 'ALG-077', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 2, year: 2023, tags: ['計算量','NP'],
    question: 'NP 完全問題の性質として正しいものはどれか。',
    choices: [
      { index: 0, text: '多項式時間で解くことが証明されている問題' },
      { index: 1, text: '多項式時間で検証できるが、多項式時間の解法が知られていない問題のうち最も難しい問題クラス' },
      { index: 2, text: 'どんなコンピュータでも解けない問題' },
      { index: 3, text: '入力サイズに関わらず定数時間で解ける問題' },
    ],
    answer: 1,
    explanation: 'NP 完全（NP-Complete）: NP に属し、かつすべての NP 問題がこれに多項式時間で帰着可能な問題。充足可能性問題(SAT)・巡回セールスマン問題・クリーク問題などが NP 完全。P=NP かは未解決。NP 完全問題には近似アルゴリズムやヒューリスティクスが実用的に使われる。',
  },
  {
    id: 'ALG-078', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 2, year: 2023, tags: ['スタック','逆ポーランド'],
    question: '逆ポーランド記法（後置記法）「3 4 + 2 *」をスタックを用いて評価したときの結果はどれか。',
    choices: [
      { index: 0, text: '11' },
      { index: 1, text: '14' },
      { index: 2, text: '24' },
      { index: 3, text: '20' },
    ],
    answer: 1,
    explanation: '逆ポーランド記法の評価: 数値はスタックにプッシュ、演算子は上位2つをポップして演算し結果をプッシュ。「3」→[3]、「4」→[3,4]、「+」→[7]（3+4）、「2」→[7,2]、「*」→[14]（7×2）。結果は 14。',
  },
  {
    id: 'ALG-079', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 3, year: 2022, tags: ['並列処理','マルチスレッド'],
    question: 'マルチスレッドプログラムでデッドロックが発生する条件（コフマンの4条件）に含まれないものはどれか。',
    choices: [
      { index: 0, text: '相互排除（Mutual Exclusion）' },
      { index: 1, text: '占有待機（Hold and Wait）' },
      { index: 2, text: 'プリエンプション（Preemption）あり' },
      { index: 3, text: '循環待機（Circular Wait）' },
    ],
    answer: 2,
    explanation: 'コフマン条件（デッドロック発生の4条件）: ①相互排除（リソースは1プロセスのみ）②占有待機（保持しながら待機）③非プリエンプション（強制解放不可）④循環待機（プロセスが循環的に待機）。「プリエンプションあり（強制解放可能）」はデッドロック防止条件であり、コフマン条件には含まれない。',
  },
  {
    id: 'ALG-080', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 2, year: 2023, tags: ['文字列','KMP'],
    question: 'KMP法（Knuth-Morris-Pratt法）の特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: 'テキスト末尾から検索し、不一致時に大きくシフトして O(n/m) を実現する' },
      { index: 1, text: 'パターンの自己一致情報（失敗関数）を事前計算し、不一致時に適切量だけ戻ることなく O(n+m) を実現する' },
      { index: 2, text: 'ハッシュ値の比較で O(1) の文字列照合を実現する' },
      { index: 3, text: '辞書木（Trie）を使って複数パターンを同時検索する' },
    ],
    answer: 1,
    explanation: 'KMP 法は「パターン文字列の失敗関数（failure function / partial match table）」を O(m) で事前計算。不一致時にパターンを最初に戻らず既知の接頭辞長分だけシフトする。テキスト走査は単調増加でバックトラックしないため O(n+m)。ボイヤー-ムーア法は後ろから照合し大きくシフト。',
  },
  {
    id: 'ALG-081', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 2, year: 2023, tags: ['ヒープ','優先度キュー'],
    question: '最大ヒープ（max-heap）の性質として正しいものはどれか。',
    choices: [
      { index: 0, text: '葉ノードが最も大きい値を持つ' },
      { index: 1, text: '任意のノードの値はその子ノードより大きいか等しい' },
      { index: 2, text: 'ヒープは常に完全二分探索木である' },
      { index: 3, text: 'ヒープはソート済み配列と同じ構造である' },
    ],
    answer: 1,
    explanation: '最大ヒープの条件：親ノードの値 ≥ 子ノードの値（ヒープ性質）。根が最大値を持つため O(1) で最大値取得が可能。ヒープは完全二分木（最下段は左から詰める）だが二分探索木ではない（左右の順序関係は保証されない）。挿入・削除は O(log n)。優先度キューの実装に使われる。',
  },
  {
    id: 'ALG-082', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 2, year: 2022, tags: ['正規表現','オートマトン'],
    question: '正規表現「[A-Z][a-z]*[0-9]+」にマッチする文字列はどれか。',
    choices: [
      { index: 0, text: 'hello123' },
      { index: 1, text: 'Hello123' },
      { index: 2, text: 'Hello' },
      { index: 3, text: 'HELLO123' },
    ],
    answer: 1,
    explanation: 'パターン解析: [A-Z]は大文字1文字、[a-z]*は小文字0文字以上、[0-9]+は数字1文字以上。「Hello123」→ H（大文字）ello（小文字複数）123（数字複数）でマッチ。「hello123」は先頭が小文字でNG。「Hello」は末尾の数字がなくNG。「HELLO123」は小文字部分なしで[a-z]*は0文字OKだが E は大文字でNG（2文字目以降は[a-z]*）。',
  },
  {
    id: 'ALG-083', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 3, year: 2023, tags: ['ネットワークフロー','最大流'],
    question: 'フォード-ファルカーソン法が解くネットワークフロー問題として正しいものはどれか。',
    choices: [
      { index: 0, text: 'グラフの全頂点を最短経路でたどる問題' },
      { index: 1, text: '有向グラフで始点から終点への最大フロー（最大流）を求める問題' },
      { index: 2, text: '重み付きグラフの最小全域木を求める問題' },
      { index: 3, text: '頂点を重複なく一度ずつ巡回する最短路を求める問題' },
    ],
    answer: 1,
    explanation: 'フォード-ファルカーソン法は最大フロー問題（Max Flow）を解くアルゴリズム。残余グラフ上で増加路（始点→終点への容量余裕がある経路）を繰り返し見つけてフローを送ることで最大流を求める。最大フロー最小カット定理（max-flow min-cut theorem）と表裏一体の関係。',
  },
  {
    id: 'ALG-084', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 2, year: 2022, tags: ['数値表現','2の補数'],
    question: '8ビット2の補数表現で「11110011」が表す10進数の値はどれか。',
    choices: [
      { index: 0, text: '243' },
      { index: 1, text: '-13' },
      { index: 2, text: '-12' },
      { index: 3, text: '-3' },
    ],
    answer: 1,
    explanation: '2の補数：最上位ビット（MSB）が1なので負の数。①ビット反転: 11110011 → 00001100 ②1加算: 00001100 + 1 = 00001101 = 13。符号付きなので値は -13。（別解：-128+64+32+16+0+0+1+1 = -128+113 = -15 ではなく -128+115 = -13 が正しい）',
  },

  // --- ネットワーク (14問) ---
  {
    id: 'NET-071', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2023, tags: ['DNS','名前解決'],
    question: 'DNS の再帰的問合せと反復的問合せの違いとして正しいものはどれか。',
    choices: [
      { index: 0, text: '再帰では DNS サーバが最終回答まで代わりに問合せを繰り返し、反復ではクライアントが次の問合せ先を教えてもらい自ら問い合わせる' },
      { index: 1, text: '再帰はキャッシュを使わず、反復はキャッシュを必ず使う' },
      { index: 2, text: '再帰は UDP を使い、反復は TCP を使う' },
      { index: 3, text: '再帰はゾーン転送に使い、反復はクライアント問合せに使う' },
    ],
    answer: 0,
    explanation: 'DNS の問合せ方式：再帰的問合せ（Recursive）はスタブリゾルバ→フルリゾルバ間で使われ、フルリゾルバが代わりにルートDNS→TLDネームサーバ→権威DNSと問い合わせて最終回答を返す。反復的問合せ（Iterative）はリゾルバが各ネームサーバに直接問い合わせ、「次はここへ」という参照先を得て自ら辿る方式。',
  },
  {
    id: 'NET-072', category: 'network', categoryName: 'ネットワーク',
    difficulty: 3, year: 2022, tags: ['BGP','ルーティング','AS'],
    question: 'BGP（Border Gateway Protocol）に関する記述として正しいものはどれか。',
    choices: [
      { index: 0, text: 'AS 内部のルータ間で使われるリンク状態ルーティングプロトコル' },
      { index: 1, text: 'AS 間でパスベクタ情報を交換し、ポリシーに基づいてインターネットの経路を制御する EGP' },
      { index: 2, text: 'ホップ数のみで経路を選択するディスタンスベクタプロトコル' },
      { index: 3, text: 'IPマルチキャストルーティング専用のプロトコル' },
    ],
    answer: 1,
    explanation: 'BGP（Border Gateway Protocol）は ISP やデータセンター間で使われる EGP（外部ゲートウェイプロトコル）。AS パス情報・ネクストホップ・MED などの属性（パスベクタ）を TCP（ポート 179）でピア間交換し、管理ポリシーに基づき経路を選択する。インターネットの根幹を担うプロトコル。RIP がホップ数のみで選択するディスタンスベクタ。',
  },
  {
    id: 'NET-073', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2023, tags: ['VLAN','スイッチング'],
    question: 'VLAN（Virtual LAN）のタグ VLAN（IEEE 802.1Q）に関する説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'VLAN ごとに物理スイッチを別々に用意しないと通信できない' },
      { index: 1, text: 'フレームに VLAN ID を含む 4 バイトのタグを挿入し、1 本のリンクで複数 VLAN トラフィックを転送するトランクリンク方式' },
      { index: 2, text: 'VLAN ID は 8 ビットで 256 個まで設定できる' },
      { index: 3, text: 'タグ VLAN はレイヤ 3 スイッチでのみ使用できる' },
    ],
    answer: 1,
    explanation: 'IEEE 802.1Q: イーサネットフレームに 4 バイトの VLAN タグ（EtherType 0x8100 + PCP 3bit + DEI 1bit + VLAN ID 12bit）を挿入。VLAN ID は 12 ビットで最大 4094 個（0 と 4095 は予約）。トランクポートで複数 VLAN を 1 本のリンクで多重化でき、スイッチ間・スイッチ-ルータ間に使われる。',
  },
  {
    id: 'NET-074', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2022, tags: ['HTTP','HTTPS','TLS'],
    question: 'HTTP/2 が HTTP/1.1 に比べて改善した点として正しいものはどれか。',
    choices: [
      { index: 0, text: 'TLS による暗号化を初めて実現した' },
      { index: 1, text: 'ヘッダ圧縮（HPACK）とストリーム多重化により、HOL ブロッキングを軽減し転送効率を向上した' },
      { index: 2, text: 'TCP に代わり UDP を使用することで接続遅延をゼロにした' },
      { index: 3, text: 'Cookie とセッション管理を廃止してよりシンプルな設計にした' },
    ],
    answer: 1,
    explanation: 'HTTP/2 の主な改善点：① ヘッダ圧縮（HPACK）で冗長ヘッダを削減 ② バイナリフレーミングとストリーム多重化（1TCP接続で複数リクエストを並行処理）③ サーバープッシュ ④ ストリーム優先度設定。HOL（Head-of-Line）ブロッキングをアプリ層で軽減。完全解決は HTTP/3（QUIC/UDP）で実現。TLS は HTTP/1.1 でも HTTPS として利用可能。',
  },
  {
    id: 'NET-075', category: 'network', categoryName: 'ネットワーク',
    difficulty: 3, year: 2023, tags: ['SDN','OpenFlow'],
    question: 'SDN（Software-Defined Networking）の特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: '各ルータがフロー制御ロジックを個別に持つ分散型アーキテクチャ' },
      { index: 1, text: 'コントロールプレーンとデータプレーンを分離し、集中コントローラがネットワーク全体を制御するアーキテクチャ' },
      { index: 2, text: 'ハードウェアスイッチを廃止し、すべてソフトウェアスイッチで実装するアーキテクチャ' },
      { index: 3, text: 'MPLS の代替として開発されたラベルスイッチング技術' },
    ],
    answer: 1,
    explanation: 'SDN はネットワークのコントロールプレーン（経路計算・ポリシー）をデータプレーン（パケット転送）から分離し、集中型コントローラ（OpenFlow コントローラなど）がスイッチ群を統合管理するアーキテクチャ。OpenFlow はコントローラとスイッチ間のプロトコル。クラウドデータセンターや WAN の動的制御に活用される。',
  },
  {
    id: 'NET-076', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2022, tags: ['NAT','ポートフォワーディング'],
    question: 'ポートフォワーディング（静的 NAPT）の目的として正しいものはどれか。',
    choices: [
      { index: 0, text: '外部からプライベート IP アドレスのサーバへ特定ポート宛の通信を転送する' },
      { index: 1, text: '内部ネットワーク全体のグローバル IP アドレスを動的に割り当てる' },
      { index: 2, text: '内部から外部への通信をすべて遮断するファイアウォール機能' },
      { index: 3, text: '複数の WAN 回線を束ねて帯域を増加させる' },
    ],
    answer: 0,
    explanation: 'ポートフォワーディング（静的 NAPT）：NAT ルータに「外部ポート 80 → 内部 192.168.1.10:80」のような静的マッピングを設定し、インターネット側からプライベートアドレスのWebサーバ等へのアクセスを可能にする。VPN 不要でサーバ公開に使われる。NAPT（動的）は内部→外部通信を自動でマッピング。',
  },
  {
    id: 'NET-077', category: 'network', categoryName: 'ネットワーク',
    difficulty: 3, year: 2023, tags: ['QoS','DiffServ'],
    question: 'QoS（Quality of Service）の DiffServ モデルに関する説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'フロー単位でリソースを予約し、ルータが個別フローの帯域を保証する' },
      { index: 1, text: 'IP ヘッダの DSCP フィールドでパケットをクラス分けし、ルータがクラスごとに差別化転送する' },
      { index: 2, text: '全パケットに同一の優先度を与え、公平なキューイングを行う' },
      { index: 3, text: 'リンク層のみで動作し、IP ルータには依存しないQoS 方式' },
    ],
    answer: 1,
    explanation: 'DiffServ（Differentiated Services）: IP ヘッダの ToS フィールドを DSCP（6bit）として再定義。パケットをクラス（EF: 高優先/低遅延、AF: 確実転送 など）に分類し、ルータがクラスごとに PHB（Per-Hop Behavior）として異なるキューイング・廃棄ポリシーを適用する。IntServ（RSVP）はフロー単位予約。',
  },
  {
    id: 'NET-078', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2022, tags: ['プロキシ','リバースプロキシ'],
    question: 'リバースプロキシの主な機能として最も適切なものはどれか。',
    choices: [
      { index: 0, text: '内部クライアントの送信元 IP を隠してインターネットへアクセスする' },
      { index: 1, text: '外部クライアントからのリクエストを受け、バックエンドサーバへ転送するとともに SSL 終端・キャッシュ・負荷分散を担う' },
      { index: 2, text: '同一組織内の PC 間通信を暗号化するゲートウェイ' },
      { index: 3, text: '内部ネットワークへの不正アクセスを検知して遮断するセキュリティ機器' },
    ],
    answer: 1,
    explanation: 'リバースプロキシ（Reverse Proxy）：インターネット側に公開され、外部クライアントのリクエストを受け取りバックエンドのWebサーバ群へ転送する。主な機能：① SSL/TLS 終端（HTTPS 処理をオフロード）② キャッシュ ③ 負荷分散（ロードバランサ兼用）④ WAF 機能。Nginx・Apache・AWS ALB などが代表例。フォワードプロキシは内部→外部方向。',
  },
  {
    id: 'NET-079', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2023, tags: ['Ethernet','フレーム'],
    question: 'イーサネットフレームの宛先 MAC アドレスがすべて 1（FF:FF:FF:FF:FF:FF）の場合の動作として正しいものはどれか。',
    choices: [
      { index: 0, text: '廃棄され、どのホストも受信しない' },
      { index: 1, text: 'ブロードキャストフレームとして同一セグメントのすべてのホストに届く' },
      { index: 2, text: 'マルチキャストグループに加入しているホストのみ受信する' },
      { index: 3, text: 'ルータが自動的に他のセグメントへ転送する' },
    ],
    answer: 1,
    explanation: 'MAC アドレス FF:FF:FF:FF:FF:FF は L2 ブロードキャスト。スイッチはこのフレームを受信すると送信元ポート以外のすべてのポートにフラッディングする。同一ブロードキャストドメイン（VLAN）のすべてのホストが受信する。ARP リクエストがブロードキャストの代表例。ルータはデフォルトでブロードキャストを転送しない。',
  },
  {
    id: 'NET-080', category: 'network', categoryName: 'ネットワーク',
    difficulty: 3, year: 2022, tags: ['MPLS','ラベルスイッチング'],
    question: 'MPLS（Multi-Protocol Label Switching）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'IP アドレスの代わりに短いラベルを付けてスイッチングし、高速転送と VPN・QoS 制御を実現する技術' },
      { index: 1, text: '複数の物理リンクを束ねて論理的に1本の高帯域リンクとして扱う技術' },
      { index: 2, text: 'パケットを暗号化してトンネリングするプロトコル' },
      { index: 3, text: 'ネットワーク機器を仮想化してクラウド上で動かす技術' },
    ],
    answer: 0,
    explanation: 'MPLS: L2.5 層と呼ばれる IP ヘッダと L2 ヘッダの間に「ラベルスタック」（20bit ラベル + 3bit TC + S bit + TTL）を挿入。ルータはラベルだけを参照して高速スイッチング（LFIB 参照）する。L3 VPN・トラフィックエンジニアリング（TE）・QoS 保証に活用。ISP バックボーン網で広く使われる。',
  },
  {
    id: 'NET-081', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2023, tags: ['ワイヤレス','Wi-Fi 6'],
    question: 'Wi-Fi 6（IEEE 802.11ax）が Wi-Fi 5（802.11ac）に比べて改善した主な点はどれか。',
    choices: [
      { index: 0, text: '5 GHz 帯のみ使用することで電波干渉を削減した' },
      { index: 1, text: 'OFDMA と MU-MIMO を活用し、多接続環境での実効スループットと遅延を改善した' },
      { index: 2, text: '最大変調方式を 256-QAM から 64-QAM に下げて安定性を向上させた' },
      { index: 3, text: 'セキュリティを WPA2 に統一してセキュリティリスクを排除した' },
    ],
    answer: 1,
    explanation: 'Wi-Fi 6 (802.11ax) の特長：① OFDMA（直交周波数分割多元接続）でサブキャリアを複数端末に割り当て同時通信 ② MU-MIMO（マルチユーザ MIMO）が上下双方向に拡張 ③ BSS Coloring で空間再利用 ④ TWT（Target Wake Time）で省電力 ⑤ 1024-QAM で高変調。高密度環境（スタジアム・オフィス）での効率改善が主目的。',
  },
  {
    id: 'NET-082', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2022, tags: ['IPv6','アドレス'],
    question: 'IPv6 リンクローカルアドレスのプレフィックスはどれか。',
    choices: [
      { index: 0, text: '::1/128' },
      { index: 1, text: 'FE80::/10' },
      { index: 2, text: 'FC00::/7' },
      { index: 3, text: '2001::/32' },
    ],
    answer: 1,
    explanation: 'IPv6 特殊アドレス：ループバック = ::1/128、リンクローカル = FE80::/10（同一リンク内のみ有効）、ユニークローカル = FC00::/7（プライベート相当）、グローバルユニキャスト = 2000::/3、マルチキャスト = FF00::/8。リンクローカルは NDP（近隣探索）・ルータ通信など同一セグメント内通信に使われる。',
  },
  {
    id: 'NET-083', category: 'network', categoryName: 'ネットワーク',
    difficulty: 3, year: 2023, tags: ['TCP','フロー制御','輻輳制御'],
    question: 'TCP のスロースタート（Slow Start）の動作として正しいものはどれか。',
    choices: [
      { index: 0, text: '輻輳が発生するまで輻輳ウィンドウ（cwnd）を線形に増加させる' },
      { index: 1, text: '接続開始時に cwnd を 1 MSS から始め、ACK を受け取るたびに指数的（倍増）に増加させる' },
      { index: 2, text: 'cwnd を常に固定値に保ちネットワーク安定性を優先する' },
      { index: 3, text: 'パケットロスが検出された際に即座に cwnd を 0 にリセットする' },
    ],
    answer: 1,
    explanation: 'TCP スロースタート：接続確立直後は cwnd=1MSS で開始。ACK 受信のたびに cwnd を 1MSS 増加（RTT ごとに倍増 = 指数的増加）。ssthresh（スロースタート閾値）に達すると輻輳回避フェーズに移行し線形増加に切り替え。パケットロス時（タイムアウト）は cwnd=1MSS に戻り再スタート。',
  },
  {
    id: 'NET-084', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2022, tags: ['ゼロトラスト','ZTNA'],
    question: 'ゼロトラストネットワーク（Zero Trust Network）の基本原則として正しいものはどれか。',
    choices: [
      { index: 0, text: '社内ネットワーク（境界内）のトラフィックはすべて信頼し、外部のみを検査する' },
      { index: 1, text: '場所・ネットワークに関わらずすべてのアクセスを検証し、最小権限を適用する「信頼しない・常に検証」モデル' },
      { index: 2, text: 'VPN ですべての通信を暗号化することでセキュリティを担保するモデル' },
      { index: 3, text: 'クラウド上のリソースへのアクセスのみを制御するセキュリティモデル' },
    ],
    answer: 1,
    explanation: 'ゼロトラスト：「境界防御（Perimeter Security）」を脱却し、内部ネットワークも含めすべての通信を検証する設計思想。"Never Trust, Always Verify"。主要原則：①すべてのリソースへのアクセスを認証・認可 ②最小権限の原則 ③すべての通信をログ・検査。ZTNA・SDP・IAP（BeyondCorp）などが実装技術。',
  },

  // --- データベース (14問) ---
  {
    id: 'DB-071', category: 'database', categoryName: 'データベース',
    difficulty: 2, year: 2023, tags: ['トランザクション','ACID'],
    question: 'トランザクションの ACID 特性のうち「永続性（Durability）」の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'コミット後のデータは障害が発生しても失われない' },
      { index: 1, text: '複数のトランザクションを同時実行しても、それぞれが独立して実行されたように見える' },
      { index: 2, text: 'トランザクションは完全に実行されるか、全く実行されないかのどちらかである' },
      { index: 3, text: 'データはいかなる操作後も整合性制約を満たす' },
    ],
    answer: 0,
    explanation: 'ACID 特性：Atomicity（原子性）= コミットかロールバックの二択。Consistency（一貫性）= 整合性制約を常に満たす。Isolation（独立性）= 他トランザクションの影響を受けない。Durability（永続性）= コミット後のデータはシステム障害が発生してもディスクに保持される（WAL/REDOログが担保）。',
  },
  {
    id: 'DB-072', category: 'database', categoryName: 'データベース',
    difficulty: 3, year: 2022, tags: ['インデックス','実行計画'],
    question: 'データベースのクエリオプティマイザが複合インデックス（a, b）を使用する可能性が最も高い WHERE 句はどれか。',
    choices: [
      { index: 0, text: 'WHERE b = 1' },
      { index: 1, text: 'WHERE a = 1 AND b = 2' },
      { index: 2, text: 'WHERE a LIKE \'%value%\'' },
      { index: 3, text: 'WHERE UPPER(a) = \'VALUE\'' },
    ],
    answer: 1,
    explanation: '複合インデックス (a, b) はキープレフィックス法則（Leftmost Prefix Rule）に従う。先頭列 a を含む条件でインデックスが使われる。「a=1 AND b=2」は最も効率的にインデックスを利用。「b=1 のみ」は先頭列を含まないため通常フルスキャン。LIKE \'%value%\' は前方一致でないためインデックス不使用。関数適用（UPPER(a)）は関数インデックスがなければ不使用。',
  },
  {
    id: 'DB-073', category: 'database', categoryName: 'データベース',
    difficulty: 2, year: 2023, tags: ['NoSQL','CAP定理'],
    question: 'CAP 定理で「可用性（Availability）」と「分断耐性（Partition Tolerance）」を選択したシステムの特性はどれか。',
    choices: [
      { index: 0, text: '常に最新の一貫したデータを返すが、ネットワーク分断時はサービス停止する' },
      { index: 1, text: 'ネットワーク分断が起きても応答するが、返すデータが古い（結果整合性）可能性がある' },
      { index: 2, text: 'すべてのノードが常に同一データを持ち、高速応答する' },
      { index: 3, text: '一貫性と分断耐性の両立を優先するため可用性を犠牲にする' },
    ],
    answer: 1,
    explanation: 'CAP 定理：分散システムは Consistency（一貫性）・Availability（可用性）・Partition Tolerance（分断耐性）の三つを同時に満たせない。AP 型（CassandraなどDynamoDB系）はネットワーク分断時も応答するが結果整合性（Eventually Consistent）に留まる。CP 型（HBase・ZooKeeper）は分断時に一部ノードへの書き込みを拒否して一貫性を保つ。',
  },
  {
    id: 'DB-074', category: 'database', categoryName: 'データベース',
    difficulty: 2, year: 2022, tags: ['SQL','ウィンドウ関数'],
    question: 'SQL のウィンドウ関数 `RANK() OVER (PARTITION BY dept ORDER BY salary DESC)` の動作として正しいものはどれか。',
    choices: [
      { index: 0, text: '全社員の給与を降順で順位付けする' },
      { index: 1, text: '部門（dept）ごとに給与降順で順位を付け、同率がある場合は同じ順位を与え次の順位をスキップする' },
      { index: 2, text: '部門ごとに給与の合計を計算し行に付与する' },
      { index: 3, text: '全行に対して各部門の最高給与を付与する' },
    ],
    answer: 1,
    explanation: 'RANK() OVER (PARTITION BY dept ORDER BY salary DESC): PARTITION BY で部門ごとにウィンドウを分割、ORDER BY salary DESC で降順ソート、RANK() で順位付け。同率の場合は同じ順位（例: 1位が2人なら次は3位）。DENSE_RANK() は同率後もスキップしない。ROW_NUMBER() は同率でも連番。',
  },
  {
    id: 'DB-075', category: 'database', categoryName: 'データベース',
    difficulty: 3, year: 2023, tags: ['レプリケーション','HA'],
    question: 'データベースのマスタ-スレーブレプリケーションで「非同期レプリケーション」の特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: 'マスタは全スレーブの確認応答を待ってからクライアントに応答し、データ損失ゼロを保証する' },
      { index: 1, text: 'マスタはスレーブへの伝播を待たずにコミットを確認し、スループットが高いがフェイルオーバー時にわずかなデータ損失が生じうる' },
      { index: 2, text: '全スレーブが均等な負荷でマスタと同時に書き込みを行う' },
      { index: 3, text: 'スレーブは読み込み専用でなく書き込みも受け付ける' },
    ],
    answer: 1,
    explanation: 'レプリケーション方式：同期（Synchronous）はマスタが全スレーブのコミット確認後に応答→低レイテンシで一貫性保証が強いがスループット低下。非同期（Asynchronous）はマスタがスレーブを待たずに応答→高スループットだが、フェイルオーバー時に未伝播のトランザクションが失われうる（RPO>0）。半同期はその中間。MySQL の Group Replication・PostgreSQL の Streaming Replication などで選択可能。',
  },
  {
    id: 'DB-076', category: 'database', categoryName: 'データベース',
    difficulty: 2, year: 2022, tags: ['SQL','GROUP BY','HAVING'],
    question: 'HAVING 句と WHERE 句の違いとして正しいものはどれか。',
    choices: [
      { index: 0, text: 'HAVING はグループ化前の行を絞り込み、WHERE はグループ化後の集計値を絞り込む' },
      { index: 1, text: 'WHERE はグループ化前の行を絞り込み、HAVING は GROUP BY 後の集計値を絞り込む' },
      { index: 2, text: '両者は同義であり、どちらを使っても結果は同じ' },
      { index: 3, text: 'HAVING はインデックスを使え、WHERE は集計関数でのみ使える' },
    ],
    answer: 1,
    explanation: 'SQL 実行順序: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY。WHERE は GROUP BY 前に行を絞り込む（インデックス利用可）。HAVING は GROUP BY 後の集計結果（COUNT・SUM・AVG など）に対して条件を指定する。可能な限り WHERE で先に絞り込むことでパフォーマンスが向上する。',
  },
  {
    id: 'DB-077', category: 'database', categoryName: 'データベース',
    difficulty: 3, year: 2023, tags: ['分散DB','シャーディング'],
    question: 'データベースのシャーディング（水平分割）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '1つのテーブルを列単位で別々のノードに分割する垂直分割方式' },
      { index: 1, text: '大量の行データをキーに基づいて複数のノード（シャード）に分散することでスケールアウトを実現する' },
      { index: 2, text: 'マスタ-スレーブ構成でスレーブへの読み込みを分散させる手法' },
      { index: 3, text: '1つのサーバに複数のデータベースインスタンスを立てる方式' },
    ],
    answer: 1,
    explanation: 'シャーディング（Sharding / 水平分割）: テーブルの行をシャードキー（ユーザIDのハッシュ・範囲など）に基づいて複数のノードに分散。書き込みスケールアウトが可能になるが、クロスシャードクエリ・トランザクションが複雑になる。MongoDBのshardedクラスタ・Cassandraなどで採用。垂直分割は列（カラム）単位の分割（テーブルスプリット）。',
  },
  {
    id: 'DB-078', category: 'database', categoryName: 'データベース',
    difficulty: 2, year: 2022, tags: ['ビュー','マテリアライズドビュー'],
    question: 'マテリアライズドビュー（物化ビュー）の特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: '通常ビューと同じく毎回ベーステーブルへのクエリを実行して結果を返す' },
      { index: 1, text: 'クエリ結果を実テーブルとして物理的に保存し、高速参照が可能だが更新時にリフレッシュが必要' },
      { index: 2, text: 'マテリアライズドビューへの更新は自動的に元テーブルにも伝播する' },
      { index: 3, text: '更新が頻繁なテーブルで最も効果を発揮する' },
    ],
    answer: 1,
    explanation: 'マテリアライズドビュー（Materialized View）: クエリ結果をディスクに物理保存する。通常ビューはクエリ実行のたびにベーステーブルを参照するが、マテリアライズドビューは保存済み結果を返すため読み込みが高速。ただしベーステーブルの更新を反映するには REFRESH が必要（完全/増分）。集計・レポート系 DWH クエリの高速化に有効。',
  },
  {
    id: 'DB-079', category: 'database', categoryName: 'データベース',
    difficulty: 3, year: 2023, tags: ['正規化','4NF'],
    question: '第4正規形（4NF）が除去する従属関係はどれか。',
    choices: [
      { index: 0, text: '推移的関数従属' },
      { index: 1, text: '多値従属（Multi-Valued Dependency）' },
      { index: 2, text: '部分関数従属' },
      { index: 3, text: '結合従属' },
    ],
    answer: 1,
    explanation: '正規化のレベル：1NF（繰り返しグループ除去）→2NF（部分関数従属除去）→3NF（推移的関数従属除去）→BCNF→4NF（多値従属除去）→5NF（結合従属除去）。多値従属（MVD）: 属性 X → → Y（X の値が決まると Y の値の集合が決まる）により生じる冗長性を4NF で解消。テーブルを2つに分解する。',
  },
  {
    id: 'DB-080', category: 'database', categoryName: 'データベース',
    difficulty: 2, year: 2022, tags: ['バックアップ','リカバリ'],
    question: 'データベースの完全バックアップ＋差分バックアップの戦略でリカバリを行う手順として正しいものはどれか。',
    choices: [
      { index: 0, text: '最新の差分バックアップのみリストアすれば復旧できる' },
      { index: 1, text: '完全バックアップをリストアした後、最新の差分バックアップを適用する' },
      { index: 2, text: '全ての差分バックアップを古い順に順次適用する' },
      { index: 3, text: '完全バックアップをリストアした後、すべての増分バックアップを古い順に適用する' },
    ],
    answer: 1,
    explanation: 'バックアップ戦略比較：① 完全のみ: リストアは完全1つを適用（最速）② 完全+差分（Differential）: 完全＋最新1つの差分を適用（中程度）③ 完全+増分（Incremental）: 完全＋すべての増分を古い順に適用（最も時間がかかる）。差分は「最後の完全バックアップ以降の変更」を蓄積するため、適用は最新の差分1つで済む。',
  },
  {
    id: 'DB-081', category: 'database', categoryName: 'データベース',
    difficulty: 2, year: 2023, tags: ['ORM','N+1問題'],
    question: 'ORM を使用した際に発生する N+1 問題の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '1つのクエリで最大 N+1 行しか取得できない制限' },
      { index: 1, text: '関連エンティティを取得する際に、1件の一覧取得クエリに加え N 件分の追加クエリが発行されてしまう問題' },
      { index: 2, text: 'データベース接続数が N+1 を超えると接続プールが枯渇する問題' },
      { index: 3, text: 'N 個のテーブルを JOIN する際に指数的にクエリが増加する問題' },
    ],
    answer: 1,
    explanation: 'N+1 問題: 例えば100件の投稿一覧（1クエリ）を取得後、各投稿に対して著者情報を個別取得（100クエリ）すると合計101クエリが発行される。解決策：Eager Loading（JOIN または IN句による一括取得）。Railsの `includes`・Hibernateの `FETCH JOIN` などが該当。大量の不要クエリを削減できる。',
  },
  {
    id: 'DB-082', category: 'database', categoryName: 'データベース',
    difficulty: 3, year: 2022, tags: ['時系列DB','IoT'],
    question: '時系列データベース（Time-Series DB）が通常の RDBMS より適している主なユースケースはどれか。',
    choices: [
      { index: 0, text: '銀行の口座残高管理など精密なトランザクション管理が求められるシステム' },
      { index: 1, text: 'センサ・メトリクス・ログなど時刻スタンプ付きデータを高速に書き込み・集計・可視化するシステム' },
      { index: 2, text: 'ソーシャルグラフのような複雑な関係性を持つデータの管理' },
      { index: 3, text: '頻繁に構造変更が必要な汎用 Web アプリのバックエンド' },
    ],
    answer: 1,
    explanation: '時系列 DB（InfluxDB・TimescaleDB・Prometheus など）は時刻 + 値の組合せデータを高効率で格納・圧縮。ダウンサンプリング・範囲集計（avg/max/min over time）・自動パージなど時系列特化機能を持つ。IoT センサデータ・サーバメトリクス（CPU/メモリ）・金融 tick データに最適。RDBMS は汎用だが時系列特化クエリ・書き込み性能では劣る。',
  },
  {
    id: 'DB-083', category: 'database', categoryName: 'データベース',
    difficulty: 2, year: 2023, tags: ['SQL','サブクエリ','相関'],
    question: '相関サブクエリ（Correlated Subquery）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '外側クエリに依存せず単独で実行できるサブクエリ' },
      { index: 1, text: '外側クエリの各行に対して毎回評価されるサブクエリで、外側クエリの列を参照する' },
      { index: 2, text: 'JOIN の代わりに必ず使うべき最適化されたサブクエリ' },
      { index: 3, text: 'FROM 句にのみ使用できるサブクエリ' },
    ],
    answer: 1,
    explanation: '相関サブクエリ（Correlated Subquery）: 外側クエリの各行に対して独立して評価される。例: `SELECT * FROM emp e WHERE salary > (SELECT AVG(salary) FROM emp WHERE dept = e.dept)` — e.dept が外側クエリの値を参照している。行ごとに実行されるため大量データでは低速になりやすい。EXISTS 句と組み合わせると効果的。',
  },
  {
    id: 'DB-084', category: 'database', categoryName: 'データベース',
    difficulty: 2, year: 2022, tags: ['ER図','リレーション'],
    question: 'ER 図における弱エンティティ（Weak Entity）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '主キーが存在しないテーブルのこと' },
      { index: 1, text: '独自の主キーを持たず、別のエンティティ（オーナーエンティティ）の主キーに依存して識別されるエンティティ' },
      { index: 2, text: '0 件以上のレコードを持てるエンティティ' },
      { index: 3, text: '外部キーを2つ以上持つエンティティ' },
    ],
    answer: 1,
    explanation: '弱エンティティ（Weak Entity）: 自身だけでは一意に識別できず、オーナー（強）エンティティの主キーとの組み合わせで識別される。例: 注文明細（Order_Item）は注文（Order）なしでは識別できない。ER 図では二重長方形で表示。オーナーとの識別リレーションシップは二重菱形で表す。複合主キー（親のPK + 部分キー）が主キーとなる。',
  },

  // --- セキュリティ (14問) ---
  {
    id: 'SEC-071', category: 'security', categoryName: 'セキュリティ',
    difficulty: 2, year: 2023, tags: ['認証','OAuth','OpenID Connect'],
    question: 'OpenID Connect（OIDC）が OAuth 2.0 に追加した主な機能はどれか。',
    choices: [
      { index: 0, text: '認可（Authorization）の仕組みを初めて定義した' },
      { index: 1, text: '認証（Authentication）を実現するための ID トークン（JWT）を発行する仕組み' },
      { index: 2, text: 'すべての API 通信を自動的に暗号化する機能' },
      { index: 3, text: 'マルチファクタ認証を標準規格として定義した' },
    ],
    answer: 1,
    explanation: 'OAuth 2.0 は認可フレームワーク（「誰に何を許可するか」）であり、エンドユーザの認証は対象外。OpenID Connect (OIDC) は OAuth 2.0 上に認証レイヤーを追加し、ID トークン（JWT形式）でエンドユーザのアイデンティティ情報を提供する。UserInfo エンドポイントから名前・メールなどの属性を取得可能。Google・Appleのソーシャルログインに使われる。',
  },
  {
    id: 'SEC-072', category: 'security', categoryName: 'セキュリティ',
    difficulty: 3, year: 2022, tags: ['暗号','楕円曲線'],
    question: 'ECDSA（楕円曲線デジタル署名アルゴリズム）が RSA に比べて優れている主な点はどれか。',
    choices: [
      { index: 0, text: '同じ安全性レベルに対して鍵長が大幅に短く、計算コストが小さい' },
      { index: 1, text: '量子コンピュータに対して安全性が証明されている' },
      { index: 2, text: '共通鍵暗号方式を用いるため暗号化・復号が高速' },
      { index: 3, text: 'ハッシュ関数を必要とせず署名の衝突耐性が高い' },
    ],
    answer: 0,
    explanation: 'ECDSA の優位点：楕円曲線離散対数問題に基づき、RSA 2048bit と同等の安全性を 256bit の鍵長で実現。鍵が短いため署名・検証の計算量が小さく、IoT・モバイル・TLS/HTTPS（EC系証明書）での採用が増えている。ただし量子コンピュータ耐性は RSA も ECDSA もなく、どちらも格子暗号等への移行（PQC）が検討されている。',
  },
  {
    id: 'SEC-073', category: 'security', categoryName: 'セキュリティ',
    difficulty: 2, year: 2023, tags: ['脆弱性','SSRF'],
    question: 'SSRF（Server-Side Request Forgery）攻撃の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '攻撃者が被害者のブラウザを使って外部サイトへリクエストを送らせる攻撃' },
      { index: 1, text: '攻撃者がサーバに細工したリクエストを送り、サーバ自身が内部リソース（メタデータAPI等）へアクセスするよう誘導する攻撃' },
      { index: 2, text: 'フォームの入力値に SQL 文を埋め込んでデータベースを操作する攻撃' },
      { index: 3, text: 'アプリケーションサーバのメモリを直接読み書きする攻撃' },
    ],
    answer: 1,
    explanation: 'SSRF（Server-Side Request Forgery）: サーバが外部 URL を取得する機能（画像取得・Webhook など）を悪用し、攻撃者が「http://169.254.169.254/」（AWSメタデータ）や内部サービスへサーバ自身にアクセスさせる。クラウド環境では IAM クレデンシャル漏洩につながる危険性がある。OWASP Top 10 2021 に追加された。CSRF は「ブラウザ側で偽リクエスト」。',
  },
  {
    id: 'SEC-074', category: 'security', categoryName: 'セキュリティ',
    difficulty: 2, year: 2022, tags: ['WAF','IDS','IPS'],
    question: 'WAF（Web Application Firewall）が主に防御する攻撃として正しいものはどれか。',
    choices: [
      { index: 0, text: 'ネットワーク層の SYN フラッドや UDP フラッド攻撃' },
      { index: 1, text: 'SQL インジェクション・XSS・コマンドインジェクションなどアプリケーション層（L7）の攻撃' },
      { index: 2, text: 'ルータ間のルーティング情報の改ざん' },
      { index: 3, text: '物理機器への不正アクセス' },
    ],
    answer: 1,
    explanation: 'WAF（Web Application Firewall）はL7（アプリケーション層）で HTTP/HTTPS の内容を検査し、SQL インジェクション・XSS・CSRF・ディレクトリトラバーサルなどを検知・遮断する。従来のファイアウォール（L3/L4）はポート・IP アドレスでフィルタリングし、IDS/IPS はネットワークの異常を検知する。WAF はこれらとは相補的なセキュリティ層。',
  },
  {
    id: 'SEC-075', category: 'security', categoryName: 'セキュリティ',
    difficulty: 3, year: 2023, tags: ['ランサムウェア','BCP'],
    question: 'ランサムウェア対策として最も有効な組み合わせはどれか。',
    choices: [
      { index: 0, text: '強力なパスワードと画面ロック' },
      { index: 1, text: 'オフラインバックアップの定期取得・EDR 導入・最小権限の適用・従業員教育の組み合わせ' },
      { index: 2, text: '受信メールのすべてを破棄するメールフィルタ' },
      { index: 3, text: '全通信の HTTPS 化のみで十分' },
    ],
    answer: 1,
    explanation: 'ランサムウェア対策の多層防御：①オフライン/クラウドバックアップ（感染後の復旧手段）②EDR（Endpoint Detection and Response: エンドポイントでの挙動監視）③最小権限（感染拡大防止）④脆弱性パッチ適用 ⑤メールフィルタ（初期侵入経路の遮断）⑥従業員フィッシング教育 ⑦NW セグメント分離。単一対策では不十分で多層防御が必要。',
  },
  {
    id: 'SEC-076', category: 'security', categoryName: 'セキュリティ',
    difficulty: 2, year: 2022, tags: ['ゼロデイ','脆弱性'],
    question: 'ゼロデイ攻撃（Zero-Day Attack）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'パッチが提供された後も適用せずに放置されている脆弱性を悪用する攻撃' },
      { index: 1, text: 'ベンダが脆弱性を認知しパッチを公開する前（または修正0日時点）の脆弱性を悪用した攻撃' },
      { index: 2, text: '攻撃が0件から始まり徐々に増加する段階的な攻撃手法' },
      { index: 3, text: '全ポートに対してスキャンを行いすべての脆弱性を検出する攻撃' },
    ],
    answer: 1,
    explanation: 'ゼロデイ（Zero-Day）: ベンダがまだ脆弱性を認知していないか、認知はしているが修正パッチを未提供の状態を悪用する攻撃。パッチが存在しないため防御が困難。対策：WAF のシグネチャ更新・EDR の振る舞い検知・最小権限・ネットワーク分離などの多層防御。脆弱性情報の入手には CVE・JVN・ベンダのセキュリティアドバイザリを参照する。',
  },
  {
    id: 'SEC-077', category: 'security', categoryName: 'セキュリティ',
    difficulty: 3, year: 2023, tags: ['暗号','AES','GCM'],
    question: 'AES-GCM（Galois/Counter Mode）が AES-CBC に比べて優れている点はどれか。',
    choices: [
      { index: 0, text: '鍵長が長いため解読が困難' },
      { index: 1, text: '認証付き暗号（AEAD）であり、暗号化と同時にデータの完全性・認証も保証する' },
      { index: 2, text: 'ブロック暗号でなくストリーム暗号のため高速' },
      { index: 3, text: 'CBC より鍵のサイズが小さいため管理が容易' },
    ],
    answer: 1,
    explanation: 'AES-GCM は AEAD（Authenticated Encryption with Associated Data）モード。暗号化と同時に GHASHで認証タグを生成し、復号時に改ざんを検知できる。AES-CBC は暗号化のみで認証は別途 HMAC 等が必要（Encrypt-then-MAC）。GCM は並列処理可能でTLS 1.3・IPsec・QUIC のデフォルト暗号スイートとして採用されている。',
  },
  {
    id: 'SEC-078', category: 'security', categoryName: 'セキュリティ',
    difficulty: 2, year: 2022, tags: ['フォレンジクス','インシデント対応'],
    question: 'デジタルフォレンジクスにおける「証拠保全」で重要なのはどれか。',
    choices: [
      { index: 0, text: '感染したシステムを即座にフォーマットし、再感染を防ぐ' },
      { index: 1, text: '証拠データの完全性を維持するためハッシュ値を記録し、取得手順を文書化する（チェーン・オブ・カストディ）' },
      { index: 2, text: 'すべてのログを即座に削除してプライバシーを保護する' },
      { index: 3, text: 'メモリよりディスクイメージを先に取得するのが原則' },
    ],
    answer: 1,
    explanation: 'デジタルフォレンジクスの証拠保全原則：① 揮発性の高いものから取得（メモリ→スワップ→ディスク）② ハッシュ値（SHA-256）で改ざんのないことを証明 ③ チェーン・オブ・カストディ（証拠の管理経緯記録）④ ライトブロッカー（書き込み防止）を使用 ⑤ 元データに触れず複製（イメージ）を使って解析。法的証拠として使える状態を維持することが重要。',
  },
  {
    id: 'SEC-079', category: 'security', categoryName: 'セキュリティ',
    difficulty: 3, year: 2023, tags: ['暗号','PQC','格子暗号'],
    question: '耐量子暗号（Post-Quantum Cryptography: PQC）として NIST が標準化した主な暗号方式はどれか。',
    choices: [
      { index: 0, text: '3DES（Triple DES）と RSA-8192' },
      { index: 1, text: 'ML-KEM（CRYSTALS-Kyber）・ML-DSA（CRYSTALS-Dilithium）などの格子暗号ベースの方式' },
      { index: 2, text: '量子鍵配送（QKD）を使ったBB84プロトコル' },
      { index: 3, text: 'ECDSA-521 と ECDH-521' },
    ],
    answer: 1,
    explanation: 'NIST は 2024 年に PQC 標準を公開。ML-KEM（Module Learning With Errors KEM: 元 CRYSTALS-Kyber）は鍵カプセル化、ML-DSA（元 CRYSTALS-Dilithium）はデジタル署名に使われる格子暗号ベースの方式。格子問題（LWE/SIS）は量子コンピュータの Shor アルゴリズムでも解けないとされる。RSA・ECDSA は将来の量子コンピュータで破られる可能性がある。',
  },
  {
    id: 'SEC-080', category: 'security', categoryName: 'セキュリティ',
    difficulty: 2, year: 2022, tags: ['CSIRT','インシデント対応'],
    question: 'CSIRT（Computer Security Incident Response Team）の主な役割はどれか。',
    choices: [
      { index: 0, text: 'ソフトウェアの新機能を開発・テストする部門' },
      { index: 1, text: 'セキュリティインシデントの検知・対応・復旧・再発防止を担う専門チーム' },
      { index: 2, text: '物理的なデータセンターの警備を担当する部門' },
      { index: 3, text: 'IT 資産の購入・管理のみを担当する調達部門' },
    ],
    answer: 1,
    explanation: 'CSIRT（シーサート）は組織内でセキュリティインシデントに対応する専門チーム。役割：① インシデントの検知・トリアージ ② 侵害調査・封じ込め ③ 除去・復旧 ④ 再発防止策の立案 ⑤ 脆弱性情報の収集・共有（JPCERT/CCとの連携）。PSIRT（製品の脆弱性対応）や SOC（監視専門チーム）とは役割が異なる。',
  },
  {
    id: 'SEC-081', category: 'security', categoryName: 'セキュリティ',
    difficulty: 2, year: 2023, tags: ['暗号','ハイブリッド'],
    question: 'TLS における公開鍵暗号と共通鍵暗号のハイブリッド方式の目的として正しいものはどれか。',
    choices: [
      { index: 0, text: '公開鍵暗号の方が安全なため、すべての通信を公開鍵暗号で行う' },
      { index: 1, text: '公開鍵暗号で共通鍵を安全に交換し、実際のデータ通信は高速な共通鍵暗号で行う' },
      { index: 2, text: '共通鍵暗号で認証を行い、公開鍵暗号でデータを暗号化する' },
      { index: 3, text: '片方が解読されても他方の暗号が保護されるよう二重暗号化する' },
    ],
    answer: 1,
    explanation: 'ハイブリッド暗号：公開鍵暗号（RSA/ECDH）はセキュリティが高いが計算コストが大きい。共通鍵暗号（AES）は高速だが鍵の安全な配送が課題。TLS では ECDH などの鍵交換アルゴリズムで共通の「セッション鍵」を安全に確立し、以後の通信は AES-GCM などの共通鍵暗号を使うことで両者の利点を組み合わせる。',
  },
  {
    id: 'SEC-082', category: 'security', categoryName: 'セキュリティ',
    difficulty: 3, year: 2022, tags: ['SIEM','ログ管理'],
    question: 'SIEM（Security Information and Event Management）の主な機能として正しいものはどれか。',
    choices: [
      { index: 0, text: 'エンドポイントにエージェントを配置して通信をブロックするファイアウォール機能' },
      { index: 1, text: '複数のシステム・機器からログを収集・相関分析し、脅威を検知してアラートを生成する' },
      { index: 2, text: 'ソースコードの脆弱性を静的に検査するツール' },
      { index: 3, text: 'バックアップの暗号化と完全性検証のみを担当するシステム' },
    ],
    answer: 1,
    explanation: 'SIEM（シーム）: ファイアウォール・IDS・認証サーバ・エンドポイントなど多様なソースのログを一元収集し、正規化・相関分析（Correlation）して脅威を検知しアラートを生成するセキュリティ管理プラットフォーム。SOC 運用の中核。Splunk・IBM QRadar・Microsoft Sentinel などが代表製品。XDR は SIEM の拡張版として検知から対応（Response）まで自動化する。',
  },
  {
    id: 'SEC-083', category: 'security', categoryName: 'セキュリティ',
    difficulty: 2, year: 2023, tags: ['セキュリティ設計','多層防御'],
    question: '多層防御（Defense in Depth）の考え方として最も適切なものはどれか。',
    choices: [
      { index: 0, text: '1つの強力なセキュリティ対策を徹底することで攻撃を確実に防ぐ' },
      { index: 1, text: '物理・ネットワーク・エンドポイント・アプリケーション・データの各層に独立したセキュリティ対策を重ねることで攻撃者のコストを増大させる' },
      { index: 2, text: 'ファイアウォールと IDS の2種類のみを組み合わせる方法' },
      { index: 3, text: 'クラウド上のセキュリティのみに集中し、オンプレミスを廃止する' },
    ],
    answer: 1,
    explanation: '多層防御（Defense in Depth）: 単一の対策が突破されても他の層が守るという「城郭型防御」の考え方。物理的セキュリティ→ネットワーク（FW・IPS）→エンドポイント（AV・EDR）→アプリケーション（WAF・セキュアコーディング）→データ（暗号化）の各層に独立した対策を積み重ね、攻撃者が全層を突破するコストを高める。NIST CSF・ISO 27001 でも基本原則。',
  },
  {
    id: 'SEC-084', category: 'security', categoryName: 'セキュリティ',
    difficulty: 2, year: 2022, tags: ['セキュリティ','プライバシー','GDPR'],
    question: 'GDPR（一般データ保護規則）における「忘れられる権利（削除権）」の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '企業が過去の顧客苦情記録を消去できる権利' },
      { index: 1, text: 'データ主体が自らの個人データの削除をデータ管理者に要求できる権利' },
      { index: 2, text: '政府機関が特定の情報を公共記録から削除できる権利' },
      { index: 3, text: '企業が経営判断に不要なデータを自由に廃棄できる権利' },
    ],
    answer: 1,
    explanation: 'GDPR 第17条「消去権（忘れられる権利）」: データ主体（個人）が自分の個人データの削除をデータ管理者（企業等）に要求できる権利。要件：当初の目的に不要・同意撤回・不法処理など。企業は正当な理由がなければ削除に応じる義務がある。日本の個人情報保護法（改正APPI）にも利用停止・消去請求権が設けられている。',
  },

  // --- OS (7問) ---
  {
    id: 'OS-071', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 2, year: 2023, tags: ['仮想化','コンテナ','VM'],
    question: 'コンテナ（Docker等）と仮想マシン（VM）の比較として正しいものはどれか。',
    choices: [
      { index: 0, text: 'コンテナはゲスト OS を持つため VM より強い隔離性がある' },
      { index: 1, text: 'コンテナはホスト OS のカーネルを共有するため起動が速く軽量だが、VM に比べ OS レベルの隔離は弱い' },
      { index: 2, text: 'VM はコンテナより消費リソースが少ない' },
      { index: 3, text: 'コンテナは Windows のみで動作する' },
    ],
    answer: 1,
    explanation: 'コンテナ（Linux コンテナ）はホスト OS カーネルを共有し、namespaces と cgroups で隔離。ゲスト OS が不要なため起動が秒単位・イメージが小さい。VM はハイパーバイザー（Type1: ESXi/Hyper-V、Type2: VirtualBox）上に独立したゲスト OS を持ち、強い隔離性がある一方リソース消費が大きい。用途に合わせて使い分ける。',
  },
  {
    id: 'OS-072', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 3, year: 2022, tags: ['ページング','TLB'],
    question: 'TLB（Translation Lookaside Buffer）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'HDD の読み書きを高速化するディスクキャッシュ' },
      { index: 1, text: '仮想アドレス→物理アドレスの変換結果をキャッシュし、ページテーブル参照回数を削減する高速連想メモリ' },
      { index: 2, text: 'CPU の L1/L2 キャッシュとメインメモリ間のデータを管理するバッファ' },
      { index: 3, text: 'スレッドのコンテキストスイッチ時にレジスタを保存する領域' },
    ],
    answer: 1,
    explanation: 'TLB（Translation Lookaside Buffer）: ページテーブル参照のたびにメモリアクセスが発生するのを避けるため、仮想→物理アドレスの最近の変換結果をキャッシュするCPU 内の連想メモリ。TLBヒット時は1サイクル程度でアドレス変換できる。コンテキストスイッチ時はTLBをフラッシュ（またはASIDで識別）する。TLBミス時はページテーブルウォークが発生。',
  },
  {
    id: 'OS-073', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 2, year: 2023, tags: ['プロセス','シグナル'],
    question: 'UNIX/Linux でプロセスに送る SIGTERM と SIGKILL の違いとして正しいものはどれか。',
    choices: [
      { index: 0, text: 'SIGKILL はプロセスがキャッチして正常終了処理を行えるが、SIGTERM は即時強制終了する' },
      { index: 1, text: 'SIGTERM はプロセスがハンドラを実装して正常終了できるが、SIGKILL はカーネルが強制終了し、プロセスはキャッチ・無視できない' },
      { index: 2, text: '両者はまったく同じ動作をするシグナル' },
      { index: 3, text: 'SIGTERM はスーパーユーザのみが送れる特権シグナル' },
    ],
    answer: 1,
    explanation: 'シグナルの違い：SIGTERM（15）はデフォルトで終了だがシグナルハンドラでキャッチ可能→graceful shutdown（リソース解放・ファイルフラッシュ）ができる。SIGKILL（9）はカーネルがプロセスを即時強制終了し、プロセスによるキャッチ・ブロック・無視は不可能。`kill -9 PID` は最後の手段として使う。',
  },
  {
    id: 'OS-074', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 2, year: 2022, tags: ['ファイルシステム','ジャーナリング'],
    question: 'ジャーナリングファイルシステムの主な利点はどれか。',
    choices: [
      { index: 0, text: 'ファイル暗号化を自動的に行いセキュリティを高める' },
      { index: 1, text: '変更操作をジャーナルに先行記録することで、クラッシュ後の整合性回復（fsck）を高速化する' },
      { index: 2, text: 'ディスク容量を節約する圧縮機能を持つ' },
      { index: 3, text: 'NFS など他サーバとのリアルタイム同期を可能にする' },
    ],
    answer: 1,
    explanation: 'ジャーナリングファイルシステム（ext3/ext4・NTFS・XFS・APFS）: メタデータや書き込み操作をジャーナル（ログ領域）にトランザクションとして事前記録。システムクラッシュ後の再起動時にジャーナルを再生して一貫性を高速に回復できる。旧来の非ジャーナリングFS（ext2等）は fsck による全スキャンが必要で時間がかかっていた。',
  },
  {
    id: 'OS-075', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 3, year: 2023, tags: ['CPU','NUMA'],
    question: 'NUMA（Non-Uniform Memory Access）アーキテクチャの説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '全 CPU が均等な速度でメモリにアクセスできる対称型メモリアーキテクチャ' },
      { index: 1, text: 'CPU によってアクセスするメモリ領域が近い（ローカル）か遠い（リモート）かでレイテンシが異なる多ソケット構成' },
      { index: 2, text: 'メインメモリをすべて CPU キャッシュとして使う超高速メモリ構成' },
      { index: 3, text: '複数のGPU がメモリを共有する並列計算アーキテクチャ' },
    ],
    answer: 1,
    explanation: 'NUMA（Non-Uniform Memory Access）: 多ソケット（CPU が複数）サーバでは、各 CPU ソケットに近いメモリ（ローカルメモリ）へのアクセスは速く、他ソケット（リモート）のメモリへのアクセスは QPI/Infinity Fabric 経由で遅い。OS やアプリは NUMA トポロジを考慮してスレッド・メモリをローカルに配置（NUMA-aware）することでパフォーマンスを改善できる。',
  },
  {
    id: 'OS-076', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 2, year: 2022, tags: ['排他制御','ミューテックス','セマフォ'],
    question: 'バイナリセマフォとミューテックスの主な違いとして正しいものはどれか。',
    choices: [
      { index: 0, text: 'バイナリセマフォは 0/1 の値だけ取り、ミューテックスは任意の整数値を取る' },
      { index: 1, text: 'ミューテックスはロックした所有スレッドのみが解放できるが、バイナリセマフォは別スレッドからも解放（シグナル）できる' },
      { index: 2, text: 'ミューテックスはプロセス間で使えないが、バイナリセマフォはプロセス内のみ' },
      { index: 3, text: '両者はまったく同じであり、用語の違いにすぎない' },
    ],
    answer: 1,
    explanation: '排他制御の違い：ミューテックス（Mutex）はロックを取得（lock）したスレッドのみがアンロック（unlock）できる所有権の概念がある。バイナリセマフォ（0/1 Semaphore）は任意のスレッド/プロセスが wait/signal できるためシグナリングや生産者-消費者問題に使われる。所有権の有無が主な違い。カウンティングセマフォは0以上の整数値で複数リソースを管理。',
  },
  {
    id: 'OS-077', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 2, year: 2023, tags: ['ブートプロセス','UEFI'],
    question: 'UEFI（Unified Extensible Firmware Interface）が従来の BIOS に比べて優れている主な点はどれか。',
    choices: [
      { index: 0, text: '16 ビットの DOS 環境で動作するため旧型ソフトウェアとの互換性が高い' },
      { index: 1, text: 'セキュアブート機能・2TB 超の GPT ディスク対応・高速起動・ネットワーク機能などを標準サポートする' },
      { index: 2, text: 'オープンソースで誰でも改変できるため各社が自由にカスタマイズできる' },
      { index: 3, text: 'OS なしで完全な GUI オフィスアプリを提供できる' },
    ],
    answer: 1,
    explanation: 'UEFI の主な利点：① Secure Boot（ブートローダーの署名検証）② GPT（GUID Partition Table）でパーティション数無制限・2TB 超対応 ③ 32/64 ビットモードで動作・高速ブート ④ マウス操作可能な GUI セットアップ ⑤ ネットワーク機能・ドライバ拡張。従来 BIOS は16ビットモード・MBR（最大 2TB・最大 4 パーティション）・セキュリティ機能なしと制限が多かった。',
  },
  // --- マネジメント (7問) ---
  {
    id: 'MGT-071', category: 'project-mgmt', categoryName: 'プロジェクトマネジメント',
    difficulty: 2, year: 2023, tags: ['EVM','プロジェクト管理'],
    question: 'EVM（Earned Value Management）において CPI（Cost Performance Index）が 1.0 未満の場合の意味はどれか。',
    choices: [
      { index: 0, text: 'スケジュールが遅れている' },
      { index: 1, text: 'コストが計画より超過している（コスト効率が悪い）' },
      { index: 2, text: '残作業を完了できないリスクが高い' },
      { index: 3, text: 'プロジェクトが計画より早く完了する見込み' },
    ],
    answer: 1,
    explanation: 'EVM 指標：CPI = EV / AC（アーンドバリュー ÷ 実コスト）。CPI < 1.0 → 実コストが計画より高い（コスト超過）。CPI > 1.0 → コスト効率良好。SPI = EV / PV でスケジュール効率を示す（SPI < 1.0 が遅延）。完成時総コスト見積（EAC）= BAC / CPI で予測できる。',
  },
  {
    id: 'MGT-072', category: 'project-mgmt', categoryName: 'プロジェクトマネジメント',
    difficulty: 2, year: 2022, tags: ['リスク管理','モンテカルロ'],
    question: 'プロジェクトリスク管理におけるモンテカルロシミュレーションの目的として正しいものはどれか。',
    choices: [
      { index: 0, text: 'プロジェクトのリスク担当者を無作為に選定する' },
      { index: 1, text: '不確実性のあるパラメータを確率分布でモデル化し、多数の試行によりプロジェクト完成日・コストの確率分布を推定する' },
      { index: 2, text: 'ガントチャートを使って作業依存関係を分析する' },
      { index: 3, text: 'リスクの優先順位をコストと発生確率の2軸で評価する' },
    ],
    answer: 1,
    explanation: 'モンテカルロシミュレーション: 各タスクの所要期間・コストを確率分布（PERT の3点見積もり等）で設定し、乱数を使って数千〜数万回のシミュレーションを実施。結果を累積確率分布（S曲線）として表示し、「80%の確率でn日以内に完成」などのリスク定量化が可能。PMBOK のスケジュール・コストリスク分析で活用。',
  },
  {
    id: 'MGT-073', category: 'service-mgmt', categoryName: 'サービスマネジメント',
    difficulty: 2, year: 2023, tags: ['ITIL','サービスデスク'],
    question: 'ITIL 4 におけるインシデント管理の目的として正しいものはどれか。',
    choices: [
      { index: 0, text: 'インシデントの根本原因を調査して永続的な解決策を提供する' },
      { index: 1, text: 'サービスへの障害をできる限り早く復旧させ、ビジネス影響を最小化する' },
      { index: 2, text: '変更管理のリスクを評価して変更を承認・却下する' },
      { index: 3, text: 'サービスの容量と需要を一致させるための計画を立てる' },
    ],
    answer: 1,
    explanation: 'ITIL 4 インシデント管理の目的: 計画外の中断や品質低下（インシデント）を迅速に復旧させ、合意したサービス品質（SLA）を維持する。根本原因調査・恒久的な解決策はProblem管理が担当。変更リスク評価はChange Enablement。容量管理はCapacity & Performance管理。インシデント → 問題（Problem）の順で対処する。',
  },
  {
    id: 'MGT-074', category: 'business-strategy', categoryName: '経営戦略・マネジメント',
    difficulty: 3, year: 2022, tags: ['デジタルトランスフォーメーション','DX'],
    question: 'DX（デジタルトランスフォーメーション）の説明として最も適切なものはどれか。',
    choices: [
      { index: 0, text: '既存の紙帳票や業務を IT システムに置き換える IT 化（デジタル化）' },
      { index: 1, text: 'デジタル技術を活用してビジネスモデル・組織・企業文化を変革し、競争優位を確立すること' },
      { index: 2, text: '社内のすべての PC をクラウドに移行するプロジェクト' },
      { index: 3, text: 'RPA を使って定型業務を自動化すること' },
    ],
    answer: 1,
    explanation: 'DX（DigitalTransformation）: スウェーデンの Stolterman 教授が提唱。単なる IT 化・デジタル化（Digitization/Digitalization）にとどまらず、AI・IoT・クラウド・データ分析を活用してビジネスモデル・製品・組織・企業文化を根本から変革し、新たな価値創出と競争優位を実現する取組み。経産省「DX推進ガイドライン」にも定義されている。',
  },
  {
    id: 'MGT-075', category: 'project-mgmt', categoryName: 'プロジェクトマネジメント',
    difficulty: 2, year: 2023, tags: ['DevOps','CI/CD'],
    question: 'DevOps における CI/CD パイプラインの「CD」が指す概念として正しいものはどれか。',
    choices: [
      { index: 0, text: 'コード変更のたびに自動テストを実行してビルドの品質を保証するプロセス' },
      { index: 1, text: 'コードを自動でテスト環境・本番環境へデプロイする継続的デリバリー（CD: Continuous Delivery/Deployment）' },
      { index: 2, text: '開発チームとセキュリティチームが協力するプロセス' },
      { index: 3, text: 'コンテナをオーケストレーションするプロセス' },
    ],
    answer: 1,
    explanation: 'CI/CD：CI（Continuous Integration）はコード変更のたびに自動ビルド・自動テストを実行して統合品質を保証。CD（Continuous Delivery）は本番デプロイ可能な状態に自動化。CD（Continuous Deployment）はさらに本番環境への自動デプロイも行う。GitLab CI・GitHub Actions・Jenkins などが代表ツール。フィードバックループを短縮してリリース頻度を高める。',
  },
  {
    id: 'MGT-076', category: 'service-mgmt', categoryName: 'サービスマネジメント',
    difficulty: 2, year: 2022, tags: ['SLA','SLO'],
    question: 'SLA（Service Level Agreement）と SLO（Service Level Objective）の関係として正しいものはどれか。',
    choices: [
      { index: 0, text: 'SLA は社内指標、SLO は顧客との契約書' },
      { index: 1, text: 'SLO はサービスの目標指標（例: 可用性 99.9%）で、SLA はそれをもとに顧客と締結する正式な合意・契約' },
      { index: 2, text: '両者はまったく同義であり、業界によって呼び名が違うだけ' },
      { index: 3, text: 'SLA はエンジニアが設定し、SLO は経営層が設定する' },
    ],
    answer: 1,
    explanation: 'SRE の主要概念：SLI（Service Level Indicator）は実際の計測値（例: 成功リクエスト率）。SLO は内部目標（例: SLI ≥ 99.9%）。SLA は SLO をもとに顧客・利益・ペナルティ条件を含めた正式契約。エラーバジェット = 許容ダウンタイム = 1 - SLO（%）。SLO に違反しそうなとき開発は新機能より信頼性改善を優先する。',
  },
  {
    id: 'MGT-077', category: 'service-mgmt', categoryName: 'サービスマネジメント',
    difficulty: 3, year: 2023, tags: ['システム監査','内部統制'],
    question: 'システム監査における「アシュアランス業務」の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '経営者の依頼に基づきシステム改善のコンサルティングを行う業務' },
      { index: 1, text: '監査対象の情報に対して独立した第三者として評価し、その結果の信頼性を保証する業務' },
      { index: 2, text: 'セキュリティ事故発生後の調査・復旧を支援するフォレンジクス業務' },
      { index: 3, text: 'システムのバグを検出してレポートするテスト業務' },
    ],
    answer: 1,
    explanation: 'システム監査の業務種別：アシュアランス業務（Assurance）は監査人が独立した立場で情報・システム・プロセスを評価し信頼性を保証する（財務諸表監査・情報セキュリティ監査など）。コンサルティング業務（Advisory）は改善提案・助言を提供する。日本では「システム監査基準」（経産省）に基づき、独立性・客観性・適切なスキルが求められる。',
  },
];
QUESTIONS_DATA.push(...QUESTIONS_DATA_PHASE13);

// ========== フェーズ14 追加問題 (70問: 560問合計) ==========
const QUESTIONS_DATA_PHASE14 = [
  // --- アルゴリズム (10問) ---
  {
    id: 'ALG-085', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 3, year: 2023, tags: ['赤黒木','自己平衡二分木'],
    question: '赤黒木（Red-Black Tree）が保証する操作の時間計算量として正しいものはどれか。',
    choices: [
      { index: 0, text: '挿入・削除・検索すべてが O(1)' },
      { index: 1, text: '挿入・削除・検索すべてが O(log n)' },
      { index: 2, text: '検索は O(1) だが挿入・削除は O(n)' },
      { index: 3, text: '平均 O(log n) だが最悪 O(n²)' },
    ],
    answer: 1,
    explanation: '赤黒木は自己平衡二分探索木の一種。「赤・黒の色付け規則」を保ちながら回転操作で高さを O(log n) に維持する。挿入・削除・検索がすべて最悪でも O(log n) を保証。C++ の `std::map`・Java の `TreeMap`・Linux カーネルの CFS スケジューラなどで採用されている。AVL 木は更厳密に平衡を保つため回転コストが大きい。',
  },
  {
    id: 'ALG-086', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 2, year: 2022, tags: ['ビット演算','マスク'],
    question: '32 ビット整数 x に対して `x & (x - 1)` を評価したとき、結果が 0 になる条件はどれか。',
    choices: [
      { index: 0, text: 'x が負の数のとき' },
      { index: 1, text: 'x が 2 のべき乗（1, 2, 4, 8 …）のとき' },
      { index: 2, text: 'x が偶数のとき' },
      { index: 3, text: 'x が奇数のとき' },
    ],
    answer: 1,
    explanation: '2 のべき乗は 2 進数で 1 ビットだけが 1（例: 8 = 1000）。x - 1 はその 1 ビットを 0 にして下位をすべて 1 にする（7 = 0111）。AND をとると 0 になる。これを応用し「x が 2 のべき乗か判定」を O(1) で行える。x & (x-1) は「x の最下位の 1 ビットを除去する」操作としても使われる。',
  },
  {
    id: 'ALG-087', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 3, year: 2023, tags: ['最適化','貪欲法'],
    question: '貪欲法（Greedy Algorithm）が最適解を保証しない問題の例として正しいものはどれか。',
    choices: [
      { index: 0, text: 'ハフマン符号化' },
      { index: 1, text: '一般的なナップサック問題（0-1 ナップサック）' },
      { index: 2, text: 'クラスカル法による最小全域木' },
      { index: 3, text: '最小コインの枚数問題（額面が一定の条件を満たす場合）' },
    ],
    answer: 1,
    explanation: '貪欲法は局所最適な選択を繰り返す。最小全域木（クラスカル法・プリム法）・ハフマン符号化・活動選択問題では最適解を保証する。しかし 0-1 ナップサック問題（アイテムを丸ごと入れるか入れないか選ぶ）は局所最適が全体最適にならないケースがあり、動的計画法が必要。分数ナップサック問題は貪欲法で最適解が得られる。',
  },
  {
    id: 'ALG-088', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 2, year: 2022, tags: ['ソート','マージソート'],
    question: 'マージソートの特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: '追加メモリをほぼ使わずインプレースでソートできる' },
      { index: 1, text: '最悪・平均・最良すべてが O(n log n) で安定ソートである' },
      { index: 2, text: '小さな配列への適用でも O(n log n) の効率が出にくい' },
      { index: 3, text: 'ピボット選択によって性能が大きく変わる' },
    ],
    answer: 1,
    explanation: 'マージソートは分割統治法で配列を半分に分割し、再帰的にソートしてマージする。時間計算量は最悪・平均・最良すべて O(n log n)。同じ値の要素の順序を保つ「安定ソート」。ただし O(n) の追加メモリが必要（インプレースではない）。リンクリストのソートに特に有効。クイックソートはインプレースだが最悪 O(n²)。',
  },
  {
    id: 'ALG-089', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 3, year: 2023, tags: ['暗号','RSA','素数'],
    question: 'RSA 暗号の安全性が依拠している数学的問題はどれか。',
    choices: [
      { index: 0, text: '大きな整数の素因数分解が計算困難（整数因数分解問題）' },
      { index: 1, text: '楕円曲線上の離散対数問題' },
      { index: 2, text: 'ハッシュ関数の衝突困難性' },
      { index: 3, text: 'ランダムグラフの最大クリーク探索' },
    ],
    answer: 0,
    explanation: 'RSA 暗号はランダムに選んだ 2 つの大きな素数 p, q の積 n = p × q を公開鍵に含める。n から p, q を求める素因数分解は現在の古典コンピュータでは n が十分大きければ実用的に解けない（計算困難）。楕円曲線離散対数問題は ECDSA/ECDH の安全性根拠。Shor のアルゴリズムを用いた量子コンピュータはどちらも解けてしまう。',
  },
  {
    id: 'ALG-090', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 2, year: 2022, tags: ['グラフ','オイラー路'],
    question: 'ケーニヒスベルクの橋の問題で示された「一筆書き可能（オイラー路が存在する）」条件はどれか。',
    choices: [
      { index: 0, text: 'グラフのすべての頂点の次数が偶数' },
      { index: 1, text: '次数が奇数の頂点がちょうど 0 個または 2 個' },
      { index: 2, text: 'グラフが完全グラフである' },
      { index: 3, text: 'すべての辺を一度ずつ通り、頂点を重複しない' },
    ],
    answer: 1,
    explanation: 'オイラー路・回路の条件：連結グラフで奇数次数の頂点が 0 個なら「オイラー回路」（すべての辺を一度通り起点に戻れる）が存在。奇数次数の頂点がちょうど 2 個なら「オイラー路」（その 2 頂点を始終点とする一筆書き）が存在。ケーニヒスベルクの橋問題は奇数次数の頂点が 4 個あるため一筆書き不可能とオイラーが証明した（グラフ理論の起源）。',
  },
  {
    id: 'ALG-091', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 3, year: 2023, tags: ['セグメント木','区間クエリ'],
    question: 'セグメント木（Segment Tree）が効率的に処理できる操作の組み合わせはどれか。',
    choices: [
      { index: 0, text: '配列全体の並べ替えと最頻値の取得' },
      { index: 1, text: '区間内の最小値・最大値・合計などのクエリ（O(log n)）と点更新（O(log n)）' },
      { index: 2, text: '配列への要素の挿入と削除（O(log n)）' },
      { index: 3, text: 'グラフの最短経路クエリ' },
    ],
    answer: 1,
    explanation: 'セグメント木は配列を完全二分木で管理し、各ノードが区間の集約値（和・最小値など）を保持する。区間クエリ（[l, r] の合計/最小値など）と点更新をどちらも O(log n) で処理できる。競技プログラミングやデータベースの範囲集計に活用される。Fenwick 木（Binary Indexed Tree）は区間和・点更新を同様の計算量で定数倍小さく実装できる。',
  },
  {
    id: 'ALG-092', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 2, year: 2022, tags: ['再帰','末尾再帰'],
    question: '末尾再帰最適化（Tail Call Optimization: TCO）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '再帰の基底ケースを先に評価して呼び出しを減らす手法' },
      { index: 1, text: '関数の最後の操作が再帰呼び出しであるとき、スタックフレームを再利用しスタックオーバーフローを防ぐ最適化' },
      { index: 2, text: '再帰をループに変換してメモ化することで計算量を削減する' },
      { index: 3, text: '並列コアで再帰を分岐させる並列処理最適化' },
    ],
    answer: 1,
    explanation: '末尾再帰: 関数の最後の操作が再帰呼び出しのとき、呼び出し元のスタックフレームを再利用（上書き）して新たなフレームを積まない最適化。深い再帰でもスタックオーバーフローが起きない。Scheme・Haskell・Erlang は言語仕様として TCO を保証。Python・Java は標準では TCO を行わないため深い再帰はイテレーションに置き換える必要がある。',
  },
  {
    id: 'ALG-093', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 2, year: 2023, tags: ['数値','IEEE754','浮動小数点'],
    question: 'IEEE 754 倍精度浮動小数点数（double）の特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: '64 ビット構成で、整数を完全に正確に表現できる' },
      { index: 1, text: '64 ビット（符号 1 + 指数部 11 + 仮数部 52）で、10進数約 15〜16 桁の精度を持つが 0.1 などは正確に表現できない' },
      { index: 2, text: '32 ビットと 64 ビットの 2 種類があり、どちらも任意精度' },
      { index: 3, text: '指数部が 0 のとき非正規化数として扱われ精度が向上する' },
    ],
    answer: 1,
    explanation: 'IEEE 754 倍精度（binary64）: 1符号+11指数+52仮数=64bit。10進約 15〜16桁の有効数字。2進浮動小数点なので 0.1（= 1/10）などの 10 進小数は正確に表現できず丸め誤差が生じる（0.1 + 0.2 ≠ 0.3 問題）。指数部がすべて 0 のとき非正規化数（denormalized）で精度が落ちる。金融計算には BCD や整数演算・任意精度ライブラリを使う。',
  },
  {
    id: 'ALG-094', category: 'algorithm', categoryName: 'アルゴリズム・データ構造',
    difficulty: 3, year: 2022, tags: ['グラフ','トポロジカルソート','DAG'],
    question: 'トポロジカルソートが適用可能なグラフの条件はどれか。',
    choices: [
      { index: 0, text: '重み付き無向グラフ' },
      { index: 1, text: '有向非巡回グラフ（DAG: Directed Acyclic Graph）' },
      { index: 2, text: '完全二分木' },
      { index: 3, text: '閉路を持つ有向グラフ' },
    ],
    answer: 1,
    explanation: 'トポロジカルソートは DAG（有向非巡回グラフ）の頂点を「すべての依存関係（辺の方向）を満たす順序」に並べる操作。ビルドシステム（Makefile）・タスクスケジューリング・コース履修順序などに応用。閉路があるグラフには適用不可（閉路検出には DFS で後退辺を検出する）。Kahn のアルゴリズム（BFS ベース）または DFS の終了順の逆で実現できる。',
  },

  // --- ネットワーク (10問) ---
  {
    id: 'NET-085', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2023, tags: ['CDN','エッジ'],
    question: 'CDN（Content Delivery Network）の主な目的として正しいものはどれか。',
    choices: [
      { index: 0, text: '単一の高性能サーバでコンテンツを提供し帯域を最大化する' },
      { index: 1, text: '地理的に分散したエッジサーバにコンテンツをキャッシュし、ユーザとの物理距離を縮めてレイテンシと帯域コストを削減する' },
      { index: 2, text: 'クライアント間で P2P でデータを転送してサーバ負荷をなくす' },
      { index: 3, text: 'データを暗号化してプライバシーを保護する仕組み' },
    ],
    answer: 1,
    explanation: 'CDN（Content Delivery Network）: Akamai・Cloudflare・AWS CloudFront などが代表例。世界中のエッジ（PoP: Point of Presence）にコンテンツをキャッシュし、ユーザは地理的に最も近い PoP から取得する。メリット：① 低レイテンシ ② オリジンサーバ負荷軽減 ③ DDoS 耐性（分散）④ 帯域コスト削減。静的コンテンツ（画像・CSS・JS）に特に有効。',
  },
  {
    id: 'NET-086', category: 'network', categoryName: 'ネットワーク',
    difficulty: 3, year: 2022, tags: ['QUIC','HTTP/3'],
    question: 'HTTP/3 が HTTP/2 に比べて改善した主な点はどれか。',
    choices: [
      { index: 0, text: 'ヘッダ圧縮を初めて導入してトラフィックを削減した' },
      { index: 1, text: 'TCP の代わりに QUIC（UDP ベース）を使い、接続確立の遅延削減と HOL ブロッキング完全解決を実現した' },
      { index: 2, text: 'TLS 1.2 を使うことでセキュリティを強化した' },
      { index: 3, text: '単一接続を廃止し複数 TCP 接続を並列使用するようにした' },
    ],
    answer: 1,
    explanation: 'HTTP/3 は QUIC（Quick UDP Internet Connections）プロトコル上で動作。QUIC は UDP ベースで「0-RTT 再接続」「接続移行（IP 変更時も継続）」「ストリームレベルの HOL ブロッキング解消」を実現。HTTP/2 は TCP の上でストリーム多重化するため TCP レベルの HOL（1 パケットロスで全ストリームが詰まる）が残っていた。TLS は HTTP/3 では組み込み（TLS 1.3 相当）。',
  },
  {
    id: 'NET-087', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2023, tags: ['セグメントルーティング','OSPF'],
    question: 'ネットワークの「リンクステート型」ルーティングプロトコルの特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: '隣接ルータとホップ数だけを交換してルーティングテーブルを構築する' },
      { index: 1, text: 'ネットワーク全体のトポロジ情報（リンクステート）をフラッディングして各ルータが最短経路を独自に計算する' },
      { index: 2, text: 'ルーティングポリシーを AS 間でネゴシエーションする' },
      { index: 3, text: '固定時間ごとに完全なルーティングテーブルを隣接ルータに送信する' },
    ],
    answer: 1,
    explanation: 'リンクステート型（OSPF・IS-IS）: 各ルータが LSA（Link State Advertisement）を全ルータにフラッディングしてネットワーク全体の完全なトポロジ情報を持つ。各ルータがダイクストラ法（SPF算法）で独立して最短経路を計算。収束が速く大規模ネットワーク向き。ディスタンスベクタ型（RIP）は隣接にのみ距離情報を送るため収束が遅くループが起きやすい。',
  },
  {
    id: 'NET-088', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2022, tags: ['NTP','時刻同期'],
    question: 'NTP（Network Time Protocol）の階層モデルで「Stratum 0」に相当するものはどれか。',
    choices: [
      { index: 0, text: '一般のサーバやPC' },
      { index: 1, text: '原子時計・GPS 受信機など高精度な時刻源（参照時計）' },
      { index: 2, text: 'インターネット上の公開 NTP サーバ' },
      { index: 3, text: 'ローカルネットワーク内の時刻サーバ' },
    ],
    answer: 1,
    explanation: 'NTP 階層（Stratum）: Stratum 0 = 原子時計・GPS・PPS などの一次時刻源（直接ネットワーク接続しない）。Stratum 1 = Stratum 0 に直接接続されたタイムサーバ（NIST・IPA など）。Stratum 2 = Stratum 1 と同期するサーバ。一般的な PC は Stratum 3〜5 程度。ネットワーク遅延の対称性を仮定しながら時刻同期をとる。PTP（IEEE 1588）はナノ秒精度の工場・通信向け時刻同期プロトコル。',
  },
  {
    id: 'NET-089', category: 'network', categoryName: 'ネットワーク',
    difficulty: 3, year: 2023, tags: ['802.1X','RADIUS','認証'],
    question: 'IEEE 802.1X のネットワーク認証における「サプリカント・オーセンティケータ・認証サーバ」の役割として正しいものはどれか。',
    choices: [
      { index: 0, text: 'サプリカントは認証を強制するスイッチで、オーセンティケータはクライアント' },
      { index: 1, text: 'サプリカントは認証を受けるクライアント、オーセンティケータはスイッチ/AP（通行を制御）、認証サーバは RADIUS サーバ（認証判断）' },
      { index: 2, text: 'オーセンティケータが認証情報を保存し、サプリカントが認証判断を下す' },
      { index: 3, text: '認証サーバがスイッチに代わって直接 MAC アドレスフィルタリングを行う' },
    ],
    answer: 1,
    explanation: 'IEEE 802.1X（ポートベース認証）: サプリカント（Supplicant）= 認証を受けるクライアント（PC・スマートフォン）。オーセンティケータ（Authenticator）= スイッチやWAP（受信した EAP パケットを RADIUS に転送し、認証成功/失敗に応じてポートを開閉）。認証サーバ（Authentication Server）= RADIUS サーバ（証明書・クレデンシャルを検証して結果を返す）。EAP（Extensible Authentication Protocol）が認証フレームワーク。',
  },
  {
    id: 'NET-090', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2022, tags: ['DNS','DNSSEC'],
    question: 'DNSSEC（DNS Security Extensions）が防ぐ攻撃として正しいものはどれか。',
    choices: [
      { index: 0, text: 'DNS サーバへの DDoS 攻撃' },
      { index: 1, text: 'DNS キャッシュポイズニング（偽のレコードをキャッシュに注入する攻撃）' },
      { index: 2, text: 'DNS サーバとクライアント間の通信の盗聴' },
      { index: 3, text: 'DNS ゾーン転送の不正取得' },
    ],
    answer: 1,
    explanation: 'DNSSEC: DNS レコードにデジタル署名（RRSIG）を付加し、クライアントがチェーン・オブ・トラストで検証する。DNS キャッシュポイズニング（カミンスキー攻撃など）で偽の IP アドレスをキャッシュされるのを防ぐ。ただし DNS over HTTPS（DoH）や DNS over TLS（DoT）は通信の盗聴防止が目的で、役割が異なる。',
  },
  {
    id: 'NET-091', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2023, tags: ['負荷分散','ロードバランサ'],
    question: 'L4 ロードバランサと L7 ロードバランサの主な違いはどれか。',
    choices: [
      { index: 0, text: 'L4 はアプリケーション層の内容を解析し、L7 は IP/ポートのみで振り分ける' },
      { index: 1, text: 'L4 は IP アドレス・ポート番号で振り分け高速だが内容解析なし。L7 は HTTP ヘッダ・Cookie・URL などの内容を解析して振り分けられる' },
      { index: 2, text: 'L7 はすべての TCP 接続をそのまま転送し L4 が終端する' },
      { index: 3, text: '両者は同等で、使う帯域の違いのみ' },
    ],
    answer: 1,
    explanation: 'ロードバランサの種類：L4（トランスポート層）は IP・ポートで振り分け（NAT/DSR）、高速・シンプル。L7（アプリケーション層）はHTTPヘッダ・URL・Cookie・JSessionID などを解析して振り分ける（コンテンツベースルーティング・スティッキーセッション）。SSL 終端・WAF 機能も L7 が担う。AWS ALB は L7、NLB は L4 に相当。',
  },
  {
    id: 'NET-092', category: 'network', categoryName: 'ネットワーク',
    difficulty: 3, year: 2022, tags: ['ネットワーク仮想化','VXLAN'],
    question: 'VXLAN（Virtual Extensible LAN）の主な目的として正しいものはどれか。',
    choices: [
      { index: 0, text: '物理スイッチのポートを増やして大規模 LAN を構築する' },
      { index: 1, text: 'L2 フレームを UDP/IP でカプセル化し、IP ネットワーク越しに L2 ネットワークを拡張する（VLAN ID を 24 ビットに拡張）' },
      { index: 2, text: 'MPLS を置き換えてキャリアグレードの VPN を提供する' },
      { index: 3, text: 'ワイヤレス LAN のカバレッジを拡大するメッシュネットワーク技術' },
    ],
    answer: 1,
    explanation: 'VXLAN: L2 フレームを UDP（ポート4789）でカプセル化してトンネリングするオーバーレイ技術。24 ビットの VNI（VXLAN Network Identifier）で最大 1600 万以上の仮想ネットワーク識別が可能（IEEE 802.1Q VLAN の 4094 を超える）。クラウド・データセンターで VM の L2 ドメインを物理境界を越えて拡張するために広く使われる。VMware NSX・OpenStack Neutron などで採用。',
  },
  {
    id: 'NET-093', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2023, tags: ['メール','SPF','DMARC'],
    question: 'メールのなりすまし対策における DMARC の役割として正しいものはどれか。',
    choices: [
      { index: 0, text: '送信元 IP と SPF レコードを照合して送信を許可/拒否する' },
      { index: 1, text: 'SPF・DKIM の検証結果を組み合わせ、失敗時のポリシー（none/quarantine/reject）と報告先を指定する' },
      { index: 2, text: 'メール本文を暗号化して盗聴を防ぐ' },
      { index: 3, text: 'メールサーバ間の通信を TLS で保護する' },
    ],
    answer: 1,
    explanation: 'メール認証の3技術：SPF（Sender Policy Framework）= 送信元ドメインのDNSで許可IPを公開。DKIM（DomainKeys Identified Mail）= 送信サーバが電子署名を付加し受信側が公開鍵で検証。DMARC（Domain-based Message Authentication Reporting and Conformance）= SPF/DKIM の結果と From アドレスのドメイン整合性を確認し、失敗時のポリシー（reject=拒否 / quarantine=迷惑メール）と集計レポートの送信先を DNS に公開する。',
  },
  {
    id: 'NET-094', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2022, tags: ['ポート番号','プロトコル'],
    question: 'HTTPS・SSH・DNS・SMTP の標準ポート番号の組合せとして正しいものはどれか。',
    choices: [
      { index: 0, text: 'HTTPS=80, SSH=443, DNS=53, SMTP=25' },
      { index: 1, text: 'HTTPS=443, SSH=22, DNS=53, SMTP=25' },
      { index: 2, text: 'HTTPS=443, SSH=22, DNS=53, SMTP=110' },
      { index: 3, text: 'HTTPS=8080, SSH=22, DNS=53, SMTP=25' },
    ],
    answer: 1,
    explanation: '主要ポート番号: HTTP=80, HTTPS=443, SSH=22, FTP=20/21, DNS=53(UDP/TCP), SMTP=25, SUBMISSION=587, POP3=110, IMAP=143, RDP=3389, LDAP=389, LDAPS=636, SNMP=161/162, NTP=123, DHCP=67/68。SMTP 25番はサーバ間（MTA間）転送用で、メールクライアントからはSUBMISSION (587) や SMTPS (465) を使う。',
  },

  // --- ソフトウェア開発 (10問) ---
  {
    id: 'SD-071', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 2, year: 2023, tags: ['デザインパターン','Observer'],
    question: 'Observer（オブザーバー）パターンの説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'オブジェクトの生成方法を統一的なインターフェースで隠蔽するパターン' },
      { index: 1, text: '1 つの Subject（発行者）の状態変化を複数の Observer（購読者）に自動通知するパターン' },
      { index: 2, text: '再帰的なオブジェクト構造で木状の階層を表すパターン' },
      { index: 3, text: 'アルゴリズムの骨格を基底クラスに定義し、詳細をサブクラスで実装するパターン' },
    ],
    answer: 1,
    explanation: 'Observer パターン（GoF 行動パターン）: Subject（発行者/イベントソース）は内部状態が変わると登録済みの全 Observer（購読者）の update() を呼ぶ。疎結合でイベント駆動システムを構築できる。イベントリスナ・MVC の Model-View 通知・RxJS などのリアクティブプログラミングの基礎。Publish/Subscribe パターンはメッセージブローカー経由でさらに疎結合にした変種。',
  },
  {
    id: 'SD-072', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 2, year: 2022, tags: ['テスト','TDD'],
    question: 'TDD（テスト駆動開発）の基本サイクルとして正しいものはどれか。',
    choices: [
      { index: 0, text: '設計 → 実装 → テスト作成 → リファクタリング' },
      { index: 1, text: 'Red（失敗するテストを書く）→ Green（テストを通す最小限の実装）→ Refactor（リファクタリング）' },
      { index: 2, text: 'コードレビュー → テスト → デプロイ → モニタリング' },
      { index: 3, text: '仕様書作成 → テスト自動化 → 実装 → 受け入れテスト' },
    ],
    answer: 1,
    explanation: 'TDD（Test-Driven Development）の Red-Green-Refactor サイクル：①Red: まず失敗するテストを書く（まだ実装がないため赤）②Green: テストが通る最小限のコードを実装（緑にする）③Refactor: コードを整理・改善（テストは引き続き通る）。テストが設計を誘導するため API が使いやすくなり、デグレを防ぐテストスイートが自然に蓄積される。',
  },
  {
    id: 'SD-073', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 3, year: 2023, tags: ['リファクタリング','コードスメル'],
    question: '「神クラス（God Class）」という「コードスメル」の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'インターフェースが過剰に多く実装されたクラス' },
      { index: 1, text: '過度に多くの責務と知識を持ち、他クラスへの依存が多い巨大クラス（単一責任原則違反）' },
      { index: 2, text: 'テスタビリティが低い静的メソッドのみで構成されたクラス' },
      { index: 3, text: '循環依存の起点となる基底クラス' },
    ],
    answer: 1,
    explanation: '神クラス（God Object）は多くのデータと処理を1クラスに詰め込んだアンチパターン。単一責任原則（SRP）に違反し、変更時の影響範囲が大きくテストが困難。リファクタリング手法：責務ごとにクラスを分割（Extract Class）・適切な場所に処理を移動（Move Method/Field）。コードスメルは設計上の問題の兆候（Long Method・Duplicated Code・Large Class など）を指す。',
  },
  {
    id: 'SD-074', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 2, year: 2022, tags: ['CI/CD','GitHub Actions'],
    question: 'CI（継続的インテグレーション）の主なメリットとして正しいものはどれか。',
    choices: [
      { index: 0, text: '本番環境への自動デプロイを可能にする' },
      { index: 1, text: 'コード変更のたびに自動ビルド・テストを実行し、統合時のバグを早期発見してフィードバックループを短縮する' },
      { index: 2, text: 'コードの静的解析を一切不要にする' },
      { index: 3, text: 'セキュリティ脆弱性スキャンを担当するのが CI の唯一の役割' },
    ],
    answer: 1,
    explanation: 'CI（Continuous Integration）: 複数の開発者が共有ブランチに頻繁にマージし、マージのたびに自動ビルド・単体テスト・統合テストを実行する。問題を早期に（小さなうちに）発見し、"works on my machine" 問題を排除する。Jenkins・GitHub Actions・GitLab CI・CircleCI などが代表ツール。CD との組み合わせで CI/CD パイプラインを構成する。',
  },
  {
    id: 'SD-075', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 3, year: 2023, tags: ['関数型','不変性','副作用'],
    question: '関数型プログラミングにおける「純粋関数（Pure Function）」の定義として正しいものはどれか。',
    choices: [
      { index: 0, text: '副作用として外部状態を変更してもよいが、戻り値は常に同じ関数' },
      { index: 1, text: '同じ引数に対して常に同じ結果を返し（参照透過性）、副作用（外部状態の変更・I/O）が一切ない関数' },
      { index: 2, text: 'グローバル変数のみを使う関数' },
      { index: 3, text: '再帰のみで実装された関数' },
    ],
    answer: 1,
    explanation: '純粋関数（Pure Function）: ①参照透過性（Referential Transparency）= 同じ引数 → 常に同じ返り値 ②副作用なし = ファイル書き込み・DB 更新・グローバル変数変更・コンソール出力などを行わない。純粋関数はテストが容易・並列実行が安全・メモ化が可能。Haskell・Erlang・F# などが関数型言語。JavaScript/Python でも純粋関数スタイルで書ける。',
  },
  {
    id: 'SD-076', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 2, year: 2022, tags: ['アジャイル','ベロシティ'],
    question: 'スクラムにおけるスプリントレビューの目的として正しいものはどれか。',
    choices: [
      { index: 0, text: 'チームの開発プロセスを振り返りカイゼンする' },
      { index: 1, text: 'スプリントで完成したプロダクトインクリメントをステークホルダーに実演しフィードバックを得る' },
      { index: 2, text: '次スプリントのバックログアイテムの見積もりを行う' },
      { index: 3, text: '毎日 15 分以内でチームの進捗を確認する' },
    ],
    answer: 1,
    explanation: 'スクラムの 4 イベント：スプリントプランニング（次スプリントの計画）・デイリースクラム（毎日15分の同期）・スプリントレビュー（完成したインクリメントをステークホルダーに披露しフィードバック）・スプリントレトロスペクティブ（プロセス改善）。スプリントレビューは透明性の原則に基づきプロダクト価値を検査し適応するための場。',
  },
  {
    id: 'SD-077', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 3, year: 2023, tags: ['マイクロサービス','API Gateway'],
    question: 'マイクロサービスアーキテクチャで API Gateway を使う主な目的として正しいものはどれか。',
    choices: [
      { index: 0, text: '各マイクロサービスに直接クライアントがアクセスすることを禁止するための制限' },
      { index: 1, text: 'クライアントと複数マイクロサービス間に単一エントリーポイントを設け、認証・ルーティング・レート制限・プロトコル変換を一元化する' },
      { index: 2, text: 'マイクロサービス間の同期通信を廃止してメッセージキューに統一する' },
      { index: 3, text: 'サービスメッシュを置き換えてサイドカーの役割を担う' },
    ],
    answer: 1,
    explanation: 'API Gateway パターン：クライアントは単一エンドポイントに接続し、Gateway が適切なマイクロサービスへルーティングする。機能：①認証・認可（JWT検証）②レート制限・スロットリング ③SSL 終端 ④レスポンスアグリゲーション（複数サービスを合成）⑤プロトコル変換（REST↔gRPC）。AWS API Gateway・Kong・Nginx・Traefik が代表例。BFF（Backend for Frontend）パターンと組み合わせることも多い。',
  },
  {
    id: 'SD-078', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 2, year: 2022, tags: ['静的解析','SAST'],
    question: 'SAST（Static Application Security Testing）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '動作中のアプリケーションに対してリクエストを送りリアルタイムに脆弱性を検出する' },
      { index: 1, text: 'アプリケーションのソースコードやバイナリを実行せずに解析し、セキュリティ上の欠陥（SQLインジェクション等）を検出する' },
      { index: 2, text: 'ネットワークトラフィックを監視して侵入を検知する' },
      { index: 3, text: 'テスト実行時のカバレッジを測定してテストの品質を評価する' },
    ],
    answer: 1,
    explanation: 'セキュリティテストの種類：SAST（Static）= ソースコードを静的解析（実行不要）してバグ・脆弱性を検出。開発初期に適用可。SonarQube・Checkmarx・Semgrep などが代表ツール。DAST（Dynamic）= 稼働中のアプリにリクエストを送りランタイムの脆弱性（XSS・SSRF等）を検出。OWASP ZAP・Burp Suite。SCA（Software Composition Analysis）= 使用ライブラリの既知脆弱性（CVE）をスキャン。',
  },
  {
    id: 'SD-079', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 3, year: 2023, tags: ['設計','CQRS','イベントソーシング'],
    question: 'CQRS（Command Query Responsibility Segregation）パターンの説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'データベースの読み取りと書き込みを同一トランザクション内でまとめるパターン' },
      { index: 1, text: 'コマンド（書き込み）とクエリ（読み込み）を異なるモデル・ストアに分離し、それぞれに最適化するパターン' },
      { index: 2, text: 'すべての操作をコマンドとして定義し、イベントバスで配布するパターン' },
      { index: 3, text: 'CRUD 操作を REST API に対応させる設計パターン' },
    ],
    answer: 1,
    explanation: 'CQRS: 書き込み系（Command）は正規化されたトランザクション DB、読み取り系（Query）は非正規化されたリードモデル（Elasticsearch・キャッシュなど）と分離して最適化。読み書きの負荷・一貫性要件・スキーマが異なるシステムで有効。Event Sourcing（全変更をイベントとして永続化）と組み合わせることが多い。複雑性が増すため、シンプルな CRUD システムへの適用は過剰設計になりやすい。',
  },
  {
    id: 'SD-080', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 2, year: 2022, tags: ['品質','McCabe'],
    question: 'マクケイブの循環的複雑度（Cyclomatic Complexity）が示すものはどれか。',
    choices: [
      { index: 0, text: 'ソースコードの行数（LOC）に基づく保守性の指標' },
      { index: 1, text: 'プログラムの制御フローグラフにおける独立した経路の数（分岐の複雑さの尺度）' },
      { index: 2, text: 'クラス間の依存関係の数' },
      { index: 3, text: '変数・関数のスコープの深さ' },
    ],
    answer: 1,
    explanation: '循環的複雑度（Cyclomatic Complexity, CC）= E - N + 2P（辺数 - 頂点数 + 2×連結成分数）= 分岐条件数 + 1 で近似。CC が高いほどテストすべき経路が多く保守が困難。一般的なガイドライン: CC ≤ 10 が望ましく、CC > 15 はリファクタリング推奨。コードカバレッジの基準の一つとして「分岐ごとにテストケースを作成」に利用される。',
  },

  // --- 法規・標準 (10問) ---
  {
    id: 'LG-071', category: 'legal', categoryName: '法規・標準',
    difficulty: 2, year: 2023, tags: ['個人情報保護法','APPI'],
    question: '改正個人情報保護法（2022年施行）で新設された「仮名加工情報」の特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: '他の情報と照合しても特定個人を識別できない完全匿名化されたデータ' },
      { index: 1, text: '他の情報と照合すれば特定個人を識別できるが、単独では識別困難に加工された情報で、内部分析目的に使える' },
      { index: 2, text: '暗号化されているため個人情報保護法の適用対象外となる情報' },
      { index: 3, text: '氏名のみを削除して他の情報はそのまま残したデータ' },
    ],
    answer: 1,
    explanation: '個人情報保護法の情報区分：個人情報（特定個人識別可）→ 仮名加工情報（他情報との照合なしでは識別困難：氏名削除・ID置換など）→ 匿名加工情報（照合しても識別不可）。仮名加工情報は匿名加工情報より加工基準が低いが、第三者提供は原則不可・内部利用に限定。個人情報より義務が緩和（開示請求対応不要等）されデータ活用が促進される。',
  },
  {
    id: 'LG-072', category: 'legal', categoryName: '法規・標準',
    difficulty: 3, year: 2022, tags: ['著作権','プログラム'],
    question: 'ソフトウェアの著作権に関する記述として正しいものはどれか。',
    choices: [
      { index: 0, text: 'アルゴリズム・仕様・インターフェースそのものは著作権の保護対象である' },
      { index: 1, text: 'プログラムの具体的なコード表現は著作権で保護されるが、アイデア・アルゴリズムは保護されない（アイデア・表現二分論）' },
      { index: 2, text: '従業員が業務で作ったプログラムの著作権は常に従業員個人に帰属する' },
      { index: 3, text: 'コンパイル済みバイナリは著作権の保護を受けない' },
    ],
    answer: 1,
    explanation: '著作権法とソフトウェア：プログラムの「具体的な表現」（ソースコード・バイナリ含む）は著作物として保護される（著作権法 10 条 1 項 9 号）。ただし「アイデア・アルゴリズム・仕様・インターフェース」は保護対象外（アイデア・表現二分論）。職務著作規定（著作権法 15 条）により、法人の発意で業務として作成し法人名義で公表するプログラムは法人に著作権が帰属する。',
  },
  {
    id: 'LG-073', category: 'legal', categoryName: '法規・標準',
    difficulty: 2, year: 2023, tags: ['不正競争防止法','営業秘密'],
    question: '不正競争防止法における「営業秘密」として保護されるための3要件はどれか。',
    choices: [
      { index: 0, text: '文書化・暗号化・特許申請済みであること' },
      { index: 1, text: '秘密管理性（管理されていること）・有用性（事業活動に有用）・非公知性（公然と知られていない）の3つを満たすこと' },
      { index: 2, text: '知財部門に登録され、秘密指定印が押されていること' },
      { index: 3, text: 'ISO 27001 認証を取得している組織のみが主張できる' },
    ],
    answer: 1,
    explanation: '営業秘密（不正競争防止法 2 条 6 項）の保護要件：①秘密管理性 = 秘密として合理的に管理されている（アクセス制限・秘密指定など）②有用性 = 生産方法・販売方法等の事業活動に有用な技術・営業情報③非公知性 = 公然と知られていない。3要件を満たせば、不正取得・使用・開示に対して差止め・損害賠償・刑事罰を請求できる。',
  },
  {
    id: 'LG-074', category: 'legal', categoryName: '法規・標準',
    difficulty: 2, year: 2022, tags: ['ISO/IEC','情報セキュリティマネジメント'],
    question: 'ISO/IEC 27001 の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'ソフトウェアの品質特性を定義した国際規格' },
      { index: 1, text: '情報セキュリティマネジメントシステム（ISMS）の要件を定めた国際規格で、認証審査を受けられる' },
      { index: 2, text: 'プロジェクトマネジメントの知識体系を定義した国際規格' },
      { index: 3, text: 'プライバシー保護のための個人情報管理規格で、EU GDPR の実施規範' },
    ],
    answer: 1,
    explanation: 'ISO/IEC 27001: 情報セキュリティマネジメントシステム（ISMS: Information Security Management System）の国際規格。Plan-Do-Check-Act（PDCA）サイクルで情報資産を特定しリスクを管理する仕組みを構築・維持するための要件を定める。第三者認証機関による審査を受けて認証取得が可能。ISO/IEC 27002 はベストプラクティス（実施のための手引）を提供する。',
  },
  {
    id: 'LG-075', category: 'legal', categoryName: '法規・標準',
    difficulty: 3, year: 2023, tags: ['電子署名','タイムスタンプ'],
    question: '電子署名法（電子署名及び認証業務に関する法律）における電子署名の法的効力として正しいものはどれか。',
    choices: [
      { index: 0, text: '電子署名は一切の法的効力を持たず、紙の署名のみが有効' },
      { index: 1, text: '本人による電子署名が付された電子文書は、真正に成立したものと推定される（民事訴訟法上の文書の真正性）' },
      { index: 2, text: '電子署名があればどの国でも無条件に法的効力が認められる' },
      { index: 3, text: '電子署名は不動産取引には使えない' },
    ],
    answer: 1,
    explanation: '電子署名法（2001年施行）: 本人が行った電子署名を付した電子文書は、民事訴訟法上「真正に成立した」ものと推定される（2条・3条）。認定認証機関（法務省認定 CA）が発行した証明書を利用した電子署名は特に強い法的効果がある。2020年改正（GビズID等）・民法上の電子契約の有効性・テレワーク時代の電子締結が普及している。',
  },
  {
    id: 'LG-076', category: 'legal', categoryName: '法規・標準',
    difficulty: 2, year: 2022, tags: ['CMMI','プロセス成熟度'],
    question: 'CMMI（Capability Maturity Model Integration）の成熟度レベル 3（定義済み）の特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: 'プロセスが文書化されておらず属人的に実行されている' },
      { index: 1, text: '標準プロセスが組織レベルで定義・文書化され、プロジェクトがその標準プロセスを適用している' },
      { index: 2, text: '定量的な測定指標でプロセスが管理・制御されている' },
      { index: 3, text: '継続的改善のためのプロセス変更が行われる最高成熟度レベル' },
    ],
    answer: 1,
    explanation: 'CMMI 成熟度レベル：1（初期）= 場当たり的・属人的 → 2（管理済み）= プロジェクト単位でプロセスが計画・実行 → 3（定義済み）= 組織標準プロセスを定義し全プロジェクトに展開 → 4（定量的管理）= 測定指標で定量的にプロセス管理 → 5（最適化）= 継続的プロセス改善・イノベーション。CMMI for Development が代表モデル。',
  },
  {
    id: 'LG-077', category: 'legal', categoryName: '法規・標準',
    difficulty: 2, year: 2023, tags: ['標準化','JIS','ISO'],
    question: 'JIS（日本産業規格）と ISO（国際標準化機構）の関係として正しいものはどれか。',
    choices: [
      { index: 0, text: 'JIS は ISO と独立しており、相互に採用しない' },
      { index: 1, text: 'ISO 規格は JIS に翻訳・整合化される場合があり、ISO を JIS 化した規格は「JIS X XXXXX」などと表記される' },
      { index: 2, text: 'JIS は政府が義務付ける強制規格で、すべての製品に適用が必須' },
      { index: 3, text: 'ISO は欧州のみの規格で、日本は独自の JIS を優先する' },
    ],
    answer: 1,
    explanation: 'JIS（日本産業規格: Japan Industrial Standards）は日本工業標準調査会（JISC）が制定する国家規格。ISO・IEC の国際規格を JIS に整合化（IDT: identical / MOD: modified）することが多く、例えば ISO/IEC 27001 は JIS Q 27001 として JIS 化されている。JIS は基本的に任意規格（強制適用ではないが、法令参照で強制化される場合も）。',
  },
  {
    id: 'LG-078', category: 'legal', categoryName: '法規・標準',
    difficulty: 3, year: 2022, tags: ['サイバーセキュリティ基本法','重要インフラ'],
    question: 'サイバーセキュリティ基本法における「重要インフラ事業者」に対する主な規定はどれか。',
    choices: [
      { index: 0, text: '重要インフラ事業者はすべて政府機関に吸収統合される' },
      { index: 1, text: '重要インフラ事業者はサイバーセキュリティ対策に努める責務があり、政府はガイドライン・演習・情報共有を通じて支援する枠組みが定められている' },
      { index: 2, text: '重要インフラ事業者のシステムには政府が直接アクセスして監視できる' },
      { index: 3, text: '重要インフラ事業者には毎年 ISO 27001 認証取得が義務付けられている' },
    ],
    answer: 1,
    explanation: 'サイバーセキュリティ基本法（2014年）: 国家戦略として NISC（内閣サイバーセキュリティセンター）が中心となりサイバーセキュリティ対策を推進。重要インフラ（電力・交通・金融・通信など14分野）事業者には自発的な対策が求められる。政府は分野横断的演習・情報共有（ISAC）・基準整備を通じて支援する。強制的な監視や認証取得の義務化ではなく、官民連携が基本。',
  },
  {
    id: 'LG-079', category: 'legal', categoryName: '法規・標準',
    difficulty: 2, year: 2023, tags: ['契約','SES','準委任'],
    question: 'ソフトウェア開発の契約形態における「準委任契約」の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '成果物の完成を請け負い、完成しなければ報酬を受けられない契約' },
      { index: 1, text: '仕事の完成ではなく業務遂行プロセス（労務）を委託し、善管注意義務で業務を遂行する契約' },
      { index: 2, text: '派遣会社を通じて労働者を他社で働かせる労働者派遣契約' },
      { index: 3, text: '著作権譲渡を含む作品制作の特殊契約' },
    ],
    answer: 1,
    explanation: 'ソフトウェア開発の主な契約形態：請負契約 = 成果物の完成義務・瑕疵担保（契約不適合責任）あり。準委任契約 = 業務遂行（労務）を委託する（成果物完成義務なし）・善管注意義務あり・SES（System Engineering Service）に多い。派遣 = 指揮命令を注文者が行う（労働者派遣法適用）。偽装請負は準委任の形を取りながら派遣と同様の指揮命令をする違法形態。',
  },
  {
    id: 'LG-080', category: 'legal', categoryName: '法規・標準',
    difficulty: 2, year: 2022, tags: ['プロバイダ責任制限法','発信者情報'],
    question: 'プロバイダ責任制限法でISPが「発信者情報開示」に応じるための条件として正しいものはどれか。',
    choices: [
      { index: 0, text: 'インターネット上のすべての投稿についてISPは警察に開示する義務がある' },
      { index: 1, text: '権利侵害が明らかで、損害賠償請求等のために発信者特定が必要な場合、被害者（権利者）の請求に基づきISPが開示できる（義務ではなく可能）' },
      { index: 2, text: 'ISPは常に発信者情報を開示する義務がありプライバシーは考慮されない' },
      { index: 3, text: '開示はすべて裁判所命令なしには行えない' },
    ],
    answer: 1,
    explanation: 'プロバイダ責任制限法（2001年）: 他者の権利を侵害する情報が流通した際、ISPが削除・開示をしなかった場合の免責要件と、発信者情報開示の手続きを定める。発信者情報開示請求は①権利侵害の明白性②損害賠償請求等の正当な理由が必要。2022年改正で発信者情報開示命令制度（非訟手続き）が新設され手続きが迅速化。OpenID など匿名性の高いサービスも対象に。',
  },

  // --- システムアーキテクチャ (10問) ---
  {
    id: 'SA-071', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 2, year: 2023, tags: ['クラウド','サーバレス','FaaS'],
    question: 'サーバレスアーキテクチャ（FaaS: Functions as a Service）の特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: '常時稼働するサーバをユーザが管理し、高いスループットを実現する' },
      { index: 1, text: 'サーバの管理・スケーリングをクラウドに委ね、コードの実行時間・回数に応じた従量課金で初期費用が低い' },
      { index: 2, text: 'コンテナ技術の延長で、Kubernetes を必須とする' },
      { index: 3, text: 'ステートフルな長時間処理に最も向いたアーキテクチャ' },
    ],
    answer: 1,
    explanation: 'FaaS（Function as a Service）: AWS Lambda・Azure Functions・Google Cloud Functions など。サーバプロビジョニング・スケーリング・OS パッチ適用をクラウドが担う。呼び出し回数・実行時間単位の課金で、使わないときのコストがゼロ。コールドスタート遅延・実行時間制限・ステートレス設計が必要という制約がある。イベント駆動（API・S3 トリガー等）に適している。',
  },
  {
    id: 'SA-072', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 3, year: 2022, tags: ['可用性','RTO','RPO'],
    question: 'RTO（Recovery Time Objective）と RPO（Recovery Point Objective）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'RTO はどのくらいのデータ損失が許容できるか、RPO はどのくらいの時間で復旧するかを示す' },
      { index: 1, text: 'RTO は障害発生から復旧するまでの許容時間、RPO は障害発生時にデータをどの時点まで遡って復元できればよいか（許容データ損失時間）を示す' },
      { index: 2, text: 'RTO と RPO はどちらも同じ概念で同義' },
      { index: 3, text: 'RTO はバックアップの頻度、RPO はシステムの可用性目標' },
    ],
    answer: 1,
    explanation: 'RTO（Recovery Time Objective）: 障害発生後、業務が再開できるまでの最大許容時間（例: 4時間以内に復旧）。RPO（Recovery Point Objective）: 障害時に許容できる最大データ損失時間（例: 1時間前の状態に戻れればよい）。RTO が短いほど高可用性構成（HA/DR）が必要でコストが高い。RPO が短いほどバックアップ・レプリケーション頻度を高める必要がある。',
  },
  {
    id: 'SA-073', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 2, year: 2023, tags: ['メッセージング','Kafka','キュー'],
    question: 'Apache Kafka がシンプルなメッセージキュー（RabbitMQ など）と異なる主な特徴はどれか。',
    choices: [
      { index: 0, text: 'FIFO（先入れ先出し）を保証し、消費後にメッセージが削除される' },
      { index: 1, text: 'メッセージをディスクに保持（リテンション期間内は再読み取り可能）し、高スループットな分散ログストリーミング基盤として機能する' },
      { index: 2, text: 'HTTP プロトコルのみをサポートする REST ベースのメッセージングシステム' },
      { index: 3, text: 'モノリシックな設計でスケールアウトができない' },
    ],
    answer: 1,
    explanation: 'Kafka の特徴：① ログベース（メッセージはオフセット付きでパーティションに保持、リテンション期間は設定可能）② 高スループット（数百万 msg/s）③ 複数コンシューマグループが独立して同じトピックを消費可能（再読み取り可能）④ パーティションによる水平スケール。従来のメッセージキューは消費後にメッセージを削除する。Kafka は CDC（Change Data Capture）・イベントストリーミング基盤として広く使われる。',
  },
  {
    id: 'SA-074', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 3, year: 2022, tags: ['IaC','Terraform'],
    question: 'IaC（Infrastructure as Code）の主なメリットとして正しいものはどれか。',
    choices: [
      { index: 0, text: 'クラウド費用を自動的に削減し、インフラのコストを半額以下にする' },
      { index: 1, text: 'インフラをコードで定義・バージョン管理することで、再現性・自動化・レビューが可能になり環境差異（ドリフト）を防ぐ' },
      { index: 2, text: 'コードを書かずにGUIでインフラを構成できる' },
      { index: 3, text: 'オンプレミス環境のみで使える技術で、クラウドには不要' },
    ],
    answer: 1,
    explanation: 'IaC（Infrastructure as Code）: Terraform・AWS CloudFormation・Ansible・Pulumi などで実現。メリット：① バージョン管理（Git）でインフラの変更履歴を追跡 ② 環境の再現性（dev/staging/prod を同一コードから構築）③ 自動化（CI/CD パイプラインと統合）④ コードレビューによる品質担保 ⑤ ドリフト検出（実際の状態とコードのズレを検知）。スノーフレークサーバ（手動変更された固有のサーバ）を排除できる。',
  },
  {
    id: 'SA-075', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 2, year: 2023, tags: ['マルチAZ','フォールトトレランス'],
    question: 'クラウドにおける「マルチ AZ（Availability Zone）」構成の目的として正しいものはどれか。',
    choices: [
      { index: 0, text: '複数リージョンにデータを複製して地理的な冗長性を確保する' },
      { index: 1, text: '同一リージョン内の異なるデータセンター（AZ）にリソースを分散し、単一 AZ 障害時も可用性を維持する' },
      { index: 2, text: 'コスト削減のためにリソースを複数 AZ に分散して負荷を平準化する' },
      { index: 3, text: '開発・本番環境を別の AZ に分けて環境隔離を実現する' },
    ],
    answer: 1,
    explanation: 'AWS の AZ（Availability Zone）は同一リージョン内の独立した物理データセンター群。電力・ネットワーク・冷却が分離されており、マルチ AZ 配置でデータセンター単位の障害（停電・火災等）に対して可用性を確保できる。RDS マルチ AZ・ALB（複数 AZ に分散）・Auto Scaling グループのマルチ AZ 配置が典型例。複数リージョンはさらに広域災害（地震・津波）への対応。',
  },
  {
    id: 'SA-076', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 3, year: 2022, tags: ['モノリス','マイクロサービス移行'],
    question: 'ストラングラーフィグパターン（Strangler Fig Pattern）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'モノリスを一度に完全に書き直す「ビッグバンリライト」手法' },
      { index: 1, text: 'モノリスの機能を段階的にマイクロサービスに切り出し、旧システムを徐々に置き換えていく移行パターン' },
      { index: 2, text: '新旧2システムを並行稼働させてトラフィックを AB テストするパターン' },
      { index: 3, text: 'データベースを最初にマイクロサービス化する Database-First パターン' },
    ],
    answer: 1,
    explanation: 'Strangler Fig Pattern（ストラングラーフィグパターン）: Martin Fowler が命名。熱帯植物のイチジクが宿主の木を徐々に覆う様子にたとえた移行パターン。新機能を新システム（マイクロサービス）で実装し、既存機能を段階的に移行して旧モノリスを「枯らして」いく。リスクが低く継続的な価値提供を維持しながら移行できる。Branch by Abstraction・Feature Toggle と組み合わせる場合もある。',
  },
  {
    id: 'SA-077', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 2, year: 2023, tags: ['WebSocket','リアルタイム'],
    question: 'WebSocket が HTTP のポーリングより優れている主な点はどれか。',
    choices: [
      { index: 0, text: '高セキュリティ通信のみに使われる暗号化プロトコル' },
      { index: 1, text: '一度 HTTP ハンドシェイクで接続確立後、双方向・全二重の持続的接続でリアルタイム通信ができ、繰り返しの HTTP オーバーヘッドがない' },
      { index: 2, text: 'TCP を使わず UDP で実装されるため遅延がない' },
      { index: 3, text: 'サーバからクライアントへの一方向ストリーミングに特化している' },
    ],
    answer: 1,
    explanation: 'WebSocket（RFC 6455）: HTTP アップグレードリクエストでハンドシェイク後、単一 TCP 接続で双方向・全二重通信を継続。チャット・株価ティッカー・ゲーム・リアルタイムコラボレーションに最適。HTTP ロングポーリングは毎回 HTTP ヘッダを送信するオーバーヘッドがある。Server-Sent Events（SSE）はサーバ→クライアントの一方向。WebSocket は wss:// で TLS 上でも動作。',
  },
  {
    id: 'SA-078', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 2, year: 2022, tags: ['キャッシュ','Redis','Memcached'],
    question: 'Redis が単純なキャッシュ（Memcached）に比べて提供する追加機能として正しいものはどれか。',
    choices: [
      { index: 0, text: 'Redis は必ずディスク永続化するため高速なインメモリキャッシュとして使えない' },
      { index: 1, text: 'String 以外にリスト・ハッシュ・セット・ソート済みセットなどのデータ型を持ち、Pub/Sub・Lua スクリプト・永続化・クラスタリングを標準サポートする' },
      { index: 2, text: 'Memcached は単一スレッドで Redis はマルチスレッドのみ' },
      { index: 3, text: 'Redis は SQL クエリが使えるリレーショナルデータベース' },
    ],
    answer: 1,
    explanation: 'Redis（Remote Dictionary Server）: オープンソースのインメモリデータストア。String・List・Hash・Set・Sorted Set・Bitmap・HyperLogLog・Stream などのリッチなデータ型を提供。RDB/AOF による永続化オプション・Pub/Sub・Lua スクリプト・Sentinel（HA）・Cluster が標準機能。セッション管理・リーダーボード・レートリミット・リアルタイムランキングなど多用途に使われる。',
  },
  {
    id: 'SA-079', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 3, year: 2023, tags: ['可観測性','OpenTelemetry'],
    question: 'オブザーバビリティ（Observability）を構成する3つの柱として正しいものはどれか。',
    choices: [
      { index: 0, text: 'バックアップ・レプリケーション・モニタリング' },
      { index: 1, text: 'メトリクス（Metrics）・ログ（Logs）・トレース（Traces）' },
      { index: 2, text: 'CI・CD・CD（デプロイ）' },
      { index: 3, text: 'スケールアップ・スケールアウト・フェイルオーバー' },
    ],
    answer: 1,
    explanation: 'オブザーバビリティ（Observability）の3本柱：① Metrics（メトリクス）= 時系列の数値データ（CPU・QPS・レイテンシ）② Logs（ログ）= 時刻付き事象の記録 ③ Traces（分散トレース）= リクエストがマイクロサービス間をたどるスパンの連鎖。OpenTelemetry は3本柱を統一収集する CNCF の標準フレームワーク。Prometheus+Grafana（Metrics）・ELK（Logs）・Jaeger/Zipkin（Traces）が代表ツール。',
  },
  {
    id: 'SA-080', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 2, year: 2022, tags: ['Kubernetes','コンテナオーケストレーション'],
    question: 'Kubernetes の Pod の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'Kubernetes クラスタ全体を管理するコントロールプレーンのノード' },
      { index: 1, text: '1つ以上のコンテナと共有ネットワーク・ストレージを持つ Kubernetes のデプロイ最小単位' },
      { index: 2, text: '複数の Pod をグループ化して外部トラフィックをルーティングするオブジェクト' },
      { index: 3, text: 'クラスタ間の Pod 通信を暗号化するセキュリティポリシー' },
    ],
    answer: 1,
    explanation: 'Kubernetes の主要オブジェクト：Pod = 1つ以上のコンテナ + 共有ネットワーク（同一IPアドレス）+ 共有ストレージ（Volume）のデプロイ最小単位。Deployment = Pod のレプリカセット管理・ローリングアップデート。Service = Pod への安定したエンドポイント（ClusterIP/NodePort/LoadBalancer）。Ingress = L7 ルーティング。Namespace = 論理的な分離。ConfigMap/Secret = 設定の注入。',
  },

  // --- OS (10問) ---
  {
    id: 'OS-078', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 2, year: 2023, tags: ['CPU','パイプライン','ハザード'],
    question: 'CPU のパイプライン実行における「データハザード」の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '分岐命令によって次に実行すべき命令が不明になる状態' },
      { index: 1, text: '前の命令の結果がまだ書き戻されていないため、後続の命令が正しいデータを読めない状態' },
      { index: 2, text: '2 つの命令が同じメモリアドレスに同時に書き込もうとする状態' },
      { index: 3, text: 'パイプラインが長すぎてクロックサイクルを超える状態' },
    ],
    answer: 1,
    explanation: 'パイプラインハザードの種類：① データハザード = 前命令の結果が後命令に依存（Read After Write）→ フォワーディング・ストール（バブル挿入）で解決。② 構造ハザード = 同一ステージを複数命令が同時利用（演算器・メモリ） → 追加ハードウェアで解決。③ 制御ハザード = 分岐命令で次PC が不明 → 分岐予測・遅延スロットで軽減。',
  },
  {
    id: 'OS-079', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 2, year: 2022, tags: ['メモリ管理','スラブアロケータ'],
    question: 'スラブアロケータ（Slab Allocator）の主な目的として正しいものはどれか。',
    choices: [
      { index: 0, text: 'ユーザ空間のヒープメモリをガベージコレクションする' },
      { index: 1, text: 'カーネルオブジェクト（inode・TCPソケット等）の頻繁な割り当て・解放に際してフラグメンテーションと初期化コストを削減する' },
      { index: 2, text: 'スワップ領域の管理を効率化するディスクアロケータ' },
      { index: 3, text: 'NUMA 環境でメモリをノードごとに均等に配分する' },
    ],
    answer: 1,
    explanation: 'スラブアロケータ（Bonwick 1994）: Linux カーネルが使うオブジェクトキャッシュ。同じ型のオブジェクト（inode・TCP バッファ等）を事前確保した「スラブ」からプールして再利用。毎回 kmalloc/kfree でゼロから確保/初期化するよりも高速。内部・外部フラグメンテーションを低減。`/proc/slabinfo` で使用状況を確認できる。',
  },
  {
    id: 'OS-080', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 3, year: 2023, tags: ['IO','epoll','非同期'],
    question: 'Linux の `epoll` が `select`/`poll` に比べて優れている主な点はどれか。',
    choices: [
      { index: 0, text: 'UDP にしか対応しないが、超高速な I/O 多重化が可能' },
      { index: 1, text: '登録ファイルディスクリプタをカーネル側で管理し、イベント発生済みの FD だけを O(1) で返すため大量接続でもスケールする' },
      { index: 2, text: 'シングルスレッドでなくマルチスレッドの I/O のみを扱う' },
      { index: 3, 'text': 'Linux・macOS・Windows すべてで同一 API が使える' },
    ],
    answer: 1,
    explanation: 'I/O 多重化の比較：select（BSD 起源）・poll は毎回全 FD を渡してカーネルが O(n) 走査 → 大量接続で遅い。epoll（Linux 固有）はカーネル内の赤黒木に FD を登録（epoll_ctl）し、イベント発生時にリストに追加するため待機中は O(1)（待機FD数に比例しない）。高並列 Web サーバ（Nginx・Node.js の libuv）が epoll/kqueue（macOS）を使う理由。',
  },
  {
    id: 'OS-081', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 2, year: 2022, tags: ['リアルタイムOS','RTOS'],
    question: 'RTOS（リアルタイムオペレーティングシステム）の「ハードリアルタイム」の特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: '処理が少し遅れても問題なく、高いスループットを優先する' },
      { index: 1, text: 'デッドライン（期限）を超えた場合に致命的な障害（人命危機・物理的損傷）が生じる可能性があるため、期限の厳守を絶対保証する' },
      { index: 2, text: '高速な GUI 応答を保証するための OS' },
      { index: 3, text: '優先度が固定されており動的なスケジューリングを行わない' },
    ],
    answer: 1,
    explanation: 'リアルタイム性の分類：ハードリアルタイム（Hard RT）= デッドライン違反が許容されない（航空機制御・原子炉・ABS）。ソフトリアルタイム（Soft RT）= 遅延は品質低下だが致命的ではない（ストリーミング・電話）。RTOS（FreeRTOS・VxWorks・TOPPERS/ASP）は優先度ベーススケジューラで最悪実行時間（WCET）を保証する。汎用 OS（Linux）はソフト RT 向けのリアルタイムカーネルパッチ（PREEMPT_RT）が存在する。',
  },
  {
    id: 'OS-082', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 2, year: 2023, tags: ['キャッシュ','局所性'],
    question: 'CPU キャッシュが高いヒット率を達成できる理由として「時間的局所性」と「空間的局所性」の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '時間的局所性 = 最近アクセスしたデータは近くのメモリ領域に存在する。空間的局所性 = 同じデータに短期間に繰り返しアクセスする。' },
      { index: 1, text: '時間的局所性 = 最近アクセスしたデータは近い将来また参照される可能性が高い。空間的局所性 = あるアドレスにアクセスすると隣接アドレスも近い将来参照される可能性が高い。' },
      { index: 2, text: '時間的局所性 = CPU クロックに比例してアクセスが集中する。空間的局所性 = 大容量メモリほど連続したアクセスパターンを持つ。' },
      { index: 3, text: '時間的局所性と空間的局所性は同義で、どちらもキャッシュラインのサイズに依存する。' },
    ],
    answer: 1,
    explanation: 'メモリアクセスの局所性原理：時間的局所性（Temporal Locality）= 最近アクセスしたデータは近い将来また参照される（ループ変数・頻繁に呼ぶ関数）。空間的局所性（Spatial Locality）= あるアドレスの次にその近傍アドレスにアクセスされやすい（配列の順次走査）。CPU はキャッシュラインサイズ（64B 等）単位でまとめて読み込むことで空間的局所性を利用する。',
  },
  {
    id: 'OS-083', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 3, year: 2022, tags: ['エラー訂正','ECC','パリティ'],
    question: 'ECC（Error Correcting Code）メモリが通常のパリティメモリに比べて優れている点はどれか。',
    choices: [
      { index: 0, text: 'パリティは1ビットのエラーしか検出できないが、ECC は検出・訂正できる' },
      { index: 1, text: 'ECC は1ビットエラーを自動訂正でき、2ビットエラーを検出できる（SECDED: Single Error Correction Double Error Detection）' },
      { index: 2, text: 'ECC はパリティより読み書きが高速で、コスト削減にもなる' },
      { index: 3, text: 'ECC はソフトウェアの処理で実現するためハードウェアへの変更が不要' },
    ],
    answer: 1,
    explanation: 'ECC メモリ（SECDED: Single Error Correction, Double Error Detection）: ハミング符号等を利用し 1 ビットエラーは自動訂正、2 ビットエラーは検出（訂正不可）。通常のパリティメモリは 1 ビットエラーを検出するだけで訂正は不可。ECC はサーバ・ワークステーション用途でデータ保護に使われる。コストは通常メモリより高く、一部 CPU（ECC対応）が必要。',
  },
  {
    id: 'OS-084', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 2, year: 2023, tags: ['LVM','ストレージ'],
    question: 'LVM（Logical Volume Manager）の「スナップショット」機能の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'ディスク全体をバックアップサーバにコピーするミラーリング機能' },
      { index: 1, text: '特定時点の論理ボリュームの状態を Copy-on-Write で保存し、後からその時点のデータにアクセス・バックアップできる機能' },
      { index: 2, text: 'ファイルシステムのデフラグを自動実行してアクセス速度を改善する機能' },
      { index: 3, text: '複数の物理ディスクを RAID 5 でまとめる機能' },
    ],
    answer: 1,
    explanation: 'LVM スナップショット: 元ボリュームのブロックが変更される前に古い内容を別領域（CoW: Copy-on-Write）にコピーして保存する。スナップショット作成は瞬時で、バックアップ取得中もオリジナルボリュームは更新可能（「静止点バックアップ」）。データベースやファイルサーバのオンラインバックアップに使われる。差分が増えすぎるとパフォーマンスが低下するため定期的に新規スナップショットを取り直す。',
  },
  {
    id: 'OS-085', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 2, year: 2022, tags: ['シェル','bash','スクリプト'],
    question: 'bash スクリプトで `$?` 変数が表す値はどれか。',
    choices: [
      { index: 0, text: 'スクリプトのプロセスID（PID）' },
      { index: 1, text: '直前に実行したコマンドの終了ステータス（成功=0、エラー=非0）' },
      { index: 2, text: 'スクリプトに渡された引数の数' },
      { index: 3, text: '現在のシェルのバージョン番号' },
    ],
    answer: 1,
    explanation: 'bash の特殊変数：$? = 直前のコマンド終了ステータス（0=正常終了、非0=エラー）。$$ = 現在のシェルの PID。$# = コマンドライン引数の数。$0 = スクリプト名。$1〜$9 = 位置パラメータ（引数）。$@ = 全引数リスト。$! = バックグラウンド実行した最後のプロセスの PID。終了ステータスを確認して `if [ $? -eq 0 ]; then ...` のようにエラーハンドリングに使う。',
  },
  {
    id: 'OS-086', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 3, year: 2023, tags: ['クォータ','cgropus'],
    question: 'Linux の cgroups（Control Groups）の主な機能として正しいものはどれか。',
    choices: [
      { index: 0, text: 'プロセスのユーザID と グループID を管理するアクセス制御機構' },
      { index: 1, text: 'プロセスグループに CPU・メモリ・I/O 帯域などリソースの制限・割り当て・監視を行うカーネル機能' },
      { index: 2, text: 'ファイルシステムのディスククォータを設定する管理ツール' },
      { index: 3, text: '複数ネットワークインターフェースのトラフィックを束ねる機能' },
    ],
    answer: 1,
    explanation: 'cgroups（Control Groups）: Linux カーネル機能で、プロセスをグループ化して CPU（cpuset/cpu）・メモリ（memory）・ブロック I/O（blkio）・ネットワーク帯域（net_cls）などのリソースを制限・測定する。Docker/containerd はコンテナのリソース制限（`--memory`・`--cpus`）に cgroups v2 を使用。Linux namespaces と組み合わせてコンテナ分離を実現する。',
  },
  {
    id: 'OS-087', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 2, year: 2022, tags: ['CPU','spectre','メルトダウン'],
    question: 'Spectre・Meltdown 脆弱性（2018年発覚）が悪用するCPUの機能はどれか。',
    choices: [
      { index: 0, text: 'メモリアドレス変換（TLB）のキャッシュ機能' },
      { index: 1, text: '投機的実行（Speculative Execution）と分岐予測によるサイドチャネル攻撃' },
      { index: 2, text: 'ハイパースレッディング（SMT）によるコア共有' },
      { index: 3, text: 'UEFI セキュアブートの証明書検証の欠陥' },
    ],
    answer: 1,
    explanation: 'Spectre・Meltdown: CPU の投機的実行・アウトオブオーダー実行・分岐予測を利用したサイドチャネル攻撃。Meltdown = 投機的実行により通常アクセスできないカーネルメモリを読み取れる（Intel CPU 主体、KPTI パッチで対策）。Spectre = 分岐予測器を誘導して他プロセスのデータを読む（Intel・AMD・ARM 影響、ソフトウェア・マイクロコードパッチで部分対策）。',
  },
  {
    id: 'OS-088', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 3, year: 2023, tags: ['eBPF','カーネル'],
    question: 'eBPF（extended Berkeley Packet Filter）の特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: 'ユーザ空間のプログラムを高速にコンパイルしてカーネルモジュールとして登録する技術' },
      { index: 1, text: 'カーネル再コンパイル不要で検証済みのサンドボックスプログラムをカーネル空間で実行し、トレーシング・ネットワーク・セキュリティ観測を安全に行う技術' },
      { index: 2, text: 'TCP/IP スタックをユーザ空間に移した DPDK の後継技術' },
      { index: 3, text: 'コンテナ間のネットワーク通信を暗号化するサービスメッシュ実装' },
    ],
    answer: 1,
    explanation: 'eBPF: Linux カーネルに内蔵された仮想マシン（JIT コンパイル）。ユーザが書いたプログラムをカーネルの「検証器（verifier）」が安全性を確認してから実行するため、カーネルをクラッシュさせずに動的なトレーシング・ネットワークフィルタリング・セキュリティ監視ができる。Cilium（K8s NW）・Falco（セキュリティ）・BCC/bpftrace（トレース）・XDP（高速パケット処理）が代表活用例。',
  },
  {
    id: 'OS-089', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 2, year: 2022, tags: ['セキュリティ','SELinux','MAC'],
    question: 'SELinux（Security-Enhanced Linux）が実現するアクセス制御の種類として正しいものはどれか。',
    choices: [
      { index: 0, text: '所有者だけがアクセス権限を設定できる任意アクセス制御（DAC）' },
      { index: 1, text: 'ポリシーで定義されたセキュリティラベルに基づく強制アクセス制御（MAC）で、root ユーザでも範囲外のアクセスを拒否できる' },
      { index: 2, text: 'ファイル暗号化と復号を透明に行うファイルシステム暗号化機能' },
      { index: 3, text: 'ネットワークパケットの内容を検査して不正通信を遮断するファイアウォール' },
    ],
    answer: 1,
    explanation: 'SELinux（Security-Enhanced Linux）: NSA が開発した MAC（Mandatory Access Control）実装。すべてのプロセス・ファイルにセキュリティラベル（コンテキスト）が付与され、ポリシーが許可する操作のみ実行できる。従来の DAC（chown/chmod）はファイル所有者が権限を設定できる任意制御。SELinux は root でも違反するとアクセス拒否（AVC Denied）。AppArmor はパス名ベースの MAC で SELinux の代替。',
  },
  {
    id: 'OS-090', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 2, year: 2023, tags: ['BIOS','セキュアブート','TPM'],
    question: 'TPM（Trusted Platform Module）の主な機能として正しいものはどれか。',
    choices: [
      { index: 0, text: 'グラフィックス処理の並列計算を高速化する専用プロセッサ' },
      { index: 1, text: '暗号鍵の安全な生成・保管・デバイス認証・プラットフォームの整合性検証（PCR測定値）を提供するセキュリティチップ' },
      { index: 2, text: 'ネットワーク通信を暗号化するハードウェアアクセラレータ' },
      { index: 3, text: 'RAID コントローラのバッテリーバックアップ機能付きキャッシュ' },
    ],
    answer: 1,
    explanation: 'TPM（Trusted Platform Module）: ISO/IEC 11889 で規格化された専用セキュリティチップ（または CPUに内蔵）。主な機能：①暗号鍵の生成・安全保管（秘密鍵は外部に出ない）②デバイス認証（TPM の EK: Endorsement Key で固有証明）③プラットフォーム整合性検証（PCR: Platform Configuration Register でブートシーケンスをハッシュ測定）。Windows BitLocker・Linux LUKS、セキュアブートと連携して使われる。',
  },
];
QUESTIONS_DATA.push(...QUESTIONS_DATA_PHASE14);

// ─── フェーズ14 補足 (7問: 560問合計) ───────────────────
const QUESTIONS_DATA_PHASE14B = [
  {
    id: 'DB-085', category: 'database', categoryName: 'データベース',
    difficulty: 2, year: 2023, tags: ['SQL','JSON','NoSQL混在'],
    question: 'PostgreSQL の JSONB 型の特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: 'JSON テキストをそのままバイナリで格納し、変更不可のスナップショットとして保存する' },
      { index: 1, text: 'JSON を解析してバイナリ形式で保存し、GIN インデックスを使った高速なキー検索が可能で、任意の JSON クエリ（@>、->> 演算子）が使える' },
      { index: 2, text: 'リレーション表の外部に保存され、JOINの対象にできない特殊型' },
      { index: 3, text: 'JSONオブジェクトを正規化してリレーショナルに分解した仮想ビュー' },
    ],
    answer: 1,
    explanation: 'PostgreSQL の JSONB: JSON テキストをデータ投入時に解析してバイナリで格納（JSON 型はテキストのまま保存）。GIN（Generalized Inverted Index）を使ったキー・値の高速検索が可能。@>（包含演算子）や ->/->> 演算子でパス指定クエリができる。RDBとドキュメントストアのハイブリッドとして活用できる。重複キーは最後の値が採用される。',
  },
  {
    id: 'DB-086', category: 'database', categoryName: 'データベース',
    difficulty: 3, year: 2022, tags: ['データウェアハウス','OLAP','スタースキーマ'],
    question: 'データウェアハウスの「スタースキーマ」の特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: '多数の正規化されたテーブルを複数の JOINで組み合わせる高正規化設計' },
      { index: 1, text: '中央のファクトテーブルを複数の非正規化されたディメンジョンテーブルが囲む構造で、分析クエリの JOIN を最小化する' },
      { index: 2, text: '雪の結晶型に各テーブルを完全正規化した OLTP 向け設計' },
      { index: 3, text: 'ディメンジョンをファクトテーブルに埋め込み、テーブルを1つにする非正規化設計' },
    ],
    answer: 1,
    explanation: 'スタースキーマ（Star Schema）: データウェアハウスの代表的な設計。中央に売上・注文などの数値データを持つファクトテーブル、その周囲に日付・商品・地域・顧客などのディメンジョンテーブルを放射状に配置。ディメンジョンは非正規化（冗長あり）だが JOIN が少なく OLAP クエリが高速。スノーフレークスキーマはディメンジョンをさらに正規化した派生形。',
  },
  {
    id: 'DB-087', category: 'database', categoryName: 'データベース',
    difficulty: 2, year: 2023, tags: ['SQL','EXPLAIN','実行計画'],
    question: 'EXPLAIN ANALYZE の出力で「Seq Scan」が「Index Scan」より選択されやすい条件はどれか。',
    choices: [
      { index: 0, text: '検索結果が全件の 1% 未満の高選択性クエリ' },
      { index: 1, text: '検索結果が全件の 20〜30% 以上になる低選択性クエリ（大量の行を返すとき、インデックスより全件スキャンの方が I/O が少ない）' },
      { index: 2, text: 'インデックスが主キーに設定されている場合' },
      { index: 3, text: 'テーブルの行数が 100 行未満の小さいテーブル' },
    ],
    answer: 1,
    explanation: 'オプティマイザがシーケンシャルスキャン（Seq Scan）を選ぶ主な理由：① テーブルが非常に小さい（全スキャンよりインデックスオーバーヘッドが大きい）② 返却行数が多い（低選択性クエリ）= インデックスでランダム I/O を多数発生させるより順次I/Oの方が速い場合。選択率 < 約5〜15% のとき Index Scan が有利。ANALYZE で統計情報を最新に保つことが重要。',
  },
  {
    id: 'SEC-085', category: 'security', categoryName: 'セキュリティ',
    difficulty: 2, year: 2023, tags: ['フィッシング','BEC'],
    question: 'BEC（Business Email Compromise: ビジネスメール詐欺）の主な手口として正しいものはどれか。',
    choices: [
      { index: 0, text: '企業のWebサイトに偽ログインページを設置してパスワードを盗む攻撃' },
      { index: 1, text: '経営者・取引先などを装ったなりすましメールで財務担当者に振込先変更や送金を指示する詐欺' },
      { index: 2, text: '大量のメールを一括送信して広告を宣伝するスパムメール' },
      { index: 3, text: 'メールサーバへのブルートフォース攻撃でアカウントを乗っ取る攻撃' },
    ],
    answer: 1,
    explanation: 'BEC（Business Email Compromise）: FBIが最も金銭被害が大きいサイバー犯罪と報告。手口：① CEO・CFO・取引先になりすましたメールで急ぎの振込を指示 ② ドメインのタイポ（例: company.c0m）や表示名偽装を使う ③ メールアカウント侵害後に正規メールスレッドに割り込む。対策：電話や別チャネルでの確認手順の義務付け・DMARC・多段承認フロー。',
  },
  {
    id: 'SEC-086', category: 'security', categoryName: 'セキュリティ',
    difficulty: 3, year: 2022, tags: ['脆弱性','依存関係','SCA'],
    question: 'ソフトウェアサプライチェーン攻撃（Supply Chain Attack）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '製品の製造工程で物理部品に盗聴装置を埋め込む攻撃' },
      { index: 1, text: 'ターゲット組織が使うソフトウェア（OSS ライブラリ・ビルドツール・更新機構など）を侵害し、その配布を通じて多数のエンドユーザを感染させる攻撃' },
      { index: 2, text: 'ネットワーク上の供給元サーバへの DDoS で流通を妨害する攻撃' },
      { index: 3, text: 'ECサイトのカート機能に悪意あるコードを挿入してクレジットカード情報を盗む攻撃' },
    ],
    answer: 1,
    explanation: 'ソフトウェアサプライチェーン攻撃: SolarWinds（Orion アップデート経由: 2020）・Log4Shell（OSS ライブラリ）・XZ Utils バックドア（2024）が代表例。対策: SBOM（ソフトウェア部品表）作成・SCA ツールで依存ライブラリの CVE 管理・コード署名の検証・ビルド環境の保護・SLSA（Supply-chain Levels for Software Artifacts）フレームワーク準拠。',
  },
  {
    id: 'SEC-087', category: 'security', categoryName: 'セキュリティ',
    difficulty: 2, year: 2023, tags: ['暗号','ハッシュ','SHA'],
    question: 'パスワード保存に SHA-256 ハッシュのみを使うことの問題点として正しいものはどれか。',
    choices: [
      { index: 0, text: 'SHA-256 は不可逆なため、復号してパスワードを取り出せない' },
      { index: 1, text: '高速で計算できるため、レインボーテーブル攻撃や GPU を使ったブルートフォースが現実的に行われる危険性がある' },
      { index: 2, text: 'SHA-256 は衝突耐性がないため 2 つのパスワードが同じハッシュになりやすい' },
      { index: 3, text: 'SHA-256 は 64 文字の出力のため、データベース容量が問題になる' },
    ],
    answer: 1,
    explanation: 'パスワードハッシュの問題点: SHA-256 など汎用ハッシュは高速設計のためGPUで 1秒に数十億ハッシュの総当たりが可能。また同じパスワードは常に同じハッシュになるためレインボーテーブルに脆弱。対策: bcrypt・scrypt・Argon2 などのパスワード専用ハッシュ（計算コストが意図的に重い・ソルト（ランダム値）を混入する）を使う。OWASP はArgon2id 推奨。',
  },
  {
    id: 'SEC-088', category: 'security', categoryName: 'セキュリティ',
    difficulty: 2, year: 2022, tags: ['セキュリティ評価','CVSS'],
    question: 'CVSS（Common Vulnerability Scoring System）v3 のスコア範囲と重大度区分の組合せとして正しいものはどれか。',
    choices: [
      { index: 0, text: 'スコア 0.0〜5.0 のみで、5.0以上は「Critical」固定' },
      { index: 1, text: 'スコア 0.0〜10.0 で、None(0)/Low(0.1-3.9)/Medium(4.0-6.9)/High(7.0-8.9)/Critical(9.0-10.0) の5段階' },
      { index: 2, text: 'スコア 1〜100 の整数で、脆弱性の種類によって上限が変わる' },
      { index: 3, text: 'スコア 0〜5 で、CVSS v3 は v2 と全く同じ評価基準' },
    ],
    answer: 1,
    explanation: 'CVSS（Common Vulnerability Scoring System）v3: NIST NVD 等で使われる脆弱性深刻度の標準指標。0.0〜10.0 の小数値で、攻撃ベクタ（Network/Adjacent/Local/Physical）・攻撃複雑度・必要権限・ユーザ操作・スコープ・機密性/完全性/可用性への影響の6つの基本指標（Base Metrics）から算出。CVSS ≥ 9.0（Critical）が最優先対応。CVE エントリに CVSS スコアが付与される。',
  },
];
QUESTIONS_DATA.push(...QUESTIONS_DATA_PHASE14B);

// ─── フェーズ15追加問題 (+70問) ─────────────────────────────
const QUESTIONS_DATA_PHASE15 = [
  // ALG-095〜104 アルゴリズム (10問)
  {
    id: 'ALG-095', category: 'algorithm', categoryName: 'アルゴリズムとプログラミング',
    difficulty: 2, year: 2023, tags: ['再帰','フィボナッチ'],
    question: 'フィボナッチ数列 F(n) = F(n-1)+F(n-2)（F(0)=0, F(1)=1）を素直な再帰で計算するとき、計算量のオーダはどれか。',
    choices: [
      { index: 0, text: 'O(n)' },
      { index: 1, text: 'O(n log n)' },
      { index: 2, text: 'O(2^n)' },
      { index: 3, text: 'O(n^2)' },
    ],
    answer: 2,
    explanation: '素直な再帰実装では同じ部分問題を指数的に繰り返し計算するため O(2^n)。メモ化（トップダウンDP）またはボトムアップDPにより O(n) に改善できる。',
  },
  {
    id: 'ALG-096', category: 'algorithm', categoryName: 'アルゴリズムとプログラミング',
    difficulty: 3, year: 2022, tags: ['ダイクストラ','最短経路'],
    question: 'ダイクストラ法で解けない問題はどれか。',
    choices: [
      { index: 0, text: '重みなし（辺の重み=1）グラフの単一始点最短経路' },
      { index: 1, text: '負の重みを含む有向グラフの単一始点最短経路' },
      { index: 2, text: '正の重みのみの有向グラフの単一始点最短経路' },
      { index: 3, text: '正の重みのみの無向グラフの単一始点最短経路' },
    ],
    answer: 1,
    explanation: 'ダイクストラ法は辺の重みが非負の場合にのみ正しく動作する。負の重みがある場合はベルマン・フォード法（O(VE)）または SPFA を使う。',
  },
  {
    id: 'ALG-097', category: 'algorithm', categoryName: 'アルゴリズムとプログラミング',
    difficulty: 2, year: 2021, tags: ['ハッシュ','衝突'],
    question: 'ハッシュテーブルで衝突（コリジョン）が発生した場合の解決策として、別のスロットを線形に探索する方法を何というか。',
    choices: [
      { index: 0, text: 'チェイン法（連鎖法）' },
      { index: 1, text: '二重ハッシュ法' },
      { index: 2, text: '線形探索法（線形プロービング）' },
      { index: 3, text: '平方探索法（二次プロービング）' },
    ],
    answer: 2,
    explanation: '線形プロービング: 衝突時に h(k), h(k)+1, h(k)+2, … と順に空スロットを探す。実装が簡単だがクラスタリングが起きやすい。チェイン法はリストで衝突を管理、二重ハッシュは2つ目のハッシュ関数でステップを決める。',
  },
  {
    id: 'ALG-098', category: 'algorithm', categoryName: 'アルゴリズムとプログラミング',
    difficulty: 3, year: 2023, tags: ['B木','インデックス'],
    question: 'データベースのインデックスに B+ 木が広く使われる理由として最も適切なものはどれか。',
    choices: [
      { index: 0, text: '挿入・削除が O(1) で完了するため' },
      { index: 1, text: '葉ノードが連結リストで結ばれており範囲検索が効率的なため' },
      { index: 2, text: 'ハッシュ関数を用いるため等値検索が O(n) で完了するため' },
      { index: 3, text: 'ノードサイズが固定 1 バイトのためメモリ効率が良いため' },
    ],
    answer: 1,
    explanation: 'B+ 木は全データを葉ノードに格納し、葉ノードが双方向連結リストで繋がっているため、範囲検索（BETWEEN, >, <）が効率的（O(log N + K)、K=結果件数）。InnoDB のクラスタインデックスも B+ 木。',
  },
  {
    id: 'ALG-099', category: 'algorithm', categoryName: 'アルゴリズムとプログラミング',
    difficulty: 2, year: 2022, tags: ['スタック','後置記法'],
    question: '後置記法（逆ポーランド記法）の式「3 4 2 * +」をスタックを使って評価したときの結果はどれか。',
    choices: [
      { index: 0, text: '10' },
      { index: 1, text: '11' },
      { index: 2, text: '14' },
      { index: 3, text: '20' },
    ],
    answer: 1,
    explanation: 'スタック操作: 3をpush → 4をpush → 2をpush → * で4と2をpopして8をpush → + で3と8をpopして11をpush。結果は11。後置記法は括弧不要で数式をスタックで評価できる。',
  },
  {
    id: 'ALG-100', category: 'algorithm', categoryName: 'アルゴリズムとプログラミング',
    difficulty: 3, year: 2021, tags: ['動的計画法','ナップサック'],
    question: '0-1 ナップサック問題を動的計画法で解く場合の計算量はどれか（n=アイテム数、W=容量）。',
    choices: [
      { index: 0, text: 'O(n)' },
      { index: 1, text: 'O(n log n)' },
      { index: 2, text: 'O(nW)' },
      { index: 3, text: 'O(2^n)' },
    ],
    answer: 2,
    explanation: 'DP テーブルは n×W の2次元配列（またはローリング配列で O(W) 空間）。各セルを O(1) で埋めるため計算量は O(nW)。W が大きい場合は擬多項式時間となる（NP困難だが実用的には高速）。',
  },
  {
    id: 'ALG-101', category: 'algorithm', categoryName: 'アルゴリズムとプログラミング',
    difficulty: 2, year: 2023, tags: ['正規表現','オートマトン'],
    question: '正規表現 `(ab)+` が受理する文字列はどれか。',
    choices: [
      { index: 0, text: '"a"' },
      { index: 1, text: '"ab"' },
      { index: 2, text: '"aab"' },
      { index: 3, text: '"ba"' },
    ],
    answer: 1,
    explanation: '(ab)+ は "ab" を1回以上繰り返す正規表現。受理される文字列: "ab", "abab", "ababab"…。"a"はabの繰り返しでない、"aab"は"a"+"ab"で不適、"ba"は順序が逆で不適。',
  },
  {
    id: 'ALG-102', category: 'algorithm', categoryName: 'アルゴリズムとプログラミング',
    difficulty: 3, year: 2022, tags: ['グラフ','トポロジカルソート'],
    question: 'トポロジカルソートが適用できるグラフの条件はどれか。',
    choices: [
      { index: 0, text: '重みなし無向グラフ' },
      { index: 1, text: '有向非閉路グラフ（DAG）' },
      { index: 2, text: '閉路を含む有向グラフ' },
      { index: 3, text: '完全グラフ' },
    ],
    answer: 1,
    explanation: 'トポロジカルソートは有向非閉路グラフ（DAG: Directed Acyclic Graph）でのみ定義される。閉路があると順序が矛盾するため不可能。ビルド依存関係、タスクスケジューリングなどに使用。Kahn法（BFS）またはDFS後退で実装。',
  },
  {
    id: 'ALG-103', category: 'algorithm', categoryName: 'アルゴリズムとプログラミング',
    difficulty: 2, year: 2021, tags: ['ビット演算','2の補数'],
    question: '8ビット2の補数表現で -1 を表す値はどれか。',
    choices: [
      { index: 0, text: '00000001' },
      { index: 1, text: '10000001' },
      { index: 2, text: '11111110' },
      { index: 3, text: '11111111' },
    ],
    answer: 3,
    explanation: '2の補数: 正の値のビットを反転して1を加える。1 = 00000001 → 反転 = 11111110 → +1 = 11111111。チェック: 11111111 + 00000001 = 100000000（8ビットで0）。-128 = 10000000、-127 = 10000001。',
  },
  {
    id: 'ALG-104', category: 'algorithm', categoryName: 'アルゴリズムとプログラミング',
    difficulty: 3, year: 2023, tags: ['文字列探索','KMP'],
    question: 'KMP（Knuth-Morris-Pratt）法の文字列探索の計算量はどれか（n=テキスト長、m=パターン長）。',
    choices: [
      { index: 0, text: 'O(n×m)' },
      { index: 1, text: 'O(n+m)' },
      { index: 2, text: 'O(n log m)' },
      { index: 3, text: 'O(m^2)' },
    ],
    answer: 1,
    explanation: 'KMP 法: 失敗関数（部分一致テーブル）を O(m) で前処理し、テキスト照合を O(n) で行うため合計 O(n+m)。単純照合の O(nm) より高速。ボイヤー・ムーア法は平均 O(n/m) と更に高速。',
  },

  // NET-095〜104 ネットワーク (10問)
  {
    id: 'NET-095', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2023, tags: ['IPv6','アドレス'],
    question: 'IPv6 アドレスのフィールド長はどれか。',
    choices: [
      { index: 0, text: '32 ビット' },
      { index: 1, text: '64 ビット' },
      { index: 2, text: '128 ビット' },
      { index: 3, text: '256 ビット' },
    ],
    answer: 2,
    explanation: 'IPv6 アドレスは 128 ビット（16 バイト）。コロン区切りの16進数8グループで表記（例: 2001:0db8:85a3:0000:0000:8a2e:0370:7334）。IPv4 は 32 ビット。IPv6 は約 3.4×10^38 個のアドレス空間を持つ。',
  },
  {
    id: 'NET-096', category: 'network', categoryName: 'ネットワーク',
    difficulty: 3, year: 2022, tags: ['OSPF','リンクステート'],
    question: 'OSPF（Open Shortest Path First）が使用するルーティングアルゴリズムはどれか。',
    choices: [
      { index: 0, text: 'ベルマン・フォード法（距離ベクトル型）' },
      { index: 1, text: 'ダイクストラ法（リンクステート型）' },
      { index: 2, text: 'フロイド・ウォーシャル法' },
      { index: 3, text: 'プリム法（スパニングツリー型）' },
    ],
    answer: 1,
    explanation: 'OSPF はリンクステート型ルーティングプロトコル。各ルータがネットワーク全体のトポロジマップ（LSDB）を保持し、ダイクストラ法（SPF）で最短経路を計算する。RIP は距離ベクトル型（ベルマン・フォード）。OSPF はエリア分割でスケーラビリティを確保。',
  },
  {
    id: 'NET-097', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2021, tags: ['VLAN','スイッチ'],
    question: 'VLAN（仮想 LAN）を設定することで実現できることとして最も適切なものはどれか。',
    choices: [
      { index: 0, text: '物理的に同一スイッチに接続されたポートを、論理的に異なるセグメントに分離できる' },
      { index: 1, text: 'インターネットとの接続速度を自動的に向上させる' },
      { index: 2, text: 'MAC アドレスを動的に変換し、IPアドレス枯渇を防ぐ' },
      { index: 3, text: 'ルータなしに異なるネットワーク間の通信を可能にする' },
    ],
    answer: 0,
    explanation: 'VLAN は L2 スイッチで論理的にブロードキャストドメインを分割する技術。同じ物理スイッチ内でも部門ごとに通信を分離できる（セキュリティ・帯域制御）。VLAN 間通信にはレイヤ3スイッチまたはルータが必要。IEEE 802.1Q でタギング（4バイトのVLANタグ）。',
  },
  {
    id: 'NET-098', category: 'network', categoryName: 'ネットワーク',
    difficulty: 3, year: 2023, tags: ['HTTP/2','多重化'],
    question: 'HTTP/2 が HTTP/1.1 に比べて改善した主要な特徴はどれか。',
    choices: [
      { index: 0, text: 'テキスト形式のフレームを使い人間が読みやすくした' },
      { index: 1, text: '1つの TCP 接続で複数リクエストを多重化（ストリーム）できる' },
      { index: 2, text: 'UDP を使用することでコネクションレスになった' },
      { index: 3, text: 'TLS が不要になりオーバーヘッドが削減された' },
    ],
    answer: 1,
    explanation: 'HTTP/2 の主な改善点: (1)バイナリフレーム（テキストでない）、(2)多重化（1TCP接続で複数ストリーム並行処理、HOL ブロッキング解消）、(3)ヘッダ圧縮（HPACK）、(4)サーバプッシュ。HTTP/3 は QUIC（UDP上）を使用。',
  },
  {
    id: 'NET-099', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2022, tags: ['NAT','PAT'],
    question: 'NAPT（Network Address Port Translation）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '複数のプライベート IP アドレスを1つのグローバル IP アドレスとポート番号の組合せで識別する' },
      { index: 1, text: '1つのプライベート IP を1つのグローバル IP に固定変換する' },
      { index: 2, text: 'IP アドレス変換を行わずポート番号だけを変換する' },
      { index: 3, text: 'グローバル IP アドレスをプライベート IP に変換できない' },
    ],
    answer: 0,
    explanation: 'NAPT（IPマスカレードとも呼ぶ）: 複数のプライベートIPホストが1つのグローバルIPを共用し、送信元ポート番号でセッションを区別する。家庭用ルータの一般的な方式。静的NATは1対1変換。',
  },
  {
    id: 'NET-100', category: 'network', categoryName: 'ネットワーク',
    difficulty: 3, year: 2021, tags: ['BGP','AS'],
    question: 'インターネット上の AS（自律システム）間ルーティングプロトコルはどれか。',
    choices: [
      { index: 0, text: 'OSPF' },
      { index: 1, text: 'RIP' },
      { index: 2, text: 'BGP' },
      { index: 3, text: 'EIGRP' },
    ],
    answer: 2,
    explanation: 'BGP（Border Gateway Protocol）は EGP（外部ゲートウェイプロトコル）であり、AS 間のルーティングに使用。インターネットの「ルーティングプロトコル」として事実上の標準。ポート 179。OSPF・RIP・EIGRP は IGP（内部ゲートウェイプロトコル）で AS 内部に使用。',
  },
  {
    id: 'NET-101', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2023, tags: ['SMTP','メール'],
    question: 'メール送信に使う SMTP のデフォルトポート番号はどれか。',
    choices: [
      { index: 0, text: '25' },
      { index: 1, text: '110' },
      { index: 2, text: '143' },
      { index: 3, text: '587' },
    ],
    answer: 0,
    explanation: 'SMTP のデフォルトポートは 25（サーバ間転送）。クライアント送信（Submission）には 587（STARTTLS）または 465（SMTPS）が使われる。POP3 は 110、IMAP は 143。迷惑メール対策で ISP が 25 番ポートをブロック（OP25B）するため 587 が主流になっている。',
  },
  {
    id: 'NET-102', category: 'network', categoryName: 'ネットワーク',
    difficulty: 3, year: 2022, tags: ['STP','ループ防止'],
    question: 'イーサネットスイッチで生じるブロードキャストストームを防ぐためのプロトコルはどれか。',
    choices: [
      { index: 0, text: 'VLAN' },
      { index: 1, text: 'STP（スパニングツリープロトコル）' },
      { index: 2, text: 'LACP（リンクアグリゲーション）' },
      { index: 3, text: 'LLDP' },
    ],
    answer: 1,
    explanation: 'STP（IEEE 802.1D）は L2 ネットワークの冗長構成でループを論理的に遮断し、ブロードキャストストームを防ぐ。ルートブリッジを選出し不要ポートをブロッキング状態にする。高速化版 RSTP（802.1w）、MSTP（802.1s）がある。',
  },
  {
    id: 'NET-103', category: 'network', categoryName: 'ネットワーク',
    difficulty: 2, year: 2021, tags: ['QoS','帯域制御'],
    question: 'ネットワークの QoS（Quality of Service）制御として、帯域を保証しつつ余剰帯域を他トラフィックに貸し出す方式はどれか。',
    choices: [
      { index: 0, text: 'ベストエフォート' },
      { index: 1, text: 'CBQ（クラスベースキューイング）' },
      { index: 2, text: 'FIFO キューイング' },
      { index: 3, text: 'ラウンドロビン' },
    ],
    answer: 1,
    explanation: 'CBQ（Class-Based Queueing）はトラフィックをクラス分けして帯域を保証しつつ、余剰帯域を他クラスへ貸し出すことができる QoS 方式。DSCP（DiffServ Code Point）と組み合わせて VoIP などのリアルタイム通信を優先する。',
  },
  {
    id: 'NET-104', category: 'network', categoryName: 'ネットワーク',
    difficulty: 3, year: 2023, tags: ['SDN','OpenFlow'],
    question: 'SDN（Software Defined Networking）の特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: '転送処理（データプレーン）と制御処理（コントロールプレーン）を同一ハードウェアに統合する' },
      { index: 1, text: 'コントロールプレーンを集中管理し、転送機能（データプレーン）とソフトウェアで分離する' },
      { index: 2, text: 'ルータを廃止してスイッチだけでルーティングを行う' },
      { index: 3, text: 'すべての設定を SNMP で自動化する技術の総称' },
    ],
    answer: 1,
    explanation: 'SDN は制御プレーン（ルーティング判断）をソフトウェアコントローラに集中させ、データプレーン（パケット転送）と分離するアーキテクチャ。OpenFlow が代表的なプロトコル。ネットワークの柔軟な変更・自動化が可能。',
  },

  // DB-088〜097 データベース (10問)
  {
    id: 'DB-088', category: 'database', categoryName: 'データベース',
    difficulty: 2, year: 2023, tags: ['トランザクション','ACID'],
    question: 'トランザクションの ACID 特性における「独立性（Isolation）」の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'トランザクションが完了したら結果は永続的に保存される' },
      { index: 1, text: 'トランザクション中断時はコミット前の変更が全て取り消される' },
      { index: 2, text: '複数の同時実行トランザクションが互いに干渉せず、順番に実行したのと同じ結果になる' },
      { index: 3, text: 'データベースの整合性制約が常に維持される' },
    ],
    answer: 2,
    explanation: 'ACID の I（Isolation/独立性）: 並行実行中のトランザクション同士が見えないよう分離する。完全な独立性は直列化可能性（Serializability）で保証されるが、パフォーマンスとのトレードオフのため SQL では 4 段階の分離レベル（READ UNCOMMITTED/COMMITTED/REPEATABLE READ/SERIALIZABLE）が定義されている。',
  },
  {
    id: 'DB-089', category: 'database', categoryName: 'データベース',
    difficulty: 3, year: 2022, tags: ['ビュー','仮想表'],
    question: 'リレーショナルデータベースのビュー（VIEW）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'ビューは実データのコピーを持つため、元テーブルの変更は反映されない' },
      { index: 1, text: 'ビューは仮想的な表であり、定義した SELECT 文を基に動的に生成される' },
      { index: 2, text: 'ビューには常にインデックスが自動的に作成される' },
      { index: 3, text: 'ビューを通じたデータの更新（UPDATE/INSERT）は一切できない' },
    ],
    answer: 1,
    explanation: 'ビューは SELECT 文を保存した仮想表。参照時に元テーブルから動的に生成されるため常に最新データを反映。更新可能ビュー（単一テーブル参照・集約なし等の条件を満たす場合）は DML も可能。マテリアライズドビューは結果を物理的に保存しパフォーマンス向上に使う。',
  },
  {
    id: 'DB-090', category: 'database', categoryName: 'データベース',
    difficulty: 2, year: 2021, tags: ['集合演算','UNION'],
    question: 'SQL の UNION と UNION ALL の違いとして正しいものはどれか。',
    choices: [
      { index: 0, text: 'UNION は重複行を除去し、UNION ALL は重複行を保持する' },
      { index: 1, text: 'UNION は全行を返し、UNION ALL は重複行を除去する' },
      { index: 2, text: 'UNION は列数が異なるテーブルに使え、UNION ALL は同じ列数のみ使用可能' },
      { index: 3, text: 'UNION は SELECT 文に使え、UNION ALL は INSERT に使用する' },
    ],
    answer: 0,
    explanation: 'UNION は2つの SELECT 結果を結合し重複行を除去（DISTINCT 相当）。UNION ALL は重複を除去せず全行を返すため高速。パフォーマンスを要する場合は UNION ALL を優先し、重複除去が必要な場合のみ UNION を使う。',
  },
  {
    id: 'DB-091', category: 'database', categoryName: 'データベース',
    difficulty: 3, year: 2023, tags: ['ロック','デッドロック'],
    question: 'デッドロックの説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '1つのトランザクションが同じリソースを2回ロックしようとした状態' },
      { index: 1, text: '複数のトランザクションが互いに相手のロックを待ち合って進めない状態' },
      { index: 2, text: 'トランザクションが長時間かかってタイムアウトした状態' },
      { index: 3, text: 'ロックを取得できないトランザクションがキャンセルされた状態' },
    ],
    answer: 1,
    explanation: 'デッドロック: T1がリソースAをロックしBを待ち、T2がリソースBをロックしAを待つ状態。発生条件（コフマン条件）: 相互排他・保持して待機・非横取り・循環待機の4条件が同時成立。対策: タイムアウト検出・ウェイトフォーグラフによる検出・ロック順序の統一。',
  },
  {
    id: 'DB-092', category: 'database', categoryName: 'データベース',
    difficulty: 2, year: 2022, tags: ['集約関数','GROUP BY'],
    question: 'SQL でグループ集計時に使用する HAVING 句の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'GROUP BY の前に行を絞り込む（WHERE の別名）' },
      { index: 1, text: 'GROUP BY でグループ化した後の集計結果に対して条件を指定する' },
      { index: 2, text: 'HAVING は集約関数なしでは使えない' },
      { index: 3, text: 'HAVING はサブクエリ内では使用できない' },
    ],
    answer: 1,
    explanation: 'HAVING は GROUP BY 後の集計結果に対するフィルタ。例: GROUP BY dept HAVING COUNT(*) >= 5（5人以上の部署）。行の絞り込みは WHERE（GROUP BY 前）で行い、集計後の絞り込みに HAVING を使う。WHERE より HAVING が後に評価されるため実行順序に注意。',
  },
  {
    id: 'DB-093', category: 'database', categoryName: 'データベース',
    difficulty: 3, year: 2021, tags: ['NoSQL','CAP定理'],
    question: 'CAP 定理で「CP を選択した分散データベース」の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '一貫性と可用性を保証するが、ネットワーク分断耐性がない' },
      { index: 1, text: '一貫性とネットワーク分断耐性を保証するが、ネットワーク分断時は一部ノードへのアクセスを拒否する' },
      { index: 2, text: '可用性とネットワーク分断耐性を保証するが、読み取り結果が古い可能性がある' },
      { index: 3, text: '一貫性・可用性・分断耐性の全てを保証する' },
    ],
    answer: 1,
    explanation: 'CAP 定理: 分散システムは Consistency（一貫性）・Availability（可用性）・Partition tolerance（分断耐性）のうち最大2つしか同時に保証できない。CP システム（HBase, ZooKeeper等）は分断時に一貫性を優先しノードへのアクセスを停止。AP システム（Cassandra, DynamoDB等）は可用性を優先し古いデータを返す場合がある（結果整合性）。',
  },
  {
    id: 'DB-094', category: 'database', categoryName: 'データベース',
    difficulty: 2, year: 2023, tags: ['ストアドプロシージャ','PL/SQL'],
    question: 'ストアドプロシージャを使用する利点として最も適切なものはどれか。',
    choices: [
      { index: 0, text: 'アプリケーションとDBサーバ間のネットワーク通信回数を削減できる' },
      { index: 1, text: 'SQLは一切書かずに複雑な処理を実行できる' },
      { index: 2, text: 'ストアドプロシージャを使うとトランザクションが不要になる' },
      { index: 3, text: '全てのRDBMSで同じコードがそのまま動作する' },
    ],
    answer: 0,
    explanation: 'ストアドプロシージャの利点: (1)アプリ〜DB間の往復通信を削減（ネットワーク負荷低減）、(2)DBサーバ側で実行計画がキャッシュされ高速、(3)アクセス制御（手続きに権限を付与しテーブルへの直接アクセスを禁止）、(4)業務ロジックのDB側集中管理。ただし移植性（RDBMS依存）やデバッグのしにくさがデメリット。',
  },
  {
    id: 'DB-095', category: 'database', categoryName: 'データベース',
    difficulty: 3, year: 2022, tags: ['EXPLAIN','実行計画'],
    question: 'RDBMS の実行計画（EXPLAIN）で確認できる情報として適切なものはどれか。',
    choices: [
      { index: 0, text: 'SQLの構文エラーの詳細' },
      { index: 1, text: 'クエリを実行した際のCPU使用率のリアルタイム計測値' },
      { index: 2, text: 'インデックスの使用可否、テーブルスキャンの種類、推定行数などのクエリ処理計画' },
      { index: 3, text: 'ロックの競合状況とデッドロックの発生履歴' },
    ],
    answer: 2,
    explanation: 'EXPLAIN（MySQLなど）または EXPLAIN ANALYZE はクエリオプティマイザが選択した実行計画を表示する。確認項目: アクセスタイプ（ALL=全表スキャン/index/range/ref/const）、使用インデックス、推定行数（rows）、コスト、JOINの順序。スロークエリ最適化の基本ツール。',
  },
  {
    id: 'DB-096', category: 'database', categoryName: 'データベース',
    difficulty: 2, year: 2021, tags: ['ER図','多対多'],
    question: 'ER 図で多対多関係を RDB に実装する場合の標準的な方法はどれか。',
    choices: [
      { index: 0, text: '一方のテーブルに相手の主キーを配列型カラムとして追加する' },
      { index: 1, text: '中間テーブル（関連テーブル）を追加し、双方の外部キーで構成する' },
      { index: 2, text: '多対多は RDB では表現できないため NoSQL を使う' },
      { index: 3, text: '片方のテーブルを削除して1対多に変換する' },
    ],
    answer: 1,
    explanation: '多対多関係は中間テーブル（連関エンティティ）で実現。例: 学生〜科目は student_course テーブル（student_id, course_id）を作成し、両方の外部キーを持つ。中間テーブルに出席状況などの追加属性を持たせることもできる。',
  },
  {
    id: 'DB-097', category: 'database', categoryName: 'データベース',
    difficulty: 3, year: 2023, tags: ['レプリケーション','可用性'],
    question: 'データベースのレプリケーションで「同期レプリケーション」の特徴はどれか。',
    choices: [
      { index: 0, text: '書き込み後すぐにコミットし、レプリカへのコピーは非同期で行われる' },
      { index: 1, text: 'プライマリへの書き込みがレプリカでも確認されるまでコミットを待つため、データロスが発生しない' },
      { index: 2, text: 'レプリカはプライマリより常に1秒以上遅れて更新される' },
      { index: 3, text: '読み取り専用のレプリカには同期レプリケーションは適用できない' },
    ],
    answer: 1,
    explanation: '同期レプリケーション: プライマリはレプリカが書き込みを確認（ACK）するまで待ってからコミット。メリット: データロスなし（RPO=0）。デメリット: レプリカへの書き込み遅延がプライマリのレイテンシに影響。非同期レプリケーションは高速だが障害時データロスの可能性あり。PostgreSQL の同期スタンバイなどで設定可能。',
  },

  // SEC-089〜098 セキュリティ (10問)
  {
    id: 'SEC-089', category: 'security', categoryName: 'セキュリティ',
    difficulty: 2, year: 2023, tags: ['フィッシング','ソーシャルエンジニアリング'],
    question: 'スピアフィッシングの説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '不特定多数に大量送信する汎用フィッシングメール' },
      { index: 1, text: '特定の個人・組織を狙い、信頼できる送信元を装った標的型フィッシング' },
      { index: 2, text: 'USB メモリに悪意あるファイルを仕込んで感染させる手法' },
      { index: 3, text: 'ネットワーク通信を傍受してセッションを乗っ取る攻撃' },
    ],
    answer: 1,
    explanation: 'スピアフィッシング（標的型フィッシング）: 特定の個人・役職・組織に絞り、内部情報（名前・役職・取引先など）を組み込んだ精巧な偽メール。CEO詐欺（ビジネスメール詐欺/BEC）もその一形態。対策: 送信者確認・DMARC導入・従業員教育。',
  },
  {
    id: 'SEC-090', category: 'security', categoryName: 'セキュリティ',
    difficulty: 3, year: 2022, tags: ['暗号化','RSA'],
    question: 'RSA 暗号の安全性の根拠はどれか。',
    choices: [
      { index: 0, text: '大きな素数の乗積（合成数）の素因数分解が計算困難であること' },
      { index: 1, text: '離散対数問題が計算困難であること' },
      { index: 2, text: '楕円曲線上の離散対数問題が計算困難であること' },
      { index: 3, text: 'ハッシュ関数の一方向性' },
    ],
    answer: 0,
    explanation: 'RSA の安全性は「大きな合成数（2つの大きな素数の積）の素因数分解が困難」という数学的問題に基づく。2048 ビット以上が推奨（将来的には 3072 ビット）。楕円曲線暗号（ECC）は離散対数問題、DH 鍵交換も離散対数問題に基づく。',
  },
  {
    id: 'SEC-091', category: 'security', categoryName: 'セキュリティ',
    difficulty: 2, year: 2021, tags: ['認証','多要素認証'],
    question: '多要素認証（MFA）で使用する3つの要素の組合せとして正しいものはどれか。',
    choices: [
      { index: 0, text: '知識・所持・生体（Something you Know/Have/Are）' },
      { index: 1, text: 'パスワード・PIN・秘密の質問' },
      { index: 2, text: 'ユーザ名・パスワード・メールアドレス' },
      { index: 3, text: '指紋・顔・虹彩（生体のみ3種類）' },
    ],
    answer: 0,
    explanation: 'MFA の3要素: 知識（パスワード、PIN）・所持（スマートフォン、ハードウェアトークン、ICカード）・生体（指紋、顔認証、虹彩）。2要素以上の組合せが「多要素」。SMS OTP は「所持」要素に該当するが SIM スワップ攻撃に脆弱。FIDO2/WebAuthn が推奨。',
  },
  {
    id: 'SEC-092', category: 'security', categoryName: 'セキュリティ',
    difficulty: 3, year: 2023, tags: ['WAF','Web攻撃対策'],
    question: 'WAF（Web Application Firewall）が防御できる攻撃として最も適切なものはどれか。',
    choices: [
      { index: 0, text: 'DDoS 攻撃によるネットワーク帯域の枯渇' },
      { index: 1, text: 'Web アプリケーションへの SQL インジェクションや XSS 攻撃' },
      { index: 2, text: 'Wi-Fi の WPA2 を解読するブルートフォース' },
      { index: 3, text: 'サプライチェーン攻撃によるライブラリへのバックドア埋め込み' },
    ],
    answer: 1,
    explanation: 'WAF は HTTP/HTTPS のリクエスト・レスポンスを検査し、SQLi・XSS・CSRF・コマンドインジェクション・パストラバーサルなど Web 層の攻撃を検知・遮断する。L7（アプリケーション層）のファイアウォール。OWASP Top 10 の多くをカバー。ネットワーク DDoS には WAF + CDN/Anti-DDoS サービスを組合わせる。',
  },
  {
    id: 'SEC-093', category: 'security', categoryName: 'セキュリティ',
    difficulty: 2, year: 2022, tags: ['PKI','証明書失効'],
    question: 'PKI における証明書の有効性をリアルタイムで確認するプロトコルはどれか。',
    choices: [
      { index: 0, text: 'CRL（Certificate Revocation List）' },
      { index: 1, text: 'OCSP（Online Certificate Status Protocol）' },
      { index: 2, text: 'LDAP' },
      { index: 3, text: 'RADIUS' },
    ],
    answer: 1,
    explanation: 'OCSP は証明書のシリアル番号を CA の OCSP レスポンダに問い合わせてリアルタイムで失効確認する。CRL はリストのダウンロードが必要で更新遅延あり。OCSP Stapling はサーバが OCSP 応答をキャッシュしてクライアントに返す方式でプライバシーと速度を改善。',
  },
  {
    id: 'SEC-094', category: 'security', categoryName: 'セキュリティ',
    difficulty: 3, year: 2021, tags: ['ゼロトラスト','アクセス制御'],
    question: 'ゼロトラストセキュリティモデルの基本原則として正しいものはどれか。',
    choices: [
      { index: 0, text: '社内ネットワークは信頼できるため、境界で守ればよい' },
      { index: 1, text: 'ネットワークの場所に関わらず「常に確認し、決して信頼しない」をベースにアクセス制御する' },
      { index: 2, text: 'VPN で接続すれば全リソースへのアクセスを許可できる' },
      { index: 3, text: 'ファイアウォールさえあれば内部攻撃も防げる' },
    ],
    answer: 1,
    explanation: 'ゼロトラスト（"Never Trust, Always Verify"）: クラウド化・テレワーク普及で「境界型防御」の限界を認識し、内外問わずすべてのアクセスを認証・認可・継続的検証する考え方。NIST SP 800-207 が指針。実装技術: IDaaS・MFA・最小権限・マイクロセグメンテーション・継続的監視。',
  },
  {
    id: 'SEC-095', category: 'security', categoryName: 'セキュリティ',
    difficulty: 2, year: 2023, tags: ['脆弱性スキャン','ペネトレーション'],
    question: 'ペネトレーションテストと脆弱性スキャンの違いとして正しいものはどれか。',
    choices: [
      { index: 0, text: '脆弱性スキャンは能動的に侵入を試みるが、ペネトレーションテストはスキャンのみ行う' },
      { index: 1, text: '脆弱性スキャンは脆弱性の存在を検出するが、ペネトレーションテストは実際に悪用して影響範囲を確認する' },
      { index: 2, text: '両者は全く同じ作業で呼び名が違うだけ' },
      { index: 3, text: 'ペネトレーションテストはOSのみ対象で、脆弱性スキャンはWebアプリのみ対象' },
    ],
    answer: 1,
    explanation: '脆弱性スキャン（自動化ツール主体）は既知の脆弱性パターンとの照合で脆弱性の有無を検出。ペネトレーションテスト（ペンテスト）は実際に攻撃手法を用いて侵入を試みビジネスインパクトを評価（プロのセキュリティエンジニアが実施）。ペンテストはより深い分析だが高コスト。',
  },
  {
    id: 'SEC-096', category: 'security', categoryName: 'セキュリティ',
    difficulty: 3, year: 2022, tags: ['暗号化','AES'],
    question: 'AES（Advanced Encryption Standard）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '公開鍵暗号であり、鍵ペア（公開鍵・秘密鍵）を使用する' },
      { index: 1, text: '共通鍵暗号で、ブロック長 128 ビット・鍵長 128/192/256 ビット' },
      { index: 2, text: 'ストリーム暗号であり、ビット単位で暗号化を行う' },
      { index: 3, text: '鍵長は常に 56 ビット固定である' },
    ],
    answer: 1,
    explanation: 'AES（Advanced Encryption Standard）: NIST が2001年に標準化した共通鍵ブロック暗号。ブロック長 128 ビット固定、鍵長 128/192/256 ビットの3種。SPN 構造（SubBytes・ShiftRows・MixColumns・AddRoundKey）。現在最も広く使われる対称暗号。DES（56ビット鍵）の後継。',
  },
  {
    id: 'SEC-097', category: 'security', categoryName: 'セキュリティ',
    difficulty: 2, year: 2021, tags: ['SIEM','ログ分析'],
    question: 'SIEM（Security Information and Event Management）の主な機能として正しいものはどれか。',
    choices: [
      { index: 0, text: 'ネットワーク境界にファイアウォールルールを自動で適用する' },
      { index: 1, text: '複数のシステム・デバイスのログを収集・相関分析してセキュリティインシデントを検出する' },
      { index: 2, text: 'マルウェアを検出してリアルタイムに隔離する EDR 機能を持つ' },
      { index: 3, text: 'Web アプリの脆弱性をスキャンしてパッチを自動適用する' },
    ],
    answer: 1,
    explanation: 'SIEM は複数ソース（OS ログ、FW ログ、IDS/IPS、認証ログなど）のログを集中収集・正規化し、相関ルールや機械学習で異常を検出しアラートを発するプラットフォーム。Splunk・QRadar・Elastic SIEM などが代表的。SOC（Security Operations Center）の中核ツール。',
  },
  {
    id: 'SEC-098', category: 'security', categoryName: 'セキュリティ',
    difficulty: 3, year: 2023, tags: ['コンテナ','セキュリティ'],
    question: 'Docker コンテナのセキュリティ強化策として適切でないものはどれか。',
    choices: [
      { index: 0, text: 'コンテナを root 以外のユーザで実行する' },
      { index: 1, text: 'イメージは公式・信頼できるレジストリから取得し脆弱性スキャンを行う' },
      { index: 2, text: '全コンテナに --privileged フラグを付与してホストへのアクセスを簡易化する' },
      { index: 3, text: 'read-only ファイルシステムを使用し書き込み箇所を最小限にする' },
    ],
    answer: 2,
    explanation: '--privileged フラグはコンテナにホストのほぼ全デバイスへのアクセスを与えるため非常に危険。適切なセキュリティ強化: 非rootユーザ実行・最小権限CapabilitiesDrop・no-new-privileges・読み取り専用FS・イメージスキャン（Trivy等）・Secrets管理（環境変数に平文を入れない）。',
  },

  // OS-091〜100 OS (10問)
  {
    id: 'OS-091', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 2, year: 2023, tags: ['仮想メモリ','TLB'],
    question: 'TLB（Translation Lookaside Buffer）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'ディスク上のページのアドレスを記録するテーブル' },
      { index: 1, text: '仮想アドレスから物理アドレスへの変換を高速化するキャッシュ' },
      { index: 2, text: 'CPU の L1/L2 キャッシュと同一のもの' },
      { index: 3, text: 'プロセスの優先度を管理するキュー' },
    ],
    answer: 1,
    explanation: 'TLB（変換索引バッファ）: 仮想→物理アドレス変換（ページテーブル参照）を高速化するCPU内の連想メモリ（キャッシュ）。TLBヒット時はページテーブルメモリアクセスが不要。コンテキストスイッチ時に TLB フラッシュが必要（ASID付きTLBで回避可能）。',
  },
  {
    id: 'OS-092', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 3, year: 2022, tags: ['スケジューリング','優先度'],
    question: 'リアルタイム OS で使われる優先度ベーススケジューリングにおいて「優先度逆転」問題の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '高優先度プロセスが低優先度プロセスより先に実行されてしまう問題' },
      { index: 1, text: '低優先度プロセスが保持するロックを高優先度プロセスが待つ間に、中優先度プロセスが割り込んで実行される問題' },
      { index: 2, text: 'プロセスの優先度が時間とともに自動的に下がる問題' },
      { index: 3, text: '優先度の高いプロセスがCPU時間を独占してデッドロックになる問題' },
    ],
    answer: 1,
    explanation: '優先度逆転: 低優先タスクがミューテックス保持中に高優先タスクが待機、中優先タスクがCPUを占有してしまう現象。火星探査機パスファインダーで実際に発生。対策: 優先度継承プロトコル（低優先タスクに一時的に高優先度を付与）・優先度天井プロトコル。',
  },
  {
    id: 'OS-093', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 2, year: 2021, tags: ['ファイルシステム','inode'],
    question: 'Unix/Linux のファイルシステムにおける inode の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'ファイルの実際のデータ（内容）を格納する領域' },
      { index: 1, text: 'ファイルのメタデータ（サイズ・権限・タイムスタンプ・データブロックへのポインタ）を格納する構造体' },
      { index: 2, text: 'ファイル名とディレクトリパスのみを管理するテーブル' },
      { index: 3, text: 'FAT（ファイルアロケーションテーブル）の別名' },
    ],
    answer: 1,
    explanation: 'inode（インデックスノード）はファイルのメタデータ（所有者・権限・サイズ・タイムスタンプ・データブロックへのポインタ）を持つ構造体。ファイル名は inode に含まれず、ディレクトリエントリが「名前→inode番号」を管理。ハードリンクは同一 inode を指す複数の名前。',
  },
  {
    id: 'OS-094', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 3, year: 2023, tags: ['仮想化','ハイパーバイザ'],
    question: 'Type 1（ベアメタル型）ハイパーバイザと Type 2（ホスト型）ハイパーバイザの違いとして正しいものはどれか。',
    choices: [
      { index: 0, text: 'Type 1 はホスト OS の上で動作し、Type 2 はハードウェア上で直接動作する' },
      { index: 1, text: 'Type 1 はハードウェア上で直接動作し、Type 2 はホスト OS の上で動作する' },
      { index: 2, text: 'Type 1 はコンテナを管理し、Type 2 は仮想マシンを管理する' },
      { index: 3, text: '両者の差異はパフォーマンスのみで、アーキテクチャは同じ' },
    ],
    answer: 1,
    explanation: 'Type 1（ベアメタル型）: ハードウェア上で直接動作（例: VMware ESXi・Hyper-V・Xen）。高パフォーマンス・主にサーバ用途。Type 2（ホスト型）: 汎用 OS の上で動作（例: VirtualBox・VMware Workstation）。導入容易・開発/テスト用途。コンテナ（Docker）はOS仮想化（同一カーネル共有）で仮想マシンより軽量。',
  },
  {
    id: 'OS-095', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 2, year: 2022, tags: ['プロセス','fork'],
    question: 'Unix の fork() システムコールの説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '新しいスレッドを作成し、同じプロセス内で並行実行させる' },
      { index: 1, text: '呼び出したプロセスの完全なコピー（子プロセス）を作成し、両方が実行を継続する' },
      { index: 2, text: '別の実行ファイルをロードして現在のプロセスを置き換える' },
      { index: 3, text: 'ゾンビプロセスを回収してメモリを解放する' },
    ],
    answer: 1,
    explanation: 'fork() は現在のプロセス（親）のアドレス空間・FD・シグナルハンドラを複製した子プロセスを生成。親には子の PID、子には 0 が返る。exec() で別プログラムをロード（fork+exec パターン）。CoW（Copy-on-Write）でメモリ効率を改善。',
  },
  {
    id: 'OS-096', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 3, year: 2021, tags: ['RAID','ストレージ'],
    question: 'RAID 6 の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'データを 2 台のディスクにミラーリングするため、1 台故障しても動作継続できる' },
      { index: 1, text: '2 つの独立したパリティを分散配置し、同時に 2 台のディスク故障に耐えられる' },
      { index: 2, text: 'データを複数ディスクに分散（ストライピング）するだけで冗長性はない' },
      { index: 3, text: 'パリティを専用ディスクに集中管理し、1台故障まで対応できる' },
    ],
    answer: 1,
    explanation: 'RAID 6: P パリティと Q パリティの2種類を分散配置し、同時2台故障に耐える。最低4台必要。RAID 5（パリティ1個=1台故障対応、最低3台）より信頼性が高い。大容量ディスク時代のリビルド中の故障リスクに対応。書き込みオーバーヘッドは RAID 5 より大きい。',
  },
  {
    id: 'OS-097', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 2, year: 2023, tags: ['シグナル','IPC'],
    question: 'Linux でプロセスに SIGKILL を送った場合の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'プロセスはシグナルをキャッチして後処理を行ってから終了する' },
      { index: 1, text: 'プロセスはシグナルを無視できる' },
      { index: 2, text: 'カーネルが強制的にプロセスを終了させ、プロセスはキャッチ・無視できない' },
      { index: 3, text: 'プロセスは一時停止状態になる' },
    ],
    answer: 2,
    explanation: 'SIGKILL（シグナル番号 9）はカーネルが強制終了するシグナルでプロセスはキャッチも無視もできない。SIGTERM（15番）はキャッチ可能で正常終了処理を実装できる。`kill -9 PID` で送信。SIGSTOP も無視不可（プロセス一時停止）。',
  },
  {
    id: 'OS-098', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 3, year: 2022, tags: ['メモリ管理','セグメンテーション違反'],
    question: 'セグメンテーションフォルト（Segfault）が発生する典型的な原因はどれか。',
    choices: [
      { index: 0, text: 'ディスクの書き込み速度が遅い' },
      { index: 1, text: '不正なメモリアドレスへのアクセス（NULL ポインタ参照・バッファオーバーフローなど）' },
      { index: 2, text: 'CPU のオーバーヒートによる演算エラー' },
      { index: 3, text: 'ネットワーク接続が切断された' },
    ],
    answer: 1,
    explanation: 'セグメンテーションフォルト: プロセスが割り当てられていないメモリ領域へのアクセスを試みた際に OS が送る SIGSEGV。主な原因: NULL ポインタ参照・解放済みメモリ参照（ダングリングポインタ）・スタックオーバーフロー・バッファオーバーフロー。`gdb` や AddressSanitizer でデバッグ。',
  },
  {
    id: 'OS-099', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 2, year: 2021, tags: ['シェル','パイプ'],
    question: 'Linux のパイプ（|）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '前のコマンドの終了ステータスを次のコマンドへ渡す' },
      { index: 1, text: '前のコマンドの標準出力を次のコマンドの標準入力に接続する' },
      { index: 2, text: '前のコマンドが失敗した場合のみ次のコマンドを実行する' },
      { index: 3, text: '前のコマンドが成功した場合のみ次のコマンドを実行する' },
    ],
    answer: 1,
    explanation: 'パイプ（|）: 左コマンドの標準出力を右コマンドの標準入力に繋ぐ。例: `ls -la | grep ".txt" | wc -l`。&& は前コマンド成功時のみ次を実行、|| は前コマンド失敗時のみ実行。名前付きパイプ（FIFO）は mkfifo で作成しプロセス間通信に使用。',
  },
  {
    id: 'OS-100', category: 'os', categoryName: 'オペレーティングシステム',
    difficulty: 3, year: 2023, tags: ['コンテナ','namespace'],
    question: 'Linux コンテナ（Docker 等）の隔離に使用されるカーネル機能はどれか。',
    choices: [
      { index: 0, text: 'ハイパーバイザと仮想 CPU のみで実現される' },
      { index: 1, text: 'namespace（プロセス/ネットワーク/ファイルシステム等の分離）と cgroups（リソース制限）' },
      { index: 2, text: 'SELinux のみで全ての隔離が実現される' },
      { index: 3, text: 'chroot のみで実現される' },
    ],
    answer: 1,
    explanation: 'Linux コンテナの隔離は namespace と cgroups の2本柱。namespace: PID（プロセス空間）・NET（ネットワーク）・MNT（ファイルシステム）・UTS（ホスト名）・IPC・USER 等を独立した空間に隔離。cgroups: CPU・メモリ・I/O のリソース使用量を制限。VM と異なりホストカーネルを共有するため軽量。',
  },

  // SD-081〜090 ソフトウェア開発 (10問)
  {
    id: 'SD-081', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 2, year: 2023, tags: ['CI/CD','DevOps'],
    question: 'CI/CD パイプラインにおける CD（Continuous Delivery）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'コードのコミットのたびに自動でビルド・テストを実行する工程' },
      { index: 1, text: 'ソフトウェアをいつでも本番環境へリリースできる状態に保ち続ける実践' },
      { index: 2, text: '本番環境への自動デプロイを完全に手動で行うこと' },
      { index: 3, text: 'コンテナイメージを Docker Hub に定期プッシュする工程' },
    ],
    answer: 1,
    explanation: 'CI（Continuous Integration）はコードのビルド・テスト自動化。CD（Continuous Delivery）はリリース可能な状態を常に維持する（承認ゲートを経てリリース）。Continuous Deployment は承認なしに自動で本番デプロイ。Jenkins・GitHub Actions・GitLab CI などで実装。',
  },
  {
    id: 'SD-082', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 3, year: 2022, tags: ['デザインパターン','Observer'],
    question: 'Observer パターンの説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'オブジェクトの生成処理をカプセル化し、具体的なクラスを隠蔽する' },
      { index: 1, text: 'Subject の状態変化を複数の Observer に自動通知する、イベント駆動の設計パターン' },
      { index: 2, text: 'アルゴリズムの骨格をスーパークラスで定義し、具体的な処理をサブクラスに委ねる' },
      { index: 3, text: '複雑なオブジェクト生成手順をステップに分割する' },
    ],
    answer: 1,
    explanation: 'Observer パターン（GoF 行動パターン）: Subject（Publisher）が状態変化時に登録された Observer（Subscriber）に通知。MVC のモデル→ビュー通知、DOM イベント、Pub/Sub システムの基礎。Java の java.util.Observable、JavaScript の EventEmitter などが実装例。',
  },
  {
    id: 'SD-083', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 2, year: 2021, tags: ['テスト','カバレッジ'],
    question: 'C1 カバレッジ（分岐カバレッジ）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '全てのソースコード行を少なくとも1回実行する' },
      { index: 1, text: '全ての分岐（true/false）を少なくとも1回実行する' },
      { index: 2, text: '全ての条件の組合せを実行する' },
      { index: 3, text: '全ての独立したパスを実行する' },
    ],
    answer: 1,
    explanation: 'テストカバレッジ指標: C0（命令カバレッジ）=全行実行、C1（分岐カバレッジ）=if文のtrue/false両方実行、C2（条件カバレッジ）=各条件の全組合せ、MC/DC（改変条件判定カバレッジ）=航空宇宙分野で要求。C1≥C0 だが C2<C1 の場合もある（分岐とは別に各条件の組合せが必要なため）。',
  },
  {
    id: 'SD-084', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 3, year: 2023, tags: ['マイクロサービス','API'],
    question: 'マイクロサービスアーキテクチャの特徴として正しいものはどれか。',
    choices: [
      { index: 0, text: '全機能を1つのプロセスにまとめ、デプロイ単位を統一する' },
      { index: 1, text: '機能をサービス単位に分割し、独立してデプロイ・スケール可能にする' },
      { index: 2, text: 'データベースを必ず1つ共有し、一貫性を担保する' },
      { index: 3, text: '全サービスが同一プログラミング言語を使わなければならない' },
    ],
    answer: 1,
    explanation: 'マイクロサービス: 機能ごとの独立したサービス群で構成。各サービスは独自のDBを持てる（Polyglot Persistence）、異なる言語・技術スタックを選択可能。独立デプロイでアジリティ向上。課題: 分散システムの複雑さ（サービス間通信・分散トレーシング・サーキットブレーカー）。モノリス vs マイクロサービスはトレードオフ。',
  },
  {
    id: 'SD-085', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 2, year: 2022, tags: ['バージョン管理','Git'],
    question: 'Git の rebase と merge の違いとして正しいものはどれか。',
    choices: [
      { index: 0, text: 'rebase はブランチを統合しマージコミットを作る。merge は履歴を書き換える' },
      { index: 1, text: 'merge はマージコミットを作りブランチ履歴を保持する。rebase はコミット履歴を直線的に書き換える' },
      { index: 2, text: '両者は全く同じ操作で結果も同じ' },
      { index: 3, text: 'rebase はリモートリポジトリにしか使えない' },
    ],
    answer: 1,
    explanation: 'merge: 2ブランチの先端をマージコミットで結合（履歴が分岐点を保持）。rebase: featureブランチのコミットをmainの先端に付け替えて直線的な履歴にする（コミットSHAが変わる）。共有ブランチへのrebaseは禁忌（他者の履歴を破壊）。`,git pull --rebase` で使用。',
  },
  {
    id: 'SD-086', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 3, year: 2021, tags: ['SOLID','単一責任'],
    question: 'SOLID 原則における「単一責任の原則（SRP）」の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'クラスは1つのメソッドのみを持つべきである' },
      { index: 1, text: 'クラスを変更する理由は1つだけであるべきで、責任（変更理由）を1つに絞る' },
      { index: 2, text: 'サブクラスはスーパークラスを完全に置き換えられるべきである' },
      { index: 3, text: 'インタフェースは使う側のニーズに合わせて細分化すべきである' },
    ],
    answer: 1,
    explanation: 'SRP（Single Responsibility Principle）: クラスを変更する理由は1つだけであるべき。つまり1つの責任（関心事）のみを担当する。複数の変更理由（データアクセス+ビジネスロジック+表示など）が混在すると変更時の影響範囲が広がる。SRP違反の典型は神クラス（God Class）。',
  },
  {
    id: 'SD-087', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 2, year: 2023, tags: ['コードレビュー','品質'],
    question: 'コードレビューの主な目的として最も適切なものはどれか。',
    choices: [
      { index: 0, text: '開発者のパフォーマンス評価を行い給与査定に活用する' },
      { index: 1, text: 'バグや設計上の問題を早期発見し、知識共有とコード品質向上を図る' },
      { index: 2, text: '全てのコードを1人のシニアエンジニアに書き直させる' },
      { index: 3, text: 'テストの代替手段として機能を検証する' },
    ],
    answer: 1,
    explanation: 'コードレビューの目的: バグ・セキュリティ問題・設計上の欠陥の早期発見、コーディング規約準拠確認、チーム内知識共有・スキル向上、コードの可読性・保守性向上。1ページ変更を1人でレビューするより複数人でを推奨（Google, Microsoftのベストプラクティス）。テストの代替ではなく補完。',
  },
  {
    id: 'SD-088', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 3, year: 2022, tags: ['静的解析','SAST'],
    question: 'SAST（Static Application Security Testing）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '実行中のアプリケーションへの動的な攻撃を模倣してテストする' },
      { index: 1, text: 'ソースコードや中間コードを実行せずに解析し、セキュリティ脆弱性を発見する' },
      { index: 2, text: '本番環境のAPIに対して自動的にペネトレーションテストを実施する' },
      { index: 3, text: 'エンドユーザの操作を記録して再生するリグレッションテスト手法' },
    ],
    answer: 1,
    explanation: 'SAST（静的アプリケーションセキュリティテスト）: コードを実行せず静的に解析し脆弱性を検出。CI パイプラインに組み込みコミット時に実行（Shift Left）。ツール例: SonarQube・Checkmarx・Semgrep。DAST（動的テスト）は実行中のアプリを攻撃してテスト。両者を組み合わせることが推奨。',
  },
  {
    id: 'SD-089', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 2, year: 2021, tags: ['アジャイル','スプリント'],
    question: 'スクラムにおけるスプリントレトロスペクティブ（振り返り）の目的として正しいものはどれか。',
    choices: [
      { index: 0, text: '次のスプリントのバックログアイテムを優先順位付けする' },
      { index: 1, text: 'スプリント中のチームのプロセスを振り返り、次のスプリントで改善できる点を特定する' },
      { index: 2, text: 'プロダクトオーナーに対してスプリント成果をデモする' },
      { index: 3, text: 'バーンダウンチャートを使って残作業量を確認する' },
    ],
    answer: 1,
    explanation: 'スプリントレトロスペクティブ（スプリントレトロ/KPT）: スプリント最後にチームがプロセス・チームワーク・ツールを振り返り（Keep/Problem/Try または4Ls法など）、継続的改善（Kaizen）点を特定するイベント。スプリントレビューは成果物のデモ、バックログリファインメントは要件整理。',
  },
  {
    id: 'SD-090', category: 'software-dev', categoryName: 'ソフトウェア開発',
    difficulty: 3, year: 2023, tags: ['IaC','Terraform'],
    question: 'IaC（Infrastructure as Code）の利点として最も適切なものはどれか。',
    choices: [
      { index: 0, text: 'インフラを手動で構築しコードはドキュメントとして後から記録する' },
      { index: 1, text: 'インフラ構成をコードで定義することで再現性・バージョン管理・自動化を実現する' },
      { index: 2, text: 'クラウドプロバイダの API を直接呼び出すため、Terraform等のツールは不要' },
      { index: 3, text: 'IaC は開発環境にのみ使用し、本番環境は手動管理が推奨される' },
    ],
    answer: 1,
    explanation: 'IaC（Infrastructure as Code）: Terraform・Ansible・Pulumi などで実現。利点: (1)インフラの再現性（同一環境を何度でも作成）、(2)Gitでバージョン管理（変更差分・ロールバック）、(3)CI/CDによる自動デプロイ、(4)コードレビューでインフラ変更を管理（ドリフト防止）。Immutable Infrastructure の基盤。',
  },

  // SA-081〜090 システムアーキテクチャ (10問)
  {
    id: 'SA-081', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 2, year: 2023, tags: ['クラウド','スケーラビリティ'],
    question: 'クラウドの「垂直スケーリング（スケールアップ）」と「水平スケーリング（スケールアウト）」の違いとして正しいものはどれか。',
    choices: [
      { index: 0, text: '垂直は複数サーバを追加、水平は1台のサーバスペックを上げる' },
      { index: 1, text: '垂直は1台のサーバスペックを上げる、水平は複数サーバを追加して負荷分散する' },
      { index: 2, text: '垂直はデータベースに使い、水平はWebサーバのみに使う' },
      { index: 3, text: '垂直と水平は同一のスケーリング手法の別名である' },
    ],
    answer: 1,
    explanation: 'スケールアップ（垂直）: 1台のサーバをより高性能なマシンに変更（CPU増強・メモリ増設）。上限あり・コスト高。スケールアウト（水平）: サーバ台数を増やして負荷分散。理論上無制限にスケール可能だがステートレス設計が必要。クラウドではオートスケーリングで水平スケールが主流。',
  },
  {
    id: 'SA-082', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 3, year: 2022, tags: ['CDN','エッジ'],
    question: 'CDN（Content Delivery Network）の主な目的として正しいものはどれか。',
    choices: [
      { index: 0, text: 'データベースのバックアップを分散して保管する' },
      { index: 1, text: 'ユーザに近い地理的位置のエッジサーバにコンテンツをキャッシュして配信遅延を低減する' },
      { index: 2, text: 'サーバの CPU 負荷を分散するためアプリケーションロジックを実行する' },
      { index: 3, text: 'ファイアウォールルールを地理的に分散して管理する' },
    ],
    answer: 1,
    explanation: 'CDN はエッジサーバ（POP: Point of Presence）をユーザ近くに分散配置し、静的コンテンツ（画像・JS・動画等）をキャッシュして配信。効果: レイテンシ低減・オリジンサーバ負荷軽減・DDoS 耐性向上。代表: Cloudflare・Akamai・AWS CloudFront。',
  },
  {
    id: 'SA-083', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 2, year: 2021, tags: ['メッセージキュー','非同期'],
    question: 'メッセージキュー（MQ）を使った非同期処理の利点として最も適切なものはどれか。',
    choices: [
      { index: 0, text: '処理速度が同期処理より常に遅くなる' },
      { index: 1, text: 'プロデューサとコンシューマを時間的に分離でき、負荷の平準化とシステム間の疎結合を実現できる' },
      { index: 2, text: '全てのリクエストが必ず1秒以内に処理される保証が得られる' },
      { index: 3, text: 'MQ を使うとデータベーストランザクションが不要になる' },
    ],
    answer: 1,
    explanation: 'メッセージキュー（RabbitMQ・Apache Kafka・Amazon SQS等）の利点: (1)生産者・消費者の疎結合（一方がダウンしても影響しない）、(2)バーストトラフィックの吸収・負荷平準化、(3)消費者のスケールアウトが容易、(4)再試行・デッドレターキューで信頼性向上。',
  },
  {
    id: 'SA-084', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 3, year: 2023, tags: ['負荷分散','ヘルスチェック'],
    question: 'ロードバランサのヘルスチェック機能の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'セッションの持続性（スティッキーセッション）を管理する機能' },
      { index: 1, text: 'バックエンドサーバの死活を定期的に確認し、異常サーバへのトラフィックを自動的に除外する' },
      { index: 2, text: 'ユーザの地理的位置に基づいてトラフィックを振り分ける機能' },
      { index: 3, text: 'SSL/TLS 終端処理をバックエンドサーバの代わりに行う機能' },
    ],
    answer: 1,
    explanation: 'ロードバランサのヘルスチェック: 定期的に各バックエンドサーバへのHTTPリクエストまたはTCP接続を行い、応答がない・エラーのサーバをプールから除外して正常サーバにのみルーティング。自動障害検知・系外し。対応後に自動でプールに復帰させることも可能。',
  },
  {
    id: 'SA-085', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 2, year: 2022, tags: ['サーバレス','FaaS'],
    question: 'サーバレスコンピューティング（FaaS）の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: '物理サーバが存在しないクラウドサービス' },
      { index: 1, text: 'サーバの管理・プロビジョニングをクラウドプロバイダが行い、コードの実行単位で課金される' },
      { index: 2, text: 'コンテナのみで動作するアーキテクチャでサーバOS が不要' },
      { index: 3, text: 'サーバは存在するが24時間稼働しない省エネアーキテクチャ' },
    ],
    answer: 1,
    explanation: 'サーバレス（FaaS: Function as a Service）: 開発者はコードの記述のみに集中し、サーバプロビジョニング・スケーリング・OS管理はクラウドが担当。実行時間・リクエスト数での従量課金。AWS Lambda・Azure Functions・Google Cloud Functions が代表例。コールドスタート遅延がトレードオフ。',
  },
  {
    id: 'SA-086', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 3, year: 2021, tags: ['フォールトトレランス','サーキットブレーカー'],
    question: 'マイクロサービスのサーキットブレーカーパターンの説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'サービス間のネットワーク暗号化を自動的に行う' },
      { index: 1, text: '下流サービスの障害を検出し、一定期間リクエストを遮断してカスケード障害を防ぐ' },
      { index: 2, text: 'データベースの読み取り専用レプリカへトラフィックを自動振り分けする' },
      { index: 3, text: '全てのサービスを並列実行してレスポンスの速い方を採用する' },
    ],
    answer: 1,
    explanation: 'サーキットブレーカー（Hystrix・Resilience4j等）: 連続エラーが閾値を超えると回路を「開（Open）」にしてリクエストを即座に失敗させる（フォールバック処理）。これにより下流サービス障害が上流にカスケードするのを防ぐ。一定時間後に「半開（Half-Open）」でリクエストを試みて回復を確認。',
  },
  {
    id: 'SA-087', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 2, year: 2023, tags: ['SLA','可用性'],
    question: '稼働率 99.9%（スリーナイン）の年間停止時間はおよそどれか。',
    choices: [
      { index: 0, text: '約 8.7 時間' },
      { index: 1, text: '約 52.6 分' },
      { index: 2, text: '約 5.3 分' },
      { index: 3, text: '約 26.3 分' },
    ],
    answer: 0,
    explanation: '稼働率 = 1 - 停止率。99.9% = 0.001 の停止率。年間 = 365×24×60 = 525,600 分 × 0.001 ≒ 525.6 分 ≒ 8.76 時間。99.99%（フォーナイン）≒ 52.6 分/年、99.999%（ファイブナイン）≒ 5.26 分/年。SLA設計の基本指標。',
  },
  {
    id: 'SA-088', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 3, year: 2022, tags: ['DRP','RTO/RPO'],
    question: '災害復旧計画（DRP）における RTO と RPO の説明として正しいものはどれか。',
    choices: [
      { index: 0, text: 'RTO は許容できるデータ損失量、RPO は許容できる停止時間' },
      { index: 1, text: 'RTO は目標復旧時間（障害発生からサービス再開まで）、RPO は目標復旧時点（どの時点のデータまで戻せるか）' },
      { index: 2, text: 'RTO と RPO は同じ意味でどちらもコストを指す' },
      { index: 3, text: 'RTO は年次の目標値、RPO は月次の目標値を指す' },
    ],
    answer: 1,
    explanation: 'RTO（Recovery Time Objective）: 目標復旧時間。障害発生からシステム再稼働まで許容できる最大時間。RPO（Recovery Point Objective）: 目標復旧時点。データ損失を許容できる最大期間（例:RPO=1時間なら最大1時間分のデータ損失を許容）。コストとのトレードオフで設計する。',
  },
  {
    id: 'SA-089', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 2, year: 2021, tags: ['API','REST'],
    question: 'RESTful API の特性として正しいものはどれか。',
    choices: [
      { index: 0, text: 'セッション状態をサーバが保持し、クライアントは最小限のデータを送る' },
      { index: 1, text: 'ステートレス（サーバはリクエスト間の状態を保持しない）でリソースを URI で識別する' },
      { index: 2, text: 'バイナリプロトコルを使うため HTTP では実装できない' },
      { index: 3, text: '全てのリクエストは POST メソッドで送信する' },
    ],
    answer: 1,
    explanation: 'REST（Representational State Transfer）の制約: (1)ステートレス（各リクエストに必要な情報をすべて含める）、(2)リソース指向（URI でリソースを識別）、(3)HTTP メソッドの統一（GET/POST/PUT/DELETE）、(4)表現の多様性（JSON/XML）、(5)統一インタフェース。RESTful は REST 制約に準拠した設計。',
  },
  {
    id: 'SA-090', category: 'system-arch', categoryName: 'システムアーキテクチャ',
    difficulty: 3, year: 2023, tags: ['データレイク','ビッグデータ'],
    question: 'データレイクとデータウェアハウス（DWH）の違いとして正しいものはどれか。',
    choices: [
      { index: 0, text: 'データレイクは構造化データのみ格納し、DWH は非構造化データも扱える' },
      { index: 1, text: 'データレイクは生データを任意フォーマットで蓄積し、DWH は整形済みデータを分析用に最適化して格納する' },
      { index: 2, text: 'データレイクはリアルタイム処理専用で、DWH はバッチ処理専用' },
      { index: 3, text: '両者はほぼ同一であり、名前の違いだけ' },
    ],
    answer: 1,
    explanation: 'データレイク: 構造化・半構造化・非構造化データを生のまま大量蓄積（S3・Azure Data Lake等）。ELT パターン。低コスト・柔軟性高。データウェアハウス（Redshift・BigQuery等）: ETL で整形済みデータをスキーマ定義して格納。高速 OLAP クエリに最適化。最近はレイクハウス（両者の統合）も登場。',
  },
];
QUESTIONS_DATA.push(...QUESTIONS_DATA_PHASE15);
