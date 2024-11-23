// Script.js

// Array para armazenar os itens do carrinho
let carrinho = [];
let total = 0;

// Função para adicionar ao carrinho
function adicionarAoCarrinho(id, nome, preco) {
    // Adiciona o item ao array de carrinho
    carrinho.push({ id, nome, preco });
    
    // Atualiza o total
    total += preco;

    // Atualiza a exibição do carrinho
    atualizarCarrinho();
}

// Função para atualizar o carrinho na interface
function atualizarCarrinho() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    
    // Limpa o conteúdo do carrinho
    cartItems.innerHTML = '';
    
    // Adiciona cada item ao HTML
    carrinho.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <p>${item.nome} - R$${item.preco.toFixed(2)}</p>
        `;
        cartItems.appendChild(itemElement);
    });

    // Atualiza o total e a contagem de itens
    cartTotal.textContent = `R$ ${total.toFixed(2)}`;
    cartCount.textContent = carrinho.length;
}

// Adiciona evento para abrir o modal do carrinho
document.getElementById('footer-cart-btn').addEventListener('click', () => {
    document.getElementById('cart-modal').classList.remove('hidden');
});

// Adiciona evento para fechar o modal do carrinho
document.getElementById('close-modal-btn').addEventListener('click', () => {
    document.getElementById('cart-modal').classList.add('hidden');
});



















// Atualizar eventos para o carrinho
document.querySelector('#cart-btn').addEventListener('click', () => {
    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.toggle('visible'); // Alterna a visibilidade do modal
});

// Função para adicionar ao carrinho
function adicionarAoCarrinho(id, nome, preco) {
    carrinho.push({ id, nome, preco });
    total += preco;
    atualizarCarrinho();
}

// Função para atualizar o carrinho no modal
function atualizarCarrinho() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = ''; // Limpa o conteúdo existente
    carrinho.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <p>${item.nome} - R$${item.preco.toFixed(2)}</p>
        `;
        cartItems.appendChild(itemElement);
    });

    // Atualiza o total
    cartTotal.textContent = `R$ ${total.toFixed(2)}`;
}

// Fechar o modal
document.getElementById('close-modal-btn').addEventListener('click', () => {
    document.getElementById('cart-modal').classList.remove('visible');
});

// Finalizar pedido
document.getElementById('checkout-btn').addEventListener('click', () => {
    const addressInput = document.getElementById('address').value.trim();
    if (!addressInput) {
        alert('Por favor, insira o endereço completo!');
        return;
    }
    alert(`Pedido finalizado! Enviado para: ${addressInput}`);
    carrinho = [];
    total = 0;
    document.getElementById('address').value = '';
    atualizarCarrinho();
    document.getElementById('cart-modal').classList.remove('visible');
});







































// Navbar e Interações de Pesquisa e Carrinho
let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
};

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
};

// Integração com WhatsApp
document.querySelector('#contact-btn').onclick = () => {
    const nome = document.querySelector('#nome').value.trim();
    const email = document.querySelector('#email').value.trim();
    const numero = document.querySelector('#numero').value.trim();

    if (nome && email && numero) {
        const whatsappUrl = `https://wa.me/5575983178582?text=Olá, meu nome é ${encodeURIComponent(nome)}. Meu email é ${encodeURIComponent(email)} e meu número de contato é ${encodeURIComponent(numero)}. Gostaria de mais informações.`;
        window.open(whatsappUrl, '_blank');
    } else {
        alert('Por favor, preencha todos os campos antes de entrar em contato.');
    }
};




document.addEventListener("DOMContentLoaded", () => {
    const cartModal = document.getElementById("cart-btn");
    const closeModalBtn = document.getElementById("close-modal-btn");
    const checkoutBtn = document.getElementById("checkout-btn");
    const addressInput = document.getElementById("address");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    // Abrir o modal
    document.querySelector(".fa-shopping-cart").addEventListener("click", () => {
        cartModal.classList.add("visible");
    });

    // Fechar o modal
    closeModalBtn.addEventListener("click", () => {
        cartModal.classList.remove("visible");
    });

    // Finalizar pedido
    checkoutBtn.addEventListener("click", () => {
        const address = addressInput.value.trim();
        if (!address) {
            alert("Por favor, insira o endereço completo!");
            return;
        }
        alert(`Pedido finalizado com sucesso! Enviado para: ${address}`);
        addressInput.value = "";
        cartItems.innerHTML = ""; // Limpa os itens do carrinho
        cartTotal.textContent = "R$ 0,00"; // Reseta o total
        cartModal.classList.remove("visible");
    });
});