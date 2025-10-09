# 📋 Pull Request

## 📝 Description

**Summary:** Provide a clear and concise description of what this PR does.

**Context:** Explain the motivation behind these changes and any relevant background information.

**Related Issues:** 
- Closes #(issue)
- Addresses #(issue)
- Related to #(issue)

---

## 🔄 Type of Change

<!-- Please check the type of change your PR introduces -->

- [ ] 🐛 **Bug fix** - non-breaking change which fixes an issue
- [ ] ✨ **New feature** - non-breaking change which adds functionality  
- [ ] 💥 **Breaking change** - fix or feature that would cause existing functionality to not work as expected
- [ ] 📚 **Documentation** - updates to documentation only
- [ ] 🎨 **Style** - formatting, missing semi colons, etc; no code change
- [ ] ♻️ **Refactor** - code change that neither fixes a bug nor adds a feature
- [ ] ⚡ **Performance** - code change that improves performance
- [ ] ✅ **Test** - adding missing tests or correcting existing tests
- [ ] 🔧 **Build** - changes that affect the build system or external dependencies
- [ ] 👷 **CI** - changes to CI configuration files and scripts
- [ ] 🚀 **Deploy** - changes related to deployment

---

## 🧪 Testing

### Test Coverage
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] E2E tests added/updated
- [ ] Manual testing completed

### Test Instructions
<!-- Provide step-by-step instructions to test your changes -->

1. **Setup:**
   ```bash
   npm install
   npm run build
   ```

2. **Test scenarios:**
   - [ ] Scenario A: _describe test case_
   - [ ] Scenario B: _describe test case_
   - [ ] Edge cases: _describe edge cases tested_

3. **Verification:**
   ```bash
   npm run test
   npm run lint
   npm run type-check
   ```

### Test Results
<!-- Include test output, screenshots, or GIFs demonstrating the changes -->

---

## 📸 Screenshots/Demo

<!-- If applicable, add screenshots, GIFs, or links to demonstrate visual changes -->

| Before | After |
|--------|-------|
| _screenshot/description_ | _screenshot/description_ |

---

## 📚 Documentation

- [ ] Code is self-documenting with clear variable/function names
- [ ] Added/updated JSDoc comments for public APIs
- [ ] Updated README.md if needed
- [ ] Updated CHANGELOG.md
- [ ] Added/updated component documentation
- [ ] Updated TypeScript type definitions

---

## 🔍 Code Quality Checklist

### Code Standards
- [ ] Code follows project's style guidelines (ESLint/Prettier)
- [ ] Code follows TypeScript best practices
- [ ] No `console.log` statements in production code
- [ ] No TODO/FIXME comments without corresponding issues
- [ ] Proper error handling implemented
- [ ] Security considerations addressed

### Performance & Accessibility
- [ ] Performance impact considered and optimized
- [ ] Accessibility guidelines followed (WCAG 2.1)
- [ ] Mobile responsiveness tested
- [ ] Browser compatibility verified

### Review & Testing
- [ ] Self-review completed
- [ ] Code is well-commented and self-explanatory
- [ ] All existing tests pass
- [ ] New tests added for new functionality
- [ ] Manual testing completed
- [ ] No new warnings or errors introduced

---

## 🚀 Deployment Considerations

- [ ] No database migrations required
- [ ] No environment variable changes required
- [ ] Backward compatible with previous version
- [ ] Safe to deploy to production
- [ ] Feature flags implemented if needed

---

## 📦 Dependencies

<!-- List any new dependencies added or updated -->

### Added
- `package-name@version` - _reason for addition_

### Updated  
- `package-name@old-version` → `package-name@new-version` - _reason for update_

### Removed
- `package-name@version` - _reason for removal_

---

## 🔗 Additional Information

### Related PRs
<!-- Link to any related PRs in this or other repositories -->

### Breaking Changes
<!-- If this is a breaking change, provide migration guide -->

### Notes for Reviewers
<!-- Any specific areas you'd like reviewers to focus on -->

---

## 📋 Reviewer Checklist

<!-- For reviewers to complete -->

- [ ] Code review completed
- [ ] Tests reviewed and adequate
- [ ] Documentation reviewed
- [ ] Breaking changes identified and documented
- [ ] Security implications considered
- [ ] Performance impact assessed
