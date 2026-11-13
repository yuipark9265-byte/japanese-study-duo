export default {
 async fetch(request, env) {
  const url = new URL(request.url);
  if (url.pathname.startsWith("/api/")) {
   const room = request.headers.get("X-Room-Code") || "";
   if (room.length < 4 || room.length > 40) return new Response("Invalid room code", {status:400});
   if (url.pathname === "/api/state" && request.method === "GET") {
    const rows = await env.DB.prepare("SELECT player, xp FROM scores WHERE room = ?").bind(room).all();
    const state = {kageyama:0, tsukishima:0};
    for (const row of rows.results || []) if (row.player in state) state[row.player] = row.xp;
    return Response.json(state, {headers:{"Cache-Control":"no-store"}});
   }
   if (url.pathname === "/api/xp" && request.method === "POST") {
    const body = await request.json();
    if (!["kageyama","tsukishima"].includes(body.player) || !Number.isInteger(body.amount) || body.amount < 0 || body.amount > 50)
      return new Response("Invalid score", {status:400});
    await env.DB.prepare("INSERT INTO scores(room,player,xp) VALUES(?,?,?) ON CONFLICT(room,player) DO UPDATE SET xp=xp+excluded.xp")
      .bind(room, body.player, body.amount).run();
    const rows = await env.DB.prepare("SELECT player, xp FROM scores WHERE room = ?").bind(room).all();
    const state = {kageyama:0, tsukishima:0};
    for (const row of rows.results || []) if (row.player in state) state[row.player] = row.xp;
    return Response.json(state, {headers:{"Cache-Control":"no-store"}});
   }
   return new Response("Not found",{status:404});
  }
  return env.ASSETS.fetch(request);
 }
};