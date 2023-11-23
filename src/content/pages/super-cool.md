---
_schema: page
uuid: e50d108f-3b1f-4161-bcb3-2ee20093b208
title: super cool
content_blocks:
  - _bookshop_name: text
    content: >-
      <p class="eyebrow">Simple Text</p>


      <h1>Headline with a <strong>strong tag</strong></h1>


      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non tellus
      sapien. Duis id neque diam. Mauris commodo porta sapien vel viverra. Sed
      finibus.
    cta:
      _bookshop_name: global/cta
      label: Click Me
      link:
      style: primary
      new_tab: false
    section:
      transition: curve
      background: primary
    layout:
      text_align: center
  - _bookshop_name: form
    content: |-
      <p class="eyebrow">Form</p>

      ### Headline

      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    form:
      _bookshop_name: form/builder
      name:
      action:
      submit: Ready to get started!
      fields:
        - _bookshop_name: form_fields/text
          label: This is the label
          type: week
          placeholder: Placeholder text
          name:
          required: true
        - _bookshop_name: form_fields/select
          label: This is the label
          type: checkbox
          name: test
          required: false
          options:
            - label: Option 1
              value: option-1
            - label: Option 2
              value: option-2
seo:
  no_index: false
  page_title:
  page_description:
  featured_image:
  open_graph_type: website
  canonical_url:
hidden: false
---
