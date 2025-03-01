const App = () => {
  const textoDoRotulo = 'Nome:';
  const obterTextoDoBotao = () => { return 'Enviar' };
  const aoClicar = () => alert('Clicou');

  return (
    <div style={{ width: 768, margin: 'auto', backgroundColor: '#EEE', padding: 12, borderRadius: 8 }} >
      <label htmlFor="nome" style={{ display: 'block', marginBottom: 4 }}>
        {textoDoRotulo}
      </label>
      <input type="text" style={{ paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none' }} id="nome" />
      <button
        onClick={() => aoClicar()}
        style={{ marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8 }}>
        {obterTextoDoBotao()}
      </button>
    </div >
  )
}

export default App