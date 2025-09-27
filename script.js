function showMessage() {
    if (document.getElementById('customModal')) return;
    const modal = document.createElement('div');
    modal.id = 'customModal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(0,0,0,0.5)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '1000';

    const box = document.createElement('div');
    box.style.background = '#fff';
    box.style.color = '#0074D9';
    box.style.padding = '30px 40px';
    box.style.borderRadius = '12px';
    box.style.boxShadow = '0 4px 24px rgba(0,0,0,0.2)';
    box.style.fontSize = '1.3em';
    box.style.textAlign = 'center';
    box.innerText = 'Köszönöm! Üdvözöllek a weboldalon!';

    const closeBtn = document.createElement('button');
    closeBtn.innerText = 'Bezár';
    closeBtn.style.marginTop = '20px';
    closeBtn.style.padding = '8px 20px';
    closeBtn.style.fontSize = '1em';
    closeBtn.style.border = 'none';
    closeBtn.style.borderRadius = '6px';
    closeBtn.style.background = '#0074D9';
    closeBtn.style.color = '#fff';
    closeBtn.style.cursor = 'pointer';
    closeBtn.onclick = function() {
        document.body.removeChild(modal);
    };

    box.appendChild(document.createElement('br'));
    box.appendChild(closeBtn);
    modal.appendChild(box);
    document.body.appendChild(modal);
}