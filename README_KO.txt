우리의 일본어 성장 대결! - 2인용 공유 앱

포함 기능
- 하나의 링크, 참여 코드로 같은 공부방 접속
- 한 사람은 카게야마, 다른 사람은 츠키시마 선택
- 개인 XP와 레벨 비교
- 둘의 XP를 합산하는 공동 목표(1,000 XP)
- JLPT N5 718개 단어, 플래시카드, 퀴즈, 일본어 발음
- 각 캐릭터 성장 이미지 포함

중요: 실시간 XP 공유에는 Cloudflare Worker + D1 데이터베이스 배포가 필요합니다.
ZIP 파일만 기존 Worker에 업로드한다고 자동 연결되지는 않습니다.

배포 순서
1. Cloudflare Dashboard > Workers & Pages > D1 SQL Database > Create database
   이름: japanese-study-duo
2. D1 콘솔에서 schema.sql 내용을 실행합니다.
3. D1의 database_id를 wrangler.toml의 PASTE_D1_DATABASE_ID_HERE에 넣습니다.
4. Node.js가 설치된 컴퓨터에서 압축을 푼 폴더로 이동합니다.
5. 터미널에서 `npm install -D wrangler` 후 `npx wrangler login`을 실행합니다.
6. `npx wrangler deploy`로 배포합니다.
7. 배포된 한 개 주소를 두 사람에게 공유합니다.
8. 둘이 같은 참여 코드(4~40자)를 입력하고 각자 다른 캐릭터를 선택합니다.

참고
- 점수는 참여 코드별로 분리됩니다.
- 참여 코드는 비밀번호처럼 친구끼리만 공유하세요.
- 현재는 간단한 참여 코드 방식이며 사용자 계정/강력한 인증은 포함하지 않습니다.
- 퀴즈 5문제에서 정답마다 10 XP를 얻습니다.
