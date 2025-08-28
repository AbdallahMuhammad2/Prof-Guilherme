# 🎥 Instruções para Configurar os Vídeos

## ✅ Status Atual
- **VSL (Video Sales Letter):** ✅ **CONFIGURADO** 
- **Vídeo de Depoimento:** ✅ **CONFIGURADO**

Ambos os vídeos estão funcionais no site!

## 📍 Localização das Seções de Vídeo

### 1. 🎯 VSL (Video Sales Letter) ✅ CONFIGURADO
- **Localização:** Entre o header e a seção de cursos
- **Propósito:** Vídeo de vendas principal
- **Arquivo HTML:** Linha com `id="vsl-video"`
- **Status:** ✅ **CONFIGURADO** com vídeo do YouTube
- **URL atual:** https://www.youtube.com/embed/RWJrUFF3oOA?si=YIEPsNcCPOSgdEkJ

### 2. 🏆 Vídeo de Depoimento ✅ CONFIGURADO
- **Localização:** Antes dos prints de depoimento
- **Propósito:** Depoimento em vídeo de aluno aprovado
- **Arquivo HTML:** Linha com `id="testimonial-video"`
- **Status:** ✅ **CONFIGURADO** com arquivo local
- **Arquivo atual:** "Quando a Jéssica deu este depoimento, ela não sabia que estaria no 7° lugar de sua disciplina no.mp4"

## 🛠️ Como Configurar os Vídeos

### Passo 1: Fazer Upload do Vídeo
1. **YouTube:** Faça upload do vídeo (pode ser não-listado)
2. **Vimeo:** Alternativa profissional
3. **Outras plataformas:** Wistia, JW Player, etc.

### Passo 2: Obter Código de Incorporação
1. Clique em "Compartilhar" → "Incorporar"
2. Copie o código iframe completo
3. Configure opções como autoplay se necessário

### Passo 3: Substituir no Código

#### Para VSL:
```html
<!-- Substitua esta linha: -->
<iframe id="vsl-video" width="100%" height="400" src="about:blank" ...>

<!-- Por: -->
<iframe id="vsl-video" width="100%" height="400" src="SUA_URL_AQUI" ...>
```

#### Para Vídeo de Depoimento:
```html
<!-- Substitua esta linha: -->
<iframe id="testimonial-video" width="100%" height="400" src="about:blank" ...>

<!-- Por: -->
<iframe id="testimonial-video" width="100%" height="400" src="SUA_URL_AQUI" ...>
```

## 🎬 Exemplos de URLs

### YouTube:
```
https://www.youtube.com/embed/SEU_VIDEO_ID
```

### Vimeo:
```
https://player.vimeo.com/video/SEU_VIDEO_ID
```

### YouTube com Autoplay:
```
https://www.youtube.com/embed/SEU_VIDEO_ID?autoplay=1&mute=1
```

## ✅ Checklist Final

- [ ] Vídeo VSL configurado e testado
- [ ] Vídeo de depoimento configurado e testado
- [ ] Ambos os vídeos carregam corretamente
- [ ] Botões de play funcionam
- [ ] Vídeos são responsivos em mobile
- [ ] Removidas as seções de instruções (admin-note)

## 🎯 Dicas de Otimização

### Para VSL:
- **Duração:** 10-20 minutos ideal
- **Conteúdo:** Problema → Solução → Oferta → CTA
- **Thumbnail:** Use uma imagem atrativa
- **Qualidade:** Mínimo 720p, ideal 1080p

### Para Depoimento:
- **Duração:** 2-5 minutos
- **Autenticidade:** Depoimento genuíno e espontâneo
- **Áudio:** Certifique-se de que está claro
- **Credibilidade:** Mostre nome e resultado do aluno

## 🚀 Funcionalidades Incluídas

- ✅ **Reprodução com um clique**
- ✅ **Design responsivo**
- ✅ **Integração com analytics**
- ✅ **CTAs otimizados**
- ✅ **Efeitos visuais premium**
- ✅ **Compatibilidade com todas as plataformas**

## 📊 Analytics Automático

O sistema já inclui tracking para:
- Reproduções de vídeo
- Cliques em CTAs
- Visualizações de seções
- Tempo de engajamento

## 🔧 Solução de Problemas

### Vídeo não carrega:
1. Verifique se a URL está correta
2. Confirme se o vídeo é público/incorporável
3. Teste em modo privado do navegador

### Botão de play não funciona:
1. Verifique o console do navegador (F12)
2. Certifique-se de que o JavaScript está carregando
3. Teste em diferentes navegadores

### Vídeo não é responsivo:
1. Não altere as classes CSS existentes
2. Use apenas as URLs, não modifique a estrutura HTML

## 📞 Suporte

Se tiver dúvidas, verifique:
1. Console do navegador (F12) para erros
2. Se os arquivos CSS e JS estão carregando
3. Se as URLs dos vídeos estão corretas
