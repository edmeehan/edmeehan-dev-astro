[![Netlify Status](https://api.netlify.com/api/v1/badges/220d4ca1-1c7d-4969-b4ec-14bac09744a6/deploy-status)](https://app.netlify.com/sites/edmeehan-dev-astro/deploys)

## Task List

- [x] hero/splash
- [ ] grid/alternate
- [ ] grid/simple
- [ ] grid/side-by-side
- [ ] text
- [ ] cards/testimonials
- [ ] cards/posts
- [ ] form
- [ ] faqs

## Content Blocks
| Name | Path | Details | BS |
| --- | --- | --- | --- |
| [Splash Hero](src/components/hero/splash/) | hero/splash | Above the fold content with a text area and an image. | ✔ |
| [Alternate Grid](src/components/grid/alternate/) | grid/alternate | Content section with image. Additionally list of items with images. | ✔ |
| [Simple Grid](src/components/grid/simple/) | grid/simple | Content section with list of items with images. | ✔ |
| [Side by Side](src/components/grid/side-by-side/) | grid/side-by-side | Content section with image. | ✔ |
| [Simple Text](src/components/text/) | text | Just a block of text. | ✔ |
| [Testimonial Cards](src/components/cards/testimonials/) | cards/testimonials | Client testimonials with headshot, title, & company. | ✔ | 
| [Post Cards](src/components/cards/posts/) | cards/posts | Blog & Project, with primary image and excerpt. | ✔ |
| [Form](src/components/form/) | form | Capture form builder with basic inputs. | ✔ |
| [FAQs](src/components/faqs/) | faqs | Frequently Ask Questions with toggle to show answer. | ✔ |

## Components

| Name | Path | Details | BS |
| --- | --- | --- | --- |
| [Post Card](src/components/card/post.astro) | card/post | A single Blog or Project entry | |
| [Testimonial Card](src/components/card/testimonial.astro) | card/testimonial | A single testimonial |
| [Select Field](src/components/form_fields/select/) | form_fields/select | When one or many options can be selected from a list, used in select, checkbox, and radio inputs. | ✔ |
| [Text Field](src/components/form_fields/text/) | form_fields/text | Used to display a text input or textarea. | ✔ |
| [CTA](src/components/global/cta/) | global/cta | Call to action, or just a fancy button. | ✔ |
| [Image](src/components/global/image/) | global/image | Used by content sections to display image. | ✔ |
| [Link](src/components/global/link/) | global/link | Basic link | ✔ |
| [Social Share](src/components/global/social-share/) | global/social-share | Share this URL actions for twitter, facebook, etc. | ✔ |
| [Media Caption](src/components/global/media-caption.astro) | global/media-caption | styled caption text for media | |
| [Layout Footer](src/components/layout/footer.astro) | layout/footer | Global site footer | |
| [Layout Section](src/components/layout/section.astro) | layout/section | Wraps content blocks | |
| [Layout Header](src/components/layout/header.astro) | layout/header | Global site header | |