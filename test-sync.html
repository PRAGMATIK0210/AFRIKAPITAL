<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>AFRIKAPITAL — Test de synchronisation</title>
<style>
:root{--teal:#0f6466;--teal-d:#0b4c4e;--gold:#b5822b;--green:#1f9d55;--red:#d64545;--ink:#17212e;--muted:#64748b;--line:#e2e8f0;--bg:#eef1f4}
*{box-sizing:border-box}
body{margin:0;font-family:ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;background:var(--bg);color:var(--ink);font-size:15px;line-height:1.5}
.wrap{max-width:560px;margin:0 auto;padding:18px 14px 60px}
.brand{display:flex;align-items:center;gap:12px;justify-content:center;margin:14px 0 18px}
.logo{width:46px;height:46px;border-radius:12px;background:var(--gold);display:grid;place-items:center;font-weight:800;color:#23180a;font-size:24px}
.brand b{font-size:18px}.brand span{display:block;font-size:12px;color:var(--muted)}
.card{background:#fff;border:1px solid var(--line);border-radius:14px;box-shadow:0 8px 24px -14px rgba(16,24,40,.25);padding:18px;margin-bottom:16px}
h2{font-size:16px;margin:0 0 12px}
label{display:block;font-size:13px;font-weight:600;color:#33465b;margin:10px 0 5px}
input{width:100%;padding:11px;border:1px solid #cbd5e1;border-radius:10px;font-size:15px;outline:none}
input:focus{border-color:var(--teal);box-shadow:0 0 0 3px #e2f0ef}
.btn{width:100%;border:none;border-radius:10px;padding:13px;font-size:15px;font-weight:700;color:#fff;background:var(--teal);margin-top:14px;cursor:pointer}
.btn:hover{background:var(--teal-d)}
.btn.alt{background:#fff;color:var(--teal);border:1px solid var(--teal)}
.btn.gray{background:#64748b}
.btn.red{background:var(--red)}
.row{display:flex;gap:10px}.row .btn{margin-top:0}
.msg{padding:10px 12px;border-radius:10px;font-size:13.5px;margin-top:12px;display:none}
.msg.show{display:block}
.msg.ok{background:#e3f5ea;color:#0f7a3d}
.msg.err{background:#fbe6e6;color:#b02a2a}
.msg.info{background:#e6edf9;color:#264d97}
.pill{display:inline-block;font-size:12px;font-weight:700;padding:3px 10px;border-radius:20px}
.pill.g{background:#e2f0ef;color:var(--teal-d)}
.pill.o{background:#f6edda;color:#8a6218}
.hd{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:6px}
.note{border:1px solid var(--line);border-radius:10px;padding:10px 12px;margin-top:8px;background:#f7f9fb}
.note .who{font-size:12px;color:var(--muted)}
.note .txt{font-weight:600}
.small{font-size:12.5px;color:var(--muted)}
.status{font-size:12.5px;color:var(--muted);text-align:center;margin-top:8px}
.dotlive{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--green);margin-right:5px;vertical-align:middle}
</style>
</head>
<body>
<div class="wrap">
  <div class="brand"><div class="logo">₵</div><div><b>AFRIKAPITAL</b><span>Test de synchronisation</span></div></div>

  <!-- LOGIN -->
  <div class="card" id="authCard">
    <h2>Connexion / Inscription</h2>
    <label>E-mail</label>
    <input type="email" id="email" placeholder="ex. gueyeabdoulaye0210@gmail.com" autocomplete="username">
    <label>Mot de passe</label>
    <input type="password" id="pass" placeholder="au moins 6 caractères" autocomplete="current-password">
    <div class="row">
      <button class="btn" onclick="doLogin()">Se connecter</button>
      <button class="btn alt" onclick="doSignup()">Créer mon compte</button>
    </div>
    <div class="msg" id="authMsg"></div>
    <p class="small" style="margin-top:12px">Première fois ? Tape ton e-mail + un mot de passe et appuie sur <b>Créer mon compte</b>. Ensuite, <b>Se connecter</b>.</p>
  </div>

  <!-- APP -->
  <div id="app" style="display:none">
    <div class="card">
      <div class="hd">
        <div>Connecté : <b id="meEmail"></b></div>
        <span class="pill" id="meRole">—</span>
      </div>
      <button class="btn gray" onclick="doLogout()" style="margin-top:8px">Se déconnecter</button>
    </div>

    <div class="card">
      <h2>Test partagé <span class="status"><span class="dotlive"></span><span id="live">temps réel actif</span></span></h2>
      <p class="small">Écris un mot ci-dessous et appuie sur Envoyer. Il doit apparaître <b>immédiatement sur l'autre téléphone</b> connecté (même avec un autre compte). C'est ça, la synchronisation.</p>
      <label>Ton message</label>
      <input type="text" id="noteTxt" placeholder="ex. Bonjour depuis mon téléphone">
      <button class="btn" onclick="sendNote()">Envoyer</button>
      <div class="msg" id="noteMsg"></div>
      <div id="notes" style="margin-top:14px"></div>
    </div>
    <p class="small" style="text-align:center">Astuce test : ouvre cette page sur <b>deux téléphones</b> (ou 2 navigateurs), connecte-toi, et envoie un message depuis l'un. Il apparaît sur l'autre sans recharger.</p>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
const SUPABASE_URL="https://dxrhbtlaprxdvomzujgb.supabase.co";
const SUPABASE_KEY="sb_publishable_O9qz6cQ1lUZfR5qYD5hwbw_szyM_JSI";
const MANAGER_EMAIL="gueyeabdoulaye0210@gmail.com";
const sb=supabase.createClient(SUPABASE_URL,SUPABASE_KEY);

function show(id,type,txt){const e=document.getElementById(id);e.className="msg show "+type;e.textContent=txt;}
function hide(id){const e=document.getElementById(id);e.className="msg";}

async function doSignup(){
  const email=document.getElementById("email").value.trim(), password=document.getElementById("pass").value;
  if(!email||password.length<6){show("authMsg","err","Entre un e-mail et un mot de passe d'au moins 6 caractères.");return;}
  show("authMsg","info","Création du compte…");
  const {data,error}=await sb.auth.signUp({email,password});
  if(error){show("authMsg","err","Erreur : "+error.message);return;}
  // avec confirmation désactivée, la session est active directement
  if(data.session){ show("authMsg","ok","Compte créé ! Connexion…"); enterApp(); }
  else { show("authMsg","ok","Compte créé. Appuie maintenant sur « Se connecter »."); }
}
async function doLogin(){
  const email=document.getElementById("email").value.trim(), password=document.getElementById("pass").value;
  if(!email||!password){show("authMsg","err","Entre ton e-mail et ton mot de passe.");return;}
  show("authMsg","info","Connexion…");
  const {error}=await sb.auth.signInWithPassword({email,password});
  if(error){show("authMsg","err","Erreur : "+error.message);return;}
  hide("authMsg"); enterApp();
}
async function doLogout(){ await sb.auth.signOut(); location.reload(); }

let channel=null;
async function enterApp(){
  const {data:{user}}=await sb.auth.getUser();
  if(!user) return;
  document.getElementById("authCard").style.display="none";
  document.getElementById("app").style.display="";
  document.getElementById("meEmail").textContent=user.email;
  // rôle : lu depuis la table profiles (créée automatiquement)
  let role="collectrice";
  try{ const {data:prof}=await sb.from("profiles").select("role").eq("id",user.id).single(); if(prof&&prof.role) role=prof.role; }catch(e){}
  if(user.email===MANAGER_EMAIL) role="gerant";
  const rEl=document.getElementById("meRole");
  rEl.textContent = role==="gerant"?"Gérant (accès complet)":"Collectrice";
  rEl.className="pill "+(role==="gerant"?"g":"o");
  await loadNotes();
  subscribeRealtime();
}

async function loadNotes(){
  const {data,error}=await sb.from("expenses").select("id,data,updated_at").order("updated_at",{ascending:false}).limit(15);
  if(error){show("noteMsg","err","Lecture impossible : "+error.message);return;}
  renderNotes(data||[]);
}
function renderNotes(list){
  const host=document.getElementById("notes");
  if(!list.length){host.innerHTML='<p class="small">Aucun message pour l\'instant. Envoie le premier !</p>';return;}
  host.innerHTML=list.map(n=>{
    const d=n.data||{}; const t=new Date(n.updated_at).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"});
    return `<div class="note"><div class="txt">${(d.text||"").replace(/[<>&]/g,"")}</div><div class="who">${(d.by||"?")} · ${t}</div></div>`;
  }).join("");
}
async function sendNote(){
  const txt=document.getElementById("noteTxt").value.trim(); if(!txt){return;}
  const {data:{user}}=await sb.auth.getUser();
  show("noteMsg","info","Envoi…");
  const {error}=await sb.from("expenses").insert({data:{text:txt,by:user.email,_test:true}});
  if(error){show("noteMsg","err","Erreur : "+error.message);return;}
  document.getElementById("noteTxt").value="";
  show("noteMsg","ok","Envoyé ✓"); setTimeout(()=>hide("noteMsg"),1200);
  loadNotes();
}
function subscribeRealtime(){
  if(channel) return;
  channel=sb.channel("test-notes")
    .on("postgres_changes",{event:"*",schema:"public",table:"expenses"},()=>{ loadNotes(); })
    .subscribe((status)=>{ document.getElementById("live").textContent = status==="SUBSCRIBED"?"temps réel actif":"connexion…"; });
}

// auto-login si déjà connecté
(async()=>{ const {data:{session}}=await sb.auth.getSession(); if(session) enterApp(); })();
</script>
</body>
</html>
