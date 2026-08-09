import type { StructureResolver } from 'sanity/structure'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      // 1. Keep the default dynamic lists if you want them
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'product' // Optional: hides the default un-orderable product list so Mr. Eme only uses the ordered one
      ),
      
      // 2. Add the custom interactive drag-and-drop desk item
      orderableDocumentListDeskItem({
        type: 'product',
        title: 'Order Products Flow',
        S,
        context,
      }),
    ])