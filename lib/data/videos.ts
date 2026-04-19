import { VideoEmbed } from '../types';

export const youtubeLibrary: VideoEmbed[] = [
  {
    id: 'v1',
    youtubeId: 'wX78iKhInsc',
    title: 'A Day at Nirvana Yoga Ashram',
    subtitle: 'Experience the magic of Rishikesh',
    kind: 'video',
  },
  {
    id: 'v2',
    youtubeId: 'ScMzIvxBSi4',
    title: 'Student Stories: Transformation',
    subtitle: 'Hear from our global alumni',
    kind: 'video',
  },
  {
    id: 'v3',
    youtubeId: 'inpok4MKVLM',
    title: 'Morning Sadhana in the Himalayas',
    subtitle: 'Connecting with the sacred',
    kind: 'video',
  },
  {
    id: 's1',
    youtubeId: 'v8AYKMP6rOE',
    title: 'Quick Sun Salutation',
    kind: 'short',
  },
  {
    id: 's2',
    youtubeId: 'LqXZ628YNj4',
    title: 'Sound Healing snippet',
    kind: 'short',
  },
  {
    id: 's3',
    youtubeId: 'Jx6vPvUKWf8',
    title: 'Ashram Food Tour',
    kind: 'short',
  },
];

export const testimonialVideos = youtubeLibrary.filter(v => v.kind === 'video');

export const schoolTourVideo: VideoEmbed = {
  id: 'tour',
  youtubeId: 'wX78iKhInsc',
  title: 'A Tour of Nirvana Yoga School',
  subtitle: 'Step inside our ashram in Rishikesh and see where the transformation happens.',
  kind: 'video',
};
