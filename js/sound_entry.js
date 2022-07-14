export default function soundEntry(sound, btnAudio){
    const d = document
    let soundTempo
    const strike = d.createElement('audio')
    strike.src = sound
    
    strike.play()
}