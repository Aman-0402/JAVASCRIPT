        function formatCode(code) {
            let formatted = code
                // Add newlines after HTML closing tags
                .replace(/>/g, '>\n')
                // Add newlines after CSS closing braces
                .replace(/}/g, '}\n')
                // Add newlines after JavaScript statements
                .replace(/;/g, ';\n')
                // Add newlines after style/script tag opens
                .replace(/<style>/g, '<style>\n')
                .replace(/<script>/g, '<script>\n')
                // Clean up extra newlines
                .replace(/\n\n+/g, '\n')
                // Add basic indentation for common patterns
                .split('\n')
                .map((line, idx, arr) => {
                    // Count indentation based on opening/closing tags
                    let indent = 0;
                    for (let i = 0; i < idx; i++) {
                        const opens = (arr[i].match(/<[^/!][^>]*>/g) || []).length;
                        const closes = (arr[i].match(/<\/[^>]+>/g) || []).length;
                        indent += opens - closes;
                    }
                    indent = Math.max(0, indent);
                    return '  '.repeat(indent) + line.trim();
                })
                .filter(line => line.trim())
                .join('\n');

            return formatted;
        }

        const PROJECTS = {
            easy: {
                title: "🌱 Easy Projects",
                items: {
                    counter: { name: "Click Counter", code: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Click Counter</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;display:flex;align-items:center;justify-content:center}.container{background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);border-radius:20px;padding:40px;text-align:center;backdrop-filter:blur(10px);max-width:400px;animation:slideIn 0.5s ease-out}@keyframes slideIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}h1{color:white;font-size:2rem;margin-bottom:20px}.count{font-size:5rem;font-weight:800;margin:30px 0}button{padding:12px 24px;font-size:1rem;font-weight:600;border:none;border-radius:10px;cursor:pointer;margin:10px;transition:all 0.2s}#increment{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;box-shadow:0 4px 15px rgba(102,126,234,0.4)}#increment:hover{transform:translateY(-2px)}#reset{background:rgba(255,255,255,0.2);color:white;border:2px solid rgba(255,255,255,0.3)}<\/style><\/head><body><div class="container"><h1>Click Counter</h1><div class="count" id="count">0<\/div><button id="increment">+<\/button><button id="reset">Reset<\/button><\/div><script>let count=0;const display=document.getElementById('count');document.getElementById('increment').onclick=()=>display.textContent=++count;document.getElementById('reset').onclick=()=>display.textContent=count=0;<\/script><\/body><\/html>` },
                    color: { name: "Color Changer", code: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Color Changer</title><style>*{margin:0;padding:0;box-sizing:border-box}body{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;display:flex;align-items:center;justify-content:center;transition:background 0.5s ease}.container{background:rgba(255,255,255,0.1);border-radius:20px;padding:60px 40px;text-align:center;backdrop-filter:blur(10px);max-width:500px;animation:slideIn 0.5s ease-out}h1{color:white;font-size:2.5rem;margin-bottom:30px}.color-display{color:white;font-size:1.1rem;font-weight:500;margin-bottom:30px;background:rgba(0,0,0,0.2);padding:15px;border-radius:10px;font-family:monospace}.color-box{width:120px;height:120px;border-radius:15px;margin:30px auto;background:white;box-shadow:0 10px 30px rgba(0,0,0,0.3);animation:bounce 0.6s ease-out}@keyframes bounce{0%{transform:scale(0.8)}50%{transform:scale(1.1)}100%{transform:scale(1)}}button{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;border:none;padding:14px 40px;font-size:1.05rem;font-weight:700;border-radius:12px;cursor:pointer;transition:all 0.3s;box-shadow:0 4px 15px rgba(102,126,234,0.4)}button:hover{transform:translateY(-3px)}<\/style><\/head><body><div class="container"><h1>🎨 Color Changer<\/h1><div class="color-display">Current: <span id="code">#667eea<\/span><\/div><div class="color-box" id="box"><\/div><button id="btn">Change<\/button><\/div><script>const randomColor=()=>'#'+Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');document.getElementById('btn').onclick=()=>{const color=randomColor();document.body.style.background=color;document.getElementById('code').textContent=color;document.getElementById('box').style.background=color;};<\/script><\/body><\/html>` },
                    theme: { name: "Theme Toggle", code: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Theme Toggle</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',sans-serif;transition:background 0.3s,color 0.3s}body.light{background:#f5f5f5;color:#333}body.dark{background:#1a1a1a;color:#f5f5f5}.container{max-width:800px;margin:0 auto;padding:40px;text-align:center}h1{margin-bottom:30px}.toggle{width:60px;height:30px;background:#ccc;border-radius:15px;cursor:pointer;position:relative;transition:background 0.3s;margin:20px auto}body.dark .toggle{background:#4ade80}.toggle-btn{width:26px;height:26px;background:white;border-radius:13px;position:absolute;top:2px;left:2px;transition:left 0.3s}body.dark .toggle-btn{left:32px}.content{margin-top:40px}<\/style><\/head><body class="light"><div class="container"><h1>🌙 Theme Toggle<\/h1><div class="toggle" id="toggle"><div class="toggle-btn"><\/div><\/div><div class="content"><p>Click the toggle to switch themes<\/p><\/div><\/div><script>const toggle=document.getElementById('toggle');const isDark=localStorage.getItem('theme')==='dark';document.body.classList.toggle('dark',isDark);toggle.onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('theme',document.body.classList.contains('dark')?'dark':'light');};<\/script><\/body><\/html>` },
                    word: { name: "Word Counter", code: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Word Counter</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px}.container{background:white;border-radius:15px;padding:30px;max-width:600px;width:100%;box-shadow:0 10px 40px rgba(0,0,0,0.2)}h1{color:#333;margin-bottom:20px}textarea{width:100%;height:200px;padding:15px;border:2px solid #ddd;border-radius:8px;font-size:1rem;font-family:inherit;resize:none}textarea:focus{outline:none;border-color:#667eea}.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:15px;margin-top:20px}.stat{background:#f5f5f5;padding:15px;border-radius:8px;text-align:center}.stat-number{font-size:2rem;font-weight:700;color:#667eea}.stat-label{font-size:0.9rem;color:#666;margin-top:5px}<\/style><\/head><body><div class="container"><h1>📝 Word Counter<\/h1><textarea id="text" placeholder="Type something..."><\/textarea><div class="stats"><div class="stat"><div class="stat-number" id="words">0<\/div><div class="stat-label">Words<\/div><\/div><div class="stat"><div class="stat-number" id="chars">0<\/div><div class="stat-label">Characters<\/div><\/div><div class="stat"><div class="stat-number" id="sentences">0<\/div><div class="stat-label">Sentences<\/div><\/div><\/div><\/div><script>const text=document.getElementById('text');text.addEventListener('input',()=>{const content=text.value;document.getElementById('words').textContent=content.trim().split(/\\s+/).filter(w=>w).length;document.getElementById('chars').textContent=content.length;document.getElementById('sentences').textContent=content.split(/[.!?]+/).filter(s=>s.trim()).length;});<\/script><\/body><\/html>` },
                    bulb: { name: "Bulb Toggle", code: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Bulb Toggle</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',sans-serif;background:#2c3e50;min-height:100vh;display:flex;align-items:center;justify-content:center;transition:background 0.5s}body.on{background:#f1c40f}.container{text-align:center}.bulb{font-size:100px;margin-bottom:20px}h1{color:white;margin-bottom:30px}body.on h1{color:#2c3e50}button{padding:15px 40px;font-size:1.2rem;font-weight:700;border:2px solid white;background:transparent;color:white;border-radius:8px;cursor:pointer;transition:all 0.3s}body.on button{border-color:#2c3e50;color:#2c3e50}button:hover{transform:scale(1.05)}<\/style><\/head><body><div class="container"><div class="bulb" id="bulb">💡<\/div><h1 id="status">OFF<\/h1><button id="toggle">Toggle<\/button><\/div><script>const btn=document.getElementById('toggle');btn.onclick=()=>{document.body.classList.toggle('on');document.getElementById('status').textContent=document.body.classList.contains('on')?'ON':'OFF';};<\/script><\/body><\/html>` },
                    todo: { name: "Todo List", code: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Todo List</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px}.container{background:white;border-radius:15px;padding:30px;max-width:500px;width:100%;box-shadow:0 10px 40px rgba(0,0,0,0.2)}h1{color:#333;margin-bottom:20px;text-align:center}.input-group{display:flex;gap:10px;margin-bottom:20px}input{flex:1;padding:10px;border:2px solid #ddd;border-radius:8px;font-size:1rem}input:focus{outline:none;border-color:#667eea}button{padding:10px 20px;background:#667eea;color:white;border:none;border-radius:8px;cursor:pointer;font-weight:600}button:hover{background:#764ba2}#todos{list-style:none}.todo-item{display:flex;align-items:center;padding:12px;background:#f5f5f5;margin-bottom:10px;border-radius:8px;gap:10px}.todo-item.done{opacity:0.6}.todo-item.done span{text-decoration:line-through}.delete{background:#ef4444;padding:5px 10px;font-size:0.8rem}.delete:hover{background:#dc2626}<\/style><\/head><body><div class="container"><h1>✓ Todo List<\/h1><div class="input-group"><input type="text" id="input" placeholder="Add a task..."><button id="add">Add<\/button><\/div><ul id="todos"><\/ul><\/div><script>const input=document.getElementById('input');const todos=document.getElementById('todos');document.getElementById('add').onclick=()=>{if(!input.value)return;const li=document.createElement('li');li.className='todo-item';li.innerHTML=\`<input type="checkbox"> <span>\${input.value}<\/span> <button class="delete">✕<\/button>\`;li.querySelector('input').onchange=()=>li.classList.toggle('done');li.querySelector('.delete').onclick=()=>li.remove();todos.appendChild(li);input.value='';};<\/script><\/body><\/html>` },
                    password: { name: "Password Generator", code: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Password Generator</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;display:flex;align-items:center;justify-content:center}.container{background:white;border-radius:15px;padding:40px;max-width:500px;width:100%;box-shadow:0 10px 40px rgba(0,0,0,0.2);text-align:center}h1{color:#333;margin-bottom:30px}.password-box{background:#f5f5f5;padding:20px;border-radius:8px;margin-bottom:20px;word-break:break-all;font-family:monospace;font-size:1.1rem;min-height:50px;display:flex;align-items:center;justify-content:center}.length-group{margin-bottom:20px;text-align:left}label{display:block;margin-bottom:10px;color:#333}.options{margin-bottom:20px;text-align:left}.option{margin-bottom:10px}input[type="checkbox"]{margin-right:10px}button{width:100%;padding:12px;background:#667eea;color:white;border:none;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer}button:hover{background:#764ba2}<\/style><\/head><body><div class="container"><h1>🔐 Password Generator<\/h1><div class="password-box" id="password">Click Generate<\/div><div class="length-group"><label>Length: <span id="length-value">12<\/span><\/label><input type="range" id="length" min="8" max="32" value="12"><\/div><div class="options"><div class="option"><input type="checkbox" id="uppercase" checked> Uppercase<\/div><div class="option"><input type="checkbox" id="numbers" checked> Numbers<\/div><div class="option"><input type="checkbox" id="symbols" checked> Symbols<\/div><\/div><button id="generate">Generate Password<\/button><\/div><script>const generate=()=>{const chars='abcdefghijklmnopqrstuvwxyz';const upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ';const nums='0123456789';const syms='!@#$%^&*()_+-=[]{}|;:,.<>?';let pool=chars;if(document.getElementById('uppercase').checked)pool+=upper;if(document.getElementById('numbers').checked)pool+=nums;if(document.getElementById('symbols').checked)pool+=syms;const len=document.getElementById('length').value;let pwd='';for(let i=0;i<len;i++)pwd+=pool.charAt(Math.floor(Math.random()*pool.length));document.getElementById('password').textContent=pwd;};document.getElementById('length').oninput=(e)=>document.getElementById('length-value').textContent=e.target.value;document.getElementById('generate').onclick=generate;<\/script><\/body><\/html>` }
                }
            },
            medium: {
                title: "📈 Medium Projects",
                items: {
                    quote: { name: "Quote Generator", code: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Quote Generator</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Georgia',serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;display:flex;align-items:center;justify-content:center}.container{background:rgba(255,255,255,0.95);border-radius:20px;padding:50px 40px;max-width:600px;box-shadow:0 20px 60px rgba(0,0,0,0.3)}h1{color:#333;text-align:center;margin-bottom:40px}.quote-box{background:linear-gradient(135deg,#667eea15 0%,#764ba215 100%);border-left:5px solid #667eea;padding:30px;border-radius:10px;margin-bottom:30px}.quote-text{font-size:1.4rem;color:#333;font-style:italic;margin-bottom:15px}.quote-author{text-align:right;color:#666;font-weight:600}.buttons{display:flex;gap:12px;justify-content:center}button{padding:12px 24px;font-size:0.95rem;font-weight:600;border:none;border-radius:8px;cursor:pointer;transition:all 0.3s}#new-quote{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white}#new-quote:hover{transform:translateY(-2px)}<\/style><\/head><body><div class="container"><h1>💭 Quote Generator<\/h1><div class="quote-box"><div class="quote-text" id="text">"The only way to do great work is to love what you do."<\/div><div class="quote-author" id="author">— Steve Jobs<\/div><\/div><div class="buttons"><button id="new-quote">New Quote<\/button><\/div><\/div><script>const quotes=[{text:"The only way to do great work is to love what you do.",author:"Steve Jobs"},{text:"Innovation distinguishes between a leader and a follower.",author:"Steve Jobs"},{text:"Life is what happens when you're busy making other plans.",author:"John Lennon"},{text:"The future belongs to those who believe in the beauty of their dreams.",author:"Eleanor Roosevelt"}];const show=()=>{const q=quotes[Math.floor(Math.random()*quotes.length)];document.getElementById('text').textContent='"'+q.text+'"';document.getElementById('author').textContent='— '+q.author;};document.getElementById('new-quote').onclick=show;<\/script><\/body><\/html>` },
                    clock: { name: "Digital Clock", code: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Digital Clock</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Courier New',monospace;background:#1a1a2e;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center}h1{color:#0f3460;margin-bottom:40px;font-size:2rem}.clock{background:linear-gradient(135deg,#0f3460 0%,#16213e 100%);border:3px solid #e94560;border-radius:20px;padding:40px 80px;box-shadow:0 20px 60px rgba(233,69,96,0.3)}.time{font-size:6rem;color:#00d4ff;font-weight:bold;letter-spacing:5px;text-shadow:0 0 20px #00d4ff}.date{font-size:1.2rem;color:#e94560;margin-top:20px;text-align:center}<\/style><\/head><body><h1>⏰ Digital Clock<\/h1><div class="clock"><div class="time" id="time">00:00:00<\/div><div class="date" id="date"><\/div><\/div><script>const update=()=>{const now=new Date();const time=now.toLocaleTimeString();const date=now.toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'});document.getElementById('time').textContent=time;document.getElementById('date').textContent=date;};update();setInterval(update,1000);<\/script><\/body><\/html>` },
                    bmi: { name: "BMI Calculator", code: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>BMI Calculator</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;display:flex;align-items:center;justify-content:center}.container{background:white;border-radius:15px;padding:40px;max-width:500px;box-shadow:0 10px 40px rgba(0,0,0,0.2)}h1{color:#333;text-align:center;margin-bottom:30px}.form-group{margin-bottom:20px}label{display:block;margin-bottom:5px;color:#333;font-weight:600}input{width:100%;padding:10px;border:2px solid #ddd;border-radius:8px;font-size:1rem}input:focus{outline:none;border-color:#667eea}button{width:100%;padding:12px;background:#667eea;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;margin-top:10px}button:hover{background:#764ba2}.result{margin-top:20px;padding:20px;background:#f5f5f5;border-radius:8px;text-align:center;display:none}.result.show{display:block}.bmi-value{font-size:2.5rem;font-weight:700;color:#667eea}.bmi-category{font-size:1.2rem;color:#666;margin-top:10px}<\/style><\/head><body><div class="container"><h1>⚖️ BMI Calculator<\/h1><div class="form-group"><label>Weight (kg)<\/label><input type="number" id="weight" placeholder="70"><\/div><div class="form-group"><label>Height (cm)<\/label><input type="number" id="height" placeholder="175"><\/div><button onclick="calculate()">Calculate BMI<\/button><div class="result" id="result"><div class="bmi-value" id="bmi"><\/div><div class="bmi-category" id="category"><\/div><\/div><\/div><script>function calculate(){const w=parseFloat(document.getElementById('weight').value);const h=parseFloat(document.getElementById('height').value)/100;if(!w||!h)return;const bmi=(w/(h*h)).toFixed(1);let cat='';if(bmi<18.5)cat='Underweight';else if(bmi<25)cat='Normal';else if(bmi<30)cat='Overweight';else cat='Obese';document.getElementById('bmi').textContent=bmi;document.getElementById('category').textContent=cat;document.getElementById('result').classList.add('show');}<\/script><\/body><\/html>` },
                    bulbColor: { name: "Bulb Colour", code: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Bulb Colour</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',sans-serif;background:#1a1a2e;min-height:100vh;display:flex;align-items:center;justify-content:center;transition:background 0.5s}.container{text-align:center}.bulb{font-size:120px;margin-bottom:20px;animation:glow 2s ease-in-out infinite}@keyframes glow{0%,100%{filter:drop-shadow(0 0 10px currentColor)}50%{filter:drop-shadow(0 0 30px currentColor)}}h1{color:#00d4ff;margin-bottom:30px}.color-display{background:rgba(255,255,255,0.1);color:#00d4ff;padding:15px;border-radius:8px;font-family:monospace;margin-bottom:20px}button{padding:12px 30px;background:#00d4ff;color:#1a1a2e;border:none;border-radius:8px;font-weight:700;cursor:pointer;transition:all 0.3s}button:hover{transform:scale(1.05)}<\/style><\/head><body><div class="container"><div class="bulb" id="bulb">💡<\/div><h1>🎨 Bulb Colour<\/h1><div class="color-display" id="color">#FFD700<\/div><button onclick="changeColor()">Change Color<\/button><\/div><script>const colors=['#FFD700','#FF6B6B','#4ECDC4','#45B7D1','#FFA07A','#98D8C8'];const bulb=document.getElementById('bulb');let colorIndex=0;function changeColor(){colorIndex=(colorIndex+1)%colors.length;bulb.style.color=colors[colorIndex];document.getElementById('color').textContent=colors[colorIndex];}<\/script><\/body><\/html>` },
                    stopwatch: { name: "Stopwatch", code: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Stopwatch</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Courier New',monospace;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;display:flex;align-items:center;justify-content:center}.container{text-align:center;background:white;padding:50px;border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,0.3)}h1{color:#333;margin-bottom:30px}.display{font-size:4rem;color:#667eea;margin-bottom:30px;font-weight:bold}.buttons{display:flex;gap:15px;justify-content:center}button{padding:12px 30px;font-size:1rem;font-weight:600;border:none;border-radius:8px;cursor:pointer;transition:all 0.3s}#start{background:#4ade80;color:white}#stop{background:#ef4444;color:white}#reset{background:#94a3b8;color:white}button:hover{transform:translateY(-2px)}<\/style><\/head><body><div class="container"><h1>⏱️ Stopwatch<\/h1><div class="display" id="display">00:00:00<\/div><div class="buttons"><button id="start">Start<\/button><button id="stop">Stop<\/button><button id="reset">Reset<\/button><\/div><\/div><script>let ms=0,running=false;const display=document.getElementById('display');const update=()=>{if(running)ms+=10;const s=Math.floor(ms/1000)%60;const m=Math.floor(ms/60000)%60;const h=Math.floor(ms/3600000);display.textContent=[h,m,s].map(x=>String(x).padStart(2,'0')).join(':');if(running)requestAnimationFrame(update);};document.getElementById('start').onclick=()=>{running=true;update();};document.getElementById('stop').onclick=()=>running=false;document.getElementById('reset').onclick=()=>{running=false;ms=0;update();};<\/script><\/body><\/html>` },
                    weather: { name: "Weather App", code: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Weather App</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;display:flex;align-items:center;justify-content:center}.container{background:rgba(255,255,255,0.95);border-radius:20px;padding:40px;max-width:500px;box-shadow:0 20px 60px rgba(0,0,0,0.3)}h1{color:#333;text-align:center;margin-bottom:20px}.search{display:flex;gap:10px;margin-bottom:30px}input{flex:1;padding:10px;border:2px solid #ddd;border-radius:8px}input:focus{outline:none;border-color:#667eea}button{padding:10px 20px;background:#667eea;color:white;border:none;border-radius:8px;cursor:pointer}.weather{text-align:center}.temp{font-size:3rem;color:#667eea;font-weight:bold}.desc{font-size:1.2rem;color:#666;margin-top:10px}<\/style><\/head><body><div class="container"><h1>🌤️ Weather App<\/h1><div class="search"><input type="text" id="city" placeholder="Enter city..."><button onclick="search()">Search<\/button><\/div><div class="weather"><div class="temp" id="temp">--°C<\/div><div class="desc" id="desc">Search for a city<\/div><\/div><\/div><script>const search=()=>{const city=document.getElementById('city').value;if(!city)return;const temps={london:15,paris:14,tokyo:20,newyork:10,sydney:25};const temp=temps[city.toLowerCase()]||Math.floor(Math.random()*30);document.getElementById('temp').textContent=temp+'°C';document.getElementById('desc').textContent='Weather in '+city;};<\/script><\/body><\/html>` },
                    joke: { name: "Joke Generator", code: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Joke Generator</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;display:flex;align-items:center;justify-content:center}.container{background:white;border-radius:15px;padding:40px;max-width:600px;text-align:center;box-shadow:0 10px 40px rgba(0,0,0,0.2)}h1{color:#333;margin-bottom:30px}.joke-box{background:#f5f5f5;padding:30px;border-radius:10px;margin-bottom:20px;min-height:100px;display:flex;align-items:center;justify-content:center}.joke{font-size:1.1rem;color:#333;line-height:1.6}button{padding:12px 30px;background:#667eea;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer}button:hover{background:#764ba2}<\/style><\/head><body><div class="container"><h1>😂 Joke Generator<\/h1><div class="joke-box"><div class="joke" id="joke">Click the button to get a joke!<\/div><\/div><button onclick="getJoke()">Get New Joke<\/button><\/div><script>const jokes=["Why don't scientists trust atoms? Because they make up everything!","What do you call a bear with no teeth? A gummy bear!","Why did the scarecrow win an award? He was outstanding in his field!","What do you call fake spaghetti? An impasta!","Why don't eggs tell jokes? They'd crack each other up!"];function getJoke(){document.getElementById('joke').textContent=jokes[Math.floor(Math.random()*jokes.length)];}<\/script><\/body><\/html>` }
                }
            },
            intermediate: {
                title: "🚀 Intermediate Projects",
                items: {
                    calculator: { name: "Calculator", code: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Calculator</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;display:flex;align-items:center;justify-content:center}.calculator{background:white;border-radius:15px;padding:20px;box-shadow:0 20px 60px rgba(0,0,0,0.3);width:320px}.display{background:#333;color:#00d4ff;font-size:2rem;padding:20px;border-radius:8px;text-align:right;margin-bottom:20px;font-weight:bold;word-wrap:break-word}.buttons{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}button{padding:20px;font-size:1.2rem;border:none;border-radius:8px;cursor:pointer;font-weight:600;transition:all 0.2s}button:hover{transform:translateY(-2px)}.num{background:#e0e0e0}.op{background:#667eea;color:white}.eq{background:#4ade80;color:white;grid-column:span 2}.clear{background:#ef4444;color:white;grid-column:span 2}<\/style><\/head><body><div class="calculator"><div class="display" id="display">0<\/div><div class="buttons"><button class="clear" onclick="clear()">C<\/button><button class="op" onclick="append('/')">÷<\/button><button class="op" onclick="append('*')">×<\/button><button class="num" onclick="append('7')">7<\/button><button class="num" onclick="append('8')">8<\/button><button class="num" onclick="append('9')">9<\/button><button class="op" onclick="append('-')">−<\/button><button class="num" onclick="append('4')">4<\/button><button class="num" onclick="append('5')">5<\/button><button class="num" onclick="append('6')">6<\/button><button class="op" onclick="append('+')">+<\/button><button class="num" onclick="append('1')">1<\/button><button class="num" onclick="append('2')">2<\/button><button class="num" onclick="append('3')">3<\/button><button class="num" onclick="append('.')">.<\/button><button class="num" onclick="append('0')" style="grid-column:span 2">0<\/button><button class="eq" onclick="calculate()">=<\/button><\/div><\/div><script>let display=document.getElementById('display');function append(val){display.textContent=display.textContent==='0'?val:display.textContent+val;}function clear(){display.textContent='0';}function calculate(){try{display.textContent=eval(display.textContent);}catch(e){display.textContent='Error';}}<\/script><\/body><\/html>` },
                    slider: { name: "Image Slider", code: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Image Slider</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',sans-serif;background:#1a1a2e;min-height:100vh;display:flex;align-items:center;justify-content:center}.slider-container{max-width:600px;background:white;border-radius:15px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.3)}.slider{position:relative;height:400px;overflow:hidden}.slide{display:none;width:100%;height:100%;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);font-size:4rem;display:flex;align-items:center;justify-content:center;color:white}.slide.active{display:flex}.controls{display:flex;justify-content:space-between;align-items:center;padding:20px;background:#f5f5f5}button{padding:10px 20px;background:#667eea;color:white;border:none;border-radius:8px;cursor:pointer;font-weight:600}button:hover{background:#764ba2}.dots{display:flex;gap:10px}.dot{width:12px;height:12px;border-radius:50%;background:#ccc;cursor:pointer}.dot.active{background:#667eea}<\/style><\/head><body><div class="slider-container"><div class="slider" id="slider"><div class="slide active">🖼️ Slide 1<\/div><div class="slide">🎨 Slide 2<\/div><div class="slide">🌈 Slide 3<\/div><div class="slide">✨ Slide 4<\/div><\/div><div class="controls"><button onclick="prev()">← Prev<\/button><div class="dots" id="dots"><\/div><button onclick="next()">Next →<\/button><\/div><\/div><script>let idx=0;const slides=document.querySelectorAll('.slide');const dotsContainer=document.getElementById('dots');slides.forEach((_,i)=>{const dot=document.createElement('div');dot.className=i===0?'dot active':'dot';dot.onclick=()=>goTo(i);dotsContainer.appendChild(dot);});function show(){slides.forEach((s,i)=>s.classList.toggle('active',i===idx));document.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i===idx));}function next(){idx=(idx+1)%slides.length;show();}function prev(){idx=(idx-1+slides.length)%slides.length;show();}function goTo(n){idx=n;show();}<\/script><\/body><\/html>` },
                    form: { name: "Form Validation", code: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Form Validation</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;display:flex;align-items:center;justify-content:center}.form-container{background:white;border-radius:15px;padding:40px;max-width:500px;box-shadow:0 20px 60px rgba(0,0,0,0.3)}h1{color:#333;margin-bottom:30px;text-align:center}.form-group{margin-bottom:20px}label{display:block;margin-bottom:5px;color:#333;font-weight:600}input{width:100%;padding:10px;border:2px solid #ddd;border-radius:8px;font-size:1rem}input:focus{outline:none;border-color:#667eea}input.error{border-color:#ef4444}input.valid{border-color:#4ade80}.error-msg{color:#ef4444;font-size:0.9rem;margin-top:5px;display:none}.error-msg.show{display:block}button{width:100%;padding:12px;background:#667eea;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;margin-top:20px}button:hover{background:#764ba2}<\/style><\/head><body><div class="form-container"><h1>✅ Form Validation<\/h1><form id="form"><div class="form-group"><label>Email<\/label><input type="email" id="email" placeholder="your@email.com"><div class="error-msg" id="emailErr">Invalid email<\/div><\/div><div class="form-group"><label>Password<\/label><input type="password" id="password" placeholder="Min 8 chars"><div class="error-msg" id="passErr">Password must be 8+ characters<\/div><\/div><div class="form-group"><label>Phone<\/label><input type="tel" id="phone" placeholder="10 digits"><div class="error-msg" id="phoneErr">Invalid phone number<\/div><\/div><button type="submit">Submit<\/button><\/form><\/div><script>const form=document.getElementById('form');const inputs={email:/^[^@]+@[^@]+\\.[^@]+$/,password:/.{8,}/,phone:/^\\d{10}$/};Object.keys(inputs).forEach(key=>{document.getElementById(key).addEventListener('input',(e)=>{const valid=inputs[key].test(e.target.value);e.target.classList.toggle('valid',valid);e.target.classList.toggle('error',!valid&&e.target.value);document.getElementById(key+'Err').classList.toggle('show',!valid&&e.target.value);});});form.addEventListener('submit',(e)=>{e.preventDefault();const all=Object.keys(inputs).every(k=>inputs[k].test(document.getElementById(k).value));if(all)alert('Form submitted successfully!');});<\/script><\/body><\/html>` },
                    expense: { name: "Expense Tracker", code: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Expense Tracker</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;padding:20px}.container{max-width:600px;margin:0 auto;background:white;border-radius:15px;padding:30px;box-shadow:0 20px 60px rgba(0,0,0,0.3)}h1{color:#333;margin-bottom:30px;text-align:center}.input-group{display:flex;gap:10px;margin-bottom:20px}input{flex:1;padding:10px;border:2px solid #ddd;border-radius:8px}input:focus{outline:none;border-color:#667eea}button{padding:10px 20px;background:#667eea;color:white;border:none;border-radius:8px;cursor:pointer;font-weight:600}button:hover{background:#764ba2}.summary{display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-bottom:20px}.summary-item{background:#f5f5f5;padding:15px;border-radius:8px;text-align:center}.summary-value{font-size:1.8rem;font-weight:bold;color:#667eea}.summary-label{font-size:0.9rem;color:#666;margin-top:5px}#expenses{list-style:none}.expense-item{display:flex;justify-content:space-between;align-items:center;padding:12px;background:#f5f5f5;border-radius:8px;margin-bottom:10px}.expense-amount{font-weight:bold;color:#667eea}.delete{background:#ef4444;padding:5px 10px;font-size:0.8rem}.delete:hover{background:#dc2626}<\/style><\/head><body><div class="container"><h1>💰 Expense Tracker<\/h1><div class="input-group"><input type="text" id="desc" placeholder="Description"><input type="number" id="amount" placeholder="Amount"><button onclick="add()">Add<\/button><\/div><div class="summary"><div class="summary-item"><div class="summary-value" id="total">0<\/div><div class="summary-label">Total<\/div><\/div><div class="summary-item"><div class="summary-value" id="count">0<\/div><div class="summary-label">Items<\/div><\/div><\/div><ul id="expenses"><\/ul><\/div><script>let expenses=JSON.parse(localStorage.getItem('expenses'))||[];function render(){const list=document.getElementById('expenses');list.innerHTML=expenses.map((e,i)=>\`<li class="expense-item"><span>\${e.desc}<\/span><span class="expense-amount">$\${e.amount}<\/span><button class="delete" onclick="del(\${i})">✕<\/button><\/li>\`).join('');const total=expenses.reduce((s,e)=>s+parseFloat(e.amount),0);document.getElementById('total').textContent=total.toFixed(2);document.getElementById('count').textContent=expenses.length;}function add(){const desc=document.getElementById('desc').value;const amount=document.getElementById('amount').value;if(desc&&amount){expenses.push({desc,amount});localStorage.setItem('expenses',JSON.stringify(expenses));document.getElementById('desc').value='';document.getElementById('amount').value='';render();}}function del(i){expenses.splice(i,1);localStorage.setItem('expenses',JSON.stringify(expenses));render();}render();<\/script><\/body><\/html>` },
                    movie: { name: "Movie Search", code: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Movie Search</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;padding:20px}.container{max-width:800px;margin:0 auto}h1{color:white;text-align:center;margin-bottom:30px}.search-box{display:flex;gap:10px;margin-bottom:30px}input{flex:1;padding:12px;border:none;border-radius:8px;font-size:1rem}input:focus{outline:none}button{padding:12px 30px;background:#4ade80;color:white;border:none;border-radius:8px;cursor:pointer;font-weight:600}button:hover{background:#22c55e}.results{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:20px}.movie{background:white;border-radius:10px;padding:15px;box-shadow:0 5px 15px rgba(0,0,0,0.2)}.movie h3{color:#333;margin-bottom:10px}.movie p{color:#666;font-size:0.9rem;line-height:1.5}<\/style><\/head><body><div class="container"><h1>🎬 Movie Search<\/h1><div class="search-box"><input type="text" id="search" placeholder="Search movies..."><button onclick="search()">Search<\/button><\/div><div class="results" id="results"><\/div><\/div><script>const movies=[{title:'Inception',year:2010},{title:'The Matrix',year:1999},{title:'Interstellar',year:2014},{title:'Pulp Fiction',year:1994}];function search(){const query=document.getElementById('search').value.toLowerCase();const results=movies.filter(m=>m.title.toLowerCase().includes(query));document.getElementById('results').innerHTML=results.map(m=>\`<div class="movie"><h3>\${m.title}<\/h3><p>Year: \${m.year}<\/p><\/div>\`).join('');};<\/script><\/body><\/html>` },
                    quiz: { name: "Quiz Game", code: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Quiz Game</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;display:flex;align-items:center;justify-content:center}.quiz{background:white;border-radius:15px;padding:40px;max-width:600px;box-shadow:0 20px 60px rgba(0,0,0,0.3)}h1{color:#333;margin-bottom:20px}.question{color:#666;margin-bottom:20px;font-size:1.1rem}.options{display:flex;flex-direction:column;gap:10px;margin-bottom:20px}.option{padding:12px;border:2px solid #ddd;border-radius:8px;cursor:pointer;transition:all 0.2s}.option:hover{border-color:#667eea;background:#f5f5f5}.option.selected{border-color:#667eea;background:#667eea;color:white}button{width:100%;padding:12px;background:#4ade80;color:white;border:none;border-radius:8px;cursor:pointer;font-weight:600}button:hover{background:#22c55e}.score{text-align:center;color:#667eea;font-size:2rem;font-weight:bold}<\/style><\/head><body><div class="quiz" id="quiz"><h1>🎯 Quiz Game<\/h1><div class="question" id="question"><\/div><div class="options" id="options"><\/div><button onclick="next()">Next Question<\/button><\/div><script>const questions=[{q:'What is 2+2?',a:['3','4','5','6'],correct:1},{q:'What is the capital of France?',a:['London','Berlin','Paris','Rome'],correct:2}];let current=0,score=0;function show(){const q=questions[current];document.getElementById('question').textContent=q.q;document.getElementById('options').innerHTML=q.a.map((a,i)=>\`<div class="option" onclick="select(\${i})" data-correct="\${i===q.correct}">\${a}<\/div>\`).join('');}function select(i){const correct=questions[current].correct;if(i===correct)score++;document.querySelectorAll('.option').forEach(o=>o.onclick=null);}function next(){current++;if(current<questions.length)show();else document.getElementById('quiz').innerHTML=\`<div class="score">Score: \${score}/\${questions.length}<\/div>\`;}show();<\/script><\/body><\/html>` },
                    pomodoro: { name: "Pomodoro Timer", code: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Pomodoro Timer</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Courier New',monospace;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;display:flex;align-items:center;justify-content:center}.container{text-align:center;background:white;padding:50px;border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,0.3)}h1{color:#333;margin-bottom:30px}.timer{font-size:4rem;color:#667eea;margin-bottom:30px;font-weight:bold}.status{font-size:1.2rem;color:#666;margin-bottom:20px}.buttons{display:flex;gap:15px;justify-content:center}button{padding:12px 30px;font-size:1rem;font-weight:600;border:none;border-radius:8px;cursor:pointer}#start{background:#4ade80;color:white}#pause{background:#f59e0b;color:white}#reset{background:#ef4444;color:white}<\/style><\/head><body><div class="container"><h1>🍅 Pomodoro Timer<\/h1><div class="status" id="status">Work Time<\/div><div class="timer" id="timer">25:00<\/div><div class="buttons"><button id="start">Start<\/button><button id="pause">Pause<\/button><button id="reset">Reset<\/button><\/div><\/div><script>let time=1500,running=false;const display=document.getElementById('timer');const update=()=>{const m=Math.floor(time/60);const s=time%60;display.textContent=String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');if(running&&time>0){time--;setTimeout(update,1000);}};document.getElementById('start').onclick=()=>{running=true;update();};document.getElementById('pause').onclick=()=>running=false;document.getElementById('reset').onclick=()=>{running=false;time=1500;update();};update();<\/script><\/body><\/html>` },
                    rps: { name: "Rock Paper Scissors", code: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Rock Paper Scissors</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;display:flex;align-items:center;justify-content:center}.container{background:white;border-radius:15px;padding:40px;max-width:500px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.3)}h1{color:#333;margin-bottom:20px}.score{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:30px}.score-item{background:#f5f5f5;padding:15px;border-radius:8px}.score-value{font-size:2rem;font-weight:bold;color:#667eea}.choices{display:flex;gap:15px;justify-content:center;margin-bottom:30px}button{padding:15px 25px;font-size:1.2rem;border:none;border-radius:8px;cursor:pointer;transition:all 0.2s}button:hover{transform:scale(1.1)}.rock{background:#667eea;color:white}.paper{background:#4ade80;color:white}.scissors{background:#f59e0b;color:white}.result{font-size:1.5rem;color:#667eea;font-weight:bold;min-height:40px}<\/style><\/head><body><div class="container"><h1>✊ Rock Paper Scissors<\/h1><div class="score"><div class="score-item"><div>You<\/div><div class="score-value" id="userScore">0<\/div><\/div><div class="score-item"><div>Computer<\/div><div class="score-value" id="compScore">0<\/div><\/div><\/div><div class="choices"><button class="rock" onclick="play('rock')">Rock<\/button><button class="paper" onclick="play('paper')">Paper<\/button><button class="scissors" onclick="play('scissors')">Scissors<\/button><\/div><div class="result" id="result"><\/div><\/div><script>let userScore=0,compScore=0;const choices=['rock','paper','scissors'];function play(user){const comp=choices[Math.floor(Math.random()*3)];let result='Draw!';if((user==='rock'&&comp==='scissors')||(user==='paper'&&comp==='rock')||(user==='scissors'&&comp==='paper')){result='You Win!';userScore++;}else if(user!==comp){result='Computer Wins!';compScore++;}document.getElementById('result').textContent=result+' (You: '+user+', Computer: '+comp+')';document.getElementById('userScore').textContent=userScore;document.getElementById('compScore').textContent=compScore;}<\/script><\/body><\/html>` }
                }
            }
        };

        function highlightCode(code) {
            const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
            let result = '', i = 0;
            const keywords = new Set(['function', 'let', 'const', 'var', 'if', 'else', 'return', 'for', 'while', 'do', 'switch', 'case', 'break', 'continue', 'throw', 'new', 'this', 'class', 'async', 'await']);
            const functions = new Set(['addEventListener', 'getElementById', 'querySelector', 'appendChild', 'innerHTML', 'style', 'console', 'log', 'JSON', 'localStorage', 'setInterval', 'setTimeout', 'Math', 'floor', 'random', 'toString', 'padStart', 'split', 'filter', 'map', 'reduce', 'join', 'includes', 'toLowerCase', 'toUpperCase']);

            while (i < escaped.length) {
                if (escaped.substr(i, 7) === '&lt;!--') {
                    const endIdx = escaped.indexOf('--&gt;', i);
                    if (endIdx !== -1) {
                        result += '<span class="token comment">' + escaped.substring(i, endIdx + 6) + '</span>';
                        i = endIdx + 6;
                        continue;
                    }
                }
                if (escaped.substr(i, 4) === '&lt;') {
                    const endIdx = escaped.indexOf('&gt;', i);
                    if (endIdx !== -1) {
                        const fullTag = escaped.substring(i, endIdx + 4);
                        const tagMatch = fullTag.match(/^&lt;(\/?[\w-]+)/);
                        if (tagMatch) {
                            result += '<span class="token bracket">&lt;</span><span class="token tag">' + tagMatch[1] + '</span>';
                            const rest = fullTag.substring(tagMatch[0].length);
                            const highlighted = rest.replace(/(\w+)=(&quot;[^&]*&quot;|&#39;[^&]*&#39;)/g, '<span class="token attr-name">$1</span>=<span class="token attr-value">$2</span>');
                            result += highlighted;
                            i = endIdx + 4;
                            continue;
                        }
                    }
                }
                if (escaped[i] === '/' && escaped[i + 1] === '/') {
                    const endIdx = escaped.indexOf('\n', i);
                    const end = endIdx === -1 ? escaped.length : endIdx;
                    result += '<span class="token comment">' + escaped.substring(i, end) + '</span>';
                    i = end;
                    continue;
                }
                if (escaped[i] === '/' && escaped[i + 1] === '*') {
                    const endIdx = escaped.indexOf('*/', i);
                    if (endIdx !== -1) {
                        result += '<span class="token comment">' + escaped.substring(i, endIdx + 2) + '</span>';
                        i = endIdx + 2;
                        continue;
                    }
                }
                if (escaped.substr(i, 6) === '&quot;') {
                    const endIdx = escaped.indexOf('&quot;', i + 6);
                    if (endIdx !== -1) {
                        result += '<span class="token string">' + escaped.substring(i, endIdx + 6) + '</span>';
                        i = endIdx + 6;
                        continue;
                    }
                }
                if (escaped.substr(i, 5) === '&#39;') {
                    const endIdx = escaped.indexOf('&#39;', i + 5);
                    if (endIdx !== -1) {
                        result += '<span class="token string">' + escaped.substring(i, endIdx + 5) + '</span>';
                        i = endIdx + 5;
                        continue;
                    }
                }
                const numMatch = escaped.substr(i).match(/^\d+(?:\.\d+)?/);
                if (numMatch) {
                    result += '<span class="token number">' + numMatch[0] + '</span>';
                    i += numMatch[0].length;
                    continue;
                }
                const wordMatch = escaped.substr(i).match(/^[\w$]+/);
                if (wordMatch) {
                    const word = wordMatch[0];
                    if (keywords.has(word)) result += '<span class="token keyword">' + word + '</span>';
                    else if (functions.has(word)) result += '<span class="token function">' + word + '</span>';
                    else result += word;
                    i += word.length;
                    continue;
                }
                result += escaped[i];
                i++;
            }
            return result;
        }

        const codeDisplay = document.getElementById('code-display');
        const runBtn = document.getElementById('run-btn');
        const previewIframe = document.getElementById('preview-iframe');
        const previewPlaceholder = document.getElementById('preview-placeholder');
        const projectTitle = document.getElementById('project-title');
        const categoriesList = document.getElementById('categories-list');
        const tabsContainer = document.getElementById('tabs-container');
        const resizer = document.getElementById('resizer');
        const contentArea = document.getElementById('content-area');
        const codePanel = document.getElementById('code-panel');
        const previewPanel = document.getElementById('preview-panel');
        const fullscreenBtn = document.getElementById('fullscreen-btn');
        const fullscreenExitBtn = document.getElementById('fullscreen-exit-btn');
        const fullscreenOverlay = document.getElementById('fullscreen-overlay');

        let openTabs = [];
        let currentTab = null;
        let isDragging = false;

        // Prevent copy/context menu
        codeDisplay.addEventListener('contextmenu', e => e.preventDefault());
        codeDisplay.addEventListener('copy', e => e.preventDefault());
        codeDisplay.addEventListener('cut', e => e.preventDefault());
        codeDisplay.addEventListener('keydown', e => {
            if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'x')) e.preventDefault();
        });

        // Sync scrolling between code and line numbers
        const lineNumbers = document.getElementById('line-numbers');
        codeDisplay.addEventListener('scroll', () => {
            lineNumbers.scrollTop = codeDisplay.scrollTop;
        });

        // Render categories
        Object.entries(PROJECTS).forEach(([catKey, catData]) => {
            const catDiv = document.createElement('div');
            catDiv.className = 'category';
            catDiv.innerHTML = `<div class="category-header"><span class="category-title">${catData.title}</span><span class="category-toggle">▶</span></div><div class="projects-list"></div>`;
            const projectsList = catDiv.querySelector('.projects-list');
            Object.entries(catData.items).forEach(([projKey, projData]) => {
                const projDiv = document.createElement('div');
                projDiv.className = 'project-item';
                projDiv.textContent = projData.name;
                projDiv.onclick = () => openProject(catKey, projKey, projData);
                projectsList.appendChild(projDiv);
            });
            catDiv.querySelector('.category-header').onclick = () => catDiv.classList.toggle('collapsed');
            categoriesList.appendChild(catDiv);
        });

        function openProject(catKey, projKey, projData) {
            const tabId = catKey + '-' + projKey;
            if (!openTabs.find(t => t.id === tabId)) {
                openTabs.push({ id: tabId, name: projData.name, code: projData.code });
                renderTabs();
            }
            switchTab(tabId);
        }

        function renderTabs() {
            tabsContainer.innerHTML = openTabs.map(tab => `
                <button class="tab ${tab.id === currentTab ? 'active' : ''}" onclick="switchTab('${tab.id}')">
                    ${tab.name}
                    <span class="tab-close" onclick="closeTab(event, '${tab.id}')">✕</span>
                </button>
            `).join('');
        }

        function updateLineNumbers(code) {
            const lineCount = code.split('\n').length;
            let lineNumbersHtml = '';
            for (let i = 1; i <= lineCount; i++) {
                lineNumbersHtml += `<span>${i}</span>`;
            }
            document.getElementById('line-numbers').innerHTML = lineNumbersHtml;
        }

        function switchTab(tabId) {
            currentTab = tabId;
            const tab = openTabs.find(t => t.id === tabId);
            if (tab) {
                projectTitle.textContent = tab.name;
                const formattedCode = formatCode(tab.code);
                codeDisplay.innerHTML = highlightCode(formattedCode);
                updateLineNumbers(formattedCode);
                previewIframe.classList.remove('visible');
                previewPlaceholder.classList.remove('hidden');
                runBtn.textContent = '▶ Run Code';
                renderTabs();
            }
        }

        function closeTab(event, tabId) {
            event.stopPropagation();
            openTabs = openTabs.filter(t => t.id !== tabId);
            if (currentTab === tabId) {
                currentTab = openTabs.length > 0 ? openTabs[0].id : null;
                if (currentTab) switchTab(currentTab);
                else {
                    projectTitle.textContent = 'Select a Project';
                    codeDisplay.innerHTML = '';
                }
            }
            renderTabs();
        }

        runBtn.addEventListener('click', () => {
            const tab = openTabs.find(t => t.id === currentTab);
            if (tab) {
                previewIframe.srcdoc = tab.code;
                previewIframe.classList.add('visible');
                previewPlaceholder.classList.add('hidden');
                runBtn.textContent = '✓ Running...';
                setTimeout(() => runBtn.textContent = '▶ Run Code', 500);
            }
        });

        // ════════════════════════════════════════════════════════
        // DRAG-TO-RESIZE (PIXEL-BASED)
        // ════════════════════════════════════════════════════════
        resizer.addEventListener('mousedown', () => {
            isDragging = true;
            resizer.classList.add('dragging');
            document.body.classList.add('dragging');
            previewIframe.style.pointerEvents = 'none';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;

            const containerRect = contentArea.getBoundingClientRect();
            const leftWidth = e.clientX - containerRect.left;
            const rightWidth = containerRect.width - leftWidth - 6;

            // Minimum 300px each
            if (leftWidth < 300 || rightWidth < 300) return;

            contentArea.style.gridTemplateColumns = `${leftWidth}px 6px ${rightWidth}px`;
        });

        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                resizer.classList.remove('dragging');
                document.body.classList.remove('dragging');
                previewIframe.style.pointerEvents = 'auto';
            }
        });

        // ════════════════════════════════════════════════════════
        // FULLSCREEN MODE
        // ════════════════════════════════════════════════════════
        // FULLSCREEN MODE
        // ════════════════════════════════════════════════════════
        fullscreenBtn.addEventListener('click', () => {
            document.body.classList.toggle('preview-fullscreen');
        });

        fullscreenExitBtn.addEventListener('click', () => {
            document.body.classList.remove('preview-fullscreen');
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && document.body.classList.contains('preview-fullscreen')) {
                document.body.classList.remove('preview-fullscreen');
            }
        });

        // ════════════════════════════════════════════════════════
        // PANEL ACTIVATION
        // ════════════════════════════════════════════════════════
        codePanel.addEventListener('click', () => {
            codePanel.classList.add('active');
            previewPanel.classList.remove('active');
        });

        previewPanel.addEventListener('click', () => {
            previewPanel.classList.add('active');
            codePanel.classList.remove('active');
        });

        codePanel.classList.add('active');
