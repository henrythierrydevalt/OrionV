# 🔒 Segurança - Orion V API

## Funcionalidades de Segurança Implementadas

### 1. **Autenticação e Autorização**
- ✅ JWT com access tokens (15min) e refresh tokens (7 dias)
- ✅ Sessões seguras com tokens únicos
- ✅ Logout que invalida todos os tokens
- ✅ Verificação de conta ativa

### 2. **Proteção de Senhas**
- ✅ Hash com bcrypt (12 salt rounds)
- ✅ Validação de força da senha:
  - Mínimo 8 caracteres
  - Pelo menos 1 letra maiúscula
  - Pelo menos 1 letra minúscula
  - Pelo menos 1 número
  - Pelo menos 1 caractere especial

### 3. **Rate Limiting**
- ✅ 10 requests por minuto (geral)
- ✅ 5 tentativas de login por 5 minutos
- ✅ Rate limiting por IP
- ✅ Cleanup automático de limites expirados

### 4. **Bloqueio de Conta**
- ✅ Bloqueio após 5 tentativas falhadas
- ✅ Bloqueio por 15 minutos
- ✅ Reset automático após login bem-sucedido

### 5. **Headers de Segurança**
- ✅ Helmet.js para headers de segurança
- ✅ Content Security Policy (CSP)
- ✅ HSTS (HTTP Strict Transport Security)
- ✅ XSS Protection
- ✅ No Sniff
- ✅ Referrer Policy

### 6. **Auditoria e Logging**
- ✅ Log de todas as ações de autenticação
- ✅ Log de tentativas de login (sucesso/falha)
- ✅ Log de mudanças de senha
- ✅ Log de bloqueios de conta
- ✅ Rastreamento de IP e User-Agent

### 7. **Validação de Entrada**
- ✅ Validação rigorosa com class-validator
- ✅ Sanitização de dados
- ✅ Whitelist de campos permitidos
- ✅ Transformação de tipos

### 8. **CORS Seguro**
- ✅ Origins específicos (não wildcard)
- ✅ Métodos HTTP restritos
- ✅ Headers permitidos limitados
- ✅ Credentials controlados

## Configurações de Produção

### Variáveis de Ambiente Necessárias:
```env
JWT_SECRET=your-super-secret-key-here
JWT_EXPIRES_IN=15m
NODE_ENV=production
DATABASE_URL=postgresql://user:pass@host:port/db
```

### Recomendações:
1. **Altere o JWT_SECRET** para uma chave forte e única
2. **Use HTTPS** em produção
3. **Configure firewall** para limitar acesso
4. **Monitore logs** de auditoria regularmente
5. **Implemente backup** dos logs de auditoria
6. **Configure alertas** para tentativas de força bruta

## Endpoints Seguros

### Autenticação:
- `POST /users/register` - Rate limited
- `POST /users/login` - Rate limited + account lockout
- `POST /users/refresh` - Rate limited
- `POST /users/logout` - Requer autenticação

### Proteção:
- Todos os endpoints protegidos têm rate limiting
- Headers de segurança em todas as respostas
- Logs de auditoria para ações sensíveis
- Validação rigorosa de entrada

## Monitoramento

### Métricas Importantes:
- Tentativas de login falhadas por IP
- Contas bloqueadas
- Requests por minuto por IP
- Logs de auditoria por usuário

### Alertas Recomendados:
- Múltiplas tentativas de login falhadas
- Contas bloqueadas
- Rate limit excedido
- Ações administrativas

## Compliance

### LGPD/GDPR:
- ✅ Logs de auditoria com retenção de 90 dias
- ✅ Dados pessoais protegidos
- ✅ Logout invalida sessões
- ✅ Rastreamento de acesso

### Boas Práticas:
- ✅ Princípio do menor privilégio
- ✅ Defesa em profundidade
- ✅ Fail secure
- ✅ Logging abrangente
