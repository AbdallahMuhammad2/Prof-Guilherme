# Como Adicionar os Prints de Depoimentos

## 📁 Localização dos Prints
Coloque as imagens dos prints de WhatsApp na pasta:
```
assets/imgs/prints-depoimentos/
```

## 🖼️ Nomes dos Arquivos
Para que os prints apareçam corretamente, nomeie os arquivos exatamente como:

1. **caroline-pirovani.jpg** - Print da Caroline com 40 questões corretas
2. **eliane-costa.jpg** - Print da Eliane com nota 18,5 na discursiva  
3. **luciane.jpg** - Print da Luciane com 48 pontos em Português

## 📱 Formatos Recomendados
- **Formato:** JPG ou PNG
- **Orientação:** Vertical (formato de tela de celular)
- **Resolução:** Mínimo 400x600px
- **Qualidade:** Alta (para zoom funcionar bem)

## ✨ Funcionalidades Incluídas
- ✅ Galeria responsiva com 3 prints
- ✅ Modal de zoom ao clicar nos prints
- ✅ Navegação entre prints (setas)
- ✅ Navegação por teclado (ESC, setas)
- ✅ Badges personalizados para cada resultado
- ✅ Efeitos de hover e animações

## 🎨 Customização
Para alterar as informações dos depoimentos, edite o arquivo:
```
index.html - seção #testimonials
```

### Exemplo de como adicionar um novo print:
```html
<div class="print-card" data-aos="fade-up" data-aos-delay="400">
  <div class="print-image-container">
    <img src="assets/imgs/prints-depoimentos/novo-aluno.jpg" 
         alt="Depoimento Novo Aluno" 
         class="print-image"
         loading="lazy">
    <div class="print-overlay">
      <div class="print-zoom-btn">
        <i class="fas fa-search-plus"></i>
      </div>
    </div>
  </div>
  <div class="print-info">
    <h4>Nome do Aluno</h4>
    <p><strong>Resultado Conquistado</strong></p>
    <div class="print-badge success">
      <i class="fas fa-trophy"></i>
      <span>Tipo de Resultado</span>
    </div>
  </div>
</div>
```

## 🎯 Resultado Final
Quando os prints forem adicionados:
- Os depoimentos ficarão 100% reais e autênticos
- Visitantes poderão ampliar os prints para ler melhor
- A credibilidade do site aumentará significativamente
- A prova social será muito mais convincente
