import { useEffect, useState } from 'react'
import styled from 'styled-components'
import closeIcon from '../../assets/images/fechar.png'
import playIcon from '../../assets/images/play.png'
import zoomIcon from '../../assets/images/zoom.png'
import type { GalleryItem } from '../../types/Game'
import { colors } from '../../styles/theme'

const Gallery = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const GalleryButton = styled.button`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  border: 0;
  border-radius: 8px;
  background-color: ${colors.gray};

  > img:first-child {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ActionIcon = styled.img`
  position: absolute;
  inset: 0;
  width: 40px;
  height: 40px;
  margin: auto;
`

const Modal = styled.div`
  position: fixed;
  inset: 0;
  z-index: 30;
  padding: 24px;
  background-color: ${colors.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContent = styled.div`
  position: relative;
  width: min(900px, 100%);
  border-radius: 8px;
  overflow: hidden;
  background-color: ${colors.black};

  > img {
    width: 100%;
    max-height: 70vh;
    object-fit: contain;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
  width: 36px;
  height: 36px;
  border: 0;
  border-radius: 50%;
  background-color: ${colors.black};
  display: grid;
  place-items: center;

  img {
    width: 16px;
    height: 16px;
  }
`

type Props = {
  items: GalleryItem[]
}

const GameGallery = ({ items }: Props) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedItem(null)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <>
      <Gallery>
        {items.map((item) => (
          <li key={`${item.type}-${item.label}`}>
            <GalleryButton type="button" onClick={() => setSelectedItem(item)}>
              <img src={item.url} alt={item.label} />
              <ActionIcon
                src={item.type === 'video' ? playIcon : zoomIcon}
                alt=""
                aria-hidden="true"
              />
            </GalleryButton>
          </li>
        ))}
      </Gallery>
      {selectedItem && (
        <Modal
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.label}
          onClick={() => setSelectedItem(null)}
        >
          <ModalContent onClick={(event) => event.stopPropagation()}>
            <CloseButton type="button" onClick={() => setSelectedItem(null)} aria-label="Fechar galeria">
              <img src={closeIcon} alt="" />
            </CloseButton>
            <img src={selectedItem.url} alt={selectedItem.label} />
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default GameGallery
