import { Platform } from 'react-native';
import Share, { ShareOptions } from 'react-native-share';
import { Card } from '../models/card';
import { cards } from '../services/graphql';

const SHARE_CANCELED_ERROR = 'User did not share';

const useShare = () => {
  const shareCard = async (card: Card) => {
    try {
      const result = await cards.share(card.id);
      if (!result.data) {
        throw new Error("Couldn't get share code");
      }
      const url = `https://cards.foodstyles.com/${result.data.shareCard}`;
      const title = card.name;

      const options: ShareOptions = Platform.select({
        ios: {
          title,
          activityItemSources: [
            {
              placeholderItem: { type: 'url', content: url },
              item: {
                default: { type: 'url', content: url },
              },
              linkMetadata: { title },
            },
          ],
        },
        default: {
          title,
          url,
          type: 'url',
        },
      });

      await Share.open(options);
    } catch (err) {
      if ((err as Error).message !== SHARE_CANCELED_ERROR) {
        throw err;
      }
    }
  };

  return { shareCard };
};

export default useShare;
